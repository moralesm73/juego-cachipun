// Piedra = 0
// Papel = 1
// Tijera = 2

// Guardo en variables los 3 elementos importantes que permiten que funcione el juego
var rondas = document.getElementById("numRondas");
var comenzar = document.getElementById("comenzarJuego");
var win = 0, lose = 0, tie = 0;

// Creo un evento click, para cuando el usuario comienza el juego 
comenzar.addEventListener("click", () =>{
    // Verifico que no venga vacío el campo rondas y que no sea menor o igual a 0, para que al menos haya una ronda
    if(rondas.value == "" || rondas.value == " "){
        // Muestro el mensaje para que agregue alguna variable. No puede estar vacía
        document.getElementsByTagName("p")[0].style.display = 'block';
        document.getElementsByTagName("p")[1].style.display = 'none';
    } else if(+rondas.value <= 0){
        // Muestro el mensaje para que agregue un valor mayor o igual a 1
        document.getElementsByTagName("p")[0].style.display = 'none';
        document.getElementsByTagName("p")[1].style.display = 'block';
    }else {
        // Esto significa que se ingresó correctamente la cantidad de rondas
        // Ocultamos el box 1 que contiene la pregunta de cantidad de rondas
        document.getElementById("box_01").style.display = 'none';
        // Ejecuto la funcion crearRondas que traerá una variable con el HTML de las cajas con la informacion. Luego se insertará antes del div con ID mensajes
        document.getElementById("content-boxes").outerHTML = crearRondas(rondas.value);
        document.getElementsByClassName("boxes")[0].style.display = 'block';
        // Realizaremos un ciclo para crear los eventos clicks que irán moviendo al jugador entre las rondas
        for (let i = 0; i < +rondas.value; i++) {
            var mensajeImprimir = '';
            var opcionesRonda = document.getElementsByClassName("boxes");
            var opciones = document.getElementsByClassName("ronda"+i);
            // Evento si elige Piedra
            opciones[0].addEventListener("click", ()=>{
                opcionesRonda[i].style.display = 'none';
                let opcionPrograma1 = Math.floor(Math.random()*3);
                console.log('opcionPrograma0 '+opcionPrograma1);
                if(opcionPrograma1 == 0){
                    // Evento si el programa elige Piedra
                    tie++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Hubo un empate!</h4><p>Ambos eligieron Piedra</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma1 == 1){
                    // Evento si el programa elige Papel
                    lose++;
                    mensajeImprimirL = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has perdido!</h4><p>El programa eligió Papel; y la Piedra pierde contra el Papel</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma1 == 2){
                    // Evento si el programa elige Tijera
                    win++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has ganado!</h4><p>El programa eligió Tijera. Y la Piedra le gana a la Tijera</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }
                imprimirBotones(i, +rondas.value);
            })
            // Evento si elige Papel
            opciones[1].addEventListener("click", ()=>{
                opcionesRonda[i].style.display = 'none';
                opcionPrograma2 = Math.floor(Math.random()*3);
                console.log('opcionPrograma1 '+opcionPrograma2);
                if(opcionPrograma2 == 0){
                    // Evento si el programa elige Piedra
                    win++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has ganado!</h4><p>El programa eligió Piedra; y el Papel le gana a la Piedra</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma2 == 1){
                    // Evento si el programa elige Papel
                    tie++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Hubo un empate!</h4><p>Ambos eligieron Papel</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma2 == 2){
                    // Evento si el programa elige Tijera
                    lose++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has perdido!</h4><p>El programa eligió Tijera; y el Papel pierde contra la Tijera</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }
                imprimirBotones(i, +rondas.value);
            })
            // Evento si elige Tijera
            opciones[2].addEventListener("click", ()=>{
                opcionesRonda[i].style.display = 'none';
                opcionPrograma3 = Math.floor(Math.random()*3);
                console.log('opcionPrograma2 '+opcionPrograma3);
                if(opcionPrograma3 == 0){
                    // Evento si el programa elige Piedra
                    lose++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has perdido!</h4><p>El programa eligió Piedra; y la Tijera pierde contra la Piedra</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma3 == 1){
                    // Evento si el programa elige Papel
                    win++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Has ganado!</h4><p>El programa eligió Papel; y la Tijera le gana al Papel</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }else if(opcionPrograma3 == 2){
                    // Evento si el programa elige Tijera
                    tie++;
                    mensajeImprimir = '<div id="mensajes" class="text-center" style="display: block;"><h4>&iexcl;Hubo un empate!</h4><p>Ambos eligieron Tijera</p><div id="decisiones"></div></div>';
                    imprimirMensajes(mensajeImprimir);
                }
                imprimirBotones(i, +rondas.value);
            })
            console.log()
        }
    }
})

