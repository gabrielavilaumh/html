var urlCategoria = 'http://127.0.0.1:80/Proyecto_Inventario/controller/categoria.php?opcion=GetCategorias';
var urlGetCategoria = 'http://192.168.0.15:80/Proyecto_Inventario/controller/categoria.php?opcion=GetCategoria';
var urlPostCategoria = 'http://192.168.0.15:80/Proyecto_Inventario/controller/categoria.php?opcion=InsertCategoria';
var urlPutCategoria = 'http://192.168.0.15:80/Proyecto_Inventario/controller/categoria.php?opcion=UpdateCategoria';
var urlDeleteCategoria = 'http://192.168.0.15:80/Proyecto_Inventario/controller/categoria.php?opcion=DeleteCategoria';

$(document).ready(function(){
    CargarCategorias();
});

function CargarCategorias(){
    $.ajax({
        url : urlCategoria,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_CATEGORIA +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info" onclick="CargarCategoria(' + MiItems[i].ID_CATEGORIA + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarCategoria(' + MiItems[i].ID_CATEGORIA + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Categorias').html(Valores);
            }

        }
    });
}

function CargarCategoria(id_categoria){
    var datosCategoria = {
        ID_CATEGORIA : id_categoria
    };

    alert('Editar ID_CATEGORIA=' + id_categoria);

    var datosCategoriajson = JSON.stringify(datosCategoria);

    $.ajax({
        url : urlGetCategoria,
        type : 'POST',
        data : datosCategoriajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_CATEGORIA').val(MiItems[0].ID_CATEGORIA);
            $('#NOMBRE').val(MiItems[0].NOMBRE);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarCategoria(' + MiItems[0].ID_CATEGORIA + ')"' +
            'value="Actualizar Categoria" class="btn btn-primary"></input>'
            $('.btnCategoria').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Categoria' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarCategoria(){
    var datosCategoria = {
        ID_CATEGORIA : $('#ID_CATEGORIA').val(),
        NOMBRE : $('#NOMBRE').val(),
    };

    var datosCategoriajson = JSON.stringify(datosCategoria);

    $.ajax({
        url : urlPostCategoria,
        type : 'POST',
        data : datosCategoriajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar la Categoria');
        }
    });
    
    alert('Categoria Agregada')
}

function ActualizarCategoria(id_categoria){
    var datosCategoria = {
        ID_CATEGORIA : id_categoria,
        NOMBRE : $('#NOMBRE').val()
    };

    var datosCategoriajson = JSON.stringify(datosCategoria);

    $.ajax({
        url : urlPutCategoria,
        type : 'PUT',
        data : datosCategoriajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar la Categoria');
        }
    });
    
    alert('Categoria Actualizada')
}

function EliminarCategoria(id_categoria){
    var datosCategoria = {
        ID_CATEGORIA : id_categoria
    };

    alert('Eliminar ID_CATEGORIA=' + id_categoria);

    var datosCategoriajson = JSON.stringify(datosCategoria);

    $.ajax({
        url : urlDeleteCategoria,
        type : 'DELETE',
        data : datosCategoriajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Categoria Eliminada');
            location.reload();
        }
    });  
}
