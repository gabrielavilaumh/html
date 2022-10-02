var urlLogin =  'http://192.168.0.15/Proyecto_Inventario/controller/login.php?opcion=GetLogin'



function validarAcceso(){
    var usuario = $('#usuario').val(),
        pass = $('#password').val();

        var valido = false;    


    if (usuario == "" || pass == ""){
        alert('Debe llenar los campos con sus credenciales');
    }else{

        var datosLogin = {
            USUARIO : usuario, 
            PASS : pass
        };
    
        var datosLoginjson = JSON.stringify(datosLogin);
    
        $.ajax({
            url : urlLogin,
            type : 'POST',
            data : datosLoginjson,
            dataType : 'JSON',
            contentType : 'application/json',
            
            success : function(response){
                var MiItems = response;
     
                if (usuario == MiItems[0].USUARIO && pass == MiItems[0].PASS){
                    window.open("http://192.168.0.15:80/Home.html", "_self")
                }
        
            },

    
            error : function(){
                alert('Error en succes');
            }

        });
        location.reload();

    };

    /*
    if (valido == false){
        alert('Usuario o contraseña incorrecto');
        location.reload();
    }
    */
    
}



