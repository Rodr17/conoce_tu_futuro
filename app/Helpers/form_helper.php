<?php

use Config\Validation;
use CodeIgniter\Validation\Exceptions\ValidationException;

function decodificar_atributos($atributos)
{
	return json_decode($atributos, true) ?? [];
}

if (!function_exists('input')) {
	function input($campo)
	{
		$atributos = decodificar_atributos($campo['atributos']);
        $atributos['class'] = "form-input w-full";

        // [0] => input | [1] = tipo de input ó ""
        $tipo_input = explode(":", $campo['tipo'])[1] ?? 'text';

		return form_label($campo['etiqueta'], $campo['nombre'], ['class' => 'block text-sm font-medium mb-1']) .
		form_input($campo['nombre'], $campo['valor'], $atributos, $tipo_input   );
	}
}

if (!function_exists('select')) {
	function select($campo)
	{
		$atributos = decodificar_atributos($campo['atributos']);
        $atributos['class'] = "form-input w-full";
        
		$opciones = json_decode($campo['opciones'], true);

		return form_label($campo['etiqueta'], $campo['nombre'], ['class' => 'block text-sm font-medium mb-1']) .
		form_dropdown($campo['nombre'], $opciones, $campo['valor'], $atributos);
	}
}

if (!function_exists('radio_group')) {
	function radio_group($campo)
	{
		$atributos = decodificar_atributos($campo['atributos']);

		$opciones = json_decode($campo['opciones'], true);

		$html = form_label($campo['etiqueta'], '', ['class' => 'block text-sm font-medium mb-1']);
		foreach ($opciones as $value => $label) {
			$html .= form_radio($campo['nombre'], $value, $campo['valor'] == $value, $atributos) . $label;
		}
		return $html;
	}
}

if (!function_exists('checkbox')) {
	function checkbox($campo)
	{
		$atributos = decodificar_atributos($campo['atributos']);

		return form_label($campo['etiqueta'], $campo['nombre'], ['class' => 'block text-sm font-medium mb-1']) .
		form_checkbox($campo['nombre'], '1', $campo['valor'], $atributos);
	}
}

function flattenErrors(array $errors, string $prefix = ''): array
{
    $flatErrors = [];
    foreach ($errors as $key => $value) {
        if (is_array($value)) {
            $flatErrors = array_merge($flatErrors, flattenErrors($value, $prefix . $key . '.'));
        } else {
            $flatErrors[$prefix . $key] = $value;
        }
    }
    return $flatErrors;
}

// Mostrar errores con notación de puntos ó por cada campo
function validation_show_error(string $field, string $template = 'single'): string
{
    $config = config(Validation::class);
    $view   = service('renderer');

    // Flatten the errors array for easy access
    $errors = validation_errors();
    $flatErrors = flattenErrors($errors);

    // Access the specific error
    $errorKey = str_replace(['[', ']'], ['.', ''], $field); // Convert array notation to dot notation
    $error = $flatErrors[$errorKey] ?? '';

    if ($error === '') {
        return '';
    }

    if (! array_key_exists($template, $config->templates)) {
        throw ValidationException::forInvalidTemplate($template);
    }

    return $view->setVar('error', $error)
        ->render($config->templates[$template]);
}