var urlBitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/bitacora.php?opcion=GetBitacoras';
var urlGetBitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/bitacora.php?opcion=GetBitacora';
var urlPostBitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/bitacora.php?opcion=InsertBitacora';
var urlPutBitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/bitacora.php?opcion=UpdateBitacora';
var urlDeleteBitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/bitacora.php?opcion=DeleteBitacora';

$(document).ready(function(){
    CargarBitacoras();
});

function CargarBitacoras(){
    $.ajax({
        url : urlBitacora,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';
            
            for(i = 0; i < MiItems.length; i++){
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_BITACORA +'</td>'+
                '<td>' + MiItems[i].USUARIO +'</td>'+
                '<td>' + MiItems[i].ID_INVENTARIO +'</td>'+
                '<td>' + MiItems[i].COMANDO_SQL +'</td>'+
                '<td>' + MiItems[i].FECHA +'</td>'+
                /*
                '<td>' +
                    '<button class="btn btn-info" onclick="CargarBitacora(' + MiItems[i].ID_BITACORA + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarBitacora(' + MiItems[i].ID_BITACORA + ')">Eliminar</button>' +
                '</td>' +
                */
                '</tr>';
            $('.Bitacoras').html(Valores);
            }

        }
    });
}

function CargarBitacora(id_bitacora){
    var datosBitacora = {
        ID_BITACORA : id_bitacora
    };

    alert('Editar ID_BITACORA=' + id_bitacora);

    var datosBitacorajson = JSON.stringify(datosBitacora);

    $.ajax({
        url : urlGetBitacora,
        type : 'POST',
        data : datosBitacorajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            var MiItems = response;
            $('#ID_BITACORA').val(MiItems[0].ID_BITACORA);
            $('#USUARIO').val(MiItems[0].USUARIO);
            $('#ID_INVENTARIO').val(MiItems[0].ID_INVENTARIO);
            $('#COMANDO_SQL').val(MiItems[0].COMANDO_SQL);
            $('#FECHA').val(MiItems[0].FECHA);

            var btnactualizar = '<input type="submit" id="btnactualizar" onclick="ActualizarBitacora(' + MiItems[0].ID_BITACORA + ')"' +
            'value="Actualizar Bitacora" class="btn btn-primary"></input>'
            $('.btnBitacora').html(btnactualizar);

            var tituloactualizar = '<h3>' +
                'Actualizar Bitacora' +
                '</h3>';
           $('#tituloagregar').html(tituloactualizar);
            
        }
    });
}

function AgregarBitacora(){
    var datosBitacora = {
        ID_BITACORA : $('#ID_BITACORA').val(),
        USUARIO : $('#USUARIO').val(),
        ID_INVENTARIO : $('#ID_INVENTARIO').val(),
        COMANDO_SQL : $('#COMANDO_SQL').val(),
        FECHA : $('#FECHA').val(),
    };

    var datosBitacorajson = JSON.stringify(datosBitacora);

    $.ajax({
        url : urlPostBitacora,
        type : 'POST',
        data : datosBitacorajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el Bitacora');
        }
    });
    
    alert('Bitacora Agregado')
}

function ActualizarBitacora(id_bitacora){
    var datosBitacora = {
        ID_BITACORA : id_bitacora,
        ID_INVENTARIO : $('#ID_INVENTARIO').val(),
        USUARIO : $('#USUARIO').val(),
        ID_INVENTARIO : $('#ID_INVENTARIO').val(),
        COMANDO_SQL : $('#COMANDO_SQL').val(),
        FECHA : $('#FECHA').val()
    };

    var datosBitacorajson = JSON.stringify(datosBitacora);

    $.ajax({
        url : urlPutBitacora,
        type : 'PUT',
        data : datosBitacorajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Actualizar el Bitacora');
        }
    });
    
    alert('Bitacora Actualizado')
}

function EliminarBitacora(id_bitacora){
    var datosBitacora = {
        ID_BITACORA : id_bitacora
    };

    alert('Eliminar ID_BITACORA=' + id_bitacora);

    var datosBitacorajson = JSON.stringify(datosBitacora);

    $.ajax({
        url : urlDeleteBitacora,
        type : 'DELETE',
        data : datosBitacorajson,
        dataType : 'JSON',
        contentType : 'application/json',
        success : function(response){
            alert('Bitacora Eliminado');
            location.reload();
        }
    });  
}
