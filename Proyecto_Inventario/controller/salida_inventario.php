<?php
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text-plain');
        die();
    }
    
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    require_once("../config/conexion.php");
    require_once("../models/Salida_Inventario.php");
    $salida_inventario = new Salida_Inventario();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){
        
        case "GetSalida_Inventarios":
            $datos = $salida_inventario -> get_salida_inventarios();
            echo json_encode($datos);
        break;

        case "GetSalida_Inventario":
            $datos = $salida_inventario -> get_salida_inventario($body["ID_SALIDA_INVENTARIO"]);
            echo json_encode($datos);
        break;

        case "InsertSalida_Inventario":
            $datos = $salida_inventario -> insert_salida_inventario($body["ID_SALIDA_INVENTARIO"], $body["FECHA"], $body["ID_ARTICULO"], $body["NOMBRE"], $body["CANTIDAD"], $body["MODIFICADO_POR"]);
            echo json_encode("Salida_Inventario agregada");
        break;

        case "UpdateSalida_Inventario":
            $datos = $salida_inventario -> update_salida_inventario($body["ID_SALIDA_INVENTARIO"], $body["FECHA"], $body["ID_ARTICULO"], $body["NOMBRE"], $body["CANTIDAD"], $body["MODIFICADO_POR"]);
            echo json_encode("Salida_Inventario actualizada");
        break;
        
        case "DeleteSalida_Inventario":
            $datos = $salida_inventario -> delete_salida_inventario($body["ID_SALIDA_INVENTARIO"]);
            echo json_encode("Salida_Inventario eliminada");
        break;    
    }

?>