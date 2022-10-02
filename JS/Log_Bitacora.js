var urlLog_Bitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/log_bitacora.php?opcion=GetLog_Bitacoras';
var urlPostLog_Bitacora = 'http://192.168.0.15:80/Proyecto_Inventario/controller/log_bitacora.php?opcion=InsertLog_Bitacora';

$(document).ready(function(){
    CargarLog_Bitacoras();
});

function CargarLog_Bitacoras(){
    $.ajax({
        url : urlLog_Bitacora,
        type : 'GET',
        datatype : 'JSON',
        success : function(response){
            var MiItems = response;
            var Valores = '';
            var contador = 1;

            for(i = 0; i < MiItems.length; i++){
                contador+= 1;
                Valores += '<tr>'+
                '<td>' + MiItems[i].ID_LOG +'</td>'+
                '<td>' + MiItems[i].FECHA +'</td>'+
                '<td>' + MiItems[i].ACCION +'</td>'+
                '<td>' + MiItems[i].FORMULARIO +'</td>'+
                '<td>' + MiItems[i].USUARIO +'</td>'+
                /*
                '<td>' +
                    '<button class="btn btn-info" onclick="CargarLog_Bitacora(' + MiItems[i].ID_LOG + ')">Editar</button>' +
                    '<button class="btn btn-danger" id="btneliminar" onclick="EliminarLog_Bitacora(' + MiItems[i].ID_LOG + ')">Eliminar</button>' +
                '</td>' +
                */
                '</tr>';
            $('.Log_Bitacoras').html(Valores);
            $('#ID_LOG').val(contador);
            }

        }
    });
}

function AgregarLog_Bitacora(){
    var datosLog_Bitacora = {
        ID_LOG : $('#ID_LOG').val(),
        FECHA : $('#FECHA').val(),
        ACCION : $('#ACCION').val(),
        FORMULARIO : $('#FORMULARIO').val(),
        USUARIO : $('#USUARIO').val(),
    };

    var datosLog_Bitacorajson = JSON.stringify(datosLog_Bitacora);

    $.ajax({
        url : urlPostLog_Bitacora,
        type : 'POST',
        data : datosLog_Bitacorajson,
        dataType : 'JSON',
        contentType : 'application/json',
        
        success : function(response){
            console.log(response);
        },

        error : function(){
            alert('Error al Agregar el Log_Bitacora');
        }
    });
    
    alert('Log_Bitacora Agregado')
}


