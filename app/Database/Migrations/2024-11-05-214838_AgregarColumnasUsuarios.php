<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Forge;
use CodeIgniter\Database\Migration;

class AgregarColumnasUsuarios extends Migration
{
    /**
     * @var string[]
     */
    private array $tablas;

    public function __construct(?Forge $forge = null)
    {
        parent::__construct($forge);

        /** @var \Config\Auth $authConfig */
        $authConfig   = config('Auth');
        $this->tablas = $authConfig->tables;
    }

    public function up()
    {
        $this->forge->addColumn($this->tablas['users'], [
            'nombre'    => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
                'after'      => 'username',
            ],
            'apellidos' => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
                'after'      => 'nombre',
            ],
            'telefono'  => [
                'type'       => 'VARCHAR',
                'constraint' => 11,
                'after'      => 'apellidos',
            ],
        ]);
    }

    public function down()
    {
        $this->forge->dropColumn($this->tablas['users'], [
            'nombre',
            'apellidos',
            'telefono',
        ]);
    }
}