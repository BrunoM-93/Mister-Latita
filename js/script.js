document.addEventListener('DOMContentLoaded', function () {

    //Validacion campos formulario
    (function () {

        var formulario = document.getElementById('form');

        var validarNombre = function (e) {
            if (formulario.nombre.value == 0) {
                alert("Completá el Campo Nombre");
                e.preventDefault();
            }
        };

        var validarCorreo = function (e) {
            if (formulario.email.value == 0) {
                alert("Completá el campo Correo Electrónico");
                e.preventDefault();
            }
        };

        var validarTelefono = function (e) {
            if (formulario.telefono.value == "") {
                alert("Completá el campo Telefono");
                e.preventDefault();
            }
        };

        var validarMensaje = function (e) {
            if (formulario.mensaje.value == 0) {
                alert("Completá el campo Mensaje");
                e.preventDefault();
            }
        };

        var validar = function (e) {
            validarNombre(e);
            validarCorreo(e);
            validarTelefono(e);
            validarMensaje(e);
        };

        formulario.addEventListener("submit", validar);


        //Recarga formulario un vez validado y enviado, limpiando los campos.
        //!NO FUNCIONA
        // formulario.addEventListener("submit", handleSubmit)
        // async function handleSubmit(event) {
        //     event.preventDefault()
        //     const form = new FormData(this);
        //     const response = await fetch(this.action, {
        //         method: this.method,
        //         body: form,
        //         headers: {
        //             'Accept': 'application/json'
        //         }
        //     })
        //     if (response.ok) {
        //         this.reset();
        //         alert('Gracias por contactarte con nosotros. En breve nos estaremos comunicando');
        //     }
        // }
    }())
});

//Resetea el Formulario cuando vuelve a la pagina despues de enviado
window.onbeforeunload = () => {
    document.getElementById('form')
    form.reset();
}
