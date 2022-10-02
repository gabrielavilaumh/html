<?php
    class Login extends Conectar{

        public function get_login($usuario, $pass){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT USUARIO, PASS FROM USUARIO WHERE USUARIO = ? AND PASS = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $usuario);
            $sql -> bindValue(2, $pass);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>