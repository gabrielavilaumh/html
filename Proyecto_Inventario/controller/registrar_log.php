<?php
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, PUT, OPTIONS, GET');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text-plain');
        die();
    }
    
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    require_once("../config/conexion.php");
    require_once("../models/Registrar_Log.php");
    $log_bitacora = new Registrar_Log();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){

        case "GetLog_Bitacoras":
            $datos = $log_bitacora -> get_log_bitacoras();
            echo json_encode($datos);
        break;

        case "InsertLog_Bitacora":
            $datos = $log_bitacora -> insert_log_bitacora($body["FECHA"], $body["ACCION"], $body["FORMULARIO"], $body["USUARIO"]);
            echo json_encode("Log_Bitacora agregada");
        break;
    }

?>