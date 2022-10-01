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
    require_once("../models/Entrada_Inventario.php");
    $entrada_inventario = new Entrada_Inventario();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){
        
        case "GetEntrada_Inventarios":
            $datos = $entrada_inventario -> get_entrada_inventarios();
            echo json_encode($datos);
        break;

        case "GetEntrada_Inventario":
            $datos = $entrada_inventario -> get_entrada_inventario($body["ID_ENTRADA_INVENTARIO"]);
            echo json_encode($datos);
        break;

        case "InsertEntrada_Inventario":
            $datos = $entrada_inventario -> insert_entrada_inventario($body["ID_ENTRADA_INVENTARIO"], $body["FECHA"], $body["ID_ARTICULO"], $body["NOMBRE"], $body["CANTIDAD"], $body["MODIFICADO_POR"]);
            echo json_encode("Entrada_Inventario agregada");
        break;

        case "UpdateEntrada_Inventario":
            $datos = $entrada_inventario -> update_entrada_inventario($body["ID_ENTRADA_INVENTARIO"], $body["FECHA"], $body["ID_ARTICULO"], $body["NOMBRE"], $body["CANTIDAD"], $body["MODIFICADO_POR"]);
            echo json_encode("Entrada_Inventario actualizada");
        break;
        
        case "DeleteEntrada_Inventario":
            $datos = $entrada_inventario -> delete_entrada_inventario($body["ID_ENTRADA_INVENTARIO"]);
            echo json_encode("Entrada_Inventario eliminada");
        break;    
    }

?>