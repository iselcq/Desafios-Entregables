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



const nuevasHorasJSON = `[{ "value": "00:00", "text": "00:00 AM" }, { "value": "00:30", "text": "00:30 AM" },
{ "value": "01:00", "text": "01:00 AM" }, { "value": "01:30", "text": "01:30 AM" },
{ "value": "02:00", "text": "02:00 AM" }, { "value": "02:30", "text": "02:30 AM" },
{ "value": "03:00", "text": "03:00 AM" }, { "value": "03:30", "text": "03:30 AM" },
{ "value": "04:00", "text": "04:00 AM" }, { "value": "04:30", "text": "04:30 AM" },
{ "value": "05:00", "text": "05:00 AM" }, { "value": "05:30", "text": "05:30 AM" },
{ "value": "06:00", "text": "06:00 AM" }, { "value": "06:30", "text": "06:30 AM" },
{ "value": "07:00", "text": "07:00 AM" }, { "value": "07:30", "text": "07:30 AM" },
{ "value": "08:00", "text": "08:00 AM" }, { "value": "08:30", "text": "08:30 AM" },
{ "value": "09:00", "text": "09:00 AM" }, { "value": "09:30", "text": "09:30 AM" },
{ "value": "10:00", "text": "10:00 AM" }, { "value": "10:30", "text": "10:30 AM" },
{ "value": "11:00", "text": "11:00 AM" }, { "value": "11:30", "text": "11:30 AM" },
{ "value": "12:00", "text": "12:00 AM" }, { "value": "12:30", "text": "12:30 AM" },
{ "value": "13:00", "text": "13:00 AM" }, { "value": "13:30", "text": "13:30 AM" },
{ "value": "14:00", "text": "14:00 AM" }, { "value": "14:30", "text": "14:30 AM" },
{ "value": "15:00", "text": "15:00 AM" }, { "value": "15:30", "text": "15:30 AM" },
{ "value": "16:00", "text": "16:00 AM" }, { "value": "16:30", "text": "16:30 AM" },
{ "value": "17:00", "text": "17:00 AM" }, { "value": "17:30", "text": "17:30 AM" },
{ "value": "18:00", "text": "18:00 AM" }, { "value": "18:30", "text": "18:30 AM" },
{ "value": "19:00", "text": "19:00 AM" }, { "value": "19:30", "text": "19:30 AM" },
{ "value": "20:00", "text": "20:00 AM" }, { "value": "20:30", "text": "20:30 AM" },
{ "value": "21:00", "text": "21:00 AM" }, { "value": "21:30", "text": "21:30 AM" },
{ "value": "22:00", "text": "22:00 AM" }, { "value": "22:30", "text": "22:30 AM" },
{ "value": "23:00", "text": "23:00 AM" }, { "value": "23:30", "text": "23:30 AM" }]`

const nuevasHoras = JSON.parse(nuevasHorasJSON);

/* const listaHoras = document.querySelector('#despertar') */

for (const nuevaHora of nuevasHoras) {
    let option = document.createElement('option');
    option.innerText = nuevaHora.text;
    option.value = nuevaHora.value;
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
    let horaDormirNueva = horaDormirHora.toString() + ':' + horaDormirMinutos.toString() //Obtengo el resultado concatenando las variables ateriores
    //El if agrega un 0 si los minutos obtenidos son 0, para asi mostrar la hora en formato correcto
    if (horaDormirMinutos === 0) {
        horaDormirNueva = horaDormirNueva + '0'
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
    let horaDespertarNueva = horaDespertarHora.toString() + ':' + horaDespertarMinutos.toString()

    if (horaDespertarMinutos === 0) {
        horaDespertarNueva = horaDespertarNueva + '0'
    }
    return horaDespertarNueva
}

const numeroCiclos = [6, 5, 4]

function calcular(opcion) {

    let horas = []
    console.log(hora)
    switch (opcion) {
        case "1":
            let horaDespertar = hora
            for (const dormir of numeroCiclos) {
                horas.push(calcularHoraDormir(horaDespertar, dormir))
            }
            resultado.innerText = 'Para completar ' + numeroCiclos[0] + ' ciclos de sueño, duerme a las ' + horas[0] + '\nPara completar ' + numeroCiclos[1] + ' ciclos de sueño, duerme a las ' + horas[1] + '\nPara completar ' + numeroCiclos[2] + ' ciclos de sueño, duerme a las ' + horas[2];
            break;

        case "2":
            let horaDormir = hora
            for (const despertar of numeroCiclos) {
                horas.push(calcularHoraDespertar(horaDormir, despertar))
            }

            resultado.innerText = 'Para completar ' + numeroCiclos[0] + ' ciclos de sueño, despierta a las ' + horas[0] + '\nPara completar ' + numeroCiclos[1] + ' ciclos de sueño, despierta a las ' + horas[1] + '\nPara completar ' + numeroCiclos[2] + ' ciclos de sueño, despierta a las ' + horas[2];
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
