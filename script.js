
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
    },

    // ===== PREGUNTAS ADICIONALES: NIVEL MEDIO =====

    // UNIDADES FÍSICAS DE CONCENTRACIÓN

    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué representa el porcentaje masa en masa (% m/m)?",
        opciones: [
            "Gramos de soluto por cada 100 g de solución",
            "Gramos de solvente por litro",
            "Moles de soluto por litro",
            "Mililitros de soluto por 100 g de solución"
        ],
        correcta: 0,
        explicacion: "El porcentaje masa en masa indica los gramos de soluto presentes en 100 gramos de solución.",
        errores: [
            "Correcto: representa gramos de soluto por cada 100 g de solución.",
            "Esa expresión no corresponde al porcentaje masa en masa.",
            "Los moles por litro corresponden a la molaridad.",
            "Esta opción mezcla unidades de masa y volumen."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué significa una solución al 10 % m/v?",
        opciones: [
            "10 g de soluto en 100 mL de solución",
            "10 mL de soluto en 100 g de solución",
            "10 g de solvente en 100 mL",
            "10 moles en 100 litros"
        ],
        correcta: 0,
        explicacion: "El porcentaje masa en volumen expresa gramos de soluto por cada 100 mL de solución.",
        errores: [
            "Correcto: contiene 10 gramos de soluto por cada 100 mL de solución.",
            "Esta opción corresponde a una combinación diferente de unidades.",
            "Se refiere al solvente, no al soluto.",
            "No corresponde al porcentaje masa en volumen."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué indica el porcentaje volumen en volumen (% v/v)?",
        opciones: [
            "Gramos de soluto por litro",
            "Mililitros de soluto por cada 100 mL de solución",
            "Moles de soluto por kilogramo",
            "Gramos de solvente por 100 mL"
        ],
        correcta: 1,
        explicacion: "El porcentaje volumen en volumen expresa el volumen de soluto en 100 unidades de volumen de solución.",
        errores: [
            "Esta expresión no corresponde al porcentaje volumen en volumen.",
            "Correcto: representa mL de soluto por cada 100 mL de solución.",
            "Los moles por kilogramo corresponden a la molalidad.",
            "El porcentaje v/v considera el volumen del soluto."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué unidad se utiliza comúnmente para expresar la concentración en partes por millón (ppm)?",
        opciones: [
            "Partes de soluto por un millón de partes de solución",
            "Moles por litro",
            "Gramos por mol",
            "Litros por kilogramo"
        ],
        correcta: 0,
        explicacion: "Las ppm expresan una parte de soluto por cada millón de partes de solución, usando unidades compatibles.",
        errores: [
            "Correcto: esa es la definición de partes por millón.",
            "Esta unidad corresponde a la molaridad.",
            "Gramos por mol es una unidad de masa molar.",
            "No es la definición de ppm."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "Una solución contiene 20 g de sal en 100 g de solución. ¿Cuál es su porcentaje m/m?",
        opciones: ["10 %", "20 %", "30 %", "50 %"],
        correcta: 1,
        explicacion: "Se divide la masa del soluto para la masa de solución y se multiplica por 100: (20/100) × 100 = 20 %.",
        errores: [
            "El resultado correcto es 20 %.",
            "Correcto: la solución tiene 20 % m/m.",
            "Se debe utilizar la masa de soluto y la masa total de solución.",
            "El porcentaje no corresponde a la mitad de la solución."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué información se necesita para calcular el porcentaje m/v?",
        opciones: [
            "Masa del soluto y volumen de la solución",
            "Moles y kilogramos de solvente",
            "Volumen del soluto y masa del solvente",
            "Temperatura y presión"
        ],
        correcta: 0,
        explicacion: "Para calcular el porcentaje m/v se necesita la masa del soluto y el volumen total de la solución.",
        errores: [
            "Correcto: se utilizan gramos de soluto y mL de solución.",
            "Esos datos se relacionan con otras unidades de concentración.",
            "No corresponde a la definición de porcentaje m/v.",
            "La temperatura y la presión no son los datos de esta fórmula."
        ]
    },
    {
        nivel: "Medio",
        tema: "Concentración de soluciones",
        pregunta: "¿Qué caracteriza a una solución diluida?",
        opciones: [
            "Tiene poca cantidad de soluto en relación con la solución",
            "Contiene únicamente soluto",
            "Siempre está saturada",
            "No contiene solvente"
        ],
        correcta: 0,
        explicacion: "Una solución diluida tiene una concentración relativamente baja de soluto.",
        errores: [
            "Correcto: contiene una proporción relativamente pequeña de soluto.",
            "Una solución también necesita un solvente.",
            "Una solución diluida no necesariamente está saturada.",
            "El solvente forma parte de la solución."
        ]
    },

    // UNIDADES QUÍMICAS DE CONCENTRACIÓN

    {
        nivel: "Medio",
        tema: "Molaridad",
        pregunta: "¿Qué es la molaridad?",
        opciones: [
            "Moles de soluto por litro de solución",
            "Gramos de soluto por kilogramo de solución",
            "Moles de solvente por litro",
            "Litros de soluto por mol"
        ],
        correcta: 0,
        explicacion: "La molaridad expresa la cantidad de moles de soluto presentes en un litro de solución.",
        errores: [
            "Correcto: esa es la definición de molaridad.",
            "La molaridad utiliza moles y litros de solución.",
            "Se considera la cantidad de soluto.",
            "No corresponde a la definición de molaridad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Molaridad",
        pregunta: "¿Cuál es la unidad de la molaridad?",
        opciones: ["g/mL", "mol/L", "kg/mol", "mL/g"],
        correcta: 1,
        explicacion: "La molaridad se expresa en moles por litro, también representada como M.",
        errores: [
            "g/mL representa una relación de masa y volumen.",
            "Correcto: mol/L es la unidad de molaridad.",
            "kg/mol no representa molaridad.",
            "mL/g tampoco corresponde a esta unidad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Molaridad",
        pregunta: "¿Cuántos moles de soluto hay en 2 litros de una solución 3 M?",
        opciones: ["1,5 mol", "3 mol", "6 mol", "9 mol"],
        correcta: 2,
        explicacion: "Se multiplica la molaridad por el volumen en litros: 3 mol/L × 2 L = 6 mol.",
        errores: [
            "Se debe multiplicar la molaridad por el volumen.",
            "Este valor no considera los dos litros de solución.",
            "Correcto: hay 6 moles de soluto.",
            "El resultado correcto se obtiene multiplicando 3 por 2."
        ]
    },
    {
        nivel: "Medio",
        tema: "Molalidad",
        pregunta: "¿Qué representa la molalidad?",
        opciones: [
            "Moles de soluto por kilogramo de solvente",
            "Moles de soluto por litro de solución",
            "Gramos de soluto por litro",
            "Moles de solvente por kilogramo de solución"
        ],
        correcta: 0,
        explicacion: "La molalidad relaciona los moles de soluto con los kilogramos de solvente.",
        errores: [
            "Correcto: esa es la definición de molalidad.",
            "Esta definición corresponde a la molaridad.",
            "Esta relación no representa la molalidad.",
            "Se utilizan los moles del soluto y la masa del solvente."
        ]
    },
    {
        nivel: "Medio",
        tema: "Molalidad",
        pregunta: "¿Cuál es la unidad habitual de la molalidad?",
        opciones: ["mol/L", "mol/kg", "g/L", "kg/mol"],
        correcta: 1,
        explicacion: "La molalidad se expresa en moles de soluto por kilogramo de solvente.",
        errores: [
            "mol/L corresponde a la molaridad.",
            "Correcto: la unidad es mol/kg.",
            "g/L representa una concentración masa-volumen.",
            "kg/mol no es la unidad de molalidad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Molalidad",
        pregunta: "Una solución contiene 2 moles de soluto en 4 kg de solvente. ¿Cuál es su molalidad?",
        opciones: ["0,5 mol/kg", "2 mol/kg", "4 mol/kg", "8 mol/kg"],
        correcta: 0,
        explicacion: "Se dividen los moles de soluto para los kilogramos de solvente: 2/4 = 0,5 mol/kg.",
        errores: [
            "Correcto: la molalidad es 0,5 mol/kg.",
            "Se debe dividir la cantidad de moles para la masa del solvente.",
            "Este resultado no corresponde a la división.",
            "Se multiplicaron los valores en lugar de dividirlos."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fracción molar",
        pregunta: "¿Qué representa la fracción molar de un componente?",
        opciones: [
            "La relación entre sus moles y los moles totales de la mezcla",
            "La relación entre su masa y el volumen",
            "Los gramos de soluto por litro",
            "La temperatura de la solución"
        ],
        correcta: 0,
        explicacion: "La fracción molar se obtiene dividiendo los moles de un componente para los moles totales de la mezcla.",
        errores: [
            "Correcto: esa es la definición de fracción molar.",
            "La fracción molar se calcula con cantidades de sustancia.",
            "Esa expresión no corresponde a la fracción molar.",
            "La temperatura no define la fracción molar."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fracción molar",
        pregunta: "¿Cuál es la suma de las fracciones molares de todos los componentes de una mezcla?",
        opciones: ["0", "0,5", "1", "100"],
        correcta: 2,
        explicacion: "La suma de todas las fracciones molares de una mezcla es igual a uno.",
        errores: [
            "La suma no es cero si existen componentes.",
            "La suma de todas las fracciones debe ser uno.",
            "Correcto: la suma es igual a uno.",
            "La fracción molar se expresa normalmente entre cero y uno."
        ]
    },
    {
        nivel: "Medio",
        tema: "Fracción molar",
        pregunta: "Una mezcla tiene 2 moles de A y 3 moles de B. ¿Cuál es la fracción molar de A?",
        opciones: ["0,2", "0,4", "0,6", "0,8"],
        correcta: 1,
        explicacion: "La fracción molar de A es 2/(2+3) = 0,4.",
        errores: [
            "El cálculo correcto es 2 dividido para 5.",
            "Correcto: la fracción molar de A es 0,4.",
            "0,6 corresponde a la fracción molar de B.",
            "La suma de las fracciones molares debe ser uno."
        ]
    },

    // PROPIEDADES COLIGATIVAS

    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿De qué depende principalmente el efecto de las propiedades coligativas?",
        opciones: [
            "Del número de partículas de soluto presentes",
            "Del color del soluto",
            "De la forma del recipiente",
            "Del olor de la solución"
        ],
        correcta: 0,
        explicacion: "Las propiedades coligativas dependen del número de partículas de soluto y no de su identidad química, en soluciones ideales diluidas.",
        errores: [
            "Correcto: dependen del número de partículas de soluto.",
            "El color no determina estas propiedades.",
            "La forma del recipiente no es el factor principal.",
            "El olor no determina las propiedades coligativas."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿Qué sucede con la presión de vapor del solvente al agregar un soluto no volátil?",
        opciones: [
            "Generalmente disminuye",
            "Siempre aumenta",
            "Permanece igual en todos los casos",
            "Se vuelve cero"
        ],
        correcta: 0,
        explicacion: "Un soluto no volátil disminuye la presión de vapor del solvente en una solución ideal.",
        errores: [
            "Correcto: la presión de vapor disminuye.",
            "La adición de un soluto no volátil no produce ese aumento.",
            "La presión de vapor cambia al añadir soluto.",
            "La presión de vapor no necesariamente se vuelve cero."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿Qué ocurre con el punto de ebullición de una solución al agregar un soluto no volátil?",
        opciones: [
            "Disminuye",
            "Aumenta",
            "Siempre permanece igual",
            "Se convierte en cero"
        ],
        correcta: 1,
        explicacion: "La elevación del punto de ebullición hace que la solución hierva a una temperatura mayor que el solvente puro.",
        errores: [
            "Generalmente el punto de ebullición aumenta.",
            "Correcto: se produce una elevación ebulloscópica.",
            "La temperatura de ebullición sí puede cambiar.",
            "No se convierte en cero."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿Qué sucede con el punto de congelación de una solución al añadir un soluto no volátil?",
        opciones: [
            "Aumenta",
            "Disminuye",
            "No cambia",
            "Se duplica"
        ],
        correcta: 1,
        explicacion: "La presencia de soluto provoca un descenso crioscópico, disminuyendo el punto de congelación.",
        errores: [
            "El punto de congelación generalmente disminuye.",
            "Correcto: se produce un descenso crioscópico.",
            "La adición de soluto modifica esta propiedad.",
            "No existe una regla de duplicación."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿Qué es la presión osmótica?",
        opciones: [
            "La presión necesaria para detener la ósmosis",
            "La presión del aire sobre un líquido",
            "La fuerza que produce la evaporación",
            "La presión de vapor del solvente puro"
        ],
        correcta: 0,
        explicacion: "La presión osmótica es la presión que debe aplicarse para detener el flujo neto de solvente a través de una membrana semipermeable.",
        errores: [
            "Correcto: esa es la definición de presión osmótica.",
            "No corresponde a la presión atmosférica.",
            "La evaporación es un fenómeno diferente.",
            "La presión de vapor es otra propiedad."
        ]
    },
    {
        nivel: "Medio",
        tema: "Propiedades coligativas",
        pregunta: "¿Qué fenómeno ocurre cuando el solvente atraviesa una membrana semipermeable hacia una solución más concentrada?",
        opciones: [
            "Ósmosis",
            "Sublimación",
            "Condensación",
            "Combustión"
        ],
        correcta: 0,
        explicacion: "La ósmosis es el movimiento neto del solvente a través de una membrana semipermeable hacia la solución de mayor concentración efectiva de solutos.",
        errores: [
            "Correcto: ese proceso se denomina ósmosis.",
            "La sublimación es el paso de sólido a gas.",
            "La condensación es el paso de gas a líquido.",
            "La combustión es una reacción química."
        ]
    },


    // ===== PREGUNTAS ADICIONALES: PRINCIPIANTE =====

    // CONFIGURACIÓN ELECTRÓNICA

    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuántos electrones puede contener como máximo el subnivel p?",
        opciones: ["2", "6", "10", "14"],
        correcta: 1,
        explicacion: "El subnivel p tiene tres orbitales y cada uno puede contener dos electrones.",
        errores: [
            "Dos electrones es la capacidad de un orbital.",
            "Correcto: el subnivel p admite seis electrones.",
            "Diez electrones corresponden al subnivel d.",
            "Catorce electrones corresponden al subnivel f."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del carbono (Z=6)?",
        opciones: ["1s² 2s² 2p²", "1s² 2s² 2p⁶", "1s² 2s¹ 2p³", "1s² 2p⁴"],
        correcta: 0,
        explicacion: "El carbono tiene seis electrones distribuidos en 1s² 2s² 2p².",
        errores: [
            "Correcto: esta configuración suma seis electrones.",
            "Esta configuración corresponde a diez electrones.",
            "No representa la configuración fundamental del carbono.",
            "No respeta el orden de llenado de los subniveles."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Qué subnivel se llena primero?",
        opciones: ["2s", "1s", "2p", "3s"],
        correcta: 1,
        explicacion: "El subnivel 1s tiene la menor energía y se llena primero.",
        errores: [
            "El subnivel 1s se llena antes.",
            "Correcto: el llenado comienza en 1s.",
            "El subnivel 2p se llena después de 2s.",
            "El subnivel 3s se ocupa posteriormente."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del nitrógeno (Z=7)?",
        opciones: ["1s² 2s² 2p³", "1s² 2s² 2p⁵", "1s² 2s¹ 2p⁴", "1s² 2s² 2p⁶"],
        correcta: 0,
        explicacion: "El nitrógeno tiene siete electrones: dos en 1s, dos en 2s y tres en 2p.",
        errores: [
            "Correcto: la configuración suma siete electrones.",
            "Esta configuración suma nueve electrones.",
            "No corresponde a la distribución fundamental del nitrógeno.",
            "Esta configuración suma diez electrones."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuántos electrones puede contener como máximo el subnivel s?",
        opciones: ["2", "6", "10", "14"],
        correcta: 0,
        explicacion: "El subnivel s contiene un orbital y admite como máximo dos electrones.",
        errores: [
            "Correcto: el subnivel s admite dos electrones.",
            "Seis es la capacidad del subnivel p.",
            "Diez es la capacidad del subnivel d.",
            "Catorce es la capacidad del subnivel f."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del magnesio (Z=12)?",
        opciones: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵ 3s³", "1s² 2s² 2p⁶", "1s² 2s² 2p⁶ 3p²"],
        correcta: 0,
        explicacion: "El magnesio tiene doce electrones y termina su configuración en 3s².",
        errores: [
            "Correcto: esta configuración suma doce electrones.",
            "El subnivel s no puede contener tres electrones.",
            "Esta configuración contiene diez electrones.",
            "El subnivel 3s se llena antes que el 3p."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Qué principio establece que dos electrones de un mismo orbital deben tener espines opuestos?",
        opciones: ["Principio de Aufbau", "Principio de exclusión de Pauli", "Regla de Hund", "Ley de conservación de la masa"],
        correcta: 1,
        explicacion: "El principio de exclusión de Pauli establece que dos electrones de un orbital tienen espines opuestos.",
        errores: [
            "Aufbau describe el orden de llenado de los orbitales.",
            "Correcto: corresponde al principio de exclusión de Pauli.",
            "La regla de Hund explica cómo se distribuyen electrones en orbitales de igual energía.",
            "La conservación de la masa trata sobre las reacciones químicas."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Qué establece la regla de Hund?",
        opciones: ["Los orbitales de igual energía se ocupan primero con electrones desapareados", "Todos los electrones tienen el mismo espín", "El subnivel s admite seis electrones", "Los electrones ocupan primero el nivel más externo"],
        correcta: 0,
        explicacion: "La regla de Hund indica que los orbitales de igual energía se ocupan individualmente antes de aparear electrones.",
        errores: [
            "Correcto: primero se ocupan individualmente los orbitales equivalentes.",
            "Los electrones desapareados tienen espines paralelos, pero no todos los electrones del átomo.",
            "El subnivel s admite como máximo dos electrones.",
            "Los electrones ocupan primero los orbitales de menor energía."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del aluminio (Z=13)?",
        opciones: ["1s² 2s² 2p⁶ 3s² 3p¹", "1s² 2s² 2p⁶ 3s³", "1s² 2s² 2p⁵ 3s² 3p²", "1s² 2s² 2p⁶ 3s²"],
        correcta: 0,
        explicacion: "El aluminio tiene trece electrones y su configuración termina en 3p¹.",
        errores: [
            "Correcto: la configuración suma trece electrones.",
            "El subnivel 3s no admite tres electrones.",
            "Esta distribución no corresponde al aluminio.",
            "Esta configuración contiene doce electrones."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Qué representa el número que aparece antes de la letra de un subnivel, como el 3 en 3p?",
        opciones: ["El número de protones", "El nivel principal de energía", "La cantidad de orbitales", "La masa atómica"],
        correcta: 1,
        explicacion: "El número indica el nivel principal de energía donde se encuentra el electrón.",
        errores: [
            "Los protones se identifican mediante el número atómico.",
            "Correcto: indica el nivel principal de energía.",
            "La letra y el tipo de subnivel permiten identificar los orbitales.",
            "La masa atómica no se representa con ese número."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuál es la configuración electrónica del cloro (Z=17)?",
        opciones: ["1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p³", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁵ 3s² 3p⁶"],
        correcta: 0,
        explicacion: "El cloro tiene diecisiete electrones y termina en 3p⁵.",
        errores: [
            "Correcto: esta configuración suma diecisiete electrones.",
            "Esta configuración suma quince electrones.",
            "Esta configuración corresponde a dieciocho electrones.",
            "No sigue el orden correcto de llenado."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Configuración electrónica",
        pregunta: "¿Cuántos electrones tiene el calcio (Z=20) en su último nivel de energía?",
        opciones: ["1", "2", "8", "20"],
        correcta: 1,
        explicacion: "El calcio termina en 4s², por lo que tiene dos electrones en su último nivel.",
        errores: [
            "El calcio tiene dos electrones de valencia.",
            "Correcto: su último nivel contiene dos electrones.",
            "Ocho es la cantidad de electrones en niveles internos agrupados, no en el último nivel.",
            "Veinte es el total de electrones del calcio neutro."
        ]
    },

    // TABLA PERIÓDICA Y PROPIEDADES PERIÓDICAS

    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Cómo se llaman las filas horizontales de la tabla periódica?",
        opciones: ["Grupos", "Períodos", "Familias", "Bloques"],
        correcta: 1,
        explicacion: "Las filas horizontales de la tabla periódica se llaman períodos.",
        errores: [
            "Los grupos son las columnas verticales.",
            "Correcto: las filas horizontales son los períodos.",
            "Las familias suelen referirse a grupos de elementos.",
            "Los bloques se relacionan con los subniveles electrónicos."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Cómo se llaman las columnas verticales de la tabla periódica?",
        opciones: ["Períodos", "Grupos", "Filas", "Niveles"],
        correcta: 1,
        explicacion: "Las columnas verticales se denominan grupos o familias.",
        errores: [
            "Los períodos son las filas horizontales.",
            "Correcto: las columnas son los grupos.",
            "Las filas son horizontales.",
            "Los niveles se relacionan con la energía de los electrones."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿En qué grupo se encuentran los halógenos?",
        opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"],
        correcta: 2,
        explicacion: "Los halógenos pertenecen al grupo 17 de la tabla periódica.",
        errores: [
            "El grupo 1 contiene los metales alcalinos.",
            "El grupo 2 contiene los metales alcalinotérreos.",
            "Correcto: los halógenos están en el grupo 17.",
            "El grupo 18 contiene los gases nobles."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué elementos se encuentran principalmente en la parte izquierda de la tabla periódica?",
        opciones: ["Metales", "Gases nobles", "No metales", "Halógenos"],
        correcta: 0,
        explicacion: "La mayoría de los elementos situados a la izquierda son metales.",
        errores: [
            "Correcto: los metales predominan en la parte izquierda.",
            "Los gases nobles se ubican en el grupo 18.",
            "Muchos no metales se encuentran a la derecha.",
            "Los halógenos están en el grupo 17."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué elemento químico tiene el símbolo Fe?",
        opciones: ["Flúor", "Hierro", "Fósforo", "Francio"],
        correcta: 1,
        explicacion: "Fe es el símbolo químico del hierro.",
        errores: [
            "El símbolo del flúor es F.",
            "Correcto: Fe representa al hierro.",
            "El fósforo tiene el símbolo P.",
            "El francio tiene el símbolo Fr."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué elemento tiene el símbolo químico Na?",
        opciones: ["Nitrógeno", "Neón", "Sodio", "Níquel"],
        correcta: 2,
        explicacion: "Na es el símbolo químico del sodio.",
        errores: [
            "El nitrógeno tiene el símbolo N.",
            "El neón tiene el símbolo Ne.",
            "Correcto: Na representa al sodio.",
            "El níquel tiene el símbolo Ni."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué sucede generalmente con el radio atómico de izquierda a derecha en un período?",
        opciones: ["Aumenta", "Disminuye", "Permanece siempre igual", "Se duplica"],
        correcta: 1,
        explicacion: "Generalmente disminuye porque aumenta la atracción del núcleo sobre los electrones.",
        errores: [
            "La tendencia general es que disminuya.",
            "Correcto: el radio atómico suele disminuir en un período.",
            "El radio atómico presenta variaciones periódicas.",
            "No existe una regla de duplicación."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué grupo contiene los metales alcalinotérreos?",
        opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"],
        correcta: 1,
        explicacion: "Los metales alcalinotérreos pertenecen al grupo 2.",
        errores: [
            "El grupo 1 contiene los metales alcalinos.",
            "Correcto: el grupo 2 corresponde a los alcalinotérreos.",
            "El grupo 17 contiene los halógenos.",
            "El grupo 18 contiene los gases nobles."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Cuál de estos elementos es un gas noble?",
        opciones: ["Oxígeno", "Cloro", "Argón", "Sodio"],
        correcta: 2,
        explicacion: "El argón pertenece al grupo 18 y es un gas noble.",
        errores: [
            "El oxígeno es un no metal del grupo 16.",
            "El cloro es un halógeno.",
            "Correcto: el argón es un gas noble.",
            "El sodio es un metal alcalino."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué propiedad mide la tendencia de un átomo a atraer electrones cuando forma un enlace?",
        opciones: ["Densidad", "Electronegatividad", "Volumen", "Masa atómica"],
        correcta: 1,
        explicacion: "La electronegatividad expresa la capacidad de un átomo para atraer electrones en un enlace químico.",
        errores: [
            "La densidad relaciona masa y volumen.",
            "Correcto: esa propiedad es la electronegatividad.",
            "El volumen mide el espacio ocupado.",
            "La masa atómica se relaciona con la masa de sus átomos."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Cuál de estos elementos es un no metal?",
        opciones: ["Hierro", "Calcio", "Azufre", "Potasio"],
        correcta: 2,
        explicacion: "El azufre es un no metal ubicado en el grupo 16.",
        errores: [
            "El hierro es un metal de transición.",
            "El calcio es un metal alcalinotérreo.",
            "Correcto: el azufre es un no metal.",
            "El potasio es un metal alcalino."
        ]
    },
    {
        nivel: "Principiante",
        tema: "Tabla periódica",
        pregunta: "¿Qué tendencia presenta generalmente el carácter metálico al bajar en un grupo?",
        opciones: ["Aumenta", "Disminuye", "Desaparece", "No presenta ninguna tendencia"],
        correcta: 0,
        explicacion: "El carácter metálico generalmente aumenta al bajar en un grupo.",
        errores: [
            "Correcto: aumenta al descender en un grupo.",
            "La tendencia general es de aumento.",
            "Los elementos no pierden su clasificación por bajar en un grupo.",
            "Sí existe una tendencia periódica."
        ]
    }
];

// ==========================================
// FIN DEL BANCO DE 70 PREGUNTAS

console.log("Preguntas cargadas:", preguntas.length);
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


