var urlRol = 'http://192.168.0.15:80/Proyecto_Inventario/controller/rol.php?opcion=GetRoles';
var urlGetRol = 'http://192.168.0.15:80/Proyecto_Inventario/controller/rol.php?opcion=GetRol';
var urlPostRol = 'http://192.168.0.15:80/Proyecto_Inventario/controller/rol.php?opcion=InsertRol';
var urlPutRol = 'http://192.168.0.15:80/Proyecto_Inventario/controller/rol.php?opcion=UpdateRol';
var urlDeleteRol = 'http://192.168.0.15:80/Proyecto_Inventario/controller/rol.php?opcion=DeleteRol';

$(document).ready(function(){
    CargarRoles();
});

function CargarRoles(){
    $.ajax({
        url : urlRol,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';
            var contador = 1;
            for(i = 0; i < MiItems.length; i++){
                contador+= 1;
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_ROL +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarRol(' + MiItems[i].ID_ROL + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarRol(' + MiItems[i].ID_ROL + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Roles').html(Valores);
            $('#ID_ROL').val(contador);
            }

        }
    });
}

function CargarRol(id_rol){
    var datosRol = {
        ID_ROL : id_rol
    };

    alert('Editar ID_ROL=' + id_rol);

    var datosRoljson = JSON.stringify(datosRol);

    $.ajax({
        url : urlGetRol,
        type : 'POST',
        data : datosRoljson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_ROL').val(MiItems[0].ID_ROL);
            $('#NOMBRE').val(MiItems[0].NOMBRE);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarRol(' + MiItems[0].ID_ROL + ')"' +
            'value="Actualizar Rol" class="btn btn-primary"></input>'
            $('.btnRol').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Rol' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarRol(){
    var datosRol = {
        ID_ROL : $('#ID_ROL').val(),
        NOMBRE : $('#NOMBRE').val(),
    };

    var datosRoljson = JSON.stringify(datosRol);

    $.ajax({
        url : urlPostRol,
        type : 'POST',
        data : datosRoljson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el rol');
        }
    });
    
    alert('Rol agregado')
}

function ActualizarRol(id_rol){
    var datosRol = {
        ID_ROL : id_rol,
        NOMBRE : $('#NOMBRE').val()
    };

    var datosRoljson = JSON.stringify(datosRol);

    $.ajax({
        url : urlPutRol,
        type : 'PUT',
        data : datosRoljson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar el rol');
        }
    });
    
    alert('Rol Actualizada')
}

function EliminarRol(id_rol){
    var datosRol = {
        ID_ROL : id_rol
    };

    alert('Eliminar ID_ROL=' + id_rol);

    var datosRoljson = JSON.stringify(datosRol);

    $.ajax({
        url : urlDeleteRol,
        type : 'DELETE',
        data : datosRoljson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Rol eliminado');
            location.reload();
        }
    });  
}
