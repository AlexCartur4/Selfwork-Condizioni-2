// IF ELSE

let temperatura = prompt('Che temperatura percepisci?');

if (temperatura < -10) {
    console.log('copriti…ancora ti raffreddi');
} else if (temperatura < 0) {
    console.log('non è tanto il freddo quanto l’umidità');
} else if (temperatura < 20) {
    console.log('non ci sono più le mezze stagioni');
} else if (temperatura < 30) {
    console.log('mi dia una peroni sudata');
} else if (temperatura >= 30) {
    console.log('lu mare, lu sole, lu ientu');
} else {
    alert('inserisci una temperatura valida');
}

// SWITCH

switch(true){
    case (temperatura < -10):
        console.log('copriti…ancora ti raffreddi');
        break;
    case (temperatura < 0):
        console.log('non è tanto il freddo quanto l’umidità');
        break;
    case (temperatura < 20):
        console.log('non ci sono più le mezze stagioni');
        break;
    case (temperatura < 30):
        console.log('mi dia una peroni sudata');
        break;
    case (temperatura >= 30):
        console.log('lu mare, lu sole, lu ientu');
    default:
        alert('inserisci una temperatura valida');
}
