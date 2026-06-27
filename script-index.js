document.addEventListener("DOMContentLoaded", () => {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    // Nombre
    nombre.addEventListener("invalid", function () {

        if (this.validity.valueMissing) {
            this.setCustomValidity("POR FAVOR INGRESAR NOMBRE");
        } else if (/\d/.test(this.value)) {
            this.setCustomValidity("EL NOMBRE NO PUEDE CONTENER NÚMEROS");
        }

    });

    nombre.addEventListener("input", function () {
        this.setCustomValidity("");

        if (/\d/.test(this.value)) {
            this.setCustomValidity("EL NOMBRE NO PUEDE CONTENER NÚMEROS");
        }
    });

    // Correo
    correo.addEventListener("invalid", function () {

        if (this.validity.valueMissing) {
            this.setCustomValidity("POR FAVOR INGRESE CORREO ELECTRÓNICO");
        } else if (this.validity.typeMismatch) {
            this.setCustomValidity("EL CORREO NO ES VÁLIDO. EJEMPLO: usuario@correo.com");
        }

    });

    correo.addEventListener("input", function () {
        this.setCustomValidity("");
    });

    // Mensaje
    mensaje.addEventListener("invalid", function () {

        if (this.validity.valueMissing) {
            this.setCustomValidity("POR FAVOR ESCRIBIR UN MENSAJE");
        }

    });

    mensaje.addEventListener("input", function () {
        this.setCustomValidity("");
    });
});