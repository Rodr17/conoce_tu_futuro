<?php

namespace App\Controllers;

use Openpay\Data\Openpay;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\HTTP\ResponseInterface;
use Openpay\Data\OpenpayApiRequestError;
use Openpay\Data\OpenpayApiConnectionError;
use Openpay\Data\OpenpayApiTransactionError;
use CodeIgniter\Exceptions\PageNotFoundException;

class Separaciones extends BaseController
{
    public function __construct()
    {
        helper('number');
    }
    
    /**
     * Muestra una vista de creación de un registro
     *
     * @return string|RedirectResponse
     */
    public function show($id = null)
    {
        $id_transaccion = $this->request->getGet('id_transaccion');

        $openpay_id            = obtener_configuracion('openpay_id');
        $openpay_llave_privada = obtener_configuracion('openpay_llave_privada');
        $ip_usuario            = $this->request->getIPAddress();

        Openpay::setProductionMode(false);

        $openpay = Openpay::getInstance(
            $openpay_id,
            $openpay_llave_privada,
            'MX',
            $ip_usuario
        );
        try {
            $datos_cargo = $openpay->charges->get($id_transaccion);

        } catch (OpenpayApiRequestError $e) {
            $mensaje = 'ERROR en la solicitud: ' . $e->getMessage();

            error_log($mensaje, 0);

            return redirect()->route('mi_cuenta')->with('alerta', ['tipo' => 'alert-danger', 'mensaje' => "$mensaje. Separación no reconocida"]);

        }

        $datos['id_transaccion'] = $datos_cargo->id;

        $id_usuario = auth()->id();

        $automoviles_query = model('Automoviles')
            ->select([
                'automoviles.*',
                'marcas.nombre AS marca',
                'CONCAT(
                    marcas.nombre, " ",
                    modelos.nombre, " ",
                    IFNULL(versiones.nombre, "")
                ) AS nombre',
                'colores.nombre AS color_nombre',
                'colores.hexadecimal AS color_hexadecimal',
                'IF(favoritos_automoviles.id IS NOT NULL, 1, 0) AS es_favorito'
            ])
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('versiones', 'versiones.id = automoviles.id_version', 'left')
            ->join('colores', 'colores.id = automoviles.id_color', 'left')
            ->join('favoritos_automoviles', "favoritos_automoviles.id_automovil = automoviles.id AND favoritos_automoviles.id_usuario = $id_usuario", 'left');

        $datos['automovil'] = $automoviles_query->find($id);

        $costo_separacion = obtener_configuracion('monto_separacion');
        $iva              = $costo_separacion * .16;
        $subtotal         = $costo_separacion - $iva;
        $total            = $subtotal + $iva;

        $datos['iva']      = number_to_currency($iva, 'MXN', 'es_MX');
        $datos['subtotal'] = number_to_currency($subtotal, 'MXN', 'es_MX');
        $datos['total']    = number_to_currency($total, 'MXN', 'es_MX');

        return view('Publico/separacion-exitosa', $datos);
    }

    /**
     * Crea un nuevo registro y cargo
     *
     * @return RedirectResponse
     */
    public function create($id = null)
    {
        $id_automovil = model('Automoviles')
            ->select('id')
            ->find($id);

        if (!$id_automovil) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos      = $this->request->getPost();
        $usuario    = auth()->user();
        $ip_usuario = $this->request->getIPAddress();

        $costo_separacion      = obtener_configuracion('monto_separacion');
        $openpay_id            = obtener_configuracion('openpay_id');
        $openpay_llave_privada = obtener_configuracion('openpay_llave_privada');

        Openpay::setProductionMode(false);

        $openpay = Openpay::getInstance(
            $openpay_id,
            $openpay_llave_privada,
            'MX',
            $ip_usuario
        );

        $cliente = [
            'name'         => $usuario->nombre,
            'last_name'    => $usuario->apellidos,
            'phone_number' => $usuario->telefono,
            'email'        => $usuario->email
        ];

        $crear_cargo = [
            'method'            => 'card',
            'source_id'         => $datos['source_id'],
            'amount'            => $costo_separacion,
            'currency'          => 'MXN',
            'description'       => 'Separación de automóvil',
            'device_session_id' => $datos['device_session_id'],
            'customer'          => $cliente
        ];

        try {
            $cargo = $openpay->charges->create($crear_cargo);

        } catch (OpenpayApiTransactionError $e) {
            $mensaje = 'ERROR en la transacción: ' . $e->getMessage() .
                ' [Código error: ' . $e->getErrorCode() .
                ', Categoría error: ' . $e->getCategory() .
                ', Código http: ' . $e->getHttpCode() .
                ', solicitud ID: ' . $e->getRequestId() . ']';

            error_log($mensaje, 0);

            return redirect()->to("autos/$id/me-interesa/proceso?opcion=separacion")->with('alerta', ['tipo' => 'alert-danger', 'mensaje' => $mensaje]);

        } catch (OpenpayApiRequestError $e) {
            $mensaje = 'ERROR en la solicitud: ' . $e->getMessage();

            error_log($mensaje, 0);

            return redirect()->to("autos/$id/me-interesa/proceso?opcion=separacion")->with('alerta', ['tipo' => 'alert-danger', 'mensaje' => $mensaje]);

        } catch (OpenpayApiConnectionError $e) {
            $mensaje = 'ERROR al conectarse a la API: ' . $e->getMessage();

            error_log($mensaje, 0);

            return redirect()->to("autos/$id/me-interesa/proceso?opcion=separacion")->with('alerta', ['tipo' => 'alert-danger', 'mensaje' => $mensaje]);
        }

        model('Automoviles')->save([
            'id'      => $id,
            'estatus' => 'Separado'
        ]);

        $uri = route_to('separacion_exitosa', $id) . '?id_transaccion=' . $cargo->id;

        return redirect()->to($uri)->with('alerta', ['tipo' => 'alert-succcess', 'mensaje' => '¡Excelente elección!, recuerda acudir personalmente a liquidar el automóvil, tienes 7 días para tenerlo en tus manos']);
    }

    /**
     * Return the editable properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        //
    }
}
