<?php
    class Login extends Conectar{

        public function get_login($id_usuario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM USUARIO WHERE ID_USUARIO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>