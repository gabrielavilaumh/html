<?php
    class Bitacora extends Conectar{

        public function get_bitacoras(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM BITACORA";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

        public function get_bitacora($id_bitacora){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM BITACORA WHERE ID_BITACORA = ?";
            $sql = $conectar->prepare($sql);
            $sql -> bindValue(1, $id_bitacora);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function insert_bitacora($id_bitacora, $fecha, $id_usuario, $movimientos, $id_articulo){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO BITACORA(ID_BITACORA, FECHA, ID_USUARIO, MOVIMIENTOS, ID_ARTICULO)
            VALUES(?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_bitacora);
            $sql -> bindValue(2, $fecha);
            $sql -> bindValue(3, $id_usuario);
            $sql -> bindValue(4, $movimientos);
            $sql -> bindValue(5, $id_articulo);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

    }
?>