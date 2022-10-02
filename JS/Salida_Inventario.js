var urlSalida_Inventario = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/salida_inventario.php?opcion=GetSalida_Inventarios';
var urlGetSalida_Inventario = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/salida_inventario.php?opcion=GetSalida_Inventario';
var urlPostSalida_Inventario = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/salida_inventario.php?opcion=InsertSalida_Inventario';
var urlPutSalida_Inventario = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/salida_inventario.php?opcion=UpdateSalida_Inventario';
var urlDeleteSalida_Inventario = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/salida_inventario.php?opcion=DeleteSalida_Inventario';

$(document).ready(function(){
    CargarSalida_Inventarios();
});

function CargarSalida_Inventarios(){
    $.ajax({
        url : urlSalida_Inventario,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_SALIDA_INVENTARIO +'</td>'+
                '<td>' + MiItems[i].FECHA +'</td>'+
                '<td>' + MiItems[i].ID_ARTICULO +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
		'<td>' + MiItems[i].CANTIDAD +'</td>'+
                '<td>' + MiItems[i].MODIFICADO_POR +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarSalida_Inventario(' + MiItems[i].ID_SALIDA_INVENTARIO + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarSalida_Inventario(' + MiItems[i].ID_SALIDA_INVENTARIO + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Salida_Inventarios').html(Valores);
            }

        }
    });
}

function CargarSalida_Inventario(id_salida_inventario){
    var datosSalida_Inventario = {
        ID_SALIDA_INVENTARIO : id_salida_inventario
    };

    alert('Editar ID_SALIDA_INVENTARIO=' + id_salida_inventario);

    var datosSalida_Inventariojson = JSON.stringify(datosSalida_Inventario);

    $.ajax({
        url : urlGetSalida_Inventario,
        type : 'POST',
        data : datosSalida_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_SALIDA_INVENTARIO').val(MiItems[0].ID_SALIDA_INVENTARIO);
            $('#FECHA').val(MiItems[0].FECHA);
            $('#ID_ARTICULO').val(MiItems[0].ID_ARTICULO);
            $('#NOMBRE').val(MiItems[0].NOMBRE);
	    $('#CANTIDAD').val(MiItems[0].CANTIDAD);
            $('#MODIFICADO_POR').val(MiItems[0].MODIFICADO_POR);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarSalida_Inventario(' + MiItems[0].ID_SALIDA_INVENTARIO + ')"' +
            'value="Actualizar Salida_Inventario" class="btn btn-primary"></input>'
            $('.btnSalida_Inventario').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Salida_Inventario' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarSalida_Inventario(){
    var datosSalida_Inventario = {
        ID_SALIDA_INVENTARIO : $('#ID_SALIDA_INVENTARIO').val(),
        FECHA : $('#FECHA').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
	    CANTIDAD : $('#CANTIDAD').val(),
        MODIFICADO_POR : $('#MODIFICADO_POR').val(),
    };

    var datosSalida_Inventariojson = JSON.stringify(datosSalida_Inventario);

    $.ajax({
        url : urlPostSalida_Inventario,
        type : 'POST',
        data : datosSalida_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar la Salida_Inventario');
        }
    });
    
    alert('Salida_Inventario Agregada')
}

function ActualizarSalida_Inventario(id_salida_inventario){
    var datosSalida_Inventario = {
        ID_SALIDA_INVENTARIO : id_salida_inventario,
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        FECHA : $('#FECHA').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
	CANTIDAD : $('#CANTIDAD').val(),
        MODIFICADO_POR : $('#MODIFICADO_POR').val()
    };

    var datosSalida_Inventariojson = JSON.stringify(datosSalida_Inventario);

    $.ajax({
        url : urlPutSalida_Inventario,
        type : 'PUT',
        data : datosSalida_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar la Salida_Inventario');
        }
    });
    
    alert('Salida_Inventario Actualizada')
}

function EliminarSalida_Inventario(id_salida_inventario){
    var datosSalida_Inventario = {
        ID_SALIDA_INVENTARIO : id_salida_inventario
    };

    alert('Eliminar ID_SALIDA_INVENTARIO=' + id_salida_inventario);

    var datosSalida_Inventariojson = JSON.stringify(datosSalida_Inventario);

    $.ajax({
        url : urlDeleteSalida_Inventario,
        type : 'DELETE',
        data : datosSalida_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Salida_Inventario Eliminada');
            location.reload();
        }
    });  
}