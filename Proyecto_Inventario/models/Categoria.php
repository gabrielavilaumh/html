<?php
    class Categoria extends Conectar{

        public function get_categorias(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM CATEGORIA";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_categoria($id_categoria){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM CATEGORIA WHERE ID_CATEGORIA = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_categoria);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_categoria($id_categoria, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO CATEGORIA(ID_CATEGORIA, NOMBRE)
            VALUES(?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_categoria);
            $sql -> bindValue(2, $nombre);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_categoria($id_categoria, $nombre){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE CATEGORIA SET NOMBRE = ? WHERE ID_CATEGORIA = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $id_categoria);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_categoria($id_categoria){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM CATEGORIA WHERE ID_CATEGORIA = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_categoria);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>