var urlEntrada_Inventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/entrada_inventario.php?opcion=GetEntrada_Inventarios';
var urlGetEntrada_Inventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/entrada_inventario.php?opcion=GetEntrada_Inventario';
var urlPostEntrada_Inventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/entrada_inventario.php?opcion=InsertEntrada_Inventario';
var urlPutEntrada_Inventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/entrada_inventario.php?opcion=UpdateEntrada_Inventario';
var urlDeleteEntrada_Inventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/entrada_inventario.php?opcion=DeleteEntrada_Inventario';

$(document).ready(function(){
    CargarEntrada_Inventarios();
});

function CargarEntrada_Inventarios(){
    $.ajax({
        url : urlEntrada_Inventario,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';
            var contador =1;

            for(i = 0; i < MiItems.length; i++){
                contador+=1;
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_ENTRADA_INVENTARIO +'</td>'+
                '<td>' + MiItems[i].FECHA +'</td>'+
                '<td>' + MiItems[i].ID_ARTICULO +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
	        	'<td>' + MiItems[i].CANTIDAD +'</td>'+
                '<td>' + MiItems[i].MODIFICADO_POR +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarEntrada_Inventario(' + MiItems[i].ID_ENTRADA_INVENTARIO + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarEntrada_Inventario(' + MiItems[i].ID_ENTRADA_INVENTARIO + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Entrada_Inventarios').html(Valores);
            $('#ID_ENTRADA_INVENTARIO').val(contador)
            }

        }
    });
}

function CargarEntrada_Inventario(id_entrada_inventario){
    var datosEntrada_Inventario = {
        ID_ENTRADA_INVENTARIO : id_entrada_inventario
    };

    alert('Editar ID_ENTRADA_INVENTARIO=' + id_entrada_inventario);

    var datosEntrada_Inventariojson = JSON.stringify(datosEntrada_Inventario);

    $.ajax({
        url : urlGetEntrada_Inventario,
        type : 'POST',
        data : datosEntrada_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_ENTRADA_INVENTARIO').val(MiItems[0].ID_ENTRADA_INVENTARIO);
            $('#FECHA').val(MiItems[0].FECHA);
            $('#ID_ARTICULO').val(MiItems[0].ID_ARTICULO);
            $('#NOMBRE').val(MiItems[0].NOMBRE);
	        $('#CANTIDAD').val(MiItems[0].CANTIDAD);
            $('#MODIFICADO_POR').val(MiItems[0].MODIFICADO_POR);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarEntrada_Inventario(' + MiItems[0].ID_ENTRADA_INVENTARIO + ')"' +
            'value="Actualizar Entrada_Inventario" class="btn btn-primary"></input>'
            $('.btnEntrada_Inventario').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Entrada_Inventario' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarEntrada_Inventario(){
    var datosEntrada_Inventario = {
        ID_ENTRADA_INVENTARIO : $('#ID_ENTRADA_INVENTARIO').val(),
        FECHA : $('#FECHA').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
	    CANTIDAD : $('#CANTIDAD').val(),
        MODIFICADO_POR : $('#MODIFICADO_POR').val(),
    };

    var datosEntrada_Inventariojson = JSON.stringify(datosEntrada_Inventario);

    $.ajax({
        url : urlPostEntrada_Inventario,
        type : 'POST',
        data : datosEntrada_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar la Entrada_Inventario');
        }
    });
    
    alert('Entrada_Inventario Agregada')
}

function ActualizarEntrada_Inventario(id_entrada_inventario){
    var datosEntrada_Inventario = {
        ID_ENTRADA_INVENTARIO : id_entrada_inventario,
        FECHA : $('#FECHA').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
	    CANTIDAD : $('#CANTIDAD').val(),
        MODIFICADO_POR : $('#MODIFICADO_POR').val()
    };

    var datosEntrada_Inventariojson = JSON.stringify(datosEntrada_Inventario);

    $.ajax({
        url : urlPutEntrada_Inventario,
        type : 'PUT',
        data : datosEntrada_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar la Entrada_Inventario');
        }
    });
    
    alert('Entrada_Inventario Actualizada')
}

function EliminarEntrada_Inventario(id_entrada_inventario){
    var datosEntrada_Inventario = {
        ID_ENTRADA_INVENTARIO : id_entrada_inventario
    };

    alert('Eliminar ID_ENTRADA_INVENTARIO=' + id_entrada_inventario);

    var datosEntrada_Inventariojson = JSON.stringify(datosEntrada_Inventario);

    $.ajax({
        url : urlDeleteEntrada_Inventario,
        type : 'DELETE',
        data : datosEntrada_Inventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Entrada_Inventario Eliminada');
            location.reload();
        }
    });  
}