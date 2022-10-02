var urlPostLog_Bitacora = 'http://127.0.0.1:80/html/Proyecto_Inventario/controller/registrar_log.php?opcion=InsertLog_Bitacora';

function Ingresar_Log(fecha, accion, formulario, usuario){

    var datosLog_Bitacora = {
        FECHA : fecha,
        ACCION : accion,
        FORMULARIO : formulario,
        USUARIO : usuario,
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
    
    location.reload();

    console.log('Log_Bitacora Agregado')
}
