<?php
    class Marca extends Conectar{

        public function get_marcas(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM MARCA";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_marca($id_marca){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM MARCA WHERE ID_MARCA = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_marca);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_marca($id_marca, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO MARCA(ID_MARCA, NOMBRE)
            VALUES(?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_marca);
            $sql -> bindValue(2, $nombre);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_marca($id_marca, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE MARCA SET NOMBRE = ? WHERE ID_MARCA = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $id_marca);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_marca($id_marca){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM MARCA WHERE ID_MARCA = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_marca);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>