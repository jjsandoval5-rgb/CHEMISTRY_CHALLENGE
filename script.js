
// ==========================================
// CHEMISTRY CHALLENGE - BANCO DE PREGUNTAS
// ==========================================

const preguntas = [

    // ===== NIVEL PRINCIPIANTE: CONFIGURACION =====

    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del hidrógeno (Z=1)?",
        opciones: ["1s¹", "1s²", "2s¹", "2p¹"],
        correcta: 0,
        explicacion: "El hidrógeno tiene un electrón, que ocupa el orbital 1s.",
        errores: [
            "Correcto: el hidrógeno solo tiene un electrón.",
            "El orbital 1s² necesita dos electrones.",
            "El hidrógeno ocupa primero el orbital 1s.",
            "El orbital 2p se llena después de otros orbitales."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuántos electrones tiene el oxígeno (Z=8)?",
        opciones: ["6", "8", "10", "16"],
        correcta: 1,
        explicacion: "El número atómico del oxígeno es 8, por eso tiene 8 electrones si es neutro.",
        errores: [
            "El oxígeno tiene 8 electrones, no 6.",
            "Correcto: el número atómico indica sus 8 electrones.",
            "10 corresponde a otro número de electrones.",
            "16 es aproximadamente su masa atómica, no sus electrones."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del sodio (Z=11)?",
        opciones: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶", "1s² 2s² 3s⁷"],
        correcta: 0,
        explicacion: "El sodio tiene 11 electrones distribuidos como 2, 2, 6 y 1.",
        errores: [
            "Correcto: esta distribución suma 11 electrones.",
            "Esta configuración no respeta el llenado correcto de orbitales.",
            "Esta configuración solo contiene 10 electrones.",
            "Un subnivel s admite como máximo 2 electrones."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuántos electrones puede contener como máximo un orbital?",
        opciones: ["1", "2", "6", "8"],
        correcta: 1,
        explicacion: "Cada orbital puede contener como máximo dos electrones con espines opuestos.",
        errores: [
            "Puede contener dos electrones.",
            "Correcto: el máximo es dos electrones.",
            "Seis es la capacidad máxima de un subnivel p.",
            "Ocho no es la capacidad de un orbital individual."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Qué subnivel se llena después del 2p?",
        opciones: ["3s", "3p", "4s", "2d"],
        correcta: 0,
        explicacion: "Según el orden de llenado, después del 2p se ocupa el 3s.",
        errores: [
            "Correcto: el siguiente subnivel es 3s.",
            "Primero se llena el 3s.",
            "El 4s se llena después del 3p.",
            "El subnivel 2d no existe."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del helio (Z=2)?",
        opciones: ["1s¹", "1s²", "2s²", "1s² 2s¹"],
        correcta: 1,
        explicacion: "Los dos electrones del helio ocupan el orbital 1s.",
        errores: [
            "Esta configuración representa un solo electrón.",
            "Correcto: el helio tiene dos electrones en 1s.",
            "El llenado comienza en 1s, no en 2s.",
            "Esta distribución contiene tres electrones."
        ]
    },

    // ===== NIVEL PRINCIPIANTE: TABLA PERIODICA =====

    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué indica el número atómico de un elemento?",
        opciones: ["Número de protones", "Número de neutrones", "Masa total", "Número de moléculas"],
        correcta: 0,
        explicacion: "El número atómico representa la cantidad de protones del núcleo.",
        errores: [
            "Correcto: indica los protones.",
            "Los neutrones no determinan el número atómico.",
            "La masa depende de protones y neutrones.",
            "No representa la cantidad de moléculas."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿En qué grupo se encuentran los gases nobles?",
        opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"],
        correcta: 3,
        explicacion: "Los gases nobles se ubican en el grupo 18 de la tabla periódica.",
        errores: [
            "El grupo 1 contiene los metales alcalinos.",
            "El grupo 2 contiene los alcalinotérreos.",
            "El grupo 17 contiene los halógenos.",
            "Correcto: los gases nobles están en el grupo 18."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué sucede generalmente con el radio atómico al bajar en un grupo?",
        opciones: ["Disminuye", "Aumenta", "No cambia", "Desaparece"],
        correcta: 1,
        explicacion: "Al bajar en un grupo se agregan niveles electrónicos, aumentando el tamaño del átomo.",
        errores: [
            "Generalmente aumenta, no disminuye.",
            "Correcto: se incorporan nuevos niveles electrónicos.",
            "El radio atómico sí presenta variaciones.",
            "El átomo no desaparece."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Cuál de estos elementos es un metal alcalino?",
        opciones: ["Cloro", "Neón", "Potasio", "Oxígeno"],
        correcta: 2,
        explicacion: "El potasio pertenece al grupo 1 y es un metal alcalino.",
        errores: [
            "El cloro es un halógeno.",
            "El neón es un gas noble.",
            "Correcto: el potasio pertenece al grupo 1.",
            "El oxígeno es un no metal."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué tendencia presenta generalmente la electronegatividad de izquierda a derecha en un período?",
        opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
        correcta: 0,
        explicacion: "En general, la electronegatividad aumenta de izquierda a derecha en un período.",
        errores: [
            "Correcto: generalmente aumenta.",
            "La tendencia general es de aumento.",
            "La electronegatividad presenta variaciones.",
            "No se vuelve cero por recorrer un período."
        ]
    },

    // ===== NIVEL MEDIO: ESTADO LIQUIDO =====

    {
        nivel: "Medio",
        tema: "Fuerzas intermoleculares",
        pregunta: "¿Qué fuerza intermolecular predomina entre moléculas de agua?",
        opciones: ["Puentes de hidrógeno", "Fuerzas metálicas", "Enlaces iónicos", "Enlaces covalentes entre moléculas"],
        correcta: 0,
        explicacion: "Las moléculas de agua forman puentes de hidrógeno debido a su polaridad.",
        errores: [
            "Correcto: el agua forma puentes de hidrógeno.",
            "El agua no presenta enlaces metálicos.",
            "El agua molecular no es un compuesto iónico.",
            "Los enlaces covalentes unen los átomos dentro de cada molécula."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fuerzas intermoleculares",
        pregunta: "¿Qué fuerza intermolecular está presente en todas las sustancias moleculares?",
        opciones: ["Puentes de hidrógeno", "Fuerzas de dispersión de London", "Enlaces iónicos", "Enlaces metálicos"],
        correcta: 1,
        explicacion: "Las fuerzas de dispersión de London aparecen debido a dipolos instantáneos e inducidos.",
        errores: [
            "Los puentes de hidrógeno solo aparecen bajo condiciones específicas.",
            "Correcto: las fuerzas de London están presentes en todas las sustancias.",
            "Los enlaces iónicos no son fuerzas intermoleculares.",
            "Los enlaces metálicos corresponden a sólidos metálicos."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades de los líquidos",
        pregunta: "¿Qué propiedad permite que la superficie de un líquido se comporte como una película elástica?",
        opciones: ["Viscosidad", "Densidad", "Tensión superficial", "Presión atmosférica"],
        correcta: 2,
        explicacion: "La tensión superficial surge por las fuerzas de cohesión entre las moléculas del líquido.",
        errores: [
            "La viscosidad mide la resistencia al flujo.",
            "La densidad relaciona masa y volumen.",
            "Correcto: la tensión superficial explica este comportamiento.",
            "La presión atmosférica no define esta propiedad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades de los líquidos",
        pregunta: "¿Qué ocurre generalmente con la viscosidad de un líquido cuando aumenta su temperatura?",
        opciones: ["Aumenta", "Disminuye", "Se duplica siempre", "No cambia"],
        correcta: 1,
        explicacion: "Al aumentar la temperatura, generalmente disminuye la viscosidad de los líquidos.",
        errores: [
            "La viscosidad de los líquidos generalmente disminuye.",
            "Correcto: el líquido suele fluir con mayor facilidad.",
            "No existe una regla de duplicación.",
            "La viscosidad sí depende de la temperatura."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fuerzas intermoleculares",
        pregunta: "¿Cuál de estas sustancias puede formar puentes de hidrógeno entre sus moléculas?",
        opciones: ["CH4", "H2O", "CO2", "N2"],
        correcta: 1,
        explicacion: "El agua posee hidrógeno unido directamente al oxígeno, lo que permite formar puentes de hidrógeno.",
        errores: [
            "El metano no tiene hidrógeno unido a F, O o N.",
            "Correcto: el agua forma puentes de hidrógeno.",
            "El CO2 no tiene hidrógenos.",
            "El nitrógeno molecular no contiene hidrógeno."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades de los líquidos",
        pregunta: "¿Qué fenómeno explica que un líquido ascienda por un tubo muy estrecho?",
        opciones: ["Capilaridad", "Evaporación", "Congelación", "Condensación"],
        correcta: 0,
        explicacion: "La capilaridad depende de las fuerzas de adhesión y cohesión.",
        errores: [
            "Correcto: la capilaridad permite el ascenso del líquido.",
            "La evaporación es el paso de líquido a gas.",
            "La congelación transforma el líquido en sólido.",
            "La condensación transforma el gas en líquido."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fuerzas intermoleculares",
        pregunta: "¿Qué sucede cuando aumentan las fuerzas intermoleculares entre moléculas de líquidos similares?",
        opciones: ["Generalmente aumenta el punto de ebullición", "Siempre disminuye la masa", "Desaparece la cohesión", "El líquido se convierte en gas inmediatamente"],
        correcta: 0,
        explicacion: "Se necesita más energía para separar moléculas que se atraen con mayor intensidad.",
        errores: [
            "Correcto: generalmente aumenta el punto de ebullición.",
            "La masa no depende de esta fuerza.",
            "Las fuerzas intermoleculares producen cohesión.",
            "No se produce una transformación inmediata."
        ]
    },

    // ===== NIVEL MEDIO: SOLUCIONES =====

    {
        nivel: "Medio",
        tema: "Componentes de soluciones",
        pregunta: "En una solución de agua con sal, ¿cuál es el soluto?",
        opciones: ["Agua", "Sal", "Ambos son solventes", "Ninguno"],
        correcta: 1,
        explicacion: "La sal es la sustancia que se disuelve y el agua es el solvente.",
        errores: [
            "El agua es el solvente en este ejemplo.",
            "Correcto: la sal es el soluto.",
            "La sal y el agua no cumplen la misma función.",
            "Ambos componentes forman la solución."
        ]
    },
    {
        nivel: "Medio",
        tema: "Solubilidad",
        pregunta: "¿Qué significa que una solución esté saturada?",
        opciones: ["Que no tiene solvente", "Que contiene la máxima cantidad de soluto disuelto en ciertas condiciones", "Que contiene solamente agua", "Que no tiene soluto"],
        correcta: 1,
        explicacion: "Una solución saturada contiene la cantidad máxima de soluto que puede disolverse bajo determinadas condiciones.",
        errores: [
            "Una solución saturada sí contiene solvente.",
            "Correcto: ha alcanzado su límite de solubilidad.",
            "Puede contener distintos solventes y solutos.",
            "Una solución saturada necesariamente contiene soluto."
        ]
    },
    {
        nivel: "Medio",
        tema: "Factores de solubilidad",
        pregunta: "¿Qué suele ocurrir con la solubilidad de muchos sólidos en agua al aumentar la temperatura?",
        opciones: ["Generalmente aumenta", "Siempre disminuye", "Siempre es cero", "No puede cambiar"],
        correcta: 0,
        explicacion: "La solubilidad de muchos sólidos aumenta con la temperatura, aunque existen excepciones.",
        errores: [
            "Correcto: es una tendencia frecuente, no una regla universal.",
            "No todos los sólidos disminuyen su solubilidad.",
            "La solubilidad no se vuelve siempre cero.",
            "La temperatura puede modificar la solubilidad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Factores de solubilidad",
        pregunta: "¿Qué factor influye especialmente en la solubilidad de los gases en líquidos?",
        opciones: ["Presión", "Color", "Forma del recipiente", "Masa del recipiente"],
        correcta: 0,
        explicacion: "La presión parcial del gas influye en su solubilidad en un líquido, según la ley de Henry.",
        errores: [
            "Correcto: la presión influye en la solubilidad de los gases.",
            "El color no determina la solubilidad.",
            "La forma del recipiente no es el factor principal.",
            "La masa del recipiente no determina la solubilidad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Solubilidad",
        pregunta: "¿Qué significa que dos líquidos sean miscibles?",
        opciones: ["Que no se mezclan", "Que se mezclan formando una sola fase", "Que siempre forman un sólido", "Que no tienen volumen"],
        correcta: 1,
        explicacion: "Los líquidos miscibles se mezclan completamente y forman una sola fase.",
        errores: [
            "Eso describe líquidos inmiscibles.",
            "Correcto: forman una sola fase.",
            "La miscibilidad no implica formar un sólido.",
            "Todos los líquidos tienen volumen."
        ]
    },
    {
        nivel: "Medio",
        tema: "Componentes de soluciones",
        pregunta: "¿Cuál es el solvente cuando se prepara una solución con 10 g de azúcar y 100 mL de agua?",
        opciones: ["Azúcar", "Agua", "Ambos son solutos", "Ninguno"],
        correcta: 1,
        explicacion: "El agua es el solvente porque disuelve el azúcar.",
        errores: [
            "El azúcar es el soluto.",
            "Correcto: el agua actúa como solvente.",
            "El agua es el solvente en este caso.",
            "La mezcla contiene dos componentes."
        ]
    },
    {
        nivel: "Medio",
        tema: "Factores de solubilidad",
        pregunta: "¿Por qué agitar una mezcla puede acelerar la disolución de un sólido?",
        opciones: ["Porque aumenta siempre la temperatura", "Porque favorece el contacto entre soluto y solvente", "Porque elimina el soluto", "Porque cambia la masa del sólido"],
        correcta: 1,
        explicacion: "La agitación favorece el contacto entre el soluto y el solvente y acelera la disolución, pero no cambia necesariamente la solubilidad de equilibrio.",
        errores: [
            "Agitar no aumenta siempre la temperatura.",
            "Correcto: mejora el contacto entre las sustancias.",
            "La agitación no elimina el soluto.",
            "La masa del sólido no cambia por agitarlo."
        ]
    }

];

// ==========================================
// FIN DEL BANCO DE 25 PREGUNTAS
// ==========================================

console.log("Preguntas cargadas:", preguntas.length);

// ==========================================
// SISTEMA DE NAVEGACION
// ==========================================

function cambiarPantalla(id) {
    document.querySelectorAll(".pantalla").forEach(p => {
        p.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");
}

function volverInicio() {
    cambiarPantalla("pantalla-inicio");
}

function mostrarInstrucciones() {
    cambiarPantalla("pantalla-instrucciones");
}

function mostrarCompetencia() {
    cambiarPantalla("pantalla-competencia");
}

// ==========================================
// VARIABLES DEL JUEGO
// ==========================================

let preguntasJuego = [];
let preguntaActual = 0;
let puntuacion = 0;
let tiempoInicio = 0;
let tiempoTotal = 0;
let nivelSeleccionado = "";
let aliasJugador = "Jugador";
let respondida = false;

// ==========================================
// SELECCION DE NIVEL
// ==========================================

function iniciarJuego() {

    cambiarPantalla("pantalla-niveles");
}

function seleccionarNivel(nivel) {

    nivelSeleccionado = nivel;

    preguntasJuego = preguntas.filter(p =>
        p.nivel.toLowerCase() === nivel.toLowerCase()
    );

    preguntaActual = 0;
    puntuacion = 0;
    tiempoInicio = Date.now();

    mostrarPregunta();
}
function seleccionarPreguntasCompetencia(codigo) {

    let principiantes = preguntas.filter(p =>
        p.nivel.toLowerCase() === "principiante"
    );

    let medios = preguntas.filter(p =>
        p.nivel.toLowerCase() === "medio"
    );

    // Seleccionar preguntas usando el código del reto
    principiantes = mezclarConCodigo(principiantes, codigo);
    medios = mezclarConCodigo(medios, codigo);

    // Elegir 8 principiantes y 7 medios
    let seleccionadas = [
        ...principiantes.slice(0, 8),
        ...medios.slice(0, 7)
    ];

    // Mezclar las 15 preguntas con el mismo código
    preguntasJuego = mezclarConCodigo(seleccionadas, codigo + "ORDEN");

    nivelSeleccionado = "Mixto";
    preguntaActual = 0;
    puntuacion = 0;
tiempoInicio = Date.now();

    mostrarPregunta();
}

function generarNumeroAleatorio(codigo) {
    let semilla = 0;

    for (let i = 0; i < codigo.length; i++) {
        semilla = (semilla * 31 + codigo.charCodeAt(i)) >>> 0;
    }

    return function() {
        semilla = (semilla * 1664525 + 1013904223) >>> 0;
        return semilla / 4294967296;
    };
}

function mezclarConCodigo(lista, codigo) {
    let resultado = [...lista];
    let aleatorio = generarNumeroAleatorio(codigo);

    for (let i = resultado.length - 1; i > 0; i--) {
        let j = Math.floor(aleatorio() * (i + 1));

        [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }

    return resultado;
}
// ==========================================
// CREAR PANTALLA DEL JUEGO
// ==========================================

function crearPantallaJuego() {

    let pantalla = document.getElementById("pantalla-juego");

    if (!pantalla) {

        document.getElementById("app").insertAdjacentHTML("beforeend", `
            <section id="pantalla-juego" class="pantalla oculto">

                <h2>🧪 CHEMISTRY CHALLENGE</h2>

                <p id="nivel-texto"></p>

                <p id="contador"></p>

                <div class="barra-progreso">
                    <div id="progreso"></div>
                </div>

                <h3 id="tema"></h3>

                <h2 id="pregunta-texto"></h2>

                <div id="opciones"></div>

                <div id="retroalimentacion"></div>

                <button id="siguiente" onclick="siguientePregunta()" class="oculto">
                    SIGUIENTE PREGUNTA ➜
                </button>

            </section>
        `);
    }
}

// ==========================================
// MOSTRAR PREGUNTAS
// ==========================================

function mostrarPregunta() {

    crearPantallaJuego();

    cambiarPantalla("pantalla-juego");

    respondida = false;

    let pregunta = preguntasJuego[preguntaActual];

    document.getElementById("nivel-texto").textContent =
        "Nivel: " + nivelSeleccionado.toUpperCase();

    document.getElementById("contador").textContent =
        "Pregunta " + (preguntaActual + 1) +
        " de " + preguntasJuego.length;

    document.getElementById("tema").textContent =
        pregunta.tema;

    document.getElementById("pregunta-texto").textContent =
        pregunta.pregunta;

    document.getElementById("progreso").style.width =
        ((preguntaActual / preguntasJuego.length) * 100) + "%";

    document.getElementById("retroalimentacion").innerHTML = "";

    document.getElementById("siguiente").classList.add("oculto");

    let opcionesHTML = "";

    pregunta.opciones.forEach((opcion, i) => {

        opcionesHTML += `
            <button class="opcion"
                onclick="responderPregunta(${i})">
                ${String.fromCharCode(65 + i)}. ${opcion}
            </button>
        `;

    });

    document.getElementById("opciones").innerHTML = opcionesHTML;
}

// ==========================================
// RESPONDER PREGUNTAS
// ==========================================

function responderPregunta(opcionElegida) {

    if (respondida) return;

    respondida = true;

    let pregunta = preguntasJuego[preguntaActual];

    let botones = document.querySelectorAll(".opcion");

    botones.forEach((boton, i) => {

        boton.disabled = true;

        if (i === pregunta.correcta) {
            boton.classList.add("correcta");
        }

        if (i === opcionElegida && i !== pregunta.correcta) {
            boton.classList.add("incorrecta");
        }

    });

    let mensaje = "";

    if (opcionElegida === pregunta.correcta) {

        puntuacion++;

        mensaje = `
            <div class="feedback correcto">
                <h3>¡CORRECTO! 🎉</h3>
                <p>${pregunta.explicacion}</p>
            </div>
        `;

    } else {

        mensaje = `
            <div class="feedback incorrecto">
                <h3>¡NO TE PREOCUPES! 📚</h3>
                <p>${pregunta.errores[opcionElegida]}</p>
                <p><strong>Respuesta correcta:</strong>
                ${pregunta.opciones[pregunta.correcta]}</p>
                <p>${pregunta.explicacion}</p>
            </div>
        `;

    }

    document.getElementById("retroalimentacion").innerHTML = mensaje;

    document.getElementById("siguiente").classList.remove("oculto");

}

// ==========================================
// SIGUIENTE PREGUNTA
// ==========================================

function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual < preguntasJuego.length) {

        mostrarPregunta();

    } else {

        mostrarResultados();

    }

}

// ==========================================
// RESULTADOS FINALES
// ==========================================


function mostrarResultados() {
    let total = preguntasJuego.length;
    let porcentaje = Math.round((puntuacion / total) * 100);

    tiempoTotal = Math.floor((Date.now() - tiempoInicio) / 1000);

    // GUARDAR RESULTADO EN LA CLASIFICACION
    let clasificacion = JSON.parse(localStorage.getItem("clasificacion")) || [];

    clasificacion.push({
        alias: aliasJugador,
        puntuacion: puntuacion,
        total: total,
        porcentaje: porcentaje,
        tiempo: tiempoTotal,
        nivel: nivelSeleccionado
    });

    clasificacion.sort((a, b) => b.puntuacion - a.puntuacion);

    localStorage.setItem("clasificacion", JSON.stringify(clasificacion));

    document.getElementById("app").insertAdjacentHTML("beforeend", `
        <section id="pantalla-resultados" class="pantalla oculto">
            <h2>🏆 ¡JUEGO TERMINADO!</h2>
            <div class="logo">🏅</div>
            <h3>Tu puntuación</h3>
            <h1>${porcentaje}%</h1>
            <p>Jugador: ${aliasJugador}</p>
            <p>Respuestas correctas: ${puntuacion} de ${total}</p>
            <p>Nivel: ${nivelSeleccionado.toUpperCase()}</p>
            <p>Tiempo empleado: ${tiempoTotal} segundos</p>
            <p>${obtenerMensaje(porcentaje)}</p>

            <button onclick="mostrarClasificacion()">
                🏆 VER CLASIFICACIÓN
            </button>

            <button onclick="volverInicio()">
                VOLVER AL INICIO
            </button>

            <button onclick="iniciarJuego()">
                VOLVER A JUGAR
            </button>
        </section>
    `);

    cambiarPantalla("pantalla-resultados");
}


function obtenerMensaje(porcentaje) {

    if (porcentaje >= 90) {
        return "¡Excelente! Dominas muy bien la química.";
    }

    if (porcentaje >= 70) {
        return "¡Muy bien! Tienes buenos conocimientos.";
    }

    if (porcentaje >= 50) {
        return "Buen intento. Sigue practicando.";
    }

    return "Sigue estudiando. ¡Puedes mejorar!";
}

// ==========================================
// COMPETENCIA: REGISTRO DE ALIAS
// ==========================================

function registrarAlias() {

    let campo = document.getElementById("alias");
    let codigo = document.getElementById("codigoReto");

    if (!campo.value.trim()) {
        alert("Por favor, escribe un alias.");
        return;
    }

    if (!codigo.value.trim()) {
        alert("Por favor, escribe el código del reto.");
        return;
    }

    aliasJugador = campo.value.trim();

    let codigoReto = codigo.value.trim().toUpperCase();

    alert("¡Bienvenido, " + aliasJugador + "!");

    seleccionarPreguntasCompetencia(codigoReto);
}
// MOSTRAR TABLA DE CLASIFICACION
function mostrarClasificacion() {
    let clasificacion = JSON.parse(
        localStorage.getItem("clasificacion")
    ) || [];

  clasificacion.sort((a, b) => {

    // Primero: mayor puntuación
    if (b.puntuacion !== a.puntuacion) {
        return b.puntuacion - a.puntuacion;
    }

    // Segundo: menor tiempo
    return a.tiempo - b.tiempo;

});

    let filas = "";

    if (clasificacion.length === 0) {
        filas = "<p>Aún no hay jugadores registrados.</p>";
    } else {
        clasificacion.forEach((jugador, i) => {
            filas += `
                <div class="jugador-ranking">
                    <strong>${i + 1}. ${jugador.alias}</strong>
                    <span>${jugador.puntuacion} de ${jugador.total} puntos</span>
                    <span>${jugador.nivel}</span>
<span>Tiempo: ${jugador.tiempo ?? "Sin registro"} segundos</span>
                </div>
            `;
        });
    }

    let pantalla = document.getElementById("pantalla-clasificacion");

    if (!pantalla) {
        document.getElementById("app").insertAdjacentHTML("beforeend", `
            <section id="pantalla-clasificacion" class="pantalla oculto">
                <h2>🏆 TABLA DE CLASIFICACIÓN</h2>
                <div id="lista-ranking"></div>
                <button onclick="volverInicio()">VOLVER AL INICIO</button>
            </section>
        `);
    }

    document.getElementById("lista-ranking").innerHTML = filas;

    cambiarPantalla("pantalla-clasificacion");
}

console.log("Sistema de juego cargado correctamente");


