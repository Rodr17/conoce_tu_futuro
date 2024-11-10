<?php

namespace App\Models;

use CodeIgniter\Model;

class Estados extends Model
{
	protected $table          = 'estados';
	protected $primaryKey     = 'id';
	protected $returnType     = 'array';
	protected $useSoftDeletes = false;
	protected $protectFields  = true;
	protected $allowedFields  = [
		'id_pais',
		'nombre',
	];
}