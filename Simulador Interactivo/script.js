let opcion = parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n X.-Salir"));

function calcularHoraDormir(horaDespertar, numeroCiclos) {
    const horaDormir = (horaDespertar - (numeroCiclos * 90));
    return horaDormir
}

function calcularHoraDespertar(horaDormir, numeroCiclos) {
    const horaDespertar = (horaDormir + (numeroCiclos * 90));
    return horaDespertar
}

while (opcion != 'X') {

    let a, b, c

    switch (opcion) {
        case 1:
            let horaDespertar = prompt('Ingresa la hora a la que quieres despertar');
            a = calcularHoraDormir(horaDespertar, 6)
            b = calcularHoraDormir(horaDespertar, 5)
            c = calcularHoraDormir(horaDespertar, 4)
            alert('Para completar 6 ciclos de sueño, duerme a las ' + a + '\nPara completar 5 ciclos de sueño, duerme a las ' + b + '\nPara completar 4 ciclos de sueño, duerme a las ' + c);
            break;
        case 2:
            let horaDormir = prompt('Ingresa la hora a la que quieres ir a dormir');
            a = calcularHoraDespertar(horaDormir, 6)
            b = calcularHoraDespertar(horaDormir, 5)
            c = calcularHoraDespertar(horaDormir, 4)
            alert('Para completar 6 ciclos de sueño, duerme a las ' + a + '\nPara completar 5 ciclos de sueño, duerme a las ' + b + '\nPara completar 4 ciclos de sueño, duerme a las ' + c);
        default:
            alert('Elegiste una opcion invalida');
            break;
    }
    opcion = parseInt(prompt("Elige una opción: \n1.- Quiero saber a que hora debo dormirme  \n2.- Quiero saber a que hora debo despertar \n X.-Salir"));


}



console.log(d.toString());