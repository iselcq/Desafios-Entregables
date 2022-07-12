async function main() {



    let opcionSelect = document.getElementById("opcion"); /* =  parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n 3.-Salir")); */
    let opcion = opcionSelect.value;
    let opcionEnLS = localStorage.getItem("opcion");
    if (opcionEnLS) {
        opcion = opcionEnLS
        opcionSelect.value = opcionEnLS
    }

    opcionSelect.addEventListener("change", (evento) => {
        opcion = evento.target.value
        localStorage.setItem('opcion', opcion)
    })

    let resultado = document.getElementById("resultado")

    let horaSelect = document.getElementById("hora");



    const respuesta = await fetch('https://gist.githubusercontent.com/iselcq/63c00238a2ed67af218eea334adb0abd/raw/75ac2b2a6cbc22fb3e5b68327f7d4ca2b5122f1e/opciones.json')
    const nuevasHoras = await respuesta.json();

    /* const listaHoras = document.querySelector('#despertar') */

    for (const nuevaHora of nuevasHoras) {
        let option = document.createElement('option');
        //DESESTRUCTURACION //
        const { text, value } = nuevaHora
        option.innerText = text;
        option.value = value;
        horaSelect.appendChild(option);
    }

    let hora = horaSelect.value;
    let horaEnLS = localStorage.getItem('hora')
    if (horaEnLS) {
        hora = horaEnLS
        horaSelect.value = horaEnLS
    }
    horaSelect.addEventListener("change", (evento) => {
        hora = evento.target.value
        localStorage.setItem("hora", hora)
    })



    function calcularHoraDormir(horaDespertar, numeroCiclos) {
        const horaActual = new Date() // Obtener la hora Actual
        const horaA = horaDespertar.split(':') // Crear el arreglo separando el string por el caracter ':'
        horaActual.setHours(horaA[0]) //Asignar el elemento 0 del string al arreglo horaActual
        horaActual.setMinutes(horaA[1]) //Asignar el elemento 1 del string a minutos del arreglo horaActual
        const horaDormirMS = horaActual.getTime() - (90 * 60 * 1000 * numeroCiclos) // Obtengo la hora con los elementos de entrada del usuario en milisegundos y hago la operacion para restar los milisegundos de 90 minutos por cada ciclo de sueño
        const horaDormir = new Date(horaDormirMS) // Convierto el resultado anterior a un objeto Date
        const horaDormirHora = horaDormir.getHours() //Obtengo las horas del objeto Date
        const horaDormirMinutos = horaDormir.getMinutes() // Obtengo los minutos del objeto Date
        let horaDormirNueva = `${horaDormirHora.toString()}:${horaDormirMinutos.toString()}` //Obtengo el resultado concatenando las variables ateriores
        //El if agrega un 0 si los minutos obtenidos son 0, para asi mostrar la hora en formato correcto
        if (horaDormirMinutos === 0) {
            horaDormirNueva = `${horaDormirNueva}0`
        }

        return horaDormirNueva
    }

    function calcularHoraDespertar(horaDormir, numeroCiclos) {
        const horaActual = new Date()
        const horaB = horaDormir.split(':')
        horaActual.setHours(horaB[0])
        horaActual.setMinutes(horaB[1])
        const horaDespertarMs = horaActual.getTime() + (90 * 60 * 1000 * numeroCiclos)
        const horaDespertar = new Date(horaDespertarMs)
        const horaDespertarHora = horaDespertar.getHours()
        const horaDespertarMinutos = horaDespertar.getMinutes()
        let horaDespertarNueva = `${horaDespertarHora.toString()}:${horaDespertarMinutos.toString()}`


        if (horaDespertarMinutos === 0) {
            horaDespertarNueva = horaDespertarNueva + '0'
        }
        return horaDespertarNueva
    }

    const numeroCiclos = [6, 5, 4]

    function calcular(opcion) {

        let horas = []

        switch (opcion) {
            case "1":
                let horaDespertar = hora
                for (const dormir of numeroCiclos) {
                    horas.push(calcularHoraDormir(horaDespertar, dormir))
                }
                const textoResultado = `Para completar ${numeroCiclos[0]} ciclos de sueño, duerme a las  ${horas[0]}
            Para completar ${numeroCiclos[1]} ciclos de sueño, duerme a las ${horas[1]}
            Para completar ${numeroCiclos[2]} ciclos de sueño, duerme a las ${horas[2]}`

                swal({
                    title: "Resultados",
                    text: textoResultado,
                    icon: "success",
                    button: "Cerrar",
                });

                break;

            case "2":
                let horaDormir = hora
                for (const despertar of numeroCiclos) {
                    horas.push(calcularHoraDespertar(horaDormir, despertar))
                }

                const textoResultado2 = `Para completar ${numeroCiclos[0]} ciclos de sueño, despierta a las ${horas[0]}
            Para completar ${numeroCiclos[1]} ciclos de sueño, despierta a las ${horas[1]}
            Para completar ${numeroCiclos[2]} ciclos de sueño, despierta a las ${horas[2]}`

                swal({
                    title: "Resultados",
                    text: textoResultado2,
                    icon: "success",
                    button: "Cerrar",
                });

                break;

            default:
                alert('Elegiste una opcion invalida');
                break;
        }
        /*  opcion = parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n 3.-Salir"));
      */

    }

    let accion = document.getElementById("botonAccion")

    accion.addEventListener("click", mostrarOpcion)

    function mostrarOpcion(evento) {
        evento.preventDefault()
        calcular(opcion)
    }
}
main()
