<?php
    class Inventario extends Conectar{

        public function get_inventarios(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM INVENTARIO";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_inventario($id_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM INVENTARIO WHERE ID_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_inventario($id_inventario, $nombre, $cantidad, $id_articulo, $tipo_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO INVENTARIO(ID_INVENTARIO, NOMBRE, CANTIDAD, ID_ARTICULO, TIPO_INVENTARIO)
            VALUES(?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_inventario);
            $sql -> bindValue(2, $nombre);
            $sql -> bindValue(3, $cantidad);
            $sql -> bindValue(4, $id_articulo);
            $sql -> bindValue(5, $tipo_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_inventario($id_inventario, $nombre, $cantidad, $id_articulo, $tipo_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE INVENTARIO SET NOMBRE = ?, CANTIDAD = ?, ID_ARTICULO = ?, TIPO_INVENTARIO = ? WHERE ID_INVENTARIO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $nombre);
            $sql -> bindValue(2, $cantidad);
            $sql -> bindValue(3, $id_articulo);
            $sql -> bindValue(4, $tipo_inventario);
            $sql -> bindValue(5, $id_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_inventario($id_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM INVENTARIO WHERE ID_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>