<?php
    class Entrada_Inventario extends Conectar{

        public function get_entrada_inventarios(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ENTRADA_INVENTARIO";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_entrada_inventario($id_entrada_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM ENTRADA_INVENTARIO WHERE ID_ENTRADA_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_entrada_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_entrada_inventario($id_entrada_inventario, $fecha, $id_articulo, $nombre, $cantidad, $modificado_por){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO ENTRADA_INVENTARIO(ID_ENTRADA_INVENTARIO, FECHA, ID_ARTICULO, NOMBRE, CANTIDAD, MODIFICADO POR)
            VALUES(?,?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_entrada_inventario);
            $sql -> bindValue(2, $fecha);
            $sql -> bindValue(3, $id_articulo);
            $sql -> bindValue(4, $nombre);
            $sql -> bindValue(5, $cantidad);
	        $sql -> bindValue(6, $modificado_por);	
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_entrada_inventario($id_entrada_inventario, $fecha, $id_articulo, $nombre, $cantidad, $modificado_por){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE ENTRADA_INVENTARIO SET FECHA = ?, ID_ARTICULO = ?, NOMBRE = ?, CANTIDAD = ?, MODIFICADO_POR = ? WHERE ID_ENTRADA_INVENTARIO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_entrada_inventario);
            $sql -> bindValue(2, $fecha);
            $sql -> bindValue(3, $id_articulo);
            $sql -> bindValue(4, $nombre);
            $sql -> bindValue(5, $cantidad);
	        $sql -> bindValue(6, $modificado_por);	
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_entrada_inventario($id_entrada_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM ENTRADA_INVENTARIO WHERE ID_ENTRADA_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_entrada_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>