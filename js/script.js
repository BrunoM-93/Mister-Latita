//Recarga formulario un vez enviado, limpiando los campos.
document.addEventListener('DOMContentLoaded', function () {
    let $form = document.getElementById('form')

    $form.addEventListener("submit", handleSubmit)

    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset();
            alert('Gracias por contactarte con nosotros. En breve nos estaremos comunicando');
        }
    }
});
