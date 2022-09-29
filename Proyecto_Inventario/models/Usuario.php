<?php
    class Usuario extends Conectar{

        public function get_usuarios(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM USUARIO";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_usuario($id_usuario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM USUARIO WHERE ID_USUARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_usuario($id_usuario, $nombre, $id_rol){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO USUARIO(ID_USUARIO, NOMBRE, ID_ROL)
            VALUES(?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_usuario);
            $sql -> bindValue(2, $nombre);
            $sql -> bindValue(3, $id_rol);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_usuario($id_usuario, $nombre, $id_rol){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE USUARIO SET NOMBRE = ?, ID_ROL = ? WHERE ID_USUARIO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $id_rol);
	        $sql -> bindValue(3, $id_usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_usuario($id_usuario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM USUARIO WHERE ID_USUARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>