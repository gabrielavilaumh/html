<?php
    class Registrar_Log extends Conectar{

        public function get_log_bitacoras(){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "SELECT * FROM LOG_BITACORA";
            $sql = $conectar -> prepare($sql);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }
        
        public function insert_log_bitacora($fecha, $accion, $formulario, $usuario){
            $conectar = parent::conexion();
            parent::set_names();
            $sql = "INSERT INTO LOG_BITACORA(FECHA, ACCION, FORMULARIO, USUARIO)
            VALUES(?,?,?,?);";
            $sql = $conectar -> prepare($sql);
            $sql -> bindValue(1, $fecha);
            $sql -> bindValue(2, $accion);
            $sql -> bindValue(3, $formulario);
            $sql -> bindValue(4, $usuario);
            $sql -> execute();
            return $resultado = $sql -> fetchAll(PDO::FETCH_ASSOC);
        }

    }
?>