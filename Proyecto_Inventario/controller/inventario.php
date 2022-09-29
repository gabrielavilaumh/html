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
    require_once("../models/Inventario.php");
    $inventario = new Inventario();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){
        
        case "GetInventarios":
            $datos = $inventario -> get_inventarios();
            echo json_encode($datos);
        break;

        case "GetInventario":
            $datos = $inventario -> get_inventario($body["ID_INVENTARIO"]);
            echo json_encode($datos);
        break;

        case "InsertInventario":
            $datos = $inventario -> insert_inventario($body["ID_INVENTARIO"], $body["NOMBRE"], $body["CANTIDAD"], $body["ID_ARTICULO"], $body["TIPO_INVENTARIO"]);
            echo json_encode("Inventario agregado");
        break;

        case "UpdateInventario":
            $datos = $inventario -> update_inventario($body["ID_INVENTARIO"], $body["NOMBRE"], $body["CANTIDAD"], $body["ID_ARTICULO"], $body["TIPO_INVENTARIO"]);
            echo json_encode("Inventario actualizado");
        break;
        
        case "DeleteInventario":
            $datos = $inventario -> delete_inventario($body["ID_INVENTARIO"]);
            echo json_encode("Inventario eliminado");
        break;    
    }

?>