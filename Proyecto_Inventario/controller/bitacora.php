<?php
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, PUT, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text-plain');
        die();
    }
    
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    require_once("../config/conexion.php");
    require_once("../models/Bitacora.php");
    $bitacora = new Bitacora();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){

        case "GetBitacoras":
            $datos = $bitacora -> get_bitacoras();
            echo json_encode($datos);
        break;

        case "GetBitacora":
            $datos = $bitacora -> get_bitacora($body["ID_BITACORA"]);
            echo json_encode($datos);
        break;
        
        case "InsertBitacora":
            $datos = $bitacora -> insert_bitacora($body["ID_BITACORA"], $body["FECHA"], $body["ID_USUARIO"], $body["MOVIMIENTOS"], $body["ID_ARTICULO"]);
            echo json_encode("Bitacora agregada");
        break;
    }

?>