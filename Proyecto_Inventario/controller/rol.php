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
    require_once("../models/Rol.php");
    $rol = new Rol();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){

        case "GetRoles":
            $datos = $rol -> get_roles();
            echo json_encode($datos);
        break;

        case "GetRol":
            $datos = $rol -> get_rol($body["ID_ROL"]);
            echo json_encode($datos);
        break;

        case "InsertRol":
            $datos = $rol -> insert_rol($body["ID_ROL"], $body["NOMBRE"]);
            echo json_encode("Rol de usuario Agregado");
        break;

        case "UpdateRol":
            $datos = $rol -> update_rol($body["ID_ROL"], $body["NOMBRE"]);
            echo json_encode("Rol de usuario Actualizado");
        break;
        
        case "DeleteRol":
            $datos = $rol -> delete_rol($body["ID_ROL"]);
            echo json_encode("Rol de usuario eliminado");
        break;    
    }

?>