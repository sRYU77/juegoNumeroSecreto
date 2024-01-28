let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    //console.log(intentos);
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`certaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorio(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return numeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
 }
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 - ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos =1;
}

condicionesIniciales();