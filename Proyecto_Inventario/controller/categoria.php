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
    require_once("../models/Categoria.php");
    $categoria = new Categoria();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){

        case "GetCategorias":
            $datos = $categoria -> get_categorias();
            echo json_encode($datos);
        break;

        case "GetCategoria":
            $datos = $categoria -> get_categoria($body["ID_CATEGORIA"]);
            echo json_encode($datos);
        break;

        case "InsertCategoria":
            $datos = $categoria -> insert_categoria($body["ID_CATEGORIA"], $body["NOMBRE"]);
            echo json_encode("Categoria de inventario agregada");
        break;

        case "UpdateCategoria":
            $datos = $categoria -> update_categoria($body["ID_CATEGORIA"], $body["NOMBRE"]);
            echo json_encode("Categoria de inventario actualizada");
        break;
        
        case "DeleteCategoria":
            $datos = $categoria -> delete_categoria($body["ID_CATEGORIA"]);
            echo json_encode("Categoria de inventario eliminada");
        break;    
    }

?>