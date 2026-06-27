document.addEventListener("DOMContentLoaded", () => {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");
    const enviar = document.getElementById("enviar");

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
     window.addEventListener("scroll", function () {

        if (window.scrollY > 700) {
            btnArriba.style.opacity = "1";
            btnArriba.style.pointerEvents = "auto";
        } else {
            btnArriba.style.opacity = "0";
            btnArriba.style.pointerEvents = "none";
        }

    });

    // Subir al inicio
    btnArriba.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    enviar.addEventListener("click", function (event) {
        if (nombre.checkValidity() && correo.checkValidity() && mensaje.checkValidity()) {
            alert("MENSAJE ENVIADO");
        } else {
            alert("COMPLETAR TODOS LOS CAMPOS CORRECTAMENTE");
        }})

        // la seccion del api del clima no tocaaar

        const btnClima = document.getElementById("btnClima");
        btnClima.addEventListener("click", obtenerClima);

        function obtenerClima() {

            fetch("https://api.open-meteo.com/v1/forecast?latitude=4.6097&longitude=-74.0817&current=temperature_2m,wind_speed_10m")

        .then(respuesta => respuesta.json())
        .then(datos => {
            document.getElementById("temperatura").textContent =
                "Temperatura: " + datos.current.temperature_2m + " °C";
            document.getElementById("viento").textContent =
                "Velocidad promerdio del viento " + datos.current.wind_speed_10m + " km/h";
        })
        .catch(error => {
            console.log(error);
            alert("No fue posible obtener los datos del clima.");

        });
}
    });
