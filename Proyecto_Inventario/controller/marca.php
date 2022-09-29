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
    require_once("../models/Marca.php");
    $marca = new Marca();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){
        
        case "GetMarcas":
            $datos = $marca -> get_marcas();
            echo json_encode($datos);
        break;

        case "GetMarca":
            $datos = $marca -> get_marca($body["ID_MARCA"]);
            echo json_encode($datos);
        break;

        case "InsertMarca":
            $datos = $marca -> insert_marca($body["ID_MARCA"], $body["NOMBRE"]);
            echo json_encode("Marca agregada");
        break;

        case "UpdateMarca":
            $datos = $marca -> update_marca($body["ID_MARCA"], $body["NOMBRE"]);
            echo json_encode("Marca actualizada");
        break;
        
        case "DeleteMarca":
            $datos = $marca -> delete_marca($body["ID_MARCA"]);
            echo json_encode("Marca eliminada");
        break;    
    }

?>