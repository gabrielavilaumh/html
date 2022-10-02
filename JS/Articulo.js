var urlArticulo = 'http://192.168.0.15:80/Proyecto_Inventario/controller/articulo.php?opcion=GetArticulos';
var urlGetArticulo = 'http://192.168.0.15:80/Proyecto_Inventario/controller/articulo.php?opcion=GetArticulo';
var urlPostArticulo = 'http://192.168.0.15:80/Proyecto_Inventario/controller/articulo.php?opcion=InsertArticulo';
var urlPutArticulo = 'http://192.168.0.15:80/Proyecto_Inventario/controller/articulo.php?opcion=UpdateArticulo';
var urlDeleteArticulo = 'http://192.168.0.15:80/Proyecto_Inventario/controller/articulo.php?opcion=DeleteArticulo';

$(document).ready(function(){
    CargarArticulos();
});

function CargarArticulos(){
    $.ajax({
        url : urlArticulo,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_ARTICULO +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                '<td>' + MiItems[i].NOMBRE_CORTO +'</td>'+
                '<td>' + MiItems[i].ID_CATEGORIA +'</td>'+
                '<td>' + MiItems[i].ID_MARCA +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarArticulo(' + MiItems[i].ID_ARTICULO + ')">Editar</button>' +
                    '<button class="btn btn-danger flex-grow-1 m-1" id="btneliminar" onclick="EliminarArticulo(' + MiItems[i].ID_ARTICULO + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Articulos').html(Valores);
            }

        }
    });
}

function CargarArticulo(id_articulo){
    var datosArticulo = {
        ID_ARTICULO : id_articulo
    };

    alert('Editar ID_ARTICULO=' + id_articulo);

    var datosArticulojson = JSON.stringify(datosArticulo);

    $.ajax({
        url : urlGetArticulo,
        type : 'POST',
        data : datosArticulojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_ARTICULO').val(MiItems[0].ID_ARTICULO);
            $('#NOMBRE').val(MiItems[0].NOMBRE);
            $('#NOMBRE_CORTO').val(MiItems[0].NOMBRE_CORTO);
            $('#ID_CATEGORIA').val(MiItems[0].ID_CATEGORIA);
            $('#ID_MARCA').val(MiItems[0].ID_MARCA);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarArticulo(' + MiItems[0].ID_ARTICULO + ')"' +
            'value="Actualizar Articulo" class="btn btn-primary"></input>'
            $('.btnArticulo').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Articulo' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarArticulo(){
    var datosArticulo = {
        ID_ARTICULO : $('#ID_ARTICULO').val(),
        NOMBRE : $('#NOMBRE').val(),
        NOMBRE_CORTO : $('#NOMBRE_CORTO').val(),
        ID_CATEGORIA : $('#ID_CATEGORIA').val(),
        ID_MARCA : $('#ID_MARCA').val(),
    };

    var datosArticulojson = JSON.stringify(datosArticulo);

    $.ajax({
        url : urlPostArticulo,
        type : 'POST',
        data : datosArticulojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el Articulo');
        }
    });
    
    alert('Articulo Agregado')
}

function ActualizarArticulo(id_articulo){
    var datosArticulo = {
        ID_ARTICULO : id_articulo,
        NOMBRE : $('#NOMBRE').val(),
        NOMBRE_CORTO : $('#NOMBRE_CORTO').val(),
        ID_CATEGORIA : $('#ID_CATEGORIA').val(),
        ID_MARCA : $('#ID_MARCA').val()
    };

    var datosArticulojson = JSON.stringify(datosArticulo);

    $.ajax({
        url : urlPutArticulo,
        type : 'PUT',
        data : datosArticulojson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar el Articulo');
        }
    });
    
    alert('Articulo Actualizado')
}

function EliminarArticulo(id_articulo){
    var datosArticulo = {
        ID_ARTICULO : id_articulo
    };

    alert('Eliminar ID_ARTICULO=' + id_articulo);

    var datosArticulojson = JSON.stringify(datosArticulo);

    $.ajax({
        url : urlDeleteArticulo,
        type : 'DELETE',
        data : datosArticulojson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Articulo Eliminado');
            location.reload();
        }
    });  
}
