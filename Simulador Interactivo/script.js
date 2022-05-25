let opcion = parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n 3.-Salir"));

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

while (opcion < 3) {

    let horas = []

    switch (opcion) {
        case 1:
            let horaDespertar = prompt('Ingresa la hora a la que quieres despertar, formato 24 horas HH:MM.');
            for (const dormir of numeroCiclos) {
                horas.push(calcularHoraDormir(horaDespertar, dormir))
            }

            alert('Para completar ' + numeroCiclos[0] + ' ciclos de sueño, duerme a las ' + horas[0] + '\nPara completar ' + numeroCiclos[1] + ' ciclos de sueño, duerme a las ' + horas[1] + '\nPara completar ' + numeroCiclos[2] + ' ciclos de sueño, duerme a las ' + horas[2]);
            break;

        case 2:
            let horaDormir = prompt('Ingresa la hora a la que quieres ir a dormir, formato 24 horas HH:MM.');
            for (const despertar of numeroCiclos) {
                horas.push(calcularHoraDespertar(horaDormir, despertar))
            }

            alert('Para completar ' + numeroCiclos[0] + ' ciclos de sueño, despierta a las ' + horas[0] + '\nPara completar ' + numeroCiclos[1] + ' ciclos de sueño, despierta a las ' + horas[1] + '\nPara completar ' + numeroCiclos[2] + ' ciclos de sueño, despierta a las ' + horas[2]);
            break;

        default:
            alert('Elegiste una opcion invalida');
            break;
    }
    opcion = parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n 3.-Salir"));


}
