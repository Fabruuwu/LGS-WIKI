const EC={
  fuego:{label:'Fuego',color:'#ff6b35'},hidro:{label:'Agua',color:'#4fc3f7'},
  aero:{label:'Viento',color:'#b2ff59'},geo:{label:'Tierra',color:'#ffca28'},
  electro:{label:'Rayo',color:'#ce93d8'},crio:{label:'Hielo',color:'#80deea'},
  flora:{label:'Naturaleza',color:'#69f0ae'},celestial:{label:'Luz',color:'#ffe082'},
  umbral:{label:'Oscuridad',color:'#9e9e9e'},caos:{label:'Vacío',color:'#e040fb'},
};

const GRAD={
  fuego:'linear-gradient(160deg,#3d1a0a,#7a2d10)',
  hidro:'linear-gradient(160deg,#0a1e3d,#0d4a7a)',
  aero:'linear-gradient(160deg,#1a2e0a,#2d5c10)',
  geo:'linear-gradient(160deg,#2e1e00,#5c3d00)',
  electro:'linear-gradient(160deg,#1e0a3d,#4a1080)',
  crio:'linear-gradient(160deg,#0a2e30,#0d5c60)',
  flora:'linear-gradient(160deg,#0a2e1a,#0d5c30)',
  celestial:'linear-gradient(160deg,#2e2400,#5c4800)',
  umbral:'linear-gradient(160deg,#1a1a1a,#2e2e2e)',
  caos:'linear-gradient(160deg,#2e0a3d,#6a0080)',
};

const CHARS=[
// ── Personajes existentes (1-9) ──
{
    id:1, name:'ReyDNS', tagline:'"El Gatillo del Servidor"',
    element:'fuego', role:'Main DPS', paradigma:'Paradigma del Flood',
    art: 'Personajes 1.0 - tanda 2/ReyDNS.jpg',
    stats:{
      'PV MAX': { lvl1:45, lvl99:650 },
      'PM MAX': { lvl1:12, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:145 },
      'DEFENSA': { lvl1:10, lvl99:75 },
      'ATQ MÁGICO': { lvl1:6, lvl99:50 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Tiro de Advertencia', tag:'Básico', type:'Nivel 1',
        flavor:'Un disparo rápido que causa daño básico. Si tiene una \'Bala de Ban\' cargada, el tiro se potencia y la consume.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Si tiene al menos 1 carga de <strong>"Bala de Ban"</strong>, el daño se duplica (200%) y consume 1 carga.' },
      { icon:'💫', name:'Fuego a Discreción', tag:'Especial', type:'Nivel 3',
        flavor:'Ráfaga de disparos que quema al enemigo. Puede potenciarse con una \'Bala de Ban\' para hacer más daño y alargar la quemadura.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>200% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Aplica <strong>"Quemadura"</strong> durante 2 turnos.<br>Si gasta 1 carga de <strong>"Bala de Ban"</strong>, el daño base aumenta a 300% y la Quemadura dura 1 turno extra.' },
      { icon:'🌟', name:'Limpieza de Servidor (Wipe)', tag:'Ultimate', type:'Nivel 5',
        flavor:'Vacía el cargador en un devastador ataque de área. Mientras más \'Balas de Ban\' tenga, más letal será el golpe.',
        desc:'Gasta -100 PT.<br>Inflige <strong>350% del ATQ</strong> como Daño de Fuego a TODOS los enemigos.<br>Ignora el 20% de la DEF enemiga.<br>Por cada carga de <strong>"Bala de Ban"</strong>, el daño total aumenta un 50% adicional (consume todas las cargas).' },
      { icon:'🔥', name:'La Ruleta del Administrador', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Recarga una \'Bala de Ban\' al instante, permitiéndole potenciar sus próximos ataques.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Balas de Ban"</strong> sobre sí mismo, recuperando 1 carga (máx. 3).' }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:2, name:'Miki', tagline:'"Nada escapa del tarjetón... ni de mi Furina C6"',
    element:'caos', role:'Soporte / Control', paradigma:'Paradigma del Legado',
    art: 'Personajes 1.0 - tanda 2/Miki.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:650 },
      'PM MAX': { lvl1:20, lvl99:200 },
      'ATQ': { lvl1:6, lvl99:60 },
      'DEFENSA': { lvl1:20, lvl99:185 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:14, lvl99:115 },
      'AGILIDAD': { lvl1:12, lvl99:100 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Golpe de Top Up', tag:'Básico', type:'Nivel 1',
        flavor:'Un golpe firme que daña en base a su defensa y acelera su propia recarga de Ultimate.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% de su DEF</strong> como Daño de Vacío a un enemigo.<br>Otorga a Miki +10 PT adicionales.' },
      { icon:'💫', name:'Muteo Temporal', tag:'Especial', type:'Nivel 3',
        flavor:'Aplica un estado de ralentización y drenaje de vida, reduciendo la velocidad y el ataque del enemigo mientras lo daña por turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>200% de su DEF</strong> como Daño de Vacío a un enemigo.<br>Aplica <strong>"Slow-Log"</strong> al enemigo durante 2 turnos.' },
      { icon:'🌟', name:'Reinicio de Tienda', tag:'Ultimate', type:'Nivel 5',
        flavor:'Un poderoso ataque de área que ralentiza a todos los enemigos y fortalece a todo el equipo.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% de su DEF</strong> como Daño de Vacío a TODOS los enemigos.<br>Aplica -30% AGILIDAD a todos los enemigos durante 2 turnos.<br>Aumenta ATQ y DEF de todos los aliados en un 20% durante 2 turnos.' },
      { icon:'🔥', name:'Corte de Crédito', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Activa una póliza de protección personal, reduciendo a la mitad todo el daño recibido por un tiempo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Escudo de Crédito"</strong> a sí misma durante 2 turnos.' }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:4, name:'Hawk', tagline:'"Shhh... No pienses. Solo obedece."',
    element:'caos', role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
    art: 'Personajes 1.0 - tanda 1/Hawk.png',
    stats:{
      'PV MAX': { lvl1:45, lvl99:600 },
      'PM MAX': { lvl1:20, lvl99:180 },
      'ATQ': { lvl1:10, lvl99:150 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:5, lvl99:45 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Aguja Mental', tag:'Básico', type:'Nivel 1',
        flavor:'Un pequeño rayo de energía que marca al enemigo, preparándolo para ser controlado.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Vacío a un enemigo.<br>Aplica <strong>"Marca de la Mariposa"</strong> al enemigo durante 2 turnos.' },
      { icon:'💫', name:'Hilos de Control', tag:'Especial', type:'Nivel 3',
        flavor:'Susurra una orden que intenta dominar la mente del enemigo. Si tiene la \'Marca de la Mariposa\', la hipnosis es un éxito asegurado.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Vacío a un enemigo.<br>Intenta aplicar <strong>"Hipnosis"</strong> durante 2 turnos (prob. base 30%).<br>Si el enemigo tiene <strong>"Marca de la Mariposa"</strong>, la probabilidad es del 100%.' },
      { icon:'🌟', name:'Vals de las Mil Mariposas', tag:'Ultimate', type:'Nivel 5',
        flavor:'Una tormenta de mariposas que arrasa con todos los enemigos. Si está bajo el efecto de \'Polvo de Hadas\', el daño se vuelve devastador.',
        desc:'Gasta -100 PT.<br>Inflige <strong>300% del ATQ</strong> como Daño de Vacío a TODOS los enemigos.<br>Si tiene <strong>"Polvo de Hadas"</strong>, el daño aumenta un 30% adicional.<br>Aplica <strong>"Hipnosis"</strong> a un enemigo aleatorio.' },
      { icon:'🔥', name:'Polvo de Hadas', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Un aura de empoderamiento que aumenta considerablemente su poder de ataque y su velocidad durante varios turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Polvo de Hadas"</strong> a sí misma durante 3 turnos.<br>Efecto: +25% ATQ y +25% AGILIDAD mientras dure.' }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:3, name:'Belle', tagline:'"En su presencia los mortales temen"',
    element:'electro', role:'Sub-DPS / Buffer', paradigma:'Paradigma del Legado',
    art: 'Personajes 1.0 - tanda 1/Belle.png',
    stats:{
      'PV MAX': { lvl1:45, lvl99:600 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:140 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:5, lvl99:50 },
      'DEF MÁGICA': { lvl1:6, lvl99:60 },
      'AGILIDAD': { lvl1:12, lvl99:115 },
      'SUERTE': { lvl1:7, lvl99:75 }
    },
    skills:[
      { icon:'🗡️', name:'Dinamic Warn', tag:'Básico', type:'Nivel 1',
        flavor:'Un disparo de advertencia que acumula velocidad y tiene un 35% de probabilidad de desatar un golpe extra contundente.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>35% de prob. (basado en SUERTE) de añadir un golpe extra (120% ATQ adicional).<br>Se aplica <strong>"Aceleración de Ritmo 1"</strong> o <strong>"Aceleración de Ritmo 2"</strong> según su acumulación actual.' },
      { icon:'💫', name:'¡No aprendes?, Mod-Bot!', tag:'Especial', type:'Nivel 3',
        flavor:'Belle activa a su robot acompañante para potenciarse a sí misma durante un tiempo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Mod-Bot"</strong> a sí misma durante 3 turnos.' },
      { icon:'🌟', name:'Sabía que me necesitabas', tag:'Ultimate', type:'Nivel 5',
        flavor:'Un drop masivo de graves y relámpagos cuyo poder destructivo escala directamente con la velocidad de la DJ.',
        desc:'Gasta -100 PT.<br>Inflige <strong>(ATQ * 3.2) + (AGI * 0.4)</strong> como Daño de Rayo a TODOS los enemigos.<br>Otorga a todos los aliados +20% ATQ durante 2 turnos.' },
      { icon:'🔥', name:'Control de Bajos', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Belle manipula la corriente eléctrica ambiental para electrocutar y frenar a un enemigo en específico.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica <strong>"Electrocutado"</strong> al enemigo durante 2 turnos.<br>10% de prob. (basado en SUERTE) de aplicar también <strong>"Parálisis"</strong> durante 1 turno.' }
    ],
    talentoCore: 'Ritmo Imparable: La probabilidad del 35% de activar el golpe extra (FUA) en su Ataque Básico está calculada de forma nativa dentro de la fórmula de daño de Dinamic Warn.',
    rasgoUnico: null
},
{
    id:5, name:'Fabru', tagline:'"Si el server crashea… es porque él lo hackeó."',
    element:'electro', role:'Main DPS / Control de Área', paradigma:'Paradigma del Bot (Invocador)',
    art: 'Personajes 1.0 - tanda 1/Fabru.png',
    stats:{
      'PV MAX': { lvl1:45, lvl99:600 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:145 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:5, lvl99:45 },
      'DEF MÁGICA': { lvl1:6, lvl99:60 },
      'AGILIDAD': { lvl1:12, lvl99:110 },
      'SUERTE': { lvl1:7, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Lanza de Plasma', tag:'Básico', type:'Nivel 1',
        flavor:'Un disparo de energía que aplica una marca que reduce la defensa del enemigo.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Marca de Hackeo"</strong> al enemigo durante 2 turnos.' },
      { icon:'💫', name:'Enjambre de Drones', tag:'Especial', type:'Nivel 3',
        flavor:'Fabru sobrecarga sus sistemas, aumentando su poder y permitiéndole atacar dos veces.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Enjambre de Drones"</strong> a sí mismo durante 3 turnos.' },
      { icon:'🌟', name:'Overclock del Sistema', tag:'Ultimate', type:'Nivel 5',
        flavor:'Un pulso de alto voltaje que daña a todos y aplica un estado de ralentización y fallos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>300% del ATQ</strong> como Daño de Rayo a TODOS los enemigos.<br>Aplica <strong>"Sistema Caído"</strong> a todos los enemigos durante 2 turnos.' },
      { icon:'🔥', name:'Codigo Raiz', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Activa un exploit que hará que su próximo ataque ignore defensas y aturda al enemigo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Codigo Raiz"</strong> a sí mismo.' }
    ],
    talentoCore: 'Red de Datos: Por cada enemigo en el campo que tenga el estado "Marca de Hackeo", el daño de todos los ataques de Fabru aumenta en un 15%.',
    rasgoUnico: null
},
{
    id:6, name:'Eugenio', tagline:'"¡Girando la rueda... y la suerte está echada!"',
    element:'fuego', role:'Sub-DPS / Buffer (Soporte Ofensivo con RNG)', paradigma:'Paradigma del Giveaway',
    art: 'Personajes 1.0 - tanda 1/Eugenio.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:650 },
      'PM MAX': { lvl1:20, lvl99:180 },
      'ATQ': { lvl1:9, lvl99:120 },
      'DEFENSA': { lvl1:9, lvl99:80 },
      'ATQ MÁGICO': { lvl1:3, lvl99:30 },
      'DEF MÁGICA': { lvl1:5, lvl99:45 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:10, lvl99:80 }
    },
    skills:[
      { icon:'🗡️', name:'Lanzamiento de Cartas', tag:'Básico', type:'Nivel 1',
        flavor:'Lanza un naipe cortante que daña a un enemigo y le permite robar una carta para su baraja.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Aplica o incrementa el estado <strong>"Naipe"</strong> sobre sí misma (máx. 5 estados distintos).' },
      { icon:'💫', name:'Giro de la Ruleta', tag:'Especial', type:'Nivel 3',
        flavor:'Lanza una lluvia de naipes explosivos que rebotan entre varios enemigos. Al llegar a 5 naipes, se activa una combinación especial de póker.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Fuego a 3 enemigos aleatorios.<br>Aumenta la acumulación de <strong>"Naipe"</strong> en +1 por cada enemigo impactado que tenga al menos un debuff activo (máx. +5).<br>Si al final del turno tiene <strong>"Naipe 5"</strong>, se consumen todos y se ejecuta una <strong>"Combinación de Póker"</strong>.' },
      { icon:'🌟', name:'Función de Medianoche', tag:'Ultimate', type:'Nivel 5',
        flavor:'El escenario se ilumina con una lluvia de cartas doradas que arrasa con todos los enemigos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>250% del ATQ</strong> como Daño de Fuego a TODOS los enemigos.<br>El daño aumenta un <strong>10% adicional</strong> por cada estado <strong>"Naipe"</strong> que tenga actualmente.' },
      { icon:'🔥', name:'Truco de Sombras', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Un truco de magia que potencia su suerte al máximo y le otorga un naipe extra.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Suerte del Bufón"</strong> a sí misma durante 3 turnos.' }
    ],
    talentoCore: 'Baraja Cargada: Eugenio roba su primer Naipe automáticamente al usar Lanzamiento de Cartas o Giro de la Ruleta. Cada estado "Naipe" le otorga +10% de SUERTE pasiva (máx. +50% con 5).',
    rasgoUnico: null
},
{
    id:7, name:'Kyou', tagline:'"Sabe más de ti que tú mismo. Y lo usa."',
    element:'electro', role:'Soporte / Debuffer', paradigma:'Paradigma del Warn',
    art: 'Personajes 1.0 - tanda 2/Kyou.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:630 },
      'PM MAX': { lvl1:20, lvl99:185 },
      'ATQ': { lvl1:9, lvl99:115 },
      'DEFENSA': { lvl1:10, lvl99:85 },
      'ATQ MÁGICO': { lvl1:4, lvl99:35 },
      'DEF MÁGICA': { lvl1:7, lvl99:65 },
      'AGILIDAD': { lvl1:12, lvl99:110 },
      'SUERTE': { lvl1:9, lvl99:85 }
    },
    skills:[
      { icon:'🗡️', name:'Pulso de Datos', tag:'Básico', type:'Nivel 1',
        flavor:'Dispara un paquete de información corrupta. Un spoiler duele y deja al enemigo vulnerable.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Marca de Vulnerabilidad"</strong> al enemigo durante 2 turnos.' },
      { icon:'💫', name:'Filtración Selectiva', tag:'Especial', type:'Nivel 3',
        flavor:'Hackea los sistemas enemigos y expone sus puntos débiles. Si tiene suficiente información clasificada (Expedientes), el ataque se vuelve más letal y ralentiza al enemigo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>160% del ATQ</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Vulnerabilidad Expuesta"</strong> al enemigo durante 2 turnos.<br>Si el enemigo tiene <strong>"Marca de Vulnerabilidad"</strong>, el daño aumenta un 30%.<br>Si Kyou tiene al menos 3 cargas de <strong>"Expediente"</strong>, las consume: el daño aumenta un 50% adicional y aplica <strong>"Ralentización"</strong> al enemigo durante 2 turnos.' },
      { icon:'🌟', name:'Mega Filtración', tag:'Ultimate', type:'Nivel 5',
        flavor:'Todos los hologramas se activan a la vez. Una explosión de datos clasificados inunda el campo, abriendo una ventana de oportunidad letal para el equipo.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Rayo a TODOS los enemigos.<br>Aplica <strong>"Secreto al Descubierto"</strong> a todos los enemigos durante 2 turnos.<br>Aplica <strong>"Filtración de Datos"</strong> a todos los enemigos: durante el resto del turno actual, reciben un 30% más de daño de cualquier fuente.' },
      { icon:'🔥', name:'Archivo Cifrado', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Kyou desbloquea una capa extra de procesamiento en su tablet, potenciando su precisión y su daño elemental.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Archivo Cifrado"</strong> a sí misma durante 3 turnos.' }
    ],
    talentoCore: 'Extracción Activa: Cada Ataque Básico otorga 1 carga de "Expediente", y la Ultimate otorga 2 cargas (máx. 5). Cada carga aumenta el Daño de Rayo de Kyou en un 5% (máx. +25%).',
    rasgoUnico: null
},
{
    id:8, name:'Ttlim', tagline:'"Su espada no hace ruido. Solo deja rosas y un chat vacío."',
    element:'crio', role:'Sub-DPS / Control', paradigma:'Paradigma del Mute',
    art:'Personajes 1.0 - tanda 2/Ttlim.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:650 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:9, lvl99:135 },
      'DEFENSA': { lvl1:10, lvl99:85 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:5, lvl99:60 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Estocada Silente', tag:'Básico', type:'Nivel 1',
        flavor:'Un golpe rápido con la espada de hielo. Si el enemigo ya está mermado por el frío, Ttlim recolecta una Rosa Gélida.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Hielo a un enemigo.<br>Si el enemigo ya tiene <strong>"Ralentización"</strong> o <strong>"Congelación"</strong>, este ataque genera 1 acumulación de <strong>"Rosa Gélida"</strong> sobre sí mismo.' },
      { icon:'💫', name:'Vórtice de Pétalos', tag:'Especial', type:'Nivel 3',
        flavor:'Ttlim gira su espada creando un remolino de pétalos congelados que cortan a su paso.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Hielo a 3 enemigos aleatorios.<br>80% de prob. base de aplicar <strong>"Ralentización"</strong> (2 turnos).<br>Si el enemigo ya está Ralentizado, 50% de prob. de aplicar <strong>"Congelación"</strong> en su lugar.' },
      { icon:'🌟', name:'Sentencia del Templo Helado', tag:'Ultimate', type:'Nivel 5',
        flavor:'Ttlim clava la espada en el suelo. El templo responde con grietas de luz azul bajo los enemigos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Hielo a TODOS los enemigos.<br>Si hay enemigos <strong>"Ralentizados"</strong> o <strong>"Congelados"</strong>, +30% daño y aplica <strong>"Congelación"</strong> a todos (1 turno).<br>Aplica <strong>"Campo Congelado"</strong> a todos los enemigos durante 2 turnos.' },
      { icon:'🔥', name:'Ritual de Escarcha', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Ttlim canaliza el frío ancestral del templo para potenciar su precisión y su poder elemental.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Ritual de Escarcha"</strong> a sí mismo durante 3 turnos.<br>Efecto: +20% Daño de Hielo y +20% Acierto de Efecto.' }
    ],
    talentoCore: 'Rosas de la Condena: Golpear enemigos Ralentizados/Congelados otorga 1 "Rosa Gélida" (máx. 3). Con 3, el siguiente ataque las consume: +40% daño, ignora 20% DEF y reinicia duración de Congelación.',
    rasgoUnico: null
},
{
    id:9, name:'Cris', tagline:'"No necesita cerrar tickets, los destruye."',
    element:'fuego', role:'Main DPS', paradigma:'Paradigma del Baneo',
    art:'Personajes 1.0 - tanda 1/Cris.png',
    stats:{
      'PV MAX': { lvl1:45, lvl99:650 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:150 },
      'DEFENSA': { lvl1:7, lvl99:75 },
      'ATQ MÁGICO': { lvl1:5, lvl99:50 },
      'DEF MÁGICA': { lvl1:5, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Estocada de Asfalto', tag:'Básico', type:'Nivel 1',
        flavor:'Un golpe seco con la lanza que deja una marca resplandeciente que hace arder al enemigo.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Aplica <strong>"Marca del Fragmento"</strong> al enemigo durante 2 turnos.' },
      { icon:'💫', name:'Emboscada Abrasadora', tag:'Especial', type:'Nivel 3',
        flavor:'Cris salta y estrella la lanza contra el suelo, haciendo temblar los escombros. El caos golpea al azar.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>160% del ATQ</strong> como Daño de Fuego a 3 enemigos aleatorios.<br>Si alguno tiene <strong>"Marca del Fragmento"</strong>, se la consume: daño adicional de 50% ATQ y aplica <strong>"Quemadura"</strong> (2 turnos).<br>Por cada Marca consumida, Cris obtiene 1 acumulación de <strong>"Fragmento de Espejo"</strong>.' },
      { icon:'🌟', name:'Tormenta de Cristal y Fuego', tag:'Ultimate', type:'Nivel 5',
        flavor:'La cadena de la lanza se extiende. Cris gira creando un torbellino de llamas y espejos rotos que lo arrasan todo.',
        desc:'Gasta -100 PT.<br>Inflige <strong>300% del ATQ</strong> como Daño de Fuego a TODOS los enemigos.<br>Consume todas las acumulaciones de <strong>"Fragmento de Espejo"</strong>: +15% daño por cada una.<br>Si consume 3+, ignora 30% de la DEF enemiga.' },
      { icon:'🔥', name:'Reflejos del Fin', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'El caos de la batalla alimenta su poder. Las grietas y los escombros se convierten en un arma.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Reflejos del Fin"</strong> a sí misma durante 3 turnos.<br>Efecto: +20% Daño Crítico y +20% Daño de Fuego.' }
    ],
    talentoCore: 'Espejos del Caos: Al aplicar "Quemadura" o "Marca del Fragmento", obtiene 1 "Fragmento de Espejo" (máx. 5). Cada uno otorga +4% Daño Crítico pasivo (máx. +20%).',
    rasgoUnico: null
},
// ── NUEVOS PERSONAJES ──
{
    id:10, name:'Quency', tagline:'"Esquiva tus mensajes y tus ataques. Solo verás pétalos."',
    element:'aero', role:'SubDPS / Evasión', paradigma:'Paradigma del Timeout',
    art:'Personajes 1.0 - tanda 2/Quency.png',
    stats:{
      'PV MAX': { lvl1:45, lvl99:600 },
      'PM MAX': { lvl1:20, lvl99:180 },
      'ATQ': { lvl1:10, lvl99:140 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:5, lvl99:45 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:13, lvl99:115 },
      'SUERTE': { lvl1:7, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Corte Primaveral', tag:'Básico', type:'Nivel 1',
        flavor:'Un tajo rápido con la katana que deja una marca de sakura en el enemigo y alimenta su energía.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Viento a un enemigo.<br>Aplica <strong>"Marca de Sakura"</strong> al enemigo durante 2 turnos.<br>Quency obtiene 1 acumulación de <strong>"Pétalo"</strong> sobre sí misma.' },
      { icon:'💫', name:'Esquiva del Conejo', tag:'Especial', type:'Nivel 3',
        flavor:'Quency adopta una postura baja, aumentando su agilidad y evasión. Si el enemigo tiene su marca, contraataca instantáneamente.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica <strong>"Esquiva Inaudito"</strong> (estado dinámico) durante 2 turnos.<br>Si el enemigo tiene <strong>"Marca de Sakura"</strong>, se la consume e inflige <strong>150% del ATQ</strong> como Daño de Viento.<br>Quency obtiene 1 acumulación de <strong>"Pétalo"</strong>.' },
      { icon:'🌟', name:'Tormenta de Sakura', tag:'Ultimate', type:'Nivel 5',
        flavor:'Una explosión de pétalos que arrasa el campo y ciega a los enemigos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Viento a TODOS los enemigos.<br>Si Quency tiene <strong>"Esquiva Inaudito"</strong>, el daño aumenta un 25%.<br>Aplica <strong>"Ceguera Floral"</strong> a todos los enemigos durante 1 turno.' },
      { icon:'🔥', name:'Reflejos de Conejo', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Canaliza su agilidad natural para volverse más escurridiza y aumentar su precisión.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Reflejos de Conejo"</strong> a sí misma durante 3 turnos.<br>Efecto: +15% Evasión y +20% Probabilidad Crítica.' }
    ],
    talentoCore: 'Reflejos de Conejo (Pasiva): 15% Evasión base. Cada Ataque Básico o Especial otorga 1 acumulación de "Pétalo" (máx. 5). Cada Pétalo da +6% Prob. Crítica. Con 3+, el Básico golpea dos veces. Con 5, ejecuta un Contraataque automático.',
    rasgoUnico: null
},
{
    id:11, name:'Eydis', tagline:'"En el silencio de los templos, ella escribe la sentencia."',
    element:'celestial', role:'Soporte Ofensivo / SubDPS', paradigma:'Paradigma del Warn',
    art:'Personajes 1.0 - tanda 1/Eydis.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:650 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:9, lvl99:125 },
      'DEFENSA': { lvl1:10, lvl99:90 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:5, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:105 },
      'SUERTE': { lvl1:7, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Filo del Escriba', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Luz. +30% de daño si el enemigo tiene Fisura Rúnica.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Luz a un enemigo.<br>Si el enemigo tiene <strong>"Fisura Rúnica"</strong>, el daño aumenta un 30%.' },
      { icon:'💫', name:'Sentencia Rúnica', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Luz a un enemigo. Aplica Fisura Rúnica. Si ya tiene fisura, la detona haciendo daño a todos los enemigos y te da 1 Piedra Rúnica.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>160% del ATQ</strong> como Daño de Luz a un enemigo.<br>Aplica <strong>"Fisura Rúnica"</strong> (2 turnos).<br>Si ya tenía Fisura, la detona: inflige <strong>50% del ATQ</strong> a TODOS los enemigos, degrada la Fisura y otorga 1 acumulación de <strong>"Piedra Rúnica"</strong>.' },
      { icon:'🌟', name:'Colapso del Templo', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Luz a todos los enemigos. Aplica Fisura Rúnica Avanzada (2 cargas). Otorga +15% Probabilidad Crítica a los aliados por 2 turnos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Luz a TODOS los enemigos.<br>Aplica <strong>"Fisura Rúnica Avanzada"</strong> (2 turnos).<br>Otorga a todos los aliados +15% Prob. Crítica durante 2 turnos.' },
      { icon:'🔥', name:'Ecos de las Ruinas', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que otorga +20% Daño de Luz y +20% Probabilidad Crítica durante 3 turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Ecos de las Ruinas"</strong> a sí misma durante 3 turnos.' }
    ],
    talentoCore: 'Piedras Rúnicas: Al detonar Fisura obtiene 1 "Piedra Rúnica" (máx. 3, +5% Daño Luz cada una). Con 3, el Ataque Básico se transforma en "Golpe de Ruptura" (200% ATQ, ignora 40% DEF, aplica Fisura).',
    rasgoUnico: null
},
{
    id:12, name:'iKayto', tagline:'"En el silencio helado, sus espadas cantan."',
    element:'crio', role:'Main DPS / AoE', paradigma:'Paradigma del Raid',
    art:'Personajes 1.0 - tanda 1/iKayto.png',
    stats:{
      'PV MAX': { lvl1:50, lvl99:600 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:145 },
      'DEFENSA': { lvl1:8, lvl99:75 },
      'ATQ MÁGICO': { lvl1:5, lvl99:45 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:110 },
      'SUERTE': { lvl1:7, lvl99:65 }
    },
    skills:[
      { icon:'🗡️', name:'Corte del Alba', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Hielo a un enemigo. Aplica/acumula Escarcha (+15% Daño Hielo recibido).',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Hielo a un enemigo.<br>Aplica/acumula <strong>"Escarcha"</strong> (máx. 2 cargas).' },
      { icon:'💫', name:'Paso de la Grulla', tag:'Especial', type:'Nivel 3-4',
        flavor:'Daño de Hielo a todos. Permite elegir entre Postura Alta (+20% VEL y +15% CRI) o Postura Baja (+30% Daño Hielo y -20% daño recibido). Otorga 1 Compás.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Hielo a TODOS los enemigos.<br>Elige y aplica <strong>"Postura Alta"</strong> o <strong>"Postura Baja"</strong> (2 turnos) y otorga 1 <strong>"Compás"</strong>.<br>Si ya tenía una postura activa, ejecuta un FUA de 100% a 3 enemigos y otorga 1 Compás extra.' },
      { icon:'🌟', name:'Vals de la Aurora Boreal', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Hielo masivo. Escala según las Escarchas enemigas y las consume para Congelar.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Hielo a TODOS los enemigos, aumentando un 8% por cada carga de <strong>"Escarcha"</strong> en el campo.<br>Consume todas las Escarchas y aplica <strong>"Congelación"</strong> a enemigos aleatorios (cantidad igual a Escarchas consumidas, máx. 4).' },
      { icon:'🔥', name:'Sinfonía Invernal', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que otorga +25% Daño de Hielo y +20% Probabilidad Crítica durante 3 turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Sinfonía Invernal"</strong> a sí misma durante 3 turnos.' }
    ],
    talentoCore: 'Espíritu de la Danza: Acumula "Compases" (máx. 3) al cambiar de postura o ejecutar FUA. Con 3, obtiene "Danza del Vacío": su siguiente ataque hace +30% daño y aplica 2 Escarchas a todos los enemigos.',
    rasgoUnico: null
},
{
    id:25, name:'Escarlata', tagline:'"Donde su báculo apunta, la noche se llena de esperanza."',
    element:'celestial', role:'Sanadora / Soporte (Sustain)', paradigma:'Paradigma del Soporte Técnico',
    art:'Personajes 1.0 - tanda 1/Escarlata.png',
    stats:{
      'PV MAX': { lvl1:60, lvl99:800 },
      'PM MAX': { lvl1:20, lvl99:180 },
      'ATQ': { lvl1:8, lvl99:90 },
      'DEFENSA': { lvl1:10, lvl99:100 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:7, lvl99:65 },
      'AGILIDAD': { lvl1:11, lvl99:100 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Chispa Polar', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Luz a un enemigo.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Luz a un enemigo.' },
      { icon:'💫', name:'Manto de Estrellas', tag:'Especial', type:'Nivel 3',
        flavor:'Cura a un aliado y le otorga un escudo protector.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Cura a un aliado un 20% de su HP Máx. (25% si tiene <strong>"Aura de la Aurora"</strong>).<br>Aplica <strong>"Manto Estelar"</strong> (reduce daño físico/mágico en 30%) durante 2 turnos.' },
      { icon:'🌟', name:'Santuario de la Aurora', tag:'Ultimate', type:'Nivel 5',
        flavor:'Cura a todo el equipo y les otorga un escudo protector.',
        desc:'Gasta -100 PT.<br>Cura a todos los aliados un 50% de su HP Máx. + 200 (62.5% si tiene <strong>"Aura de la Aurora"</strong>).<br>Aplica <strong>"Escudo Celestial"</strong> (reduce daño físico/mágico en 30%) durante 2 turnos.' },
      { icon:'🔥', name:'Luz Sanadora', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que potencia sus habilidades de curación y su resistencia.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Aura de la Aurora"</strong> a sí misma durante 3 turnos (aumenta su DEF en 20%).' }
    ],
    talentoCore: 'Compasión Celestial: Al usar cualquier habilidad, el aliado con menor HP se cura un 10% del HP Máximo de Escarlata.',
    rasgoUnico: null
},
{
    id:13, name:'Poberto', tagline:'"El conejo no es un peluche... es su guardián."',
    element:'electro', role:'Tanque / Protector (Sustain)', paradigma:'Paradigma del Escudo',
    art:'Personajes 1.0 - tanda 2/Poberto.png',
    stats:{
      'PV MAX': { lvl1:65, lvl99:900 },
      'PM MAX': { lvl1:20, lvl99:180 },
      'ATQ': { lvl1:7, lvl99:75 },
      'DEFENSA': { lvl1:14, lvl99:160 },
      'ATQ MÁGICO': { lvl1:4, lvl99:45 },
      'DEF MÁGICA': { lvl1:7, lvl99:85 },
      'AGILIDAD': { lvl1:8, lvl99:80 },
      'SUERTE': { lvl1:5, lvl99:60 }
    },
    skills:[
      { icon:'🗡️', name:'Caricia del Conejo', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Rayo a un enemigo. Si tiene el Baneo Activo, el daño aumenta un 15%.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo. Si tiene <strong>"Velo Eléctrico"</strong>, el daño aumenta un 15%.' },
      { icon:'💫', name:'Manto del Guardián', tag:'Especial', type:'Nivel 3',
        flavor:'Cura a un aliado y le otorga un escudo que reduce el daño recibido a la mitad.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Cura a un aliado un 10% de su HP Máx.<br>Aplica <strong>"Manto Protector"</strong> (reduce daño físico/mágico en 50%) durante 2 turnos.' },
      { icon:'🌟', name:'Protectora del Bosque', tag:'Ultimate', type:'Nivel 5',
        flavor:'Otorga escudos a todo el equipo y aumenta su defensa física.',
        desc:'Gasta -100 PT.<br>Aplica <strong>"Manto Protector"</strong> a todos los aliados durante 2 turnos.<br>Otorga a todos los aliados +20% DEFENSA durante 2 turnos.' },
      { icon:'🔥', name:'Velo Eléctrico', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que aumenta su defensa y potencia sus descargas eléctricas.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Velo Eléctrico"</strong> a sí misma durante 3 turnos (aumenta su DEF en 20%).' }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:15, name:'Koenig', tagline:'"Cuando ella marca el ritmo, todo el server acelera."',
    element:'aero', role:'Soporte / Batería (Recarga de Energía)', paradigma:'Paradigma del Partner',
    art:'Personajes 1.0 - tanda 2/Koenig.png',
    stats:{
      'PV MAX': { lvl1:55, lvl99:700 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:8, lvl99:85 },
      'DEFENSA': { lvl1:9, lvl99:85 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:5, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:115 },
      'SUERTE': { lvl1:6, lvl99:65 }
    },
    skills:[
      { icon:'🗡️', name:'Baquetazo Simple', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Viento a un enemigo.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Viento a un enemigo.' },
      { icon:'💫', name:'Redoble de Energía', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Viento a un enemigo y otorga 15 PT a todos los aliados.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Viento a un enemigo.<br>Otorga +15 PT a TODOS los aliados.' },
      { icon:'🌟', name:'Gran Final del Festival', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Viento a todos. Otorga +20% ATQ y +15% VEL a los aliados durante 2 turnos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Viento a TODOS los enemigos.<br>Aplica <strong>"Gran Final del Festival"</strong> a todos los aliados durante 2 turnos.' },
      { icon:'🔥', name:'Redoble del Tempo', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que aumenta su velocidad y acelera el ritmo del combate.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Redoble del Tempo"</strong> a sí misma durante 3 turnos (aumenta su AGILIDAD en 20%).' }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:19, name:'Reguta', tagline:'"Diez mil millones por ciento calculado. La victoria es inevitable."',
    element:'electro', role:'Soporte / Buffer (Batería de Turnos)', paradigma:'Paradigma del Partner',
    art:'Personajes 1.0 - tanda 2/Reguta.png',
    stats:{
      'PV MAX': { lvl1:60, lvl99:750 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:8, lvl99:80 },
      'DEFENSA': { lvl1:10, lvl99:95 },
      'ATQ MÁGICO': { lvl1:4, lvl99:40 },
      'DEF MÁGICA': { lvl1:5, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:115 },
      'SUERTE': { lvl1:6, lvl99:65 }
    },
    skills:[
      { icon:'🗡️', name:'Tiza de la Pizarra', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Rayo a un enemigo.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.' },
      { icon:'💫', name:'Fórmula de la Velocidad', tag:'Especial', type:'Nivel 3',
        flavor:'Otorga +25% VEL y +20% ATQ a un aliado durante 2 turnos. Le recupera +10 PT adicionales.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica <strong>"Fórmula de la Velocidad"</strong> a un aliado (2 turnos).<br>El aliado recupera +10 PT adicionales (Talento Core).' },
      { icon:'🌟', name:'Momento Eureka', tag:'Ultimate', type:'Nivel 5',
        flavor:'Otorga una doble acción a un aliado, limpia sus debuffs y le da +30% ATQ durante ese turno.',
        desc:'Gasta -100 PT.<br>Aplica <strong>"Eureka"</strong> a un aliado (1 turno): limpia sus debuffs, +30% ATQ y una acción adicional (doble turno).' },
      { icon:'🔥', name:'Mente Brillante', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que acelera su propio ritmo y recarga de energía.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Mente Brillante"</strong> a sí misma durante 3 turnos (+20% AGILIDAD y +20% Tasa de Carga de PT).' }
    ],
    talentoCore: 'Cálculo Veloz: Al usar "Fórmula de la Velocidad", el aliado objetivo recupera +10 PT adicionales.',
    rasgoUnico: null
},
// ── NUEVOS PERSONAJES SP ──
{
    id:16, name:'Ttlim SP', tagline:'"El Caído del Cielo"',
    element:'electro', role:'Main DPS / Acumulador', paradigma:'Paradigma del Juicio Final',
    art: 'Personajes 1.1/Ttlim SP.jpg',
    stats:{
      'PV MAX': { lvl1:55, lvl99:750 },
      'PM MAX': { lvl1:20, lvl99:200 },
      'ATQ': { lvl1:12, lvl99:165 },
      'DEFENSA': { lvl1:10, lvl99:90 },
      'ATQ MÁGICO': { lvl1:6, lvl99:55 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:13, lvl99:115 },
      'SUERTE': { lvl1:7, lvl99:80 }
    },
    skills:[
      { icon:'🗡️', name:'Estocada de Luz Azul', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Rayo a un enemigo. Aplica Marca del Relámpago (+15% daño de Rayo recibido).',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Marca del Relámpago"</strong> al enemigo durante 2 turnos.' },
      { icon:'💫', name:'Vórtice de Plumas Eléctricas', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Rayo a 3 enemigos. Si tienen la Marca, la consumen para un golpe extra. Obtienes 1 Pluma al usarla.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>180% del ATQ</strong> como Daño de Rayo a 3 enemigos aleatorios.<br>Si el enemigo tiene <strong>"Marca del Relámpago"</strong>, se la consume y el daño aumenta un 40% (simulando el golpe extra).<br>Obtiene 1 acumulación de <strong>"Pluma de Juicio"</strong> (máx. 3).' },
      { icon:'🌟', name:'Juicio del Firmamento', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Rayo masivo a todos. Consume las Plumas para potenciar el daño. A más Plumas, más destrucción.',
        desc:'Gasta -100 PT.<br>Inflige <strong>330% del ATQ</strong> como Daño de Rayo a TODOS los enemigos.<br>El daño aumenta un 20% con 1 <strong>"Pluma de Juicio"</strong>, 40% con 2, y 100% con 3.<br>Consume todas las Plumas al finalizar.' },
      { icon:'🔥', name:'Alas del Cielo', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que otorga +25% ATQ y +20% AGI durante 3 turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Alas del Cielo"</strong> a sí mismo durante 3 turnos.<br>Efecto: +25% ATQ y +20% AGILIDAD.' }
    ],
    talentoCore: 'Cóndor de la Tormenta: Cada "Pluma de Juicio" (máx. 3) otorga +6% de ATQ. Se obtienen al usar el Ataque Especial.',
    rasgoUnico: null
},
{
    id:17, name:'Yanfei', tagline:'"La Abogada del Fuego"',
    element:'fuego', role:'Main DPS / Acumulador', paradigma:'Paradigma del Juicio',
    art: 'Personajes 1.1/Yanfei.jpg',
    stats:{
      'PV MAX': { lvl1:50, lvl99:700 },
      'PM MAX': { lvl1:20, lvl99:200 },
      'ATQ': { lvl1:11, lvl99:155 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:6, lvl99:55 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:12, lvl99:110 },
      'SUERTE': { lvl1:7, lvl99:75 }
    },
    skills:[
      { icon:'🗡️', name:'Martillo de la Ley', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Fuego a un enemigo. Acumula 1 Evidencia. El daño escala +8% por Evidencia.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Aumenta el daño un 8% por cada <strong>"Evidencia"</strong> acumulada (máx. 3).<br>Obtiene 1 acumulación de <strong>"Evidencia"</strong>.' },
      { icon:'💫', name:'Alegato Ardiente', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Fuego a 3 enemigos. Si tiene 2+ Evidencias, aplica Quemadura (8% PV Max por turno). Consume todas las Evidencias al finalizar.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>160% del ATQ</strong> como Daño de Fuego a 3 enemigos aleatorios.<br>El daño aumenta un 25% por cada <strong>"Evidencia"</strong> acumulada.<br>Si tiene 2+ Evidencias, aplica <strong>"Quemadura"</strong> (8% PV Máx. por turno, 2 turnos).<br>Consume todas las Evidencias.' },
      { icon:'🌟', name:'Sentencia Inapelable', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Fuego a todos. Aplica Sentencia (-20% DEF, -15% AGI). Si ya la tenía, la extiende a 3 turnos.',
        desc:'Gasta -100 PT.<br>Inflige <strong>300% del ATQ</strong> como Daño de Fuego a TODOS los enemigos.<br>Si tiene al menos 1 <strong>"Evidencia"</strong>, el daño aumenta un 30% (no consume las Evidencias).<br>Aplica <strong>"Sentencia"</strong> (-20% DEF, -15% AGI, 2 turnos). Si el enemigo ya la tenía, aplica <strong>"Sentencia Extendida"</strong> (3 turnos).' },
      { icon:'🔥', name:'Fuego del Juicio', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff (+20% ATQ, +15% AGI, 3 turnos) y obtienes 1 Evidencia.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Fuego del Juicio"</strong> a sí misma durante 3 turnos (+20% ATQ, +15% AGI).<br>Obtiene 1 acumulación de <strong>"Evidencia"</strong>.' }
    ],
    talentoCore: 'Código Penal: Las Evidencias (máx. 3) potencian sus ataques. Se acumulan con el Ataque Básico y el Baneo Activo, y se consumen con el Ataque Especial.',
    rasgoUnico: null
},
{
    id:18, name:'Tako', tagline:'"El Mago Urbano"',
    element:'electro', role:'Sub-DPS / Control', paradigma:'Paradigma del Glitch',
    art: 'Personajes 1.1/Tako.jpg',
    stats:{
      'PV MAX': { lvl1:50, lvl99:720 },
      'PM MAX': { lvl1:20, lvl99:190 },
      'ATQ': { lvl1:10, lvl99:140 },
      'DEFENSA': { lvl1:8, lvl99:80 },
      'ATQ MÁGICO': { lvl1:7, lvl99:60 },
      'DEF MÁGICA': { lvl1:6, lvl99:55 },
      'AGILIDAD': { lvl1:13, lvl99:120 },
      'SUERTE': { lvl1:6, lvl99:70 }
    },
    skills:[
      { icon:'🗡️', name:'Orbe de Runa Azul', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Rayo a un enemigo. Aplica Marca Rúnica (-15% DEF). El daño escala con los Ositos.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Marca Rúnica"</strong> al enemigo durante 2 turnos.<br>El daño aumenta un 5% por cada <strong>"Osito de Peluche"</strong> (máx. 3).' },
      { icon:'💫', name:'Ráfaga de Runas', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Rayo a 3 enemigos. Consume la Marca para Aturdir y aplicar un debuff. Suma ositos por cada marca consumida.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>180% del ATQ</strong> como Daño de Rayo a 3 enemigos aleatorios.<br>Si el enemigo tiene <strong>"Marca Rúnica"</strong>, se la consume y aplica <strong>"Aturdimiento"</strong> (1 turno) y <strong>"Atadura Rúnica"</strong> (+15% daño recibido, 2 turnos).<br>El daño de este golpe aumenta un 30%.<br>Obtiene acumulaciones de <strong>"Osito de Peluche"</strong> por cada Marca consumida (máx. 3).' },
      { icon:'🌟', name:'Liberación del Portal', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Rayo masivo a todos. Aplica Marca y Atadura Rúnica. El daño escala con los Ositos (los consume al final).',
        desc:'Gasta -100 PT.<br>Inflige <strong>320% del ATQ</strong> como Daño de Rayo a TODOS los enemigos.<br>El daño aumenta un 15% por cada <strong>"Osito de Peluche"</strong> (máx. +45%).<br>Aplica <strong>"Marca Rúnica"</strong> y <strong>"Atadura Rúnica"</strong> a todos los enemigos durante 2 turnos.<br>Consume todos los Ositos al finalizar.' },
      { icon:'🔥', name:'Técnica del Osito', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que otorga +20% ATQ y +15% AGI durante 3 turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Técnica del Osito"</strong> a sí mismo durante 3 turnos (+20% ATQ, +15% AGI).' }
    ],
    talentoCore: 'Compañero de Peluche: Cada "Osito de Peluche" (máx. 3) otorga +5% de Daño de Rayo. Se obtienen al consumir Marcas con el Ataque Especial.',
    rasgoUnico: null
},
{
    id:19, name:'Dawn', tagline:'"La Doncella del Invierno"',
    element:'crio', role:'Sub-DPS / Control', paradigma:'Paradigma de la Escarcha Rúnica',
    art: 'Personajes 1.1/Dawn.jpg',
    stats:{
      'PV MAX': { lvl1:45, lvl99:800 },
      'PM MAX': { lvl1:18, lvl99:195 },
      'ATQ': { lvl1:9, lvl99:160 },
      'DEFENSA': { lvl1:7, lvl99:90 },
      'ATQ MÁGICO': { lvl1:11, lvl99:180 },
      'DEF MÁGICA': { lvl1:6, lvl99:85 },
      'AGILIDAD': { lvl1:10, lvl99:110 },
      'SUERTE': { lvl1:5, lvl99:75 }
    },
    skills:[
      { icon:'🗡️', name:'Filo de Escarcha', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Hielo a un enemigo. Aplica Marca de Escarcha (-15% DEF).',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Hielo a un enemigo.<br>Aplica <strong>"Marca de Escarcha"</strong> al enemigo durante 2 turnos (-15% DEF).' },
      { icon:'💫', name:'Círculo Rúnico Helado', tag:'Especial', type:'Nivel 3',
        flavor:'Daño de Hielo a 3 enemigos. Consume la Marca para congelar al enemigo y otorga acumulaciones de poder a Dawn.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Hielo a 3 enemigos aleatorios.<br>Si el enemigo tiene <strong>"Marca de Escarcha"</strong>, se la consume y aplica <strong>"Congelación"</strong> (1 turno).<br>Por cada Marca consumida, Dawn obtiene 1 acumulación de <strong>"Runa de Invierno"</strong> (máx. 3).' },
      { icon:'🌟', name:'Tempestad de Cristal', tag:'Ultimate', type:'Nivel 5',
        flavor:'Daño de Hielo masivo a todos los enemigos. El daño aumenta drásticamente con las Runas de Invierno acumuladas, y luego las consume.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% del ATQ</strong> como Daño de Hielo a TODOS los enemigos.<br>El daño aumenta un 20% por cada <strong>"Runa de Invierno"</strong> (máx. +60%).<br>Aplica <strong>"Marca de Escarcha"</strong> y <strong>"Fragilidad Helada"</strong> (+15% daño Hielo recibido, 2 turnos) a todos los enemigos.<br>Consume todas las Runas.' },
      { icon:'🔥', name:'Manto de Hielo', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que otorga +20% de ATQ MÁGICO y +15% de DEFENSA durante 3 turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Manto de Hielo"</strong> a sí misma durante 3 turnos (+20% ATQ MÁGICO, +15% DEF).' }
    ],
    talentoCore: 'Heredera de las Runas de Invierno: Cada "Runa de Invierno" (máx. 3) otorga +6% de Daño de Hielo. Se obtienen al consumir Marcas con el Ataque Especial.',
    rasgoUnico: null
},
{
    id:20, name:'Sofftsu', tagline:'"El Guardián Invernal"',
    element:'crio', role:'Sustain (Tanque / Escudador)', paradigma:'Paradigma del Muro de Escarcha',
    art: 'Personajes 1.1/Sofftsu.jpg',
    stats:{
      'PV MAX': { lvl1:65, lvl99:920 },
      'PM MAX': { lvl1:14, lvl99:180 },
      'ATQ': { lvl1:7, lvl99:100 },
      'DEFENSA': { lvl1:14, lvl99:250 },
      'ATQ MÁGICO': { lvl1:5, lvl99:60 },
      'DEF MÁGICA': { lvl1:12, lvl99:210 },
      'AGILIDAD': { lvl1:6, lvl99:70 },
      'SUERTE': { lvl1:6, lvl99:80 }
    },
    skills:[
      { icon:'🗡️', name:'Estocada de Hielo', tag:'Básico', type:'Nivel 1',
        flavor:'Daño Físico a un enemigo. Aplica Fractura Helada. El daño escala con las cargas de Escarcha Protectora.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Hielo a un enemigo.<br>Aplica <strong>"Fractura Helada"</strong> (-10% DEF, -10% AGI, 2 turnos).<br>El daño aumenta un 5% por cada carga de <strong>"Escarcha Protectora"</strong> (máx. +25%).<br>Si se usa como Contraataque, otorga 1 carga de <strong>"Escarcha Protectora"</strong>.' },
      { icon:'💫', name:'Baluarte Glacial', tag:'Especial', type:'Nivel 3',
        flavor:'Escudo de hielo para el equipo. Provoca a los enemigos y otorga capacidad de Contraataque para generar cargas.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica <strong>"Provocación"</strong> (2 turnos) y 50% de <strong>Contraataque (CNT)</strong> (2 turnos) sobre sí mismo.<br>Otorga a todos los aliados <strong>"Escudo de Hielo"</strong> (2 turnos). La reducción de daño varía según las cargas de <strong>"Escarcha Protectora"</strong>:<br>Nivel 0: -20% | Nivel 1: -25% | Nivel 2: -30% | Nivel 3: -35% | Nivel 4: -40% | Nivel 5: -45%.' },
      { icon:'🌟', name:'Muralla Perpetua', tag:'Ultimate', type:'Nivel 5',
        flavor:'Barrera de hielo masiva que protege a todo el equipo y congela a los enemigos.',
        desc:'Gasta -100 PT.<br>Aplica <strong>"Inmunidad Helada"</strong> a todos los aliados (-50% daño recibido). Dura 2 turnos +1 turno por cada carga de <strong>"Escarcha Protectora"</strong>. Limpia debuffs de los aliados.<br>Aplica <strong>"Congelación"</strong> (1 turno) y <strong>"Marca de Escarcha"</strong> a todos los enemigos.<br>Consume todas las cargas de <strong>"Escarcha Protectora"</strong>.' },
      { icon:'🔥', name:'Ajuste Táctico', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que fortalece sus defensas drásticamente.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Ajuste Táctico"</strong> a sí mismo durante 3 turnos (+30% DEF, +20% MDEF).' }
    ],
    talentoCore: 'Reflejo del Glaciar: Acumula hasta 5 cargas de "Escarcha Protectora" al contraatacar con su Ataque Básico (gracias a Baluarte Glacial). Mejora el daño básico, los escudos y la duración de la inmunidad.',
    rasgoUnico: null
},
{
    id:21, name:'Areku', tagline:'"El Hacker del Relámpago"',
    element:'electro', role:'Main DPS (Unitarget)', paradigma:'Paradigma de la Precisión Digital',
    art: 'Personajes 1.1/Areku.jpg',
    stats:{
      'PV MAX': { lvl1:45, lvl99:780 },
      'PM MAX': { lvl1:18, lvl99:195 },
      'ATQ': { lvl1:10, lvl99:160 },
      'DEFENSA': { lvl1:6, lvl99:60 },
      'ATQ MÁGICO': { lvl1:6, lvl99:50 },
      'DEF MÁGICA': { lvl1:5, lvl99:55 },
      'AGILIDAD': { lvl1:16, lvl99:220 },
      'SUERTE': { lvl1:10, lvl99:150 }
    },
    skills:[
      { icon:'🗡️', name:'Análisis de Amenaza', tag:'Básico', type:'Nivel 1',
        flavor:'Daño de Rayo a un enemigo basado en la Agilidad del usuario. Aplica "Marca de Análisis".',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% de la AGI</strong> como Daño de Rayo a un enemigo.<br>Aplica <strong>"Marca de Análisis"</strong> al objetivo durante 3 turnos (-15% DEF, +20% daño de Rayo recibido).' },
      { icon:'💫', name:'Corte de Precisión', tag:'Especial', type:'Nivel 3',
        flavor:'Ataque rápido de Rayo a un enemigo. Si el objetivo tiene la Marca, el daño se triplica.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% de la AGI</strong> como Daño de Rayo a un solo enemigo.<br>Si el enemigo tiene <strong>"Marca de Análisis"</strong>, el daño base se triplica (450% de la AGI).' },
      { icon:'🌟', name:'Caída del Sistema (Protocolo de Sobrevoltaje)', tag:'Ultimate', type:'Nivel 5',
        flavor:'Descarga de Rayo masiva sobre un único enemigo. Su daño escala con la Agilidad y la Marca lo potencia aún más.',
        desc:'Gasta -100 PT.<br>Inflige <strong>250% de la AGI</strong> como Daño de Rayo a un solo enemigo.<br>Tasa de Crítico Base del 50%.<br>Si el enemigo tiene <strong>"Marca de Análisis"</strong>, el daño total aumenta un 30% adicional (no consume la Marca).' },
      { icon:'🔥', name:'Sobrecarga de Procesador', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Autobuff que acelera su sistema al límite, aumentando su Velocidad y tasa de críticos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica el estado <strong>"Sobrecarga de Procesador"</strong> sobre sí mismo durante 3 turnos (+30% AGILIDAD, +30% Tasa de Crítico).' }
    ],
    talentoCore: 'Motores de Combate Digital: Estado permanente "Optimización de Hardware". +15% AGI, +15% Tasa de Crítico, -10% DEF, -10% MDEF.',
    rasgoUnico: null
}
];

let fRarity='all', fElem='all', fSearch='';

// ── Navegación ──
function setupNav(){
  const page=document.body.dataset.page||'home';
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.page===page));
}

function goTo(page){
  const target=page==='home'?'index.html':`${page}.html`;
  window.location.href=target;
}

// ── Menú hamburguesa ──
function toggleMenu(){
  document.getElementById('nav-links')?.classList.toggle('open');
  document.getElementById('nav-hamburger')?.classList.toggle('open');
}

function closeMenu(){
  document.getElementById('nav-links')?.classList.remove('open');
  document.getElementById('nav-hamburger')?.classList.remove('open');
}

// ── Personajes ──
function renderCards(){
  const grid=document.getElementById('chars-grid');
  if(!grid) return;
  const list=CHARS.filter(c=>{
    return (fRarity==='all'||c.rarity==fRarity)&&
           (fElem==='all'||c.element===fElem)&&
           c.name.toLowerCase().includes(fSearch.toLowerCase());
  });
  document.getElementById('char-count').textContent=list.length;
  if(!list.length){
    grid.innerHTML=`<div class="empty-state"><span class="empty-icon">🔍</span><div class="empty-text">No se encontraron personajes</div></div>`;
    return;
  }
  grid.innerHTML=list.map(c=>{
    const el=EC[c.element];
    const artHtml=c.art
      ?`<img src="${c.art}" alt="${c.name}">`
      :`<div class="card-art-bg" style="${GRAD[c.element]}"></div>`;
    return`<div class="char-card" onclick="openChar(${c.id})">
      <div class="card-art">
        ${artHtml}
        <div class="elem-badge" style="background:${el.color};box-shadow:0 0 9px ${el.color}"></div>
        <!-- Se eliminó rarity-badge -->
      </div>
      <div class="card-footer">
        <div class="card-name">${c.name}</div>
        <div class="card-el-name">${el.label}</div>
      </div>
    </div>`;
  }).join('');
}

// ── Modal ──
function applyTooltips(desc) {
  let html = desc;
  for (const [term, explanation] of Object.entries(EFFECT_TOOLTIPS)) {
    html = html.replaceAll(term, `<span class="effect-tooltip" data-tooltip="${explanation}">${term}</span>`);
  }
  return html;
}

function openChar(id){
  const c=CHARS.find(x=>x.id===id); if(!c) return;
  const el=EC[c.element];
  const heroContent=c.art
    ?`<img class="modal-hero-img" src="${c.art}" alt="${c.name}">`
    :`<div class="modal-hero-bg" style="${GRAD[c.element]}"></div>`;
  const modalContent=document.getElementById('modal-content');
  if(!modalContent) return;

  const statsHTML = Object.entries(c.stats).map(([k,v])=>{
    if (typeof v === 'object' && v.lvl1 !== undefined && v.lvl99 !== undefined) {
      return `<div class="srow">
                <span class="sname">${k}</span>
                <span class="sval">LvL 1 [${v.lvl1}]<br>LvL 99 [${v.lvl99}]</span>
              </div>`;
    } else {
      return `<div class="srow"><span class="sname">${k}</span><span class="sval">${v}</span></div>`;
    }
  }).join('');

  const skillsHTML = c.skills.map(s=>{
    let tagHtml = '';
    if (s.tag) tagHtml = `[${s.tag}] `;
    const levelText = s.type.replace('Nivel ','Nivel de Desbloqueo: LvL ');
    return `<div class="skill-card">
      <div class="sk-head">
        <span class="sk-icon">${s.icon}</span>
        <span class="sk-name">${tagHtml}${s.name}</span>
        <span class="sk-type">${levelText}</span>
      </div>
      <div class="sk-flavor">${s.flavor}</div>
      <div class="sk-desc">${applyTooltips(s.desc)}</div>
    </div>`;
  }).join('');

  const talentoCoreHTML = c.talentoCore ? `
    <div class="ms"><div class="ms-title">🧠 Talento Core</div>
      <div class="skill-card">
        <div class="sk-desc">${c.talentoCore}</div>
      </div>
    </div>` : '';

  modalContent.innerHTML=`
    <div class="modal-hero">
      ${heroContent}
      <div class="modal-hero-grad"></div>
      <div class="modal-hero-info">
        <div class="modal-name">${c.name}</div>
        <div class="modal-tagline">${c.tagline}</div>
        <div class="modal-badges">
          <div class="mbadge"><div class="mbadge-dot" style="background:${el.color};box-shadow:0 0 7px ${el.color}"></div>${el.label}</div>
          <!-- Se eliminó mbadge-rarity -->
          <div class="mbadge mbadge-role">${c.role}</div>
          <div class="mbadge mbadge-paradigma">📘 ${c.paradigma}</div>
        </div>
      </div>
    </div>
    <div class="modal-body" style="font-size:1.05rem;">
      <div class="ms"><div class="ms-title">📊 Estadísticas Base</div>
        <div class="stats-grid">${statsHTML}</div>
      </div>
      <div class="ms"><div class="ms-title">⚙️ Habilidades</div>
        ${skillsHTML}
      </div>
      ${talentoCoreHTML}
    </div>`;
  document.getElementById('modal-overlay')?.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow='';
}

// ── DOMContentLoaded ──
document.addEventListener('DOMContentLoaded',()=>{
  setupNav();

  document.getElementById('nav-hamburger')?.addEventListener('click', toggleMenu);

  document.getElementById('search-input')?.addEventListener('input', e => {
    const raw = e.target.value.trim();
    fRarity = 'all';
    fElem = 'all';
    fSearch = '';
    if (raw) {
      const tokens = raw.split(/\s+/);
      const nameParts = [];
      tokens.forEach(token => {
        const elemMatch = token.match(/^(elemento|elem):(.+)$/i);
        if (elemMatch) { fElem = elemMatch[2].toLowerCase(); return; }
        const rarityMatch = token.match(/^(rareza|rarity):(.+)$/i);
        if (rarityMatch) { fRarity = rarityMatch[2].toLowerCase(); return; }
        nameParts.push(token);
      });
      fSearch = nameParts.join(' ');
    }
    renderCards();
  });

  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click',e=>{
    if(e.target===e.currentTarget) closeModal();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  const tooltipGlobal = document.getElementById('global-tooltip');
  let tooltipFixed = false;
  function showTooltip(text, x, y) {
    tooltipGlobal.textContent = text;
    tooltipGlobal.classList.add('visible');
    const rect = tooltipGlobal.getBoundingClientRect();
    let left = x - rect.width / 2;
    let top = y - rect.height - 8;
    if (left < 8) left = 8;
    if (left + rect.width > window.innerWidth - 8) left = window.innerWidth - rect.width - 8;
    if (top < 8) top = y + 20;
    tooltipGlobal.style.left = left + 'px';
    tooltipGlobal.style.top = top + 'px';
  }
  function hideTooltip() {
    if (!tooltipFixed) tooltipGlobal.classList.remove('visible');
  }
  document.body.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target) {
      const text = target.getAttribute('data-tooltip');
      if (text) {
        const rect = target.getBoundingClientRect();
        showTooltip(text, rect.left + rect.width/2, rect.top);
      }
    }
  });
  document.body.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target && !tooltipFixed) hideTooltip();
  });
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target) {
      e.preventDefault();
      const text = target.getAttribute('data-tooltip');
      if (text) {
        const rect = target.getBoundingClientRect();
        showTooltip(text, rect.left + rect.width/2, rect.top);
        tooltipFixed = true;
      }
    } else { tooltipFixed = false; hideTooltip(); }
  });
  window.addEventListener('scroll', () => { tooltipFixed = false; hideTooltip(); }, { passive: true });
  window.addEventListener('resize', () => { tooltipFixed = false; hideTooltip(); });

  renderCards();
});

// ── Tooltips actualizados ──
const EFFECT_TOOLTIPS = {
  // ReyDNS
  "Bala de Ban": "Estado acumulable (máx. 3). Potencia sus propias habilidades aumentando drásticamente el daño y duración de efectos a cambio de consumir una carga.",
  "Quemadura": "Daño periódico de Fuego al inicio del turno enemigo. La cantidad varía según el personaje.",

  // Miki
  "Slow-Log": "Reduce AGILIDAD (-20%) y ATQ (-10%). Al inicio de su turno, el enemigo pierde un 0.5% de sus PV Máx. como daño periódico. Dura 2 turnos.",
  "Escudo de Crédito": "Autodefensa que reduce a la mitad todo el daño físico y mágico recibido por Miki. Dura 2 turnos.",

  // Hawk
  "Marca de la Mariposa": "Marca aplicada por Hawk. No hace daño, pero garantiza que Hilos de Control aplique Hipnosis con 100% de éxito.",
  "Hipnosis": "Aturde al enemigo por completo (2 turnos). El enemigo recibe un 25% más de daño de todas las fuentes mientras dure.",
  "Polvo de Hadas": "Autobuff que otorga +25% ATQ y +25% AGILIDAD durante 3 turnos.",

  // Belle
  "Aceleración de Ritmo 1": "Otorga +10% de AGILIDAD. Dura 3 turnos.",
  "Aceleración de Ritmo 2": "Otorga +20% de AGILIDAD. Dura 3 turnos.",
  "Mod-Bot": "Autobuff: +25% ATQ, +25% AGILIDAD y +1 ataque adicional al usar Ataque Básico. Dura 3 turnos.",
  "Electrocutado": "Daño periódico de Rayo (0.2% PV Máx.) y -20% AGILIDAD. Dura 2 turnos.",
  "Parálisis": "Inmoviliza al enemigo por completo (no puede atacar ni usar habilidades) durante 1 turno.",

  // Fabru
  "Marca de Hackeo": "Reduce la DEFENSA del enemigo en un 20% durante 2 turnos.",
  "Enjambre de Drones": "Autobuff: +15% ATQ, +15% AGILIDAD y +1 ataque adicional con Ataque Básico. Dura 3 turnos.",
  "Sistema Caído": "Reduce AGILIDAD (-20%), DEFENSA (-20%) y probabilidad de golpe (HIT) del enemigo (-15%). Dura 2 turnos.",
  "Codigo Raiz": "Estado de potenciación de un solo uso. El próximo ataque ignora 30% de la DEF y aplica Aturdimiento (1 turno). Se consume al atacar.",

  // Eugenio
  "Naipe": "Estado acumulable (máx. 5). Cada uno otorga +10% de SUERTE pasiva. La Ultimate escala su daño según los Naipes activos.",
  "Combinación de Póker": "Efecto aleatorio que se activa al consumir 5 Naipes con Giro de la Ruleta. Puede buffear a Eugenio, debilitar enemigos o aplicar múltiples estados.",
  "Suerte del Bufón": "Autobuff que otorga +50% SUERTE y +15% Prob. Crítico. Dura 3 turnos.",

  // Kyou
  "Marca de Vulnerabilidad": "Reduce la DEFENSA del enemigo en un 10% durante 2 turnos.",
  "Vulnerabilidad Expuesta": "Reduce la DEFENSA del enemigo en un 20% adicional (acumulable con Marca). Dura 2 turnos.",
  "Ralentización": "Reduce la AGILIDAD del enemigo en un 20%. Dura 2 turnos.",
  "Secreto al Descubierto": "Los enemigos reciben un 20% más de daño de TODOS los elementos durante 2 turnos.",
  "Filtración de Datos": "Durante el resto del turno, los enemigos reciben un 30% más de daño de cualquier fuente. Se desvanece al finalizar la ronda.",
  "Expediente": "Acumulación de Kyou (máx. 5). Se obtiene al usar Ataque Básico (+1) o Ultimate (+2). Cada carga aumenta el Daño de Rayo en un 5%.",
  "Archivo Cifrado": "Autobuff que otorga +15% SUERTE y +20% Daño de Rayo durante 3 turnos.",

  // Ttlim
  "Rosa Gélida": "Acumulación (máx. 3). Se obtiene al golpear enemigos Ralentizados/Congelados. Con 3, el siguiente ataque se potencia.",
  "Congelación": "Aturde al enemigo (1 turno). Se elimina al recibir daño; el golpe que rompe el hielo inflige un 30% más de daño.",
  "Campo Congelado": "Reduce AGILIDAD enemiga (-15%) y aumenta el daño de Hielo recibido (+15%). Dura 2 turnos.",
  "Ritual de Escarcha": "Autobuff que otorga +20% Daño de Hielo y +20% Acierto de Efecto. Dura 3 turnos.",

  // Cris
  "Marca del Fragmento": "Aumenta el daño de Fuego recibido por el enemigo en un 10%. Dura 2 turnos.",
  "Fragmento de Espejo": "Acumulación (máx. 5). Se obtiene al aplicar Marca o Quemadura. Cada uno otorga +4% Daño Crítico pasivo. Se consumen con la Ultimate.",
  "Reflejos del Fin": "Autobuff que otorga +20% Daño Crítico y +20% Daño de Fuego. Dura 3 turnos.",

  // Quency
  "Marca de Sakura": "Aumenta el daño recibido por el enemigo en un 15% durante 2 turnos.",
  "Esquiva Inaudito": "Otorga +5% Evasión y +20% AGILIDAD durante 2 turnos.",
  "Ceguera Floral": "Reduce el HIT del enemigo en un 50% durante 1 turno.",
  "Pétalo": "Acumulación (máx. 5). Cada uno da +6% Prob. Crítica. Con 3+ el Básico golpea dos veces; con 5 se ejecuta un Contraataque.",
  "Reflejos de Conejo": "Autobuff: +15% Evasión y +20% Prob. Crítica durante 3 turnos.",

  // Eydis
  "Fisura Rúnica": "Reduce DEF un 15%. Al ser detonada, causa daño a todos los enemigos y se degrada. Dura 2 turnos.",
  "Fisura Rúnica Avanzada": "Igual que Fisura Rúnica, pero puede detonar hasta 2 veces (primero se convierte en normal, luego desaparece).",
  "Piedra Rúnica": "Acumulación (máx. 3). Cada una otorga +5% Daño de Luz. Con 3, el Ataque Básico se transforma en Golpe de Ruptura.",
  "Ecos de las Ruinas": "Autobuff: +20% Daño de Luz y +20% Prob. Crítica durante 3 turnos.",

  // iKayto
  "Escarcha": "Acumulable hasta 2. Aumenta un 15% el Daño de Hielo recibido por el enemigo.",
  "Postura Alta": "Otorga +20% VEL y +15% Prob. Crítica durante 2 turnos.",
  "Postura Baja": "Otorga +30% Daño de Hielo y -20% daño recibido durante 2 turnos.",
  "Compás": "Acumulación (máx. 3). Se obtiene al cambiar de postura o ejecutar FUA. Con 3, activa Danza del Vacío.",
  "Danza del Vacío": "Potencia el siguiente ataque (+30% daño, aplica 2 Escarchas a todos) y se consume.",
  "Sinfonía Invernal": "Autobuff: +25% Daño de Hielo y +20% Prob. Crítica durante 3 turnos.",

  // Escarlata
  "Manto Estelar": "Reduce el daño físico/mágico recibido en un 30% durante 2 turnos.",
  "Escudo Celestial": "Reduce el daño físico/mágico recibido en un 30% durante 2 turnos.",
  "Aura de la Aurora": "Autobuff: +20% DEF durante 3 turnos. Mejora las curaciones de Escarlata.",

  // Poberto
  "Manto Protector": "Reduce el daño físico/mágico recibido en un 50% durante 2 turnos.",
  "Velo Eléctrico": "Autobuff: +20% DEF. Mientras está activo, el Ataque Básico hace +15% daño. Dura 3 turnos.",

  // Koenig
  "Gran Final del Festival": "Otorga +20% ATQ y +15% AGILIDAD a los aliados durante 2 turnos.",
  "Redoble del Tempo": "Autobuff: +20% AGILIDAD durante 3 turnos.",

  // Reguta
  "Fórmula de la Velocidad": "Otorga +25% AGILIDAD y +20% ATQ a un aliado durante 2 turnos.",
  "Eureka": "Limpia debuffs, +30% ATQ y otorga una acción adicional (doble turno) durante 1 turno.",
  "Mente Brillante": "Autobuff: +20% AGILIDAD y +20% Tasa de Carga de PT durante 3 turnos.",

  // Ttlim SP
  "Marca del Relámpago": "Aumenta el Daño de Rayo recibido por el enemigo en un 15% durante 2 turnos.",
  "Pluma de Juicio": "Acumulación (máx. 3). Otorga +6% de ATQ cada una. Se obtienen con el Ataque Especial y se consumen con la Ultimate.",
  "Alas del Cielo": "Autobuff: +25% ATQ y +20% AGILIDAD durante 3 turnos.",

  // Yanfei
  "Evidencia": "Acumulación (máx. 3). Aumenta el daño de sus habilidades. Se obtienen con el Ataque Básico y el Baneo, y se consumen con el Ataque Especial.",
  "Sentencia": "Reduce un 20% la DEF y un 15% la AGI del enemigo. Dura 2 turnos.",
  "Sentencia Extendida": "Reduce un 20% la DEF y un 15% la AGI del enemigo. Dura 3 turnos.",
  "Fuego del Juicio": "Autobuff: +20% ATQ y +15% AGILIDAD durante 3 turnos.",

  // Tako
  "Marca Rúnica": "Reduce la DEF del enemigo en un 15% durante 2 turnos.",
  "Osito de Peluche": "Acumulación (máx. 3). Otorga +5% de Daño de Rayo cada una. Se obtienen al consumir Marcas con el Ataque Especial.",
  "Atadura Rúnica": "Aumenta el daño recibido por el enemigo en un 15% durante 2 turnos.",
  "Técnica del Osito": "Autobuff: +20% ATQ y +15% AGILIDAD durante 3 turnos.",

  // Dawn
  "Marca de Escarcha": "Reduce la DEF del enemigo en un 15% durante 2 turnos.",
  "Runa de Invierno": "Acumulación (máx. 3). Otorga +6% de Daño de Hielo cada una. Se obtienen al consumir Marcas con el Ataque Especial.",
  "Fragilidad Helada": "Aumenta el daño de Hielo recibido por el enemigo en un 15% durante 2 turnos.",
  "Manto de Hielo": "Autobuff: +20% ATQ MÁGICO y +15% DEF durante 3 turnos.",

  // Sofftsu
  "Fractura Helada": "Reduce un 10% la DEF y un 10% la AGI del enemigo durante 2 turnos.",
  "Escarcha Protectora": "Acumulación (máx. 5). Mejora el daño básico, el nivel de sus escudos y la duración de su Inmunidad. Se obtiene al contraatacar.",
  "Provocación": "Obliga a los enemigos a atacar al portador. Dura 2 turnos.",
  "Escudo de Hielo": "Reduce el daño recibido por el equipo en un porcentaje variable según el nivel (Nv.0: -20%, Nv.5: -45%). Dura 2 turnos.",
  "Inmunidad Helada": "Reduce el daño recibido por el equipo en un 50%. La duración base es de 2 turnos +1 turno por cada carga de Escarcha Protectora. Limpia estados negativos al aplicarse.",
  "Ajuste Táctico": "Autobuff: +30% DEF y +20% MDEF durante 3 turnos.",

  // Areku
  "Marca de Análisis": "Reduce un 15% la DEF del enemigo y aumenta un 20% el daño de Rayo que recibe. Dura 3 turnos.",
  "Sobrecarga de Procesador": "Autobuff: +30% AGILIDAD y +30% Tasa de Crítico durante 3 turnos.",
};