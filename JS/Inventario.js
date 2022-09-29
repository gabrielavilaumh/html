var urlInventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/inventario.php?opcion=GetInventarios';
var urlGetInventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/inventario.php?opcion=GetInventario';
var urlPostInventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/inventario.php?opcion=InsertInventario';
var urlPutInventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/inventario.php?opcion=UpdateInventario';
var urlDeleteInventario = 'http://192.168.0.15:80/Proyecto_Inventario/controller/inventario.php?opcion=DeleteInventario';

$(document).ready(function(){
    CargarInventarios();
});

function CargarInventarios(){
    $.ajax({
        url : urlInventario,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_INVENTARIO +'</td>'+
                '<td>' + MiItems[i].ID_ARTICULO +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                '<td>' + MiItems[i].CANTIDAD +'</td>'+
                '<td>' + MiItems[i].TIPO_INVENTARIO +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info" onclick="CargarInventario(' + MiItems[i].ID_INVENTARIO + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarInventario(' + MiItems[i].ID_INVENTARIO + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Inventarios').html(Valores);
            }

        }
    });
}

function CargarInventario(id_inventario){
    var datosInventario = {
        ID_INVENTARIO : id_inventario
    };

    alert('Editar ID_INVENTARIO=' + id_inventario);

    var datosInventariojson = JSON.stringify(datosInventario);

    $.ajax({
        url : urlGetInventario,
        type : 'POST',
        data : datosInventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_INVENTARIO').val(MiItems[0].ID_INVENTARIO);
            $('#ID_ARTICULO').val(MiItems[0].ID_ARTICULO);
            $('#NOMBRE').val(MiItems[0].NOMBRE);
            $('#CANTIDAD').val(MiItems[0].CANTIDAD);
            $('#TIPO_INVENTARIO').val(MiItems[0].TIPO_INVENTARIO);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarInventario(' + MiItems[0].ID_INVENTARIO + ')"' +
            'value="Actualizar Inventario" class="btn btn-primary"></input>'
            $('.btnInventario').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Inventario' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarInventario(){
    var datosInventario = {
        ID_INVENTARIO : $('#ID_INVENTARIO').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
        CANTIDAD : $('#CANTIDAD').val(),
        TIPO_INVENTARIO : $('#TIPO_INVENTARIO').val(),
    };

    var datosInventariojson = JSON.stringify(datosInventario);

    $.ajax({
        url : urlPostInventario,
        type : 'POST',
        data : datosInventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el Inventario');
        }
    });
    
    alert('Inventario Agregado')
}

function ActualizarInventario(id_inventario){
    var datosInventario = {
        ID_INVENTARIO : id_inventario,
        NOMBRE : $('#NOMBRE').val(),
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
        CANTIDAD : $('#CANTIDAD').val(),
        TIPO_INVENTARIO : $('#TIPO_INVENTARIO').val()
    };

    var datosInventariojson = JSON.stringify(datosInventario);

    $.ajax({
        url : urlPutInventario,
        type : 'PUT',
        data : datosInventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar el Inventario');
        }
    });
    
    alert('Inventario Actualizado')
}

function EliminarInventario(id_inventario){
    var datosInventario = {
        ID_INVENTARIO : id_inventario
    };

    alert('Eliminar ID_INVENTARIO=' + id_inventario);

    var datosInventariojson = JSON.stringify(datosInventario);

    $.ajax({
        url : urlDeleteInventario,
        type : 'DELETE',
        data : datosInventariojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Inventario Eliminado');
            location.reload();
        }
    });  
}
