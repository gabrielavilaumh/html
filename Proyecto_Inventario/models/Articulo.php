<?php
    class Articulo extends Conectar{

        public function get_articulos(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ARTICULO";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_articulo($id_articulo){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ARTICULO WHERE ID_ARTICULO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_articulo);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_articulo($id_articulo, $nombre, $nombre_corto, $id_categoria, $id_marca){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO ARTICULO(ID_ARTICULO, NOMBRE, NOMBRE_CORTO, ID_CATEGORIA, ID_MARCA)
            VALUES(?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_articulo);
            $sql -> bindValue(2, $nombre);
            $sql -> bindValue(3, $nombre_corto);
            $sql -> bindValue(4, $id_categoria);
            $sql -> bindValue(5, $id_marca);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_articulo($id_articulo, $nombre, $nombre_corto, $id_categoria, $id_marca){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE ARTICULO SET NOMBRE = ?, NOMBRE_CORTO = ?, ID_CATEGORIA = ?, ID_MARCA = ? WHERE ID_ARTICULO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $nombre_corto);
            $sql -> bindValue(3, $id_categoria);
            $sql -> bindValue(4, $id_marca);
            $sql -> bindValue(5, $id_articulo);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_articulo($id_articulo){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM ARTICULO WHERE ID_ARTICULO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_articulo);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>