var urlMarca = 'http://192.168.0.15:80/Proyecto_Inventario/controller/marca.php?opcion=GetMarcas';
var urlGetMarca = 'http://192.168.0.15:80/Proyecto_Inventario/controller/marca.php?opcion=GetMarca';
var urlPostMarca = 'http://192.168.0.15:80/Proyecto_Inventario/controller/marca.php?opcion=InsertMarca';
var urlPutMarca = 'http://192.168.0.15:80/Proyecto_Inventario/controller/marca.php?opcion=UpdateMarca';
var urlDeleteMarca = 'http://192.168.0.15:80/Proyecto_Inventario/controller/marca.php?opcion=DeleteMarca';

$(document).ready(function(){
    CargarMarcas();
});

function CargarMarcas(){
    $.ajax({
        url : urlMarca,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';

            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_MARCA +'</td>'+
                '<td>' + MiItems[i].NOMBRE +'</td>'+
                
                '<td>' +
                    '<button class="btn btn-info flex-grow-1 m-1" onclick="CargarMarca(' + MiItems[i].ID_MARCA + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarMarca(' + MiItems[i].ID_MARCA + ')">Eliminar</button>' +
                '</td>' +
                
                '</tr>';
            $('.Marcas').html(Valores);
            }

        }
    });
}

function CargarMarca(id_marca){
    var datosMarca = {
        ID_MARCA : id_marca
    };

    alert('Editar ID_MARCA=' + id_marca);

    var datosMarcajson = JSON.stringify(datosMarca);

    $.ajax({
        url : urlGetMarca,
        type : 'POST',
        data : datosMarcajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_MARCA').val(MiItems[0].ID_MARCA);
            $('#NOMBRE').val(MiItems[0].NOMBRE);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarMarca(' + MiItems[0].ID_MARCA + ')"' +
            'value="Actualizar Marca" class="btn btn-primary"></input>'
            $('.btnMarca').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Marca' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarMarca(){
    var datosMarca = {
        ID_MARCA : $('#ID_MARCA').val(),
        NOMBRE : $('#NOMBRE').val(),
    };

    var datosMarcajson = JSON.stringify(datosMarca);

    $.ajax({
        url : urlPostMarca,
        type : 'POST',
        data : datosMarcajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar la Marca');
        }
    });
    
    alert('Marca Agregada')
}

function ActualizarMarca(id_marca){
    var datosMarca = {
        ID_MARCA : id_marca,
        NOMBRE : $('#NOMBRE').val()
    };

    var datosMarcajson = JSON.stringify(datosMarca);

    $.ajax({
        url : urlPutMarca,
        type : 'PUT',
        data : datosMarcajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar la Marca');
        }
    });
    
    alert('Marca Actualizada')
}

function EliminarMarca(id_marca){
    var datosMarca = {
        ID_MARCA : id_marca
    };

    alert('Eliminar ID_MARCA=' + id_marca);

    var datosMarcajson = JSON.stringify(datosMarca);

    $.ajax({
        url : urlDeleteMarca,
        type : 'DELETE',
        data : datosMarcajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Marca Eliminada');
            location.reload();
        }
    });  
}
