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
    require_once("../models/Usuario.php");
    $usuario = new Usuario();
    
    $body = json_decode(file_get_contents("php://input"), true);

    switch ($_GET["opcion"]){

        case "GetUsuarios":
            $datos = $usuario -> get_usuarios();
            echo json_encode($datos);
        break;

        case "GetUsuario":
            $datos = $usuario -> get_usuario($body["ID_USUARIO"]);
            echo json_encode($datos);
        break;

        case "InsertUsuario":
            $datos = $usuario -> insert_usuario($body["ID_USUARIO"], $body["NOMBRE"], $body["ID_ROL"]);
            echo json_encode("Usuario agregado");
        break;

        case "UpdateUsuario":
            $datos = $usuario -> update_usuario($body["ID_USUARIO"], $body["NOMBRE"], $body["ID_ROL"]);
            echo json_encode("Usuario actualizado");
        break;
        
        case "DeleteUsuario":
            $datos = $usuario -> delete_usuario($body["ID_USUARIO"]);
            echo json_encode("Usuario eliminado");
        break;    
    }

?>