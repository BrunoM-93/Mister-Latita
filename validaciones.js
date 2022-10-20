(function(){
    
    var formulario = document.getElementsByName('formulario')[0];
        elementos = formulario.elements;
        boton = document.getElementById('boton');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completá el Campo Nombre");
            e.preventDefault();
            
        }
    };

    var validarCorreo = function(e){
        if (formulario.correo.value == 0){
            alert("Completá el campo Correo");
            e.preventDefault();
            
        }
    };

    var validarTelefono = function(e){
        if (formulario.telefono.value == ""){
            alert("Completá el campo Telefono");
            e.preventDefault();
        }
    }
    
    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0){
            alert("Completá el campo Mensaje");
            e.preventDefault();
            
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarCorreo(e);
        validarTelefono(e);
        validarMensaje(e);

    };

    formulario.addEventListener("submit", validar);
}
())