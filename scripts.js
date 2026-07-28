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
{
    id:1, name:'ReyDNS', tagline:'"El Gatillo del Servidor"',
    element:'fuego', rarity:5, role:'Main DPS', paradigma:'Paradigma del Flood',
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
      {
        icon:'🗡️', name:'Tiro de Advertencia', tag:'Básico', type:'Nivel 1',
        flavor:'Un disparo rápido que causa daño básico. Si tiene una \'Bala de Ban\' cargada, el tiro se potencia y la consume.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Si tiene al menos 1 carga de <strong>"Bala de Ban"</strong>, el daño se duplica (200%) y consume 1 carga.'
      },
      {
        icon:'💫', name:'Fuego a Discreción', tag:'Especial', type:'Nivel 3',
        flavor:'Ráfaga de disparos que quema al enemigo. Puede potenciarse con una \'Bala de Ban\' para hacer más daño y alargar la quemadura.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>200% del ATQ</strong> como Daño de Fuego a un enemigo.<br>Aplica <strong>"Quemadura"</strong> durante 2 turnos.<br>Si gasta 1 carga de <strong>"Bala de Ban"</strong>, el daño base aumenta a 300% y la Quemadura dura 1 turno extra.'
      },
      {
        icon:'🌟', name:'Limpieza de Servidor (Wipe)', tag:'Ultimate', type:'Nivel 5',
        flavor:'Vacía el cargador en un devastador ataque de área. Mientras más \'Balas de Ban\' tenga, más letal será el golpe.',
        desc:'Gasta -100 PT.<br>Inflige <strong>350% del ATQ</strong> como Daño de Fuego a TODOS los enemigos.<br>Ignora el 20% de la DEF enemiga.<br>Por cada carga de <strong>"Bala de Ban"</strong>, el daño total aumenta un 50% adicional (consume todas las cargas).'
      },
      {
        icon:'🔥', name:'La Ruleta del Administrador', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Recarga una \'Bala de Ban\' al instante, permitiéndole potenciar sus próximos ataques.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Balas de Ban"</strong> sobre sí mismo, recuperando 1 carga (máx. 3).'
      }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:2, name:'Miki', tagline:'"Nada escapa del tarjetón... ni de mi Furina C6"',
    element:'caos', rarity:5, role:'Soporte / Control', paradigma:'Paradigma del Legado',
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
      {
        icon:'🗡️', name:'Golpe de Top Up', tag:'Básico', type:'Nivel 1',
        flavor:'Un golpe firme que daña en base a su defensa y acelera su propia recarga de Ultimate.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% de su DEF</strong> como Daño de Vacío a un enemigo.<br>Otorga a Miki +10 PT adicionales.'
      },
      {
        icon:'💫', name:'Muteo Temporal', tag:'Especial', type:'Nivel 3',
        flavor:'Aplica un estado de ralentización y drenaje de vida, reduciendo la velocidad y el ataque del enemigo mientras lo daña por turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>200% de su DEF</strong> como Daño de Vacío a un enemigo.<br>Aplica <strong>"Slow-Log"</strong> al enemigo durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Reinicio de Tienda', tag:'Ultimate', type:'Nivel 5',
        flavor:'Un poderoso ataque de área que ralentiza a todos los enemigos y fortalece a todo el equipo.',
        desc:'Gasta -100 PT.<br>Inflige <strong>280% de su DEF</strong> como Daño de Vacío a TODOS los enemigos.<br>Aplica -30% AGILIDAD a todos los enemigos durante 2 turnos.<br>Aumenta ATQ y DEF de todos los aliados en un 20% durante 2 turnos.'
      },
      {
        icon:'🔥', name:'Corte de Crédito', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Activa una póliza de protección personal, reduciendo a la mitad todo el daño recibido por un tiempo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Escudo de Crédito"</strong> a sí misma durante 2 turnos.'
      }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:4, name:'Hawk', tagline:'"Shhh... No pienses. Solo obedece."',
    element:'caos', rarity:5, role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
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
      {
        icon:'🗡️', name:'Aguja Mental', tag:'Básico', type:'Nivel 1',
        flavor:'Un pequeño rayo de energía que marca al enemigo, preparándolo para ser controlado.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Vacío a un enemigo.<br>Aplica <strong>"Marca de la Mariposa"</strong> al enemigo durante 2 turnos.'
      },
      {
        icon:'💫', name:'Hilos de Control', tag:'Especial', type:'Nivel 3',
        flavor:'Susurra una orden que intenta dominar la mente del enemigo. Si tiene la \'Marca de la Mariposa\', la hipnosis es un éxito asegurado.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Inflige <strong>150% del ATQ</strong> como Daño de Vacío a un enemigo.<br>Intenta aplicar <strong>"Hipnosis"</strong> durante 2 turnos (prob. base 30%).<br>Si el enemigo tiene <strong>"Marca de la Mariposa"</strong>, la probabilidad es del 100%.'
      },
      {
        icon:'🌟', name:'Vals de las Mil Mariposas', tag:'Ultimate', type:'Nivel 5',
        flavor:'Una tormenta de mariposas que arrasa con todos los enemigos. Si está bajo el efecto de \'Polvo de Hadas\', el daño se vuelve devastador.',
        desc:'Gasta -100 PT.<br>Inflige <strong>300% del ATQ</strong> como Daño de Vacío a TODOS los enemigos.<br>Si tiene <strong>"Polvo de Hadas"</strong>, el daño aumenta un 30% adicional.<br>Aplica <strong>"Hipnosis"</strong> a un enemigo aleatorio.'
      },
      {
        icon:'🔥', name:'Polvo de Hadas', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Un aura de empoderamiento que aumenta considerablemente su poder de ataque y su velocidad durante varios turnos.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Polvo de Hadas"</strong> a sí misma durante 3 turnos.<br>Efecto: +25% ATQ y +25% AGILIDAD mientras dure.'
      }
    ],
    talentoCore: '',
    rasgoUnico: null
},
{
    id:3, name:'Belle', tagline:'"En su presencia los mortales temen"',
    element:'electro', rarity:5, role:'Sub-DPS / Buffer', paradigma:'Paradigma del Legado',
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
      {
        icon:'🗡️', name:'Dinamic Warn', tag:'Básico', type:'Nivel 1',
        flavor:'Un disparo de advertencia que acumula velocidad y tiene un 35% de probabilidad de desatar un golpe extra contundente.',
        desc:'Recupera +20 PT y +15 PM.<br>Inflige <strong>100% del ATQ</strong> como Daño de Rayo a un enemigo.<br>35% de prob. (basado en SUERTE) de añadir un golpe extra (120% ATQ adicional).<br>Se aplica <strong>"Aceleración de Ritmo 1"</strong> o <strong>"Aceleración de Ritmo 2"</strong> según su acumulación actual.'
      },
      {
        icon:'💫', name:'¡No aprendes?, Mod-Bot!', tag:'Especial', type:'Nivel 3',
        flavor:'Belle activa a su robot acompañante para potenciarse a sí misma durante un tiempo.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Se aplica el estado <strong>"Mod-Bot"</strong> a sí misma durante 3 turnos.'
      },
      {
        icon:'🌟', name:'Sabía que me necesitabas', tag:'Ultimate', type:'Nivel 5',
        flavor:'Un drop masivo de graves y relámpagos cuyo poder destructivo escala directamente con la velocidad de la DJ.',
        desc:'Gasta -100 PT.<br>Inflige <strong>(ATQ * 3.2) + (AGI * 0.4)</strong> como Daño de Rayo a TODOS los enemigos.<br>Otorga a todos los aliados +20% ATQ durante 2 turnos.'
      },
      {
        icon:'🔥', name:'Control de Bajos', tag:'Baneo Activo', type:'Nivel 30',
        flavor:'Belle manipula la corriente eléctrica ambiental para electrocutar y frenar a un enemigo en específico.',
        desc:'Gasta -20 PM y recupera +15 PT.<br>Aplica <strong>"Electrocutado"</strong> al enemigo durante 2 turnos.<br>10% de prob. (basado en SUERTE) de aplicar también <strong>"Parálisis"</strong> durante 1 turno.'
      }
    ],
    talentoCore: 'Ritmo Imparable: La probabilidad del 35% de activar el golpe extra (FUA) en su Ataque Básico está calculada de forma nativa dentro de la fórmula de daño de Dinamic Warn.',
    rasgoUnico: null
},
{
    id:5, name:'Fabru', tagline:'"Si el server crashea… es porque él lo hackeó."',
    element:'electro', rarity:5, role:'Main DPS / Control de Área', paradigma:'Paradigma del Bot (Invocador)',
    art: 'Personajes 1.0 - tanda 1/Fabru.png',
    stats:{
      HP:560, ATQ:390, DEF:130, VEL:122,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Lanza de Plasma', type:'Ataque Básico',
        flavor:'Un rápido disparo de energía desde su lanza que deja un rastro de datos corrompidos.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Rayo a un enemigo. Aplica <strong>"Marca de Hackeo"</strong> durante 2 turnos.'
      },
      {
        icon:'🔥', name:'Enjambre de Drones', type:'Habilidad',
        flavor:'Fabru despliega sus tres cuchillas flotantes sobre el campo de batalla.',
        desc:'Invoca hasta <strong>3 Drones de Plasma</strong> (máx. 3 activos). Los drones tienen HP igual al <strong>20% del HP Máx. de Fabru</strong> y heredan su ATQ, DEF y VEL. Actúan justo después de Fabru y atacan con <strong>"Corte de Plasma"</strong>: inflige <strong>(40%–80% del ATQ del drone)</strong> como Daño de Rayo, priorizando al enemigo con Marca de Hackeo.'
      },
      {
        icon:'🌟', name:'Overclock del Sistema', type:'Ultimate',
        flavor:'La interfaz holográfica de Fabru se vuelve roja. Todos los límites de seguridad se desactivan.',
        desc:'Inflige <strong>(150%–300% del ATQ)</strong> como Daño de Rayo a todos los enemigos. <strong>Sobrecarga</strong> todos los drones activos por 3 turnos: su daño aumenta un 50% y sus ataques golpean en área pequeña. Aplica <strong>"Sistema Caído"</strong> (2 turnos): reduce VEL en 25% y DEF en 20%. Además aplica <strong>"Vulnerabilidad Expuesta"</strong> (1 turno): reduce DEF un 20% adicional (acumulable).'
      },
      {
        icon:'🧠', name:'Red de Datos', type:'Talento',
        flavor:'Fabru recolecta información del campo de batalla para optimizar sus algoritmos de ataque.',
        desc:'Cuando un Drone de Plasma ataca, otorga 1 <strong>"Paquete de Datos"</strong> (máx. 10). Cada Paquete aumenta el Daño de Rayo de Fabru y sus drones en un <strong>3%</strong> (máx. +30%). Fabru puede consumir todos los Paquetes para activar <strong>"Código Raíz"</strong>: su siguiente ataque ignora el 30% de la DEF enemiga y aplica Aturdimiento (1 turno). Si hay drones, ejecutan Ataque Conjunto adicional (>60% del ATQ del drone) contra enemigos con Marca de Hackeo.'
      },
    ],
    talentoCore: '',
    passives:[
      { name:'Firewall Inestable', desc:'Los drones ganan un <strong>20% de la DEF de Fabru</strong> como HP adicional.' },
      { name:'DDoS de Paquetes', desc:'Al inicio del combate, obtiene <strong>4 "Paquetes de Datos"</strong>.' },
      { name:'Protocolo de Respaldo', desc:'Si un drone muere, Fabru recupera <strong>20 puntos de Energía</strong>.' },
      { name:'Sobrecarga del Sistema', desc:'Mientras Fabru está en el equipo, los enemigos con <strong>"Sistema Caído"</strong> tienen un <strong>15% de prob. de fallar ataques</strong>.' }
    ],
    pings:[
      { n:1, name:'Carga Rápida', desc:'Al invocar drones, estos atacan inmediatamente al desplegarse.' },
      { n:2, name:'Hackeo Masivo', desc:'Los enemigos con <strong>"Sistema Caído"</strong> reciben un <strong>20% más de daño</strong> de los drones.' },
      { n:3, name:'Enjambre Mejorado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Redundancia de Datos', desc:'Cuando Fabru obtiene <strong>"Paquetes de Datos"</strong>, tiene un <strong>50% de prob.</strong> de obtener 1 adicional.' },
      { n:5, name:'Colapso del Servidor', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Acceso Raíz', desc:'Al usar la Ultimate, si hay 3 drones activos, ejecutan inmediatamente su ataque básico contra todos los enemigos y aplican <strong>"Marca de Hackeo"</strong> a los supervivientes.' }
    ],
    rasgoUnico: null
},
{
    id:6, name:'Eugenio', tagline:'"¡Girando la rueda... y la suerte está echada!"',
    element:'fuego', rarity:5, role:'Sub-DPS / Buffer (Soporte Ofensivo con RNG)', paradigma:'Paradigma del Giveaway',
    art: 'Personajes 1.0 - tanda 1/Eugenio.png',
    stats:{
      HP:550, ATQ:290, DEF:155, VEL:117,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0,
      'Suerte': '0 (máx. 200)'
    },
    skills:[
      {
        icon:'🗡️', name:'Lanzamiento de Cartas', type:'Ataque Básico',
        flavor:'Lanza un naipe con borde cortante, simple pero efectivo.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Fuego a un enemigo. Obtiene <strong>1 Naipe</strong> de su baraja.'
      },
      {
        icon:'🔥', name:'¡Giro de la Ruleta!', type:'Habilidad',
        flavor:'Eugenio gira una ruleta mágica y lanza una lluvia de naipes explosivos.',
        desc:'Inflige <strong>(70%–150% del ATQ)</strong> como Daño de Fuego a un enemigo y adyacentes. Roba <strong>Naipes</strong> igual a los efectos negativos activos en todos los enemigos (máx. 5). Al final del turno, si tiene 5 Naipes, forma la mejor combinación de póker y aplica su efecto.<br><br>'
          + '<strong>Escalera Real:</strong> Aplica todos los estados (Quemadura, Electrocutado, etc.) a todos los enemigos por 2 turnos.<br>'
          + '<strong>Póker:</strong> Copia todas las estadísticas base de un aliado y las suma a las suyas por 2 turnos.<br>'
          + '<strong>Escalera:</strong> Daño de Ruptura +120% y +70 Suerte.<br>'
          + '<strong>Trío:</strong> ATQ +80% y 3 ataques adicionales que ignoran DEF y escudos por 1 turno.<br>'
          + '<strong>Doble Pareja:</strong> Prob. Crítica +35% y Daño Crítico +70% por 1 turno.<br>'
          + '<strong>Pareja:</strong> Provoca "Burla" y "Solidez" (DEF +45%, escudo del 25% de Vida Máx.) por 2 turnos.<br>'
          + '<strong>Carta Alta:</strong> Si su primer Naipe del turno es un As, +25% a todas sus estadísticas y +45% daño de efectos de tiempo por 2 turnos.'
      },
      {
        icon:'🌟', name:'¡Función de Medianoche!', type:'Ultimate',
        flavor:'El escenario se ilumina. Todas las Eugenio chibi aparecen y lanzan una lluvia de cartas doradas.',
        desc:'Eugenio aplica <strong>2 combinaciones diferentes</strong> de su mano actual simultáneamente (las dos mejores disponibles). Inflige <strong>(120%–250% del ATQ)</strong> como Daño de Fuego a todos los enemigos. Cada <strong>Naipe</strong> activo aumenta este daño en un <strong>10% adicional</strong>.'
      },
      {
        icon:'🧠', name:'Naipes del Bufón', type:'Talento',
        flavor:'La esencia del carnaval: nunca sabes qué carta viene, pero siempre es un espectáculo.',
        desc:'Comienza con 1 <strong>Naipe</strong> aleatorio. Al inicio de cada turno obtiene <strong>+5 de Suerte</strong>. Por cada 15 puntos de <strong>Suerte</strong> acumulados, roba 1 Naipe adicional. Suerte máxima: 200. Al alcanzar 200, obtiene un <strong>"Comodín"</strong> para elegir cualquier carta en su siguiente mano.'
      },
    ],
    talentoCore: '',
    passives:[
      { name:'Juego de Manos', desc:'Al inicio de su turno, puede descartar su primer <strong>Naipe</strong> y robar otro al azar.' },
      { name:'Chuchería', desc:'Al inicio del combate obtiene un <strong>"Comodín"</strong>. Puede usarlo una vez por batalla (excepto en el primer turno).' },
      { name:'Primer Acto', desc:'Evita que su <strong>Suerte</strong> baje entre turnos (sin este baneo, perdería 5 de Suerte por turno si no ataca).' }
    ],
    pings:[
      { n:1, name:'Cartas Marcadas', desc:'Por cada <strong>Naipe</strong> en la mano, la <strong>Suerte</strong> aumenta un <strong>0.25% adicional</strong> al inicio de cada turno.' },
      { n:2, name:'El Público se Rinde', desc:'La <strong>Suerte</strong> máxima aumenta a <strong>200</strong> y comienza con <strong>30 de Suerte</strong>.' },
      { n:3, name:'Función Estelar', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Oración Cerrada', desc:'El máximo de <strong>Naipes</strong> en mano pasa de <strong>5 a 10</strong>.' },
      { n:5, name:'Bis, Bis', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Truco Final', desc:'Al comenzar un turno, puede elegir la combinación que más le guste durante 1 turno. Luego obtiene 5 <strong>Naipes</strong> aleatorios y 1 <strong>"Comodín Tocado"</strong> (puede elegir "As" incluso en el turno 1).' }
    ],
    rasgoUnico: null
},
{
    id:7, name:'Kyou', tagline:'"Sabe más de ti que tú mismo. Y lo usa."',
    element:'electro', rarity:5, role:'Soporte / Debuffer', paradigma:'Paradigma del Warn',
    art: 'Personajes 1.0 - tanda 2/Kyou.png',
    stats:{
      HP:600, ATQ:340, DEF:160, VEL:112,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Pulso de Datos', type:'Ataque Básico',
        flavor:'Dispara un paquete de información corrupta desde su tablet. Un spoiler duele.',
        desc:'Inflige <strong>(45%–95% del ATQ)</strong> como Daño de Rayo. Aplica <strong>"Marca de Vulnerabilidad"</strong> durante 2 turnos.'
      },
      {
        icon:'🔥', name:'Filtración Selectiva', type:'Habilidad',
        flavor:'Kyou hackea los sistemas enemigos y expone sus puntos débiles a todo el equipo.',
        desc:'Inflige <strong>(40%–90% del ATQ)</strong> como Daño de Rayo. Aplica <strong>"Vulnerabilidad Expuesta"</strong> durante 2 turnos. Si el enemigo ya tenía <strong>"Marca de Vulnerabilidad"</strong>, extiende la duración de todos sus debuffs en 1 turno.'
      },
      {
        icon:'🌟', name:'Mega Filtración', type:'Ultimate',
        flavor:'Todos los hologramas se activan a la vez. Una explosión de datos clasificados inunda el campo.',
        desc:'Inflige <strong>(120%–260% del ATQ)</strong> como Daño de Rayo a todos. Aplica <strong>"Secreto al Descubierto"</strong> (2 turnos) y <strong>"Filtración de Datos"</strong>.'
      },
      {
        icon:'🧠', name:'Información Clasificada', type:'Talento',
        flavor:'Kyou registra cada acción enemiga y convierte los secretos en armas para el equipo.',
        desc:'Cuando un enemigo con debuff de Kyou recibe daño de un aliado, Kyou obtiene 1 <strong>"Expediente"</strong> (máx. 5). Pasiva: +4% Daño de Rayo del equipo por Expediente (máx. +20%). Al usar la Habilidad, puede consumir hasta 3 Expedientes y aplicar debuffs adicionales: <strong>Ralentización</strong>, <strong>Ceguera</strong> o <strong>Quemadura de Datos</strong>.'
      },
    ],
    talentoCore: '',
    passives:[
      { name:'Acceso Remoto', desc:'Al inicio del combate, aplica <strong>"Marca de Vulnerabilidad"</strong> a un enemigo aleatorio.' },
      { name:'Cortafuegos Débil', desc:'Los enemigos con debuffs infligen un <strong>10% menos de daño</strong> a Kyou.' },
      { name:'Dato Filtrado', desc:'Cuando un enemigo muere con <strong>"Marca de Vulnerabilidad"</strong>, Kyou obtiene 1 <strong>"Expediente"</strong>.' }
    ],
    pings:[
      { n:1, name:'Datos en Tiempo Real', desc:'Al inicio del combate, Kyou obtiene 2 <strong>"Expedientes"</strong> y el límite máximo pasa a <strong>6</strong>.' },
      { n:2, name:'Informe Detallado', desc:'Los enemigos con <strong>"Vulnerabilidad Expuesta"</strong> reciben un <strong>20% más de daño de Rayo</strong>.' },
      { n:3, name:'Análisis Avanzado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Correo Masivo', desc:'Cuando la Ultimate aplica <strong>"Filtración de Datos"</strong>, también aplica <strong>"Marca de Vulnerabilidad"</strong> a todos los enemigos.' },
      { n:5, name:'Informe Final', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Filtración Total', desc:'La Ultimate ahora consume todos los <strong>"Expedientes"</strong>. Por cada uno, el daño de la Ultimate aumenta un <strong>15%</strong> y aplica un debuff aleatorio del Talento a cada enemigo.' }
    ],
    rasgoUnico: null
},
{
    id:8, name:'Ttlim', tagline:'"Su espada no hace ruido. Solo deja rosas y un chat vacío."',
    element:'crio', rarity:5, role:'Sub-DPS / Control', paradigma:'Paradigma del Mute',
    art:'Personajes 1.0 - tanda 2/Ttlim.png',
    stats:{
      HP:620, ATQ:340, DEF:195, VEL:115,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Hielo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Estocada Silente', type:'Ataque Básico',
        flavor:'Un golpe rápido con la espada de hielo, tan silencioso como un muteo.',
        desc:'Inflige <strong>(50%–115% del ATQ)</strong> como Daño de Hielo. Si el enemigo está <strong>Ralentizado</strong> o <strong>Congelado</strong>, genera 1 <strong>"Rosa Gélida"</strong> (máx. 3).'
      },
      {
        icon:'🔥', name:'Vórtice de Pétalos', type:'Habilidad',
        flavor:'Ttlim gira su espada creando un remolino de pétalos de rosa congelados.',
        desc:'Inflige <strong>(90%–200% del ATQ)</strong> como Daño de Hielo a un enemigo y adyacentes. 80% de prob. base de aplicar <strong>Ralentización</strong> (2 turnos). Si ya estaba Ralentizado, 50% de prob. de aplicar <strong>Congelación</strong>.'
      },
      {
        icon:'🌟', name:'Sentencia del Templo Helado', type:'Ultimate',
        flavor:'Ttlim clava la espada en el suelo. El templo responde con grietas de luz azul.',
        desc:'Inflige <strong>(160%–350% del ATQ)</strong> como Daño de Hielo a todos los enemigos. Si hay enemigos <strong>Ralentizados</strong> o <strong>Congelados</strong>, +30% de daño y los <strong>Congela</strong> a todos (1 turno). Crea un <strong>"Campo Congelado"</strong> (2 turnos) que reduce VEL y aumenta el daño de Hielo recibido.'
      },
      {
        icon:'🧠', name:'Rosas de la Condena', type:'Talento',
        flavor:'Convertir el silencio en una sentencia hermosa y letal.',
        desc:'Al aplicar <strong>Ralentización</strong> o <strong>Congelación</strong> obtiene 1 <strong>"Rosa Gélida"</strong> (máx. 3). Al llegar a 3, su siguiente ataque las consume: daño aumentado, ignora 20% DEF y extiende 1 turno los debuffs de Hielo.'
      },
    ],
    talentoCore: '',
    passives:[
      { name:'Escarcha Persistente', desc:'Los enemigos <strong>Ralentizados</strong> por Ttlim reducen su ATQ en un <strong>10%</strong>.' },
      { name:'Silencio en el Templo', desc:'Al inicio del combate, aplica <strong>Ralentización</strong> (1 turno) a todos los enemigos (no genera Rosas Gélidas).' },
      { name:'Hoja Eterna', desc:'Al consumir <strong>"Rosas Gélidas"</strong>, recupera <strong>10 puntos de Energía</strong>.' }
    ],
    pings:[
      { n:1, name:'Bienvenida Helada', desc:'Al aplicar <strong>Congelación</strong> con la Habilidad, el daño de descongelación aumenta un <strong>50%</strong> y genera 1 <strong>"Rosa Gélida"</strong> adicional.' },
      { n:2, name:'Grieta Rúnica', desc:'El <strong>"Campo Congelado"</strong> ahora dura <strong>3 turnos</strong> y reduce la DEF enemiga en un <strong>15%</strong>.' },
      { n:3, name:'Mandato del Silencio', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Guardia del Templo', desc:'Con 2+ <strong>"Rosas Gélidas"</strong>, Ttlim recibe <strong>20% menos de daño</strong>. Al consumirlas, el bono pasa al aliado con menos HP por 2 turnos.' },
      { n:5, name:'Cero Absoluto', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Eco de la Rosa Eterna', desc:'Cuando un enemigo muere <strong>Congelado</strong> o <strong>Ralentizado</strong>, Ttlim obtiene <strong>3 "Rosas Gélidas"</strong> y avanza su siguiente acción un 50%.' }
    ],
    rasgoUnico: null
},
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
function stars(n){return'⭐'.repeat(n);}

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
    return`<div class="char-card" data-rarity="${c.rarity}" onclick="openChar(${c.id})">
      <div class="card-art">
        ${artHtml}
        <div class="elem-badge" style="background:${el.color};box-shadow:0 0 9px ${el.color}"></div>
        <div class="rarity-badge">${stars(c.rarity)}</div>
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

  // Estadísticas con formato vertical
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

  // Habilidades sin coste/ganancia extra
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
          <div class="mbadge mbadge-rarity">${stars(c.rarity)}</div>
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

  // Hamburguesa
  document.getElementById('nav-hamburger')?.addEventListener('click', toggleMenu);

  // ── Buscador inteligente ──
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

  // Modal
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click',e=>{
    if(e.target===e.currentTarget) closeModal();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  // Tooltip flotante
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
  "Bala de Ban": "Estado acumulable (máx. 3). Potencia sus propias habilidades aumentando drásticamente el daño y duración de efectos a cambio de consumir una carga.",
  "Quemadura": "Daño periódico de Fuego al inicio del turno enemigo (1.3% de sus PV Máx.). Dura 2 turnos (3 si se potencia).",
  "Slow-Log": "Reduce AGILIDAD (-20%) y ATQ (-10%). Al inicio de su turno, el enemigo pierde un 0.5% de sus PV Máx. como daño periódico. Dura 2 turnos.",
  "Escudo de Crédito": "Autodefensa que reduce a la mitad todo el daño físico y mágico recibido por Miki. Dura 2 turnos.",
  "Marca de la Mariposa": "Marca aplicada por Hawk. No hace daño, pero garantiza que Hilos de Control aplique Hipnosis con 100% de éxito.",
  "Hipnosis": "Aturde al enemigo por completo (2 turnos). El enemigo recibe un 25% más de daño de todas las fuentes mientras dure.",
  "Polvo de Hadas": "Autobuff que otorga +25% ATQ y +25% AGILIDAD durante 3 turnos.",
  "Aceleración de Ritmo 1": "Otorga +10% de AGILIDAD. Dura 3 turnos.",
  "Aceleración de Ritmo 2": "Otorga +20% de AGILIDAD. Dura 3 turnos.",
  "Mod-Bot": "Autobuff: +25% ATQ, +25% AGILIDAD y +1 ataque adicional al usar Ataque Básico. Dura 3 turnos.",
  "Electrocutado": "Daño periódico de Rayo (0.2% PV Máx.) y -20% AGILIDAD. Dura 2 turnos.",
  "Parálisis": "Inmoviliza al enemigo por completo (no puede atacar ni usar habilidades) durante 1 turno."
};