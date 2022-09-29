function barraNavegacion(){

    var menu = document.getElementById("Menu");
    menu.innerHTML = 
            '<nav class="navbar navbar-expand-lg navbar-light bg-light">'+
            '<div class="container-fluid">'+
              '<a class="navbar-brand" href="#">'+
                  '<img src="https://static.wixstatic.com/media/de548f_e58cace9152d49ffb94d1146bae61951~mv2.jpg/v1/fill/w_240,h_96,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/Logo%20UMH%20imagen.jpg" alt="" width="150">'+
              '</a>'+
              '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span>'+
              '</button>'+
              '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
                '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
                  '<li class="nav-item">'+
                    '<a class="nav-link active" aria-current="page" href="/Prueba.html">Home</a>'+
                  '</li>'+
                  '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+
                      'Administración'+
                    '</a>'+
                    '<ul class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                      '<li><a class="dropdown-item" href="/Formularios/Categoria.html">Categoria</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Materiales.html">Marca</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Pedido_Proveedor.html">Articulo</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Factura.html">Inventario</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Factura.html">Rol</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Factura.html">Usuario</a></li>'+
                      '<li><a class="dropdown-item" href="/Forms/Factura.html">Bitacora</a></li>'+
                    '</ul>'+
                    
                  '</li>'+

                  '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+
                      'Proceso Inventario'+
                    '</a>'+
                    '<ul class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                      '<li><a class="dropdown-item" href="/Forms/socio.html"></a></li>'+
                      
                    '</ul>'+
                    
                  '</li>'+
                  
                '</ul>'+
                '<form class="d-flex">'+
                  '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">'+
                  '<button class="btn btn-outline-success" type="submit">Search</button>'+
                '</form>'+
              '</div>'+
            '</div>'+
          '</nav>'
}