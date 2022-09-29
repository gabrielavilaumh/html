<?php
    class Rol extends Conectar{

        public function get_roles(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ROL";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_rol($id_rol){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ROL WHERE ID_ROL = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_rol);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_rol($id_rol, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO ROL(ID_ROL, NOMBRE)
            VALUES(?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_rol);
            $sql -> bindValue(2, $nombre);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_rol($id_rol, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE ROL SET NOMBRE = ? WHERE ID_ROL = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $id_rol);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_rol($id_rol){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM ROL WHERE ID_ROL = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_rol);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>