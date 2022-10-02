var urlUsuario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/usuario.php?opcion=GetUsuarios';
var urlGetUsuario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/usuario.php?opcion=GetUsuario';
var urlPostUsuario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/usuario.php?opcion=InsertUsuario';
var urlPutUsuario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/usuario.php?opcion=UpdateUsuario';
var urlDeleteUsuario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/usuario.php?opcion=DeleteUsuario';

$(document).ready(function(){
    CargarUsuarios();
});

function CargarUsuarios(){
    $.ajax({
        url : urlUsuario,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_USUARIO +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                '<td>' + MiItems[i].ID_ROL +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarUsuario(' + MiItems[i].ID_USUARIO + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarUsuario(' + MiItems[i].ID_USUARIO + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Usuarios').html(Valores);
            }

        }
    });
}

function CargarUsuario(id_usuario){
    var datosUsuario = {
        ID_USUARIO : id_usuario
    };

    alert('Editar ID_USUARIO=' + id_usuario);

    var datosUsuariojson = JSON.stringify(datosUsuario);

    $.ajax({
        url : urlGetUsuario,
        type : 'POST',
        data : datosUsuariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_USUARIO').val(MiItems[0].ID_USUARIO);
            $('#NOMBRE').val(MiItems[0].NOMBRE);
            $('#ID_ROL').val(MiItems[0].ID_ROL);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarUsuario(' + MiItems[0].ID_USUARIO + ')"' +
            'value="Actualizar Usuario" class="btn btn-primary"></input>'
            $('.btnUsuario').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Usuario' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);   
        }
    });
}

function AgregarUsuario(){
    var datosUsuario = {
        ID_USUARIO : $('#ID_USUARIO').val(),
        NOMBRE : $('#NOMBRE').val(),
        ID_ROL : $('#ID_ROL').val(),
    };

    var datosUsuariojson = JSON.stringify(datosUsuario);

    $.ajax({
        url : urlPostUsuario,
        type : 'POST',
        data : datosUsuariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el Usuario');
        }
    });
    
    alert('Usuario Agregado')
}

function ActualizarUsuario(id_usuario){
    var datosUsuario = {
        ID_USUARIO : id_usuario,
        NOMBRE : $('#NOMBRE').val(),
        ID_ROL : $('#ID_ROL').val(),
    };

    var datosUsuariojson = JSON.stringify(datosUsuario);

    $.ajax({
        url : urlPutUsuario,
        type : 'PUT',
        data : datosUsuariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar el Usuario');
        }
    });
    
    alert('Usuario Actualizado')
}

function EliminarUsuario(id_usuario){
    var datosUsuario = {
        ID_USUARIO : id_usuario
    };

    alert('Eliminar ID_USUARIO=' + id_usuario);

    var datosUsuariojson = JSON.stringify(datosUsuario);

    $.ajax({
        url : urlDeleteUsuario,
        type : 'DELETE',
        data : datosUsuariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Usuario Eliminado');
            location.reload();
        }
    });  
}