// Funcion para crear las cajas de decisiones según cantidad de rondas elegidas
function crearRondas(round){
    let script = '<div id="content-boxes">';
    for (let i = 0; i < round; i++) {
        script += '<div class="boxes" style="display: none;">';
        script += '<h2 class="mb-4 text-center">Elije tu opción:</h2>';
        script += '<div class="row align-items-center justify-content-around">';
        script += '<div class="col-auto">';
        script += '<button type="button" class="btn btn-info ronda'+i+'">Piedra</button>';
        script += '</div>';
        script += '<div class="col-auto">';
        script += '<button type="button" class="btn btn-info ronda'+i+'">Papel</button>';
        script += '</div>';
        script += '<div class="col-auto">';
        script += '<button type="button" class="btn btn-info ronda'+i+'">Tijera</button>';
        script += '</div>';
        script += '</div>';
        script += '</div>';
    }

    return script+'</div>';
}

// Funcion para imprimir los mensajes de resultados, reemplazando en cualquier instante del juego
function imprimirMensajes(mensajes){
    var resultados = document.getElementById("mensajes");
    resultados.outerHTML = mensajes;
}

// Funcion para reemplazar la botonera de Seguir Jugando o FInalizar el Juego, dependiendo si llego a la ultima ronda
function imprimirBotones(indice, arregloRondas){
    if(indice+1 == arregloRondas){
        document.getElementById("decisiones").outerHTML = '<div id="decisiones"><button type="button" class="btn btn-success" id="terminarRondas">Finalizar Juego</button></div>';
        document.getElementById("terminarRondas").addEventListener("click", ()=>{
            document.getElementById("content-boxes").outerHTML = '<div id="content-boxes"></div>';
            document.getElementById("mensajes").outerHTML = '<div id="mensajes" class="text-center"><h1>El juego ha finalizado</h1><div class="row justify-content-around mb-3"><div class="col-auto"><p class="m-0 text-center">'+win+'<br>Victorias</p></div><div class="col-auto"><p class="m-0 text-center">'+lose+'<br>Derrotas</p></div><div class="col-auto"><p class="m-0 text-center">'+tie+'<br>Empates</p></div></div><button type="button" class="btn btn-success px-2" id="restart">Quiero jugar otra vez</button></div>';
            document.getElementById("restart").addEventListener("click", () => {
                document.getElementById("mensajes").style.display = 'none';
                rondas.value = "";
                document.getElementById("box_01").style.display = 'block';
                win = 0;
                lose = 0;
                tie = 0;
            })
        })
    }else{
        document.getElementById("decisiones").outerHTML = '<div id="decisiones"><button type="button" class="btn btn-success" id="seguirJuego'+indice+'">Siguiente ronda</button></div>';
        document.getElementById("seguirJuego"+indice).addEventListener("click", ()=>{
            document.getElementsByClassName("boxes")[indice].style.display = 'none';
            document.getElementById("mensajes").style.display = 'none';
            document.getElementsByClassName("boxes")[indice+1].style.display = 'block';
        })
    }
}