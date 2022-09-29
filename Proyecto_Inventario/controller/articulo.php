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
    require_once("../models/Articulo.php");
    $articulo = new Articulo();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){
        
        case "GetArticulos":
            $datos = $articulo -> get_articulos();
            echo json_encode($datos);
        break;

        case "GetArticulo":
            $datos = $articulo -> get_articulo($body["ID_ARTICULO"]);
            echo json_encode($datos);
        break;

        case "InsertArticulo":
            $datos = $articulo -> insert_articulo($body["ID_ARTICULO"], $body["NOMBRE"], $body["NOMBRE_CORTO"], $body["ID_CATEGORIA"], $body["ID_MARCA"]);
            echo json_encode("Articulo agregado");
        break;

        case "UpdateArticulo":
            $datos = $articulo -> update_articulo($body["ID_ARTICULO"], $body["NOMBRE"], $body["NOMBRE_CORTO"], $body["ID_CATEGORIA"], $body["ID_MARCA"]);
            echo json_encode("Articulo actualizado");
        break;
        
        case "DeleteArticulo":
            $datos = $articulo -> delete_articulo($body["ID_ARTICULO"]);
            echo json_encode("Articulo eliminado");
        break;    
    }

?>