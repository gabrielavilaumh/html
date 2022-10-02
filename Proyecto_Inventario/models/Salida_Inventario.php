<?php
    class Salida_Inventario extends Conectar{

        public function get_salida_inventarios(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM SALIDA_INVENTARIO";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_salida_inventario($id_salida_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM SALIDA_INVENTARIO WHERE ID_SALIDA_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_salida_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function insert_salida_inventario($id_salida_inventario, $fecha, $id_articulo, $nombre, $cantidad, $modificado_por){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO SALIDA_INVENTARIO(ID_SALIDA_INVENTARIO, FECHA, ID_ARTICULO, NOMBRE, CANTIDAD, MODIFICADO_POR)
            VALUES(?,?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_salida_inventario);
            $sql -> bindValue(2, $fecha);
            $sql -> bindValue(3, $id_articulo);
            $sql -> bindValue(4, $nombre);
            $sql -> bindValue(5, $cantidad);
	        $sql -> bindValue(6, $modificado_por);	
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function update_salida_inventario($id_salida_inventario, $fecha, $id_articulo, $nombre, $cantidad, $modificado_por){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "UPDATE SALIDA_INVENTARIO SET FECHA = ?, ID_ARTICULO = ?, NOMBRE = ?, CANTIDAD = ?, MODIFICADO_POR = ? WHERE ID_SALIDA_INVENTARIO = ?";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $fecha);
            $sql -> bindValue(2, $id_articulo);
            $sql -> bindValue(3, $nombre);
            $sql -> bindValue(4, $cantidad);
	        $sql -> bindValue(5, $modificado_por);	
            $sql -> bindValue(6, $id_salida_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function delete_salida_inventario($id_salida_inventario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "DELETE FROM SALIDA_INVENTARIO WHERE ID_SALIDA_INVENTARIO = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_salida_inventario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>