<?php
    class Log_Bitacora extends Conectar{

        public function get_log_bitacoras(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM LOG_BITACORA";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function insert_log_bitacora($id_log, $fecha, $accion, $formulario, $usuario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO LOG_BITACORA(ID_LOG, FECHA, ACCION, FORMULARIO, USUARIO)
            VALUES(?,?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $id_log);
            $sql -> bindValue(2, $fecha);
            $sql -> bindValue(3, $accion);
            $sql -> bindValue(4, $formulario);
            $sql -> bindValue(5, $usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

    }
?>