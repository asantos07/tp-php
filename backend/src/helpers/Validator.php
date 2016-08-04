<?php

namespace Helper;

/**
 * Helper para validar arrays associativos de objetos
 *
 * @author asantos07
*/
class Validator {

	public static function validadeCreate($type, $json_array) {
		$entidade = null;
		if ($json_array['id'] < 0) {
			return NULL;
		}
		switch ($type) {
			case "user":
				if (Validator::checkUser($json_array)) {
					$entidade = new \Entity\Usuario($json_array);
				}
				break;
			case "company":
				if (Validator::checkEmpresa($json_array)) {
					$entidade = new \Entity\Empresa($json_array);
				}
				break;
			case "job":
				if (Validator::checkVaga($json_array)) {
					$entidade = new \Entity\Vaga($json_array);
				}
		}
		return $entidade;
	}

    public static function checkUser($data = array()) {
        if (isset($data['passwd'], $data['name'], $data['birthD'], $data['email'], $data['id'], $data['telephone'], $data['emailV'], $data['languages'], $data['text'], $data['skills'], $data['contributions'], $data['graduation'], $data['experience'])) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public static function checkEmpresa($data = array()) {
        if (isset($data['name'], $data['email'], $data['passwd'], $data['descricao'], $data['area'], $data['cnpj'], $data['telefone'], $data['id'])) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

    public static function checkVaga($data = array()) {
        if (isset($data['titulo'], $data['empresaId'], $data['funcao'], $data['salario'])) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

}
