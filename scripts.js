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
      HP:420, ATQ:400, DEF:110, VEL:120,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Tiro de Advertencia', type:'Ataque Básico',
        flavor:'ReyDNS dispara un tiro rápido con su revólver, consumiendo 1 bala del tambor.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño Piro a un solo enemigo.'
      },
      {
        icon:'🔥', name:'Fuego a Discreción', type:'Habilidad',
        flavor:'Gasta 3 balas consecutivas contra un solo objetivo con postura de ejecución.',
        desc:'Inflige un total de <strong>(130%–280% del ATQ)</strong> como Daño Piro. Si alguna de las balas es una <strong>"Bala de Ban"</strong>, el daño final aumenta en <strong>(20%–45%)</strong> adicional.'
      },
      {
        icon:'🌟', name:'Limpieza de Servidor (Wipe)', type:'Ultimate',
        flavor:'El juicio final del Owner. Vacía todas las balas restantes sobre un solo enemigo.',
        desc:'Cada bala inflige <strong>(50%–100% del ATQ)</strong> como Daño Piro. Con 6+ balas gana <strong>+30%–75% de Daño Crítico</strong>. Al finalizar, recarga el tambor con <strong>12 balas nuevas</strong>.'
      },
      {
        icon:'🧠', name:'La Ruleta del Administrador', type:'Talento',
        flavor:'El Owner no sigue las reglas de energía. Tiene un Tambor de 12 Balas.',
        desc:'<strong>Balas de Ban</strong> ignoran <strong>(15%–40%) de la DEF</strong>. Si empieza su turno con 0 balas, pierde la acción para recargar <strong>12 balas</strong> y obtiene un escudo del <strong>(10%–20%) de su Vida Máx.</strong> por 1 turno.'
      },
    ],
    passives:[
      {
        name:'Dedo en el Gatillo',
        desc:'Una "Bala de Ban" retrasa el siguiente turno del enemigo en un <strong>15%</strong>.'
      },
      {
        name:'Inercia de Plomo',
        desc:'Por cada bala normal que acierta, gana <strong>+2% de VEL</strong> (se resetea al inicio de su siguiente turno).'
      },
      {
        name:'Privilegios de Owner',
        desc:'Entra al combate con el tambor lleno. Su primera acción avanza su turno en un <strong>25%</strong> adicional. Desbloquea <strong>"Mantra"</strong> (CD: 5 turnos). ReyDNS queda Imposibilitado 1 turno tras usarlo.'
      },
    ],
    pings:[
      {
        n:1, name:'Acceso Directo',
        desc:'Obtiene un turno adicional inmediato. Su primer Ataque Básico no consume balas.'
      },
      {
        n:2, name:'Ban de IP',
        desc:'Las "Balas de Ban" aplican <strong>Quemadura Severa</strong>. Si el enemigo ya tiene la marca, la bala ignora un <strong>20% adicional de su DEF</strong>.'
      },
      {
        n:3, name:'Jerarquía Elevada',
        desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'
      },
      {
        n:4, name:'Protocolo de Emergencia',
        desc:'Al caer bajo el 30% de HP, recarga 6 balas y activa el escudo del Talento sin perder turno. (CD: 3 turnos).'
      },
      {
        n:5, name:'Decreto Supremo',
        desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'
      },
      {
        n:6, name:'Aniquilación del Registro',
        desc:'Durante la Ultimate, cada bala sube el <strong>Daño Crítico</strong> de la siguiente en 15%. Si elimina al enemigo, recupera el tambor completo y avanza 100% en la barra de turnos.'
      },
    ],
    rasgoUnico: {
      titulo: 'Rasgo Único "Owner"',
      descripcion: 'Al estar en el equipo con Belle, Miki o Hawk, elige uno de los siguientes efectos antes de la batalla:',
      efectos: [
        { aliado: 'Belle', nombre: 'Bala Platinada', desc: '4 de sus balas hacen 40% de Daño Verdadero adicional en base a la VEL de Belle.' },
        { aliado: 'Miki', nombre: 'Sorteo Ilimitado', desc: 'Al inicio del combate, su HP y DEF aumentan un 15% y restaura un 10% de su HP Máximo durante 3 turnos.' },
        { aliado: 'Hawk', nombre: 'Mandato', desc: 'Cada 3 turnos, obtiene 3 balas extra que causan un 25% de daño adicional en base al Acierto de Efecto de Hawk.' }
      ]
    }
},
{
    id:2, name:'Miki', tagline:'"Nada escapa del tarjetón... ni de mi Furina C6"',
    element:'caos', rarity:5, role:'Soporte / Control', paradigma:'Paradigma del Legado',
    art: 'Personajes 1.0 - tanda 2/Miki.png',
    stats:{
      HP:650, ATQ:180, DEF:300, VEL:115,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Vacío':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Golpe de Top Up', type:'Ataque Básico',
        flavor:'Un toque firme con su llave dorada que adelanta sus asuntos pendientes.',
        desc:'Inflige <strong>(75%–105% de su DEF)</strong> como Daño de Vacío. Avanza su acción propia en <strong>10%</strong>.'
      },
      {
        icon:'🔥', name:'Muteo Temporal', type:'Habilidad',
        flavor:'Activa el protocolo de silencio. El objetivo entra en "Slow-Log".',
        desc:'85% de probabilidad base de aplicar <strong>"Slow-Log"</strong> por 2 turnos.'
      },
      {
        icon:'🌟', name:'Reinicio de Tienda', type:'Ultimate',
        flavor:'El reloj astronómico da marcha atrás. Una ola de color sepia inunda el campo.',
        desc:'Retrasa la acción de todos los enemigos en <strong>(25%–55%)</strong>. Aumenta DEF, VIDA, ATQ, Prob. Crítica y Daño Crítico de todos los aliados en <strong>(15%–30%)</strong> por 1 turno. Inflige <strong>(110%–210% de su DEF)</strong> como Daño de Vacío a todos.'
      },
      {
        icon:'🧠', name:'Agenda del Moderador', type:'Talento',
        flavor:'Miki sabe exactamente cuándo intervenir.',
        desc:'Cuando un aliado (excepto Miki) usa su Habilidad, Miki gana 1 <strong>"Engranaje"</strong> (máx. 5). Al llegar a 5, ejecuta un <strong>FUA</strong>: <strong>(60%–130% de su DEF)</strong> como Daño de Vacío. El objetivo reduce su Resistencia a Efectos en <strong>20%</strong> por 2 turnos.'
      },
    ],
    passives:[
      { name:'Guía de estilo', desc:'Aumenta el <strong>Acierto de Efecto</strong> de Miki en un <strong>15%</strong>.' },
      { name:'Copia de seguridad', desc:'Al inicio del turno de Miki, limpia <strong>1 debuff</strong> de un aliado aleatorio.' },
      { name:'Términos del servicio', desc:'Los enemigos con <strong>"Slow-Log"</strong> reducen su <strong>ATQ</strong> en un 10%.' },
    ],
    pings:[
      { n:1, name:'Hilo de bienvenida', desc:'Otorga a todo el equipo <strong>+15% de Recarga de Energía</strong> durante los primeros 3 turnos.' },
      { n:2, name:'Atajos del teclado', desc:'El Talento ahora requiere <strong>4 cargas</strong> en lugar de 5 para el <strong>FUA</strong>.' },
      { n:3, name:'Archivo expandido', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Modo sigilo', desc:'Al usar Ataque Básico contra un enemigo con debuff, recupera <strong>15% de HP máx</strong>.' },
      { n:5, name:'Actualización de firmware', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Baneo permanente', desc:'Al usar la Ultimate, 50% de probabilidad de <strong>aturdir</strong> a los enemigos 1 turno. Si tienen "Slow-Log", sube al <strong>100%</strong>.' },
    ]
}
,{
    id:3, name:'Belle', tagline:'"En su presencia los mortales temen"',
    element:'electro', rarity:5, role:'Sub-DPS / Buffer', paradigma:'Paradigma del Legado',
    art: 'Personajes 1.0 - tanda 1/Belle.png',
    stats:{
      HP:350, ATQ:330, DEF:150, VEL:148,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Dinamic Warn', type:'Ataque Básico',
        flavor:'Un disparo de advertencia con su sintetizador.',
        desc:'Inflige <strong>(50%–115% del ATQ)</strong> como Daño de Rayo. Genera 1 <strong>XP</strong> por golpe crítico (máx. 40 acumulaciones, cada una otorga +1% de VEL).'
      },
      {
        icon:'🔥', name:'¡No aprendes?, Mod-Bot!', type:'Habilidad',
        flavor:'Belle activa a su robot compañero y lo asigna al aliado más poderoso.',
        desc:'Vincula <strong>Mod-Bot</strong> al aliado con más ATQ. Aumenta su ATQ en <strong>(60%–120%) de la VEL actual de Belle</strong>. Cada vez que ese aliado ataca, Mod-Bot hace un Ataque Conjunto de <strong>(40%–90% del ATQ de Belle)</strong> como Daño de Rayo y le aumenta el Efecto de Ruptura en 20%.'
      },
      {
        icon:'🌟', name:'Sabía que me necesitabas', type:'Ultimate',
        flavor:'Un drop masivo de graves y luces que satura el campo de batalla.',
        desc:'Inflige <strong>(150%–320% del ATQ)</strong> como Daño de Rayo a todos. Si Mod-Bot está vinculado, añade daño adicional del 25% de la VEL de Belle. Si VEL > 250, su Efecto de Ruptura iguala su VEL durante la Ultimate. Otorga a aliados <strong>+20% de Recarga de Energía</strong> por 2 turnos.'
      },
      {
        icon:'🧠', name:'Simplemente soy mejor', type:'Talento',
        flavor:'La DJ no espera, impone el ritmo.',
        desc:'Empieza con 5 XP. Cuando Belle o el aliado vinculado usan su Habilidad, gana 1 <strong>"Casete"</strong> (máx. 3). Al llegar a 3, lanza un <strong>FUA</strong> de <strong>(80%–180% del ATQ)</strong> como Daño de Rayo con 50% de prob. de aplicar <strong>"Electrocutado"</strong> por 2 turnos.'
      },
    ],
    passives:[
      {
        name:'No me provoques',
        desc:'Mientras Mod-Bot esté vinculado, el aliado enlazado gana <strong>+15% de VEL</strong>. Si Belle tiene más de 250 VEL, aplica <strong>"Mute"</strong>: durante 1 ataque, aumenta un Ping aleatorio del aliado (excepto el 6to), una vez por partida.'
      },
      {
        name:'Rebobinado',
        desc:'Al lanzar el FUA, Belle recupera 10 de Energía y gana 2 XP. Su Efecto de Ruptura aumenta un <strong>0.20% por XP</strong> (máx. +50%).'
      },
      {
        name:'Ataque PE',
        desc:'Los golpes críticos del aliado vinculado otorgan 1 XP a Belle. El daño de <strong>"Electrocutado"</strong> aumenta un <strong>30%</strong> contra enemigos con menos del 50% de HP.'
      },
    ],
    pings:[
      {
        n:1, name:'Efecto Causa',
        desc:'Al comenzar el combate, Belle obtiene <strong>2 cargas de "Casete"</strong> de inmediato.'
      },
      {
        n:2, name:'El rank es visual',
        desc:'El aliado vinculado obtiene el 50% de las XP de Belle. Al lanzar un FUA, el aliado recupera <strong>5 de Energía</strong>.'
      },
      {
        n:3, name:'Subidón',
        desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'
      },
      {
        n:4, name:'Salvavidas de Moderación',
        desc:'Si el aliado vinculado recibe daño fatal, sobrevive con 1 HP y obtiene un escudo del <strong>40% de la Vida de Belle</strong> por 2 turnos (una vez por batalla).'
      },
      {
        n:5, name:'Alter Ego',
        desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'
      },
      {
        n:6, name:'Me considero el mejor',
        desc:'Tras la Ultimate, entra en <strong>"DJ Suprema"</strong> 2 turnos: el aliado vinculado recibe 100% de la XP de Belle, los FUA se activan también al usar Ultimate, e ignora 20% de la DEF enemiga.'
      },
    ],
    rasgoUnico: {
      titulo: 'Sinergia Especial: Quency',
      descripcion: 'Si Quency está en el campo, Belle obtiene "Propaganda": +15% de Prob. de Evasión. Si Quency esquiva, obtiene "Kitsune" y refuerza "Propaganda".',
      efectos: [
        { aliado: 'Quency (en campo)', nombre: 'Propaganda', desc: '+15% de Prob. de Evasión para Belle.' },
        { aliado: 'Quency (al esquivar)', nombre: 'Kitsune + Propaganda reforzada', desc: '<strong>Kitsune:</strong> Aumenta la Evasión de Belle en <strong>45%</strong> (acumulable 2 veces). <strong>Propaganda reforzada:</strong> Todos los buffs de Belle pasan a todos los aliados durante 1 turno (hasta +3% de aumento).' }
      ]
    }
},
{
    id:4, name:'Hawk', tagline:'"Shhh... No pienses. Solo obedece."',
    element:'caos', rarity:5, role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
    art: 'Personajes 1.0 - tanda 1/Hawk.png',
    stats:{HP:620,ATQ:380,DEF:170,VEL:118,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Acierto de Efecto':20,'Res. a Efectos':10,'Ef. de Ruptura':30,'Bono Vacío':0,'Bono Curación':0},
    skills:[
      {icon:'🗡️',name:'Aguja Mental',type:'Ataque Básico',
       flavor:'Un pequeño rayo magenta que se clava en la sien del enemigo.',
       desc:'Inflige <strong>(65%–120% del ATQ)</strong> como Daño de Vacío. Aplica <strong>"Marca de la Mariposa"</strong> por 2 turnos.'},
      {icon:'🔥',name:'Palabras de Seda',type:'Habilidad',
       flavor:'Hawk se ajusta las gafas y murmura una orden. Las mariposas obedecen.',
       desc:'Inflige <strong>(70%–150% del ATQ)</strong> como Daño de Vacío. Si el enemigo tiene <strong>"Marca de la Mariposa"</strong>, la consume para aplicar <strong>"Hipnosis"</strong> y <strong>"Tela"</strong> por 2 turnos. Genera 1 <strong>"Polvo de Hadas"</strong> (máx. 5).'},
      {icon:'🌟',name:'Vals de las Mil Mariposas',type:'Ultimate',
       flavor:'Sus alas se despliegan. Una tormenta de polvo hipnótico lo envuelve todo.',
       desc:'Inflige <strong>(180%–360% del ATQ)</strong> como Daño de Vacío a todos. Consume todo el <strong>"Polvo de Hadas"</strong>: por cada acumulación, aumenta todas las stats de Hawk en <strong>10%</strong> por 2 turnos y aplica <strong>"Hipnosis"</strong> a un enemigo sin ella. Si ya tenía Hipnosis, su DEF baja 30%. Por 2 turnos, los <strong>FUA</strong> de Hawk hacen <strong>+40% de daño</strong> y generan 1 Polvo adicional al realizarse.'},
      {icon:'🧠',name:'Alas de la Dominación',type:'Talento',
       flavor:'Cada vez que un títere baila, ella aplaude.',
       desc:'Cuando un aliado ataca a un enemigo con <strong>"Hipnosis"</strong>, Hawk realiza un <strong>FUA</strong> de <strong>(60%–130% del ATQ)</strong> como Daño de Vacío (máx. 3 veces por turno). Empieza con 2 <strong>"Polvo de Hadas"</strong>. Cada acumulación aumenta el daño de FUA en <strong>12%</strong> (máx. +60%).'},
    ],
    passives:[
      {name:'Voz Melosa',desc:'La <strong>"Hipnosis"</strong> y <strong>"Tela"</strong> ahora duran <strong>3 turnos</strong> en lugar de 2.'},
      {name:'Danza de las Almas',desc:'Cuando un enemigo bajo <strong>"Hipnosis"</strong> ataca a un aliado enemigo, Hawk obtiene <strong>8 puntos de Energía</strong>.'},
      {name:'Primer Acto',desc:'Al inicio del combate, aplica <strong>"Marca de la Mariposa"</strong> a 2 enemigos aleatorios.'},
    ],
    pings:[
      {n:1,name:'Audiencia Cautiva',desc:'El límite de <strong>"Polvo de Hadas"</strong> aumenta a 6. El bono máximo de FUA es de <strong>+72%</strong>.'},
      {n:2,name:'Crítica Teatral',desc:'Los enemigos bajo <strong>"Hipnosis"</strong> reciben un <strong>25% más de Daño Crítico</strong> de los aliados.'},
      {n:3,name:'Palabras de Terciopelo',desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'},
      {n:4,name:'Beso de la Mariposa',desc:'El <strong>FUA</strong> del Talento reduce la VEL del enemigo golpeado en un <strong>20%</strong> por 1 turno.'},
      {n:5,name:'Ovación Final',desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'},
      {n:6,name:'Teatro de los Títeres',desc:'Una vez por batalla al usar la Ultimate, activa <strong>"Función Final"</strong>: todos los enemigos reciben 100% de daño verdadero basado en el Acierto de Efecto de Hawk y quedan Aturdidos e Inundados (+30% daño de Rayo) por 1 turno. Con 2+ hipnotizados, el daño sube al <strong>150%</strong>.'},
    ]
}
,{
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
    ]
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
    ]
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
    ]
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
    ]
},
{
    id:9, name:'Cris', tagline:'"No necesita cerrar tickets, los destruye."',
    element:'fuego', rarity:5, role:'Main DPS', paradigma:'Paradigma del Baneo',
    art:'Personajes 1.0 - tanda 1/Cris.png',
    stats:{
      HP:480, ATQ:370, DEF:105, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Estocada de Asfalto', type:'Ataque Básico',
        flavor:'Un golpe seco con la lanza que deja una marca resplandeciente.',
        desc:'Inflige <strong>(50%–120% del ATQ)</strong> como Daño de Fuego. Aplica <strong>"Marca del Fragmento"</strong> (2 turnos).'
      },
      {
        icon:'🔥', name:'Emboscada Abrasadora', type:'Habilidad',
        flavor:'Cris salta y estrella la lanza contra el suelo, haciendo temblar los escombros.',
        desc:'Inflige <strong>(110%–240% del ATQ)</strong> como Daño de Fuego a un enemigo y adyacentes. Si el objetivo tiene <strong>"Marca del Fragmento"</strong>, esta explota causando daño adicional y aplica <strong>"Quemadura"</strong>. Genera 1 <strong>"Fragmento de Espejo"</strong>.'
      },
      {
        icon:'🌟', name:'Tormenta de Cristal y Fuego', type:'Ultimate',
        flavor:'La cadena de la lanza se extiende. Cris gira creando un torbellino de llamas y espejos rotos.',
        desc:'Inflige <strong>(180%–350% del ATQ)</strong> como Daño de Fuego a todos. Consume todos los <strong>"Fragmentos de Espejo"</strong>: +15% daño por cada uno. Si consume 3+, ignora el <strong>30% de la DEF</strong> enemiga.'
      },
      {
        icon:'🧠', name:'Reflejos del Fin', type:'Talento',
        flavor:'El caos de la batalla alimenta su poder. Cada grieta, cada enemigo roto, es un arma.',
        desc:'Acumula hasta 5 <strong>"Fragmentos de Espejo"</strong>. Obtiene 1 al morir un enemigo o romper un escudo. Cada Fragmento otorga +4% Daño Crítico (máx. +20%). Al inicio del combate, si hay 2+ enemigos, obtiene 2 Fragmentos.'
      },
    ],
    passives:[
      { name:'Calles en Llamas', desc:'Los enemigos con <strong>"Quemadura"</strong> infligen un <strong>10% menos de ATQ</strong>.' },
      { name:'Escombros Filosos', desc:'Al morir un enemigo con <strong>"Marca del Fragmento"</strong>, los enemigos adyacentes reciben un <strong>15% del ATQ</strong> de Cris como daño.' },
      { name:'Cadena de Supervivencia', desc:'Al recibir un ataque letal, consume 3 <strong>"Fragmentos de Espejo"</strong> (si los tiene) para sobrevivir con 1 HP y ganar un turno extra (una vez por batalla).' }
    ],
    pings:[
      { n:1, name:'Grafiti de Batalla', desc:'Al iniciar el combate, aplica <strong>"Marca del Fragmento"</strong> a todos los enemigos.' },
      { n:2, name:'Rabia Callejera', desc:'Los <strong>"Fragmentos de Espejo"</strong> ahora aumentan el Daño Crítico en un <strong>6%</strong> cada uno (máx. 30%).' },
      { n:3, name:'Lanza Forajida', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'¡A Reventarlo!', desc:'Al romper la <strong>"Marca del Fragmento"</strong> con la Habilidad, obtienes <strong>2 "Fragmentos de Espejo"</strong> en lugar de 1.' },
      { n:5, name:'Juicio Final de Calle', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'El Chat Arde Contigo', desc:'Si la Ultimate consume 3+ <strong>"Fragmentos"</strong>, otorga <strong>+20% de Daño de Fuego</strong> a los aliados durante 2 turnos.' }
    ]
},
{
    id:10, name:'Quency', tagline:'"Esquiva tus mensajes y tus ataques. Solo verás pétalos."',
    element:'aero', rarity:5, role:'SubDPS / Evasión', paradigma:'Paradigma del Timeout',
    art:'Personajes 1.0 - tanda 2/Quency.png',
    stats:{
      HP:400, ATQ:380, DEF:120, VEL:100,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Viento':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Corte Primaveral', type:'Ataque Básico',
        flavor:'Un tajo rápido con la katana, tan sutil que solo se ven los pétalos caer.',
        desc:'Inflige <strong>(60%–120% del ATQ)</strong> como Daño de Viento. Si ha esquivado este turno, aplica <strong>"Marca de Sakura"</strong> (2 turnos).'
      },
      {
        icon:'🔥', name:'Esquiva del Conejo', type:'Habilidad',
        flavor:'Quency adopta una postura baja, lista para saltar en cualquier dirección.',
        desc:'Obtiene <strong>"Esquiva Inaudito"</strong> (1 turno): +5% Evasión por enemigo. +VEL durante 2 turnos. Si el enemigo tiene <strong>"Marca de Sakura"</strong>, ejecuta un <strong>"Contraataque Relámpago"</strong> que la elimina.'
      },
      {
        icon:'🌟', name:'Tormenta de Sakura', type:'Ultimate',
        flavor:'Quency desenvaina su katana en un instante. Una explosión de pétalos envuelve todo el campo.',
        desc:'Inflige <strong>(150%–330% del ATQ)</strong> como Daño de Viento a todos. Aplica <strong>"Ceguera Floral"</strong> (1 turno, 50% fallo). Si usó Esquiva del Conejo el turno anterior, +25% daño.'
      },
      {
        icon:'🧠', name:'Reflejos de Conejo', type:'Talento',
        flavor:'Quency no solo es rápida, es inalcanzable. Cada ataque fallido la vuelve más letal.',
        desc:'15% Evasión base. Al esquivar, obtiene 1 <strong>"Pétalo"</strong> (máx. 5). Cada Pétalo +6% Daño Crítico. Con 3, su Ataque Básico se convierte en <strong>"Corte de Conejo"</strong> (golpea 2 veces). Con 5, los consume y ejecuta un <strong>"Contraataque Relámpago"</strong> automático.'
      },
    ],
    passives:[
      { name:'Orejas Alerta', desc:'La Evasión base del Talento aumenta a <strong>20%</strong>.' },
      { name:'Cola de Algodón', desc:'Al esquivar un ataque, recupera un <strong>5% de su HP Máximo</strong>.' },
      { name:'Salto Primaveral', desc:'Al inicio del combate obtiene <strong>"Relieve"</strong>: redirige el primer golpe letal (40-100% HP) al aliado con más vida (una vez por batalla).' }
    ],
    pings:[
      { n:1, name:'Zanahoria Energética', desc:'Al esquivar, recupera <strong>10 puntos de Energía</strong> en lugar de 5.' },
      { n:2, name:'Conejo Blanco', desc:'El <strong>"Contraataque Relámpago"</strong> aumenta su daño un <strong>20%</strong> y aplica automáticamente <strong>"Marca de Sakura"</strong>.' },
      { n:3, name:'Maestría con la Katana', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Pétalos Curativos', desc:'Al esquivar por <strong>"Ceguera Floral"</strong>, Quency se cura un <strong>10% de su HP Máximo</strong>.' },
      { n:5, name:'Flor del Destino', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Santuario del Conejo', desc:'Al inicio obtiene 3 <strong>"Pétalos"</strong>. La Ultimate otorga <strong>Esquiva Total</strong> al equipo (1 ataque) y un <strong>"Contraataque Relámpago"</strong> adicional.' }
    ],
    rasgoUnico: {
      titulo: 'Sinergia Especial: Belle',
      descripcion: 'Si Belle está en el campo, Quency obtiene "Fiesta": +5% de Prob. de Evasión durante 3 turnos. Además, obtiene los siguientes efectos:',
      efectos: [
        { aliado: 'Belle (en campo)', nombre: 'Fiesta (base)', desc: '+5% de Prob. de Evasión durante 3 turnos.' },
        { aliado: 'Belle (Warn)', nombre: 'Warn', desc: 'Los <strong>"Contraataques Relámpago"</strong> de Quency infligen un <strong>25% más de daño</strong>.' },
        { aliado: 'Belle (Remove)', nombre: 'Remove', desc: 'Remueve todos los debuffs enemigos. Por cada uno, Quency gana <strong>+5% Evasión y +5% Daño Crítico</strong> (máx. +20% Evasión y +45% Daño Crítico).' },
        { aliado: 'Belle (Aislado)', nombre: 'Aislado', desc: 'Aplica Evasión a un enemigo. Quency gana <strong>+70% de ATQ y +10% de recuperación de vida</strong> durante su siguiente ataque (incluye contraataques).' }
      ]
    }
},
{
    id:11, name:'Eydis', tagline:'"En el silencio de los templos, ella escribe la sentencia."',
    element:'celestial', rarity:5, role:'Soporte Ofensivo / SubDPS', paradigma:'Paradigma del Warn',
    art:'Personajes 1.0 - tanda 1/Eydis.png',
    stats:{
      HP:660, ATQ:290, DEF:195, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Luz':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Filo del Escriba', type:'Ataque Básico',
        flavor:'Un tajo con su espada que inscribe una runa efímera.',
        desc:'Inflige <strong>(55%–120% del ATQ)</strong> como Daño de Luz. Si el enemigo tiene <strong>"Fisura Rúnica"</strong>, Eydis gana +15% Prob. Crítica.'
      },
      {
        icon:'🔥', name:'Sentencia Rúnica', type:'Habilidad',
        flavor:'Eydis alza su mano izquierda y un círculo rúnico dispara un haz que agrieta la realidad.',
        desc:'Inflige <strong>(80%–170% del ATQ)</strong> como Daño de Luz y aplica <strong>"Fisura Rúnica"</strong> (2 turnos). Si ya la tenía, +30% daño.'
      },
      {
        icon:'🌟', name:'Colapso del Templo', type:'Ultimate',
        flavor:'El suelo tiembla, los escombros flotan y las runas estallan en una explosión de luz.',
        desc:'Inflige <strong>(180%–390% del ATQ)</strong> como Daño de Luz a todos. Aplica <strong>"Fisura Rúnica Avanzada"</strong> (2 detonaciones) y +15% Prob. Crítica a los aliados contra enemigos con Fisura.'
      },
      {
        icon:'🧠', name:'Ecos de las Ruinas', type:'Talento',
        flavor:'Las palabras grabadas en piedra reclaman su precio.',
        desc:'Al detonar una Fisura Rúnica, obtiene 1 <strong>"Piedra Rúnica"</strong> (máx. 3). +5% daño de detonación por carga. Con 3 cargas, su siguiente Ataque Básico se convierte en <strong>"Golpe de Ruptura"</strong>.'
      },
    ],
    passives:[
      { name:'Escritura Precisa', desc:'Al aplicar <strong>"Fisura Rúnica"</strong>, reduce la Resistencia a Efectos del enemigo en un <strong>15%</strong> durante 1 turno.' },
      { name:'Runa Persistente', desc:'Cuando una <strong>"Fisura Rúnica"</strong> se detona, el enemigo mantiene una reducción de DEF del <strong>5%</strong> durante 1 turno adicional.' },
      { name:'Templo Vigilante', desc:'Al inicio del combate, Eydis obtiene <strong>1 carga de "Piedra Rúnica"</strong>.' }
    ],
    pings:[
      { n:1, name:'Manuscrito Olvidado', desc:'Al aplicar <strong>"Fisura Rúnica"</strong> con la Habilidad, recupera <strong>15 puntos de Energía</strong>.' },
      { n:2, name:'Ecos Resonantes', desc:'Las detonaciones de <strong>"Fisura Rúnica"</strong> ahora golpean en área mayor y aplican <strong>"Aturdimiento"</strong> (1 turno) a enemigos secundarios (30% prob.).' },
      { n:3, name:'Pluma del Escriba', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Columna Sagrada', desc:'Al inicio, aplica <strong>"Fisura Rúnica"</strong> a <strong>2 enemigos aleatorios</strong>.' },
      { n:5, name:'Legado de Piedra', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Ruina del Canal Secreto', desc:'Las <strong>"Fisuras Rúnicas Avanzadas"</strong> ahora pueden detonar <strong>3 veces</strong>, y cada detonación adicional aumenta el daño un <strong>20%</strong>.' }
    ]
},
{
    id:12, name:'iKayto', tagline:'"En el silencio helado, sus espadas cantan."',
    element:'crio', rarity:5, role:'Main DPS / AoE', paradigma:'Paradigma del Raid',
    art:'Personajes 1.0 - tanda 1/iKayto.png',
    stats:{
      HP:530, ATQ:360, DEF:120, VEL:112,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Hielo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Corte del Alba', type:'Ataque Básico',
        flavor:'Un tajo con la katana derecha que deja una estela de escarcha.',
        desc:'Inflige <strong>(50%–115% del ATQ)</strong> como Daño de Hielo. Aplica <strong>"Escarcha"</strong> (2 turnos, máx. 2 acumulaciones).'
      },
      {
        icon:'🔥', name:'Paso de la Grulla', type:'Habilidad',
        flavor:'iKayto ejecuta un giro elegante, golpeando con ambas katanas a su paso.',
        desc:'Inflige <strong>(60%–130% del ATQ)</strong> como Daño de Hielo a todos. Elige <strong>"Postura Alta"</strong> o <strong>"Postura Baja"</strong>. Si ya tenía una postura, activa un <strong>FUA</strong> y la consume.'
      },
      {
        icon:'🌟', name:'Vals de la Aurora Boreal', type:'Ultimate',
        flavor:'El cielo nocturno se refleja en el hielo. iKayto danza entre explosiones de luz polar.',
        desc:'Inflige <strong>(170%–350% del ATQ)</strong> como Daño de Hielo a todos. +8% daño por acumulación de <strong>"Escarcha"</strong> en el campo. Consume todas las Escarchas y aplica <strong>"Congelación"</strong> aleatoria.'
      },
      {
        icon:'🧠', name:'Espíritu de la Danza', type:'Talento',
        flavor:'Cada combate es una coreografía que iKayto perfecciona.',
        desc:'Medidor de <strong>"Compases"</strong> (máx. 3). Elige postura inicial. Gana 1 Compás al cambiar de postura o ejecutar un <strong>FUA</strong>. Con 3 Compases, el siguiente ataque se convierte en <strong>"Danza del Vacío Helado"</strong>.'
      },
    ],
    passives:[
      { name:'Flor de Escarcha', desc:'Las acumulaciones de <strong>"Escarcha"</strong> reducen la DEF enemiga un <strong>5% adicional</strong> por acumulación.' },
      { name:'Grulla en el Viento', desc:'Al cambiar de postura, iKayto recupera un <strong>10% de su HP Máximo</strong>.' },
      { name:'Escudo de la Aurora', desc:'Al inicio del combate, obtiene un escudo del <strong>20% de su HP Máximo</strong> que se refresca al usar la Ultimate.' }
    ],
    pings:[
      { n:1, name:'Preludio Helado', desc:'Al inicio, aplica 1 acumulación de <strong>"Escarcha"</strong> a todos los enemigos.' },
      { n:2, name:'Danza Eterna', desc:'Los <strong>"Compases"</strong> ahora se acumulan hasta <strong>4</strong>. El cuarto uso de <strong>"Danza del Vacío Helado"</strong> no los consume (se reinician después).' },
      { n:3, name:'Maestría de la Cimitarra', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Armonía Boreal', desc:'En <strong>"Postura Alta"</strong>, ignora <strong>10% DEF</strong>. En <strong>"Postura Baja"</strong>, sana un <strong>5% del daño infligido</strong>.' },
      { n:5, name:'Clímax de la Aurora', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Espejismo de la Nieve', desc:'Con 3+ <strong>"Compases"</strong>, la Ultimate activa simultáneamente <strong>"Danza del Vacío Helado"</strong> sin consumirla.' }
    ]
},
{
    id:13, name:'Poberto', tagline:'"El conejo no es un peluche... es su guardián."',
    element:'electro', rarity:4, role:'Tanque / Protector', paradigma:'Paradigma del Escudo',
    art:'Personajes 1.0 - tanda 2/Poberto.png',
    stats:{
      HP:740, ATQ:210, DEF:275, VEL:104,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Caricia del Conejo', type:'Ataque Básico',
        flavor:'Extiende su mano y lanza una pequeña descarga eléctrica que chisporrotea al impactar.',
        desc:'Inflige <strong>(40%–90% del ATQ)</strong> como Daño de Rayo a un enemigo.'
      },
      {
        icon:'🔥', name:'Manto del Guardián', type:'Habilidad',
        flavor:'Poberto alza su mano y una máscara de conejo hecha de energía envuelve al aliado.',
        desc:'Otorga a un aliado un <strong>Escudo</strong> equivalente al <strong>(20%–35%) de la DEF de Poberto</strong> durante 2 turnos. Si el escudo se rompe antes de tiempo, el aliado recupera un <strong>10% de su HP Máximo</strong>.'
      },
      {
        icon:'🌟', name:'Protectora del Bosque', type:'Ultimate',
        flavor:'Cierra los ojos y una cúpula de luz eléctrica se expande desde ella.',
        desc:'Otorga a todos los aliados un <strong>Escudo</strong> equivalente al <strong>(25%–45%) de la DEF de Poberto</strong> durante 2 turnos. Aumenta la DEF de todos los aliados en un <strong>20%</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Guardiana Seria', type:'Talento',
        flavor:'Antes de que empiece la batalla, Poberto ya tiene su máscara puesta.',
        desc:'Al inicio del combate, otorga un <strong>Escudo del 15% de su HP Máximo</strong> a todo el equipo durante 2 turnos.'
      },
    ],
    passives:[
      { name:'Defensa Mejorada', desc:'Aumenta la DEF de Poberto en un <strong>15%</strong>.' },
      { name:'Manto Duradero', desc:'Los escudos que otorga Poberto duran <strong>3 turnos</strong> en lugar de 2.' },
      { name:'Aura Protectora', desc:'Al inicio de su turno, recupera un <strong>3% de su HP Máximo</strong> por cada aliado con escudo activo.' }
    ],
    pings:[
      { n:1, name:'Runas de Protección', desc:'Los escudos de Poberto son un <strong>20% más fuertes</strong>.' },
      { n:2, name:'Aura Eléctrica', desc:'Los aliados con escudo devuelven un <strong>10% del daño recibido</strong> como Daño de Rayo.' },
      { n:3, name:'Manto Reforzado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Conejo de la Suerte', desc:'Al romperse un escudo, el aliado gana <strong>+15% de VEL</strong> durante 1 turno.' },
      { n:5, name:'Protectora Suprema', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Luz del Bosque', desc:'Al usar la Ultimate, limpia <strong>1 debuff</strong> de todos los aliados.' }
    ]
},
{
    id:14, name:'Yanfei', tagline:'"Las linternas vuelan alto, pero sus palabras vuelan más lejos."',
    element:'fuego', rarity:4, role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
    art:'Personajes 1.0 - tanda 2/Yanfei.png',
    stats:{
      HP:590, ATQ:310, DEF:140, VEL:109,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Chispa de Tinta', type:'Ataque Básico',
        flavor:'Una chispa ardiente envuelta en caligrafía.',
        desc:'Inflige <strong>(45%–100% del ATQ)</strong> como Daño de Fuego a un enemigo.'
      },
      {
        icon:'🔥', name:'Lluvia de Linternas', type:'Habilidad',
        flavor:'Yanfei lanza una ráfaga de linternas que explotan en llamas.',
        desc:'Inflige <strong>(80%–160% del ATQ)</strong> como Daño de Fuego a un enemigo y adyacentes. Aplica <strong>"Quemadura"</strong> al objetivo principal: daño de Fuego del <strong>30% del ATQ</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Firmamento Ígneo', type:'Ultimate',
        flavor:'El cielo se ilumina con cientos de linternas que caen sobre el campo.',
        desc:'Inflige <strong>(130%–280% del ATQ)</strong> como Daño de Fuego a todos los enemigos. Aplica <strong>"Quemadura"</strong> a todos (20% del ATQ, 2 turnos). Otorga a los aliados <strong>+15% de ATQ</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Sabia de las Llamas', type:'Talento',
        flavor:'El conocimiento arde eternamente.',
        desc:'Cuando un enemigo muere mientras está Quemado, Yanfei recupera <strong>10 puntos de Energía</strong>.'
      },
    ],
    passives:[
      { name:'Fuego Persistente', desc:'La Quemadura dura <strong>3 turnos</strong> en lugar de 2.' },
      { name:'Llama Interior', desc:'Aumenta el Daño de Fuego de Yanfei en un <strong>10%</strong>.' },
      { name:'Prendida', desc:'Al inicio del combate, aplica Quemadura a un enemigo aleatorio.' }
    ],
    pings:[
      { n:1, name:'Prólogo Ardiente', desc:'El daño de la Quemadura aumenta al <strong>40% del ATQ</strong>.' },
      { n:2, name:'Manuscrito Brillante', desc:'Los enemigos con Quemadura tienen un <strong>-15% de DEF</strong>.' },
      { n:3, name:'Caligrafía Veloz', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Palabras Curativas', desc:'Al aplicar Quemadura, Yanfei recupera un <strong>5% de su HP Máximo</strong>.' },
      { n:5, name:'Firmamento Eterno', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Último Capítulo', desc:'La Ultimate ahora aplica <strong>dos acumulaciones de Quemadura</strong>.' }
    ]
},
{
    id:15, name:'Koenig', tagline:'"Cuando ella marca el ritmo, todo el server acelera."',
    element:'aero', rarity:4, role:'Soporte / Batería (Recarga de Energía)', paradigma:'Paradigma del Partner',
    art:'Personajes 1.0 - tanda 2/Koenig.png',
    stats:{
      HP:580, ATQ:280, DEF:170, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Viento':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Baquetazo Simple', type:'Ataque Básico',
        flavor:'Golpea al enemigo con una baqueta, dejando una estela de notas musicales.',
        desc:'Inflige <strong>(40%–90% del ATQ)</strong> como Daño de Viento a un enemigo.'
      },
      {
        icon:'🔥', name:'Redoble de Energía', type:'Habilidad',
        flavor:'Koenig toca un redoble frenético en su batería. Las ondas sonoras recargan a sus aliados.',
        desc:'Inflige <strong>(60%–130% del ATQ)</strong> como Daño de Viento a un enemigo. Otorga <strong>15 puntos de Energía</strong> a todos los aliados (excepto Koenig).'
      },
      {
        icon:'🌟', name:'Gran Final del Festival', type:'Ultimate',
        flavor:'Salta sobre su batería y golpea todos los platillos a la vez.',
        desc:'Inflige <strong>(100%–210% del ATQ)</strong> como Daño de Viento a todos los enemigos. Otorga a todos los aliados <strong>+20% de ATQ y +10% de VEL</strong> durante 2 turnos. Avanza la acción de todos los aliados en un <strong>15%</strong>.'
      },
      {
        icon:'🧠', name:'Ritmo Constante', type:'Talento',
        flavor:'Sin importar lo que pase, Koenig nunca pierde el pulso.',
        desc:'Al inicio del turno de Koenig, otorga <strong>5 puntos de Energía</strong> a un aliado aleatorio.'
      },
    ],
    passives:[
      { name:'Tempo Vivo', desc:'Aumenta la VEL de Koenig en un <strong>10%</strong>.' },
      { name:'Redoble Amplificado', desc:'La Habilidad ahora otorga <strong>20 puntos de Energía</strong> en lugar de 15.' },
      { name:'Energía Inicial', desc:'Al inicio del combate, otorga <strong>10 puntos de Energía</strong> a todos los aliados.' }
    ],
    pings:[
      { n:1, name:'Canción de Apertura', desc:'Al inicio del combate, otorga <strong>+10% de VEL</strong> a todos los aliados durante 2 turnos.' },
      { n:2, name:'Ritmo Imparable', desc:'Al usar la Habilidad, los aliados ganan <strong>+15% de ATQ</strong> durante 1 turno.' },
      { n:3, name:'Maestría del Redoble', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Energía en las Gradas', desc:'La Ultimate ahora otorga <strong>15 puntos de Energía</strong> a todos los aliados.' },
      { n:5, name:'Ovación Final', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Sinfonía del Server', desc:'El Talento ahora otorga Energía a <strong>dos aliados</strong> en lugar de uno.' }
    ]
},
{
    id:16, name:'Tako', tagline:'"GG, IRL. La realidad acaba de crashear."',
    element:'electro', rarity:4, role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
    art:'Personajes 1.0 - tanda 2/Tako.png',
    stats:{
      HP:590, ATQ:340, DEF:150, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Paquete de Datos', type:'Ataque Básico',
        flavor:'Un icono de app sale disparado, dejando un rastro de píxeles.',
        desc:'Inflige <strong>(45%–100% del ATQ)</strong> como Daño de Rayo a un enemigo.'
      },
      {
        icon:'🔥', name:'Crtl + Z (Deshacer)', type:'Habilidad',
        flavor:'Teclea furiosamente y una onda de estática distorsiona la realidad.',
        desc:'Inflige <strong>(80%–170% del ATQ)</strong> como Daño de Rayo a un enemigo y adyacentes. Aplica <strong>"Lag"</strong> (2 turnos): reduce la VEL en un <strong>20%</strong>.'
      },
      {
        icon:'🌟', name:'Pantallazo Azul de la Muerte', type:'Ultimate',
        flavor:'Un enorme mensaje de error inunda el campo de batalla.',
        desc:'Inflige <strong>(160%–340% del ATQ)</strong> como Daño de Rayo a todos los enemigos. Aplica <strong>"Lag"</strong> a todos (2 turnos). El siguiente ataque de cada enemigo con "Lag" tiene un <strong>50% de probabilidad de fallar</strong> (se consume tras un ataque).'
      },
      {
        icon:'🧠', name:'Error 404', type:'Talento',
        flavor:'Recolecta datos residuales para seguir hackeando.',
        desc:'Cuando un enemigo con "Lag" es derrotado, Tako recupera <strong>15 puntos de Energía</strong>.'
      },
    ],
    passives:[
      { name:'Ping Alto', desc:'Los enemigos con "Lag" también ven reducida su DEF en un <strong>10%</strong>.' },
      { name:'Overclock', desc:'Aumenta la VEL de Tako en un <strong>10%</strong>.' },
      { name:'Vulnerabilidad Inicial', desc:'Al inicio del combate, aplica "Lag" a un enemigo aleatorio.' }
    ],
    pings:[
      { n:1, name:'Bug Crítico', desc:'"Lag" ahora reduce la VEL en un <strong>30%</strong>.' },
      { n:2, name:'Código Malicioso', desc:'El fallo por "Lag" ahora es del <strong>75%</strong>.' },
      { n:3, name:'Script Mejorado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Cortafuegos Dañado', desc:'Los enemigos con "Lag" reciben un <strong>15% más de daño de Rayo</strong>.' },
      { n:5, name:'Crash del Sistema', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Apagado Forzoso', desc:'La Ultimate ahora aplica <strong>Aturdimiento</strong> (1 turno) a los enemigos que ya tenían "Lag".' }
    ]
},
{
    id:17, name:'Zenkin', tagline:'"Dicen que su cola da suerte... y sus regalos, victoria."',
    element:'aero', rarity:4, role:'Soporte / Buffer', paradigma:'Paradigma del Boost',
    art:'Personajes 1.0 - tanda 2/Zenkin.png',
    stats:{
      HP:600, ATQ:270, DEF:165, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Viento':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Golpe de Garras', type:'Ataque Básico',
        flavor:'Un zarpazo juguetón que deja una estela verde esmeralda.',
        desc:'Inflige <strong>(40%–85% del ATQ)</strong> como Daño de Viento a un enemigo.'
      },
      {
        icon:'🔥', name:'¡Regalo Relámpago!', type:'Habilidad',
        flavor:'Lanza una caja de regalo que explota en confeti y tréboles brillantes.',
        desc:'Inflige <strong>(70%–150% del ATQ)</strong> como Daño de Viento a un enemigo y adyacentes. Otorga a un aliado aleatorio <strong>+25% de ATQ</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Lluvia de Tréboles', type:'Ultimate',
        flavor:'Cajas de regalo con forma de trébol caen como meteoritos verdes.',
        desc:'Inflige <strong>(100%–220% del ATQ)</strong> como Daño de Viento a todos los enemigos. Otorga a todos los aliados <strong>+20% ATQ, +15% VEL y +15% DEF</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Cola de la Suerte', type:'Talento',
        flavor:'Su cola en forma de corazón lanza chispas de buena fortuna.',
        desc:'Al inicio del turno de Zenkin, otorga <strong>+10% de ATQ</strong> a un aliado aleatorio durante 1 turno.'
      },
    ],
    passives:[
      { name:'Bendición Prolongada', desc:'Los buffs de Zenkin duran <strong>3 turnos</strong> en lugar de 2.' },
      { name:'Garra Afilada', desc:'Aumenta el ATQ de Zenkin en un <strong>10%</strong>.' },
      { name:'Suerte Inicial', desc:'Al inicio del combate, otorga <strong>+15% de ATQ</strong> a todos los aliados durante 2 turnos.' }
    ],
    pings:[
      { n:1, name:'Paquete Prioritario', desc:'El buff de la Habilidad ahora es <strong>+40% de ATQ</strong>.' },
      { n:2, name:'Envío a Domicilio', desc:'El Talento ahora otorga <strong>+15% de ATQ</strong> en lugar de +10% (durante 1 turno).' },
      { n:3, name:'Regalo Relámpago', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Devolución Gratis', desc:'Al recibir un buff, el aliado recupera <strong>5 puntos de Energía</strong>.' },
      { n:5, name:'Lluvia Express', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Caja del Destino', desc:'La Ultimate ahora también otorga <strong>+20% de Daño Crítico</strong> a los aliados.' }
    ]
},
{
    id:18, name:'Dawn', tagline:'"Dicen que su aliento congela el alma... pero su magia congela el tiempo."',
    element:'crio', rarity:4, role:'Main DPS', paradigma:'Paradigma del Baneo',
    art:'Personajes 1.0 - tanda 1/Dawn.png',
    stats:{
      HP:500, ATQ:350, DEF:120, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Hielo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Astilla de Hielo', type:'Ataque Básico',
        flavor:'Lanza una pequeña estaca de hielo que silba al cortar el aire.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Hielo a un enemigo.'
      },
      {
        icon:'🔥', name:'Ráfaga Gélida', type:'Habilidad',
        flavor:'Una ráfaga de viento helado con fragmentos de hielo envuelve a los enemigos.',
        desc:'Inflige <strong>(80%–170% del ATQ)</strong> como Daño de Hielo a un enemigo y adyacentes. Aplica <strong>Ralentización</strong> (-20% VEL) durante 2 turnos a los enemigos golpeados.'
      },
      {
        icon:'🌟', name:'Alud de Cristal', type:'Ultimate',
        flavor:'Dos círculos mágicos se abren y una avalancha de estacas de hielo cae sobre el campo.',
        desc:'Inflige <strong>(180%–350% del ATQ)</strong> como Daño de Hielo a todos los enemigos. Aplica <strong>Congelación</strong> (Aturdimiento) durante 1 turno a los enemigos que ya estaban Ralentizados.'
      },
      {
        icon:'🧠', name:'Vientos Gélidos', type:'Talento',
        flavor:'El frío que emana Dawn es más intenso contra quienes ya están tiritando.',
        desc:'Aumenta el Daño de Hielo de Dawn en un <strong>15%</strong> contra enemigos Ralentizados o Congelados.'
      },
    ],
    passives:[
      { name:'Escarcha Severa', desc:'La Ralentización ahora reduce la VEL en un <strong>30%</strong>.' },
      { name:'Ventisca Inminente', desc:'Al inicio del combate, aplica Ralentización a todos los enemigos durante 1 turno.' },
      { name:'Poder Gélido', desc:'Aumenta el ATQ de Dawn en un <strong>10%</strong>.' }
    ],
    pings:[
      { n:1, name:'Carámbano Afilado', desc:'El Ataque Básico ahora golpea también a un enemigo adyacente.' },
      { n:2, name:'Frío Cortante', desc:'El daño contra enemigos Ralentizados o Congelados aumenta un <strong>20%</strong>.' },
      { n:3, name:'Ráfaga Afilada', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Barrera de Hielo', desc:'Al usar la Habilidad, obtiene un <strong>Escudo del 10% de su HP Máximo</strong> durante 2 turnos.' },
      { n:5, name:'Alud Devastador', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Tormenta Eterna', desc:'La Ultimate ahora siempre aplica <strong>Congelación</strong>, sin necesidad de Ralentización previa.' }
    ]
},
{
    id:19, name:'Reguta', tagline:'"Diez mil millones por ciento calculado. La victoria es inevitable."',
    element:'electro', rarity:4, role:'Soporte / Buffer', paradigma:'Paradigma del Partner',
    art:'Personajes 1.0 - tanda 2/Reguta.png',
    stats:{
      HP:620, ATQ:250, DEF:185, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Rayo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Tiza de la Pizarra', type:'Ataque Básico',
        flavor:'Lanza un pedazo de tiza que deja una pequeña estela eléctrica al impactar.',
        desc:'Inflige <strong>(40%–85% del ATQ)</strong> como Daño de Rayo a un enemigo.'
      },
      {
        icon:'🔥', name:'Fórmula de la Velocidad', type:'Habilidad',
        flavor:'Garabatea rápidamente en su bloc y una fórmula matemática envuelve al aliado.',
        desc:'Otorga a un aliado <strong>+25% de VEL y +15% de ATQ</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Momento Eureka', type:'Ultimate',
        flavor:'Una bombilla gigante se enciende y el aliado recibe una descarga de inspiración pura.',
        desc:'Otorga un <strong>turno extra inmediato</strong> a un aliado. Limpia todos sus debuffs y gana <strong>+30% de ATQ</strong> durante ese turno extra.'
      },
      {
        icon:'🧠', name:'Mente Brillante', type:'Talento',
        flavor:'Siempre está pensando, siempre encuentra la solución más eficiente.',
        desc:'Al inicio del turno de Reguta, otorga <strong>5 puntos de Energía</strong> a un aliado aleatorio.'
      },
    ],
    passives:[
      { name:'Inspiración Matemática', desc:'La Habilidad ahora también otorga <strong>+10% de Daño Crítico</strong> al aliado.' },
      { name:'Mente Acelerada', desc:'Aumenta la VEL de Reguta en un <strong>10%</strong>.' },
      { name:'Preparación de Laboratorio', desc:'Al inicio del combate, otorga <strong>10 puntos de Energía</strong> a todos los aliados.' }
    ],
    pings:[
      { n:1, name:'Revisión por Pares', desc:'El buff de VEL de la Habilidad aumenta a <strong>+35%</strong>.' },
      { n:2, name:'Experimento Exitoso', desc:'Al otorgar un turno extra con la Ultimate, el aliado también gana <strong>+20% de Daño Crítico</strong>.' },
      { n:3, name:'Teorema Aplicado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Beca de Investigación', desc:'La Ultimate ahora también otorga <strong>+15% de VEL</strong> a todos los aliados durante 2 turnos.' },
      { n:5, name:'Artículo Publicado', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Premio Nobel', desc:'La Ultimate ahora otorga turno extra a <strong>dos aliados</strong>: al objetivo principal y al aliado con menor HP.' }
    ]
},
{
    id:20, name:'Nanaomi', tagline:'"Cada movimiento enemigo es solo un dato más... que puedo ralentizar."',
    element:'caos', rarity:4, role:'Debuffer / Control de Masas', paradigma:'Paradigma del Mute',
    art:'Personajes 1.0 - tanda 2/Nanaomi.png',
    stats:{
      HP:610, ATQ:300, DEF:170, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Vacío':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Orbe Gravitatorio', type:'Ataque Básico',
        flavor:'Una pequeña esfera oscura que distorsiona el aire a su paso.',
        desc:'Inflige <strong>(45%–100% del ATQ)</strong> como Daño de Vacío a un enemigo.'
      },
      {
        icon:'🔥', name:'Colapso del Horizonte', type:'Habilidad',
        flavor:'Comprime la gravedad en su mano y la libera, creando un cono de distorsión.',
        desc:'Inflige <strong>(80%–170% del ATQ)</strong> como Daño de Vacío a un enemigo y adyacentes. Reduce la VEL de los enemigos golpeados en un <strong>25%</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Singularidad del Archivo', type:'Ultimate',
        flavor:'Un agujero negro se abre sobre el campo, succionando la luz.',
        desc:'Inflige <strong>(150%–320% del ATQ)</strong> como Daño de Vacío a todos los enemigos. Retrasa el turno de todos los enemigos en un <strong>30%</strong> y reduce su VEL en un <strong>20%</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Ley de Gravitación Universal', type:'Talento',
        flavor:'Su sola presencia altera la física del campo de batalla.',
        desc:'Al inicio del combate, reduce la VEL de todos los enemigos en un <strong>10%</strong> durante 2 turnos.'
      },
    ],
    passives:[
      { name:'Pozo Gravitatorio', desc:'La reducción de VEL de la Habilidad aumenta al <strong>35%</strong>.' },
      { name:'Masa Curvada', desc:'Los enemigos con VEL reducida también pierden un <strong>10% de DEF</strong>.' },
      { name:'Precisión Cuántica', desc:'Aumenta el Acierto de Efecto de Nanaomi en un <strong>15%</strong>.' }
    ],
    pings:[
      { n:1, name:'Física Teórica', desc:'La reducción de VEL inicial del Talento aumenta al <strong>15%</strong>.' },
      { n:2, name:'Ondas Gravitatorias', desc:'El Ataque Básico ahora golpea a un enemigo adicional.' },
      { n:3, name:'Colapso Controlado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Repositorio Infinito', desc:'Al usar la Ultimate, recupera <strong>15 puntos de Energía</strong>.' },
      { n:5, name:'Vacío Absoluto', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'El Gran Colapso', desc:'El retraso de turno de la Ultimate aumenta al <strong>50%</strong>.' }
    ]
},
{
    id:21, name:'Sofi', tagline:'"¿Quieres ver un truco de magia? Solo tengo que tirar de esto..."',
    element:'fuego', rarity:4, role:'Main DPS / AoE', paradigma:'Paradigma del Raid',
    art:'Personajes 1.0 - tanda 2/Sofi.png',
    stats:{
      HP:550, ATQ:350, DEF:135, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Patada Voladora', type:'Ataque Básico',
        flavor:'Un golpe acrobático con la pierna que deja una estela de chispas.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Fuego a un enemigo.'
      },
      {
        icon:'🔥', name:'Explosión Controlada', type:'Habilidad',
        flavor:'Lanza una granada casera que detona en el centro del grupo enemigo.',
        desc:'Inflige <strong>(120%–240% del ATQ)</strong> como Daño de Fuego a todos los enemigos. Sofi pierde un <strong>10% de su HP actual</strong> (mínimo 1 HP).'
      },
      {
        icon:'🌟', name:'Flor de Explosiones', type:'Ultimate',
        flavor:'Salta al centro y canaliza una serie de explosiones en cadena.',
        desc:'Inflige <strong>(200%–380% del ATQ)</strong> como Daño de Fuego a todos los enemigos. Si Sofi está por debajo del 50% de HP, ignora un <strong>20% de la DEF</strong> enemiga. Aplica <strong>Quemadura</strong> (30% del ATQ, 2 turnos) a todos.'
      },
      {
        icon:'🧠', name:'Adrenalina Explosiva', type:'Talento',
        flavor:'Cuanto más daño recibe, más peligrosa se vuelve.',
        desc:'Aumenta el Daño de Fuego de Sofi en un <strong>15%</strong> cuando su HP está por debajo del 50%.'
      },
    ],
    passives:[
      { name:'Carga Controlada', desc:'La pérdida de HP de la Habilidad se reduce al <strong>5%</strong>.' },
      { name:'Segundo Aire', desc:'Al derrotar a un enemigo, recupera un <strong>10% de su HP Máximo</strong>.' },
      { name:'Furia Explosiva', desc:'Aumenta el ATQ de Sofi en un <strong>10%</strong>.' }
    ],
    pings:[
      { n:1, name:'Explosión en Cadena', desc:'La Habilidad ahora también aplica <strong>Quemadura</strong> al objetivo principal.' },
      { n:2, name:'Metralla Incendiaria', desc:'La Quemadura de la Ultimate dura <strong>3 turnos</strong> en lugar de 2.' },
      { n:3, name:'Bomba de Fragmentación', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Absorción de Fuego', desc:'Por debajo del 50% de HP, los ataques de Sofi curan un <strong>10% del daño infligido</strong>.' },
      { n:5, name:'Apocalipsis Ahora', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'La Mecha Final', desc:'Al morir, explota infligiendo un <strong>200% de su ATQ</strong> como Daño de Fuego a todos los enemigos (una vez por batalla).' }
    ]
},
{
    id:22, name:'Areku', tagline:'"¿Quieres pedir un deseo? Solo tienes que firmar aquí..."',
    element:'caos', rarity:4, role:'SubDPS / Debuffer', paradigma:'Paradigma del Warn',
    art:'Personajes 1.0 - tanda 1/Areku.png',
    stats:{
      HP:580, ATQ:320, DEF:160, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Vacío':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Corte del Aparición', type:'Ataque Básico',
        flavor:'Un tajo rápido y sucio con su cuchillo, dejando un rastro de tinta negra.',
        desc:'Inflige <strong>(45%–100% del ATQ)</strong> como Daño de Vacío a un enemigo.'
      },
      {
        icon:'🔥', name:'¡Talismán Sellador!', type:'Habilidad',
        flavor:'Lanza un ofuda que se pega al enemigo, cubriéndolo con marcas rojas.',
        desc:'Inflige <strong>(70%–150% del ATQ)</strong> como Daño de Vacío a un enemigo. Aplica un <strong>"Sello"</strong> (3 turnos): -15% DEF y -10% VEL.'
      },
      {
        icon:'🌟', name:'Se Rompió el Séptimo Misterio', type:'Ultimate',
        flavor:'Las ventanas estallan, los talismanes vuelan y Areku libera su verdadero poder.',
        desc:'Inflige <strong>(160%–340% del ATQ)</strong> como Daño de Vacío a todos los enemigos. Consume todos los Sellos activos: cada uno añade un <strong>20% de daño adicional</strong> y aplica <strong>"Maldición del Misterio"</strong> (2 turnos, +10% daño de Vacío recibido).'
      },
      {
        icon:'🧠', name:'Presencia Inquietante', type:'Talento',
        flavor:'Siempre hay un susurro en el pasillo que pone nerviosos a los enemigos.',
        desc:'Al inicio del turno de Areku, aplica un <strong>Sello</strong> a un enemigo aleatorio que no tenga uno.'
      },
    ],
    passives:[
      { name:'Sello Debilitador', desc:'El Sello ahora reduce la DEF en un <strong>20%</strong>.' },
      { name:'Poder del Misterio', desc:'Aumenta el Daño de Vacío de Areku en un <strong>10%</strong>.' },
      { name:'Aula del Terror', desc:'Al inicio del combate, aplica un Sello a <strong>todos los enemigos</strong>.' }
    ],
    pings:[
      { n:1, name:'Misterio del Reloj', desc:'El Sello ahora dura <strong>4 turnos</strong> en lugar de 3.' },
      { n:2, name:'Corte del Vínculo', desc:'Los enemigos con Sello reciben un <strong>15% más de daño de Vacío</strong>.' },
      { n:3, name:'Exorcismo Acelerado', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Travesura del Fantasma', desc:'Al consumir un Sello con la Ultimate, Areku recupera un <strong>10% de su HP Máximo</strong>.' },
      { n:5, name:'Misterio Revelado', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'El Pasillo Infinito', desc:'Al usar la Ultimate, aplica un <strong>Sello</strong> a todos los enemigos después del daño.' }
    ]
},
{
    id:23, name:'Harriet', tagline:'"¡N-No es como si quisiera ayudarte, b-baka!"',
    element:'hidro', rarity:4, role:'Soporte / Control de Masas', paradigma:'Paradigma del Mute',
    art:'Personajes 1.0 - tanda 1/Harriet.png',
    stats:{
      HP:640, ATQ:270, DEF:195, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Agua':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Golpe de Cuaderno', type:'Ataque Básico',
        flavor:'Cierra su cuaderno de hechizos y lo lanza con furia contenida.',
        desc:'Inflige <strong>(40%–85% del ATQ)</strong> como Daño de Agua a un enemigo.'
      },
      {
        icon:'🔥', name:'¡Sonrojada y Furiosa!', type:'Habilidad',
        flavor:'Se sonroja intensamente y dos pequeños Chibis aparecen para descargar su frustración.',
        desc:'Invoca 2 <strong>Chibis</strong> que orbitan a su alrededor durante 3 turnos. Al inicio de cada turno de Harriet, cada Chibi aplica un efecto aleatorio a un enemigo: <strong>Chibi ! (Pánico)</strong> -15% VEL 1 turno; <strong>Chibi ?! (Frustración)</strong> -15% DEF 1 turno; <strong>Chibi ? (Confusión)</strong> 30% prob. de Aturdir 1 turno.'
      },
      {
        icon:'🌟', name:'Desastre Mágico Total', type:'Ultimate',
        flavor:'El gran círculo rúnico se activa y los cuatro Chibis aparecen a la vez.',
        desc:'Inflige <strong>(120%–260% del ATQ)</strong> como Daño de Agua a todos los enemigos. Invoca los <strong>4 Chibis al mismo tiempo</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Límite de la Paciencia', type:'Talento',
        flavor:'Cuando la molestan demasiado, explota.',
        desc:'Al recibir un golpe crítico, el siguiente ataque de Harriet ignora un <strong>15% de la DEF</strong> del enemigo.'
      },
    ],
    passives:[
      { name:'Chibis Persistentes', desc:'Los Chibis ahora duran <strong>4 turnos</strong> en lugar de 3.' },
      { name:'Recarga Emocional', desc:'Al invocar Chibis, Harriet recupera <strong>10 puntos de Energía</strong>.' },
      { name:'Invocación Inicial', desc:'Al inicio del combate, invoca <strong>1 Chibi</strong> automáticamente.' }
    ],
    pings:[
      { n:1, name:'Invocación Perfecta', desc:'La Habilidad ahora invoca <strong>3 Chibis</strong> en lugar de 2.' },
      { n:2, name:'Chismes Mágicos', desc:'Los efectos de los Chibis duran <strong>2 turnos</strong> en lugar de 1.' },
      { n:3, name:'Control de Daños', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Tsundere Defensiva', desc:'Mientras tiene al menos 1 Chibi activo, Harriet recibe un <strong>15% menos de daño</strong>.' },
      { n:5, name:'Bomba de Sentimientos', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Ataque de las Mini-Harriet', desc:'Al usar la Ultimate, los 4 Chibis aplican sus efectos inmediatamente.' }
    ]
},
{
    id:24, name:'Alelin', tagline:'"¡TRES... DOS... UNO... ¡FUEGO!"',
    element:'fuego', rarity:4, role:'Main DPS / AoE', paradigma:'Paradigma del Raid',
    art:'Personajes 1.0 - tanda 1/Alelin.png',
    stats:{
      HP:520, ATQ:350, DEF:130, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Plomizo Rosa', type:'Ataque Básico',
        flavor:'Dispara una bala con su revólver que deja una estela fucsia.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Fuego a un enemigo.'
      },
      {
        icon:'🔥', name:'¡Piñata de Chatarra!', type:'Habilidad',
        flavor:'Lanza una granada casera que rebota y explota en una lluvia de metralla.',
        desc:'Inflige <strong>(80%–170% del ATQ)</strong> como Daño de Fuego a un enemigo y adyacentes. Si hay 3+ enemigos en el campo, el daño se repite una vez adicional con un 50% de daño.'
      },
      {
        icon:'🌟', name:'¡Hora del Gran \'Boom\'!', type:'Ultimate',
        flavor:'Apunta su lanzacohetes al centro de la batalla y vacía el cargador.',
        desc:'Inflige <strong>(200%–380% del ATQ)</strong> como Daño de Fuego a todos los enemigos. Alelin pierde un <strong>15% de su HP actual</strong> (mínimo 1 HP).'
      },
      {
        icon:'🧠', name:'Demolicionista Experta', type:'Talento',
        flavor:'Cuanto más caos, más disfruta.',
        desc:'Aumenta el Daño de Fuego de Alelin en un <strong>5% por cada enemigo en el campo</strong> (máx. +25%).'
      },
    ],
    passives:[
      { name:'Metralla Repetida', desc:'La Habilidad ahora siempre se repite una vez, sin importar la cantidad de enemigos.' },
      { name:'Reciclaje Explosivo', desc:'Al derrotar a un enemigo, recupera un <strong>5% de su HP Máximo</strong>.' },
      { name:'Potencia de Fuego', desc:'Aumenta el ATQ de Alelin en un <strong>10%</strong>.' }
    ],
    pings:[
      { n:1, name:'Sobrecalentamiento', desc:'La Habilidad ahora golpea a <strong>todos los enemigos</strong> en lugar de a un enemigo y adyacentes.' },
      { n:2, name:'Explosión en Cadena', desc:'Los enemigos derrotados por Alelin explotan, infligiendo un <strong>20% del ATQ</strong> a los enemigos adyacentes.' },
      { n:3, name:'Fuego Amigo', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Adrenalina Pura', desc:'Por debajo del 50% de HP, el daño de Alelin aumenta un <strong>20%</strong>.' },
      { n:5, name:'Apocalipsis Ahora', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Prohibido Apagar', desc:'La Ultimate ya no consume HP al usarla.' }
    ]
},
{
    id:25, name:'Escarlata', tagline:'"Donde su báculo apunta, la noche se llena de esperanza."',
    element:'celestial', rarity:4, role:'Sanadora / Soporte', paradigma:'Paradigma del Soporte Técnico',
    art:'Personajes 1.0 - tanda 1/Escarlata.png',
    stats:{
      HP:710, ATQ:220, DEF:190, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Luz':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Chispa Polar', type:'Ataque Básico',
        flavor:'Un pequeño destello de luz fría que golpea como un copo de nieve.',
        desc:'Inflige <strong>(40%–85% del ATQ)</strong> como Daño de Luz a un enemigo.'
      },
      {
        icon:'🔥', name:'Manto de Estrellas', type:'Habilidad',
        flavor:'Alza su báculo y un haz de luz envuelve al aliado, tejiendo un escudo con la luz de las estrellas.',
        desc:'Otorga a un aliado un <strong>Escudo</strong> equivalente al <strong>(20%–35%) del HP Máximo de Escarlata</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Santuario de la Aurora', type:'Ultimate',
        flavor:'El rosetón dorado se abre por completo. Una lluvia de luz estelar envuelve a todos los aliados.',
        desc:'Cura a todos los aliados en un <strong>(30%–50%) del HP Máximo de Escarlata + 200</strong>. Otorga a todos los aliados un <strong>Escudo del 15% del HP Máximo de Escarlata</strong> durante 2 turnos.'
      },
      {
        icon:'🧠', name:'Luz Sanadora', type:'Talento',
        flavor:'Su sola presencia reconforta a los heridos.',
        desc:'Al inicio del turno de Escarlata, cura al aliado con menor HP un <strong>8% del HP Máximo de Escarlata</strong>.'
      },
    ],
    passives:[
      { name:'Manto Restaurador', desc:'La Habilidad ahora también cura al aliado un <strong>10% del HP Máximo de Escarlata</strong> antes de aplicar el Escudo.' },
      { name:'Escudos Duraderos', desc:'Los Escudos de Escarlata duran <strong>3 turnos</strong> en lugar de 2.' },
      { name:'Vitalidad Celestial', desc:'Aumenta el HP de Escarlata en un <strong>15%</strong>.' }
    ],
    pings:[
      { n:1, name:'Constelación Mayor', desc:'La curación de la Ultimate aumenta un <strong>20%</strong>.' },
      { n:2, name:'Cúmulo Estelar', desc:'Los aliados con Escudo de Escarlata ganan <strong>+10% de ATQ</strong>.' },
      { n:3, name:'Maestría Protectora', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Nébula Curativa', desc:'Al romperse un Escudo de Escarlata, el aliado se cura un <strong>10% de su HP Máximo</strong>.' },
      { n:5, name:'Aurora Eterna', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Corona Boreal', desc:'La Ultimate ahora <strong>revive a un aliado caído</strong> con un 20% de su HP Máximo (una vez por batalla).' }
    ]
},
{
    id:26, name:'Abril', tagline:'"Un pequeño amigo puede traer la bendición más grande."',
    element:'hidro', rarity:4, role:'Soporte / Buffer', paradigma:'Paradigma del Boost',
    art:'Personajes 1.0 - tanda 1/Abril.png',
    stats:{
      HP:690, ATQ:250, DEF:180, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Agua':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Orbe Zorruno', type:'Ataque Básico',
        flavor:'Lanza un pequeño fuego fatuo azul que persigue al enemigo.',
        desc:'Inflige <strong>(45%–100% del ATQ)</strong> como Daño de Agua a un enemigo.'
      },
      {
        icon:'🔥', name:'Favor del Guardián', type:'Habilidad',
        flavor:'Silba y una cola de zorro hecha de agua envuelve al aliado, llenándolo de energía.',
        desc:'Otorga a un aliado <strong>+30% de ATQ y +15% de VEL</strong> durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Danza de las Nueve Colas', type:'Ultimate',
        flavor:'Nueve colas de agua se despliegan y una lluvia de cascabeles dorados cae sobre sus aliados.',
        desc:'Otorga a todos los aliados <strong>+25% ATQ, +15% VEL y +15% DEF</strong> durante 2 turnos. Cura a todos los aliados un <strong>15% del HP Máximo de Abril</strong>.'
      },
      {
        icon:'🧠', name:'Cola de la Suerte', type:'Talento',
        flavor:'Su cola se agita y derrama buena fortuna sobre quien más la necesita.',
        desc:'Al inicio del turno de Abril, otorga <strong>+10% de ATQ</strong> al aliado con mayor ATQ durante 1 turno.'
      },
    ],
    passives:[
      { name:'Bendición Duradera', desc:'Los buffs de Abril duran <strong>3 turnos</strong> en lugar de 2.' },
      { name:'Recarga Zoruna', desc:'Al usar la Habilidad, el aliado también recupera <strong>10 puntos de Energía</strong>.' },
      { name:'Agilidad Felina', desc:'Aumenta la VEL de Abril en un <strong>10%</strong>.' }
    ],
    pings:[
      { n:1, name:'Primera Cola', desc:'La Habilidad ahora otorga <strong>+45% de ATQ</strong> en lugar de +30%.' },
      { n:2, name:'Travesura Mágica', desc:'La Ultimate ahora también otorga <strong>+20% de Daño Crítico</strong> a los aliados.' },
      { n:3, name:'Evolución Acelerada', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Guardia Instintiva', desc:'Al recibir un buff de Abril, el aliado gana un <strong>Escudo del 10% del HP Máximo de Abril</strong> durante 1 turno.' },
      { n:5, name:'Deidad del Cielo', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'El Zorro de la Leyenda', desc:'La Ultimate ahora <strong>revive a un aliado caído</strong> con un 20% de su HP Máximo (una vez por batalla).' }
    ]
},
{
    id:27, name:'AlexTMZ', tagline:'"Su espada es el ancla de la ventisca. Donde se clava, nadie pasa."',
    element:'crio', rarity:4, role:'Main DPS / Control de Zona', paradigma:'Paradigma del Raid',
    art:'Personajes 1.0 - tanda 1/AlexTMZ.png',
    stats:{
      HP:600, ATQ:350, DEF:185, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Hielo':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Tajo Invernal', type:'Ataque Básico',
        flavor:'Un corte amplio con su mandoble, dejando una estela de escarcha.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño de Hielo a un enemigo.'
      },
      {
        icon:'🔥', name:'Plantar Estandarte', type:'Habilidad',
        flavor:'Clava su espada en el suelo y una explosión de hielo brota a su alrededor.',
        desc:'Inflige <strong>(120%–240% del ATQ)</strong> como Daño de Hielo a todos los enemigos. Aplica <strong>Ralentización</strong> (-20% VEL) a todos los enemigos durante 2 turnos.'
      },
      {
        icon:'🌟', name:'Cataclismo de la Aurora', type:'Ultimate',
        flavor:'La catedral resuena. Alex libera todo el poder de su espada en una avalancha de cristales.',
        desc:'Inflige <strong>(200%–380% del ATQ)</strong> como Daño de Hielo a todos los enemigos. Aplica <strong>Congelación</strong> (Aturdimiento, 1 turno) a los enemigos que ya estaban Ralentizados.'
      },
      {
        icon:'🧠', name:'Guardián de la Catedral', type:'Talento',
        flavor:'Mientras hay enemigos congelados, Alex se mantiene firme.',
        desc:'Aumenta la DEF de Alex en un <strong>15%</strong> mientras haya al menos un enemigo Ralentizado o Congelado en el campo.'
      },
    ],
    passives:[
      { name:'Ventisca Severa', desc:'La Ralentización de la Habilidad ahora reduce la VEL en un <strong>30%</strong>.' },
      { name:'Toque Gélido Inicial', desc:'Al inicio del combate, aplica Ralentización a todos los enemigos durante 1 turno.' },
      { name:'Poder del Voto', desc:'Aumenta el ATQ de Alex en un <strong>10%</strong>.' }
    ],
    pings:[
      { n:1, name:'Fortaleza Inexpugnable', desc:'La Habilidad ahora golpea dos veces (el segundo golpe hace 50% de daño).' },
      { n:2, name:'Espada de la Aurora', desc:'El daño contra enemigos Ralentizados o Congelados aumenta un <strong>20%</strong>.' },
      { n:3, name:'Estandarte del Rey', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Bendición de la Catedral', desc:'Al aplicar Congelación, Alex recupera un <strong>10% de su HP Máximo</strong>.' },
      { n:5, name:'Apocalipsis Helado', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Voto Eterno', desc:'La Ultimate ahora aplica <strong>Congelación a todos los enemigos</strong>, sin necesidad de Ralentización previa.' }
    ]
},
{
    id:28, name:'Komato', tagline:'"Entre el hielo y el fuego, su hoja danza sin descanso."',
    element:'crio', rarity:4, role:'Main DPS / Dual', paradigma:'Paradigma del Baneo',
    art:'Personajes 1.0 - tanda 2/Komato.png',
    stats:{
      HP:570, ATQ:350, DEF:160, VEL:110,
      'Prob. Crítica':'5%', 'Daño Crítico':'50%', 'Rec. Energía':20,
      'Acierto de Efecto':20, 'Res. a Efectos':10, 'Ef. de Ruptura':30,
      'Bono Hielo':0, 'Bono Fuego':0, 'Bono Curación':0
    },
    skills:[
      {
        icon:'🗡️', name:'Filo del Crepúsculo', type:'Ataque Básico',
        flavor:'Un tajo rápido con su katana, imbuido con el poder de su postura actual.',
        desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño del elemento actual (Fuego o Hielo) a un enemigo.'
      },
      {
        icon:'🔥', name:'Ruptura Dimensional', type:'Habilidad',
        flavor:'Canaliza la energía de los dos mundos y libera un tajo que cruza realidades.',
        desc:'Inflige <strong>(100%–200% del ATQ)</strong> como Daño del elemento actual a un enemigo y adyacentes. Cambia su postura (de Hielo a Fuego, o de Fuego a Hielo).'
      },
      {
        icon:'🌟', name:'Colapso del Binarismo', type:'Ultimate',
        flavor:'Los dos mundos chocan. Ejecuta un tajo que contiene tanto hielo como fuego.',
        desc:'Inflige <strong>(200%–380% del ATQ)</strong> como Daño de Hielo y como Daño de Fuego a un enemigo (cada uno se calcula por separado).'
      },
      {
        icon:'🧠', name:'Filo Cambiante', type:'Talento',
        flavor:'Cada vez que cambia de postura, su espíritu se fortalece.',
        desc:'Al cambiar de postura con la Habilidad, Komato recupera <strong>15 puntos de Energía</strong> y gana <strong>+20% de Daño</strong> durante 1 turno.'
      },
    ],
    passives:[
      { name:'Impulso Dual', desc:'Al cambiar de postura, también gana <strong>+10% de VEL</strong> durante 1 turno.' },
      { name:'Armonía Elemental', desc:'Aumenta el Daño de Hielo y el Daño de Fuego de Komato en un <strong>10%</strong> cada uno.' },
      { name:'Postura Inicial', desc:'Al inicio del combate, elige su postura inicial y gana <strong>+10% de ATQ</strong> durante 2 turnos.' }
    ],
    pings:[
      { n:1, name:'Penitencia del Hielo', desc:'En Postura Hielo, los ataques aplican <strong>Ralentización</strong> (-15% VEL, 2 turnos).' },
      { n:2, name:'Ira del Fuego', desc:'En Postura Fuego, los ataques aplican <strong>Quemadura</strong> (30% ATQ, 2 turnos).' },
      { n:3, name:'Tajo Interdimensional', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Abrazo de la Dualidad', desc:'Al cambiar de postura, el siguiente ataque ignora un <strong>15% de la DEF</strong> enemiga.' },
      { n:5, name:'Binario Colapsado', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'El Tercer Camino', desc:'La Ultimate ahora golpea a <strong>todos los enemigos</strong> en lugar de a uno solo.' }
    ]
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
    // Reemplaza el término exacto (evitando etiquetas HTML internas)
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
          <button class="mbadge mbadge-via" onclick="alert('Próximamente')">⚔️ Cambio de Vía</button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="ms"><div class="ms-title">📊 Estadísticas Base</div>
        <div class="stats-grid">${Object.entries(c.stats).map(([k,v])=>
          `<div class="srow"><span class="sname">${k}</span><span class="sval">${v}</span></div>`).join('')}
        </div>
      </div>
      <div class="ms"><div class="ms-title">⚙️ Habilidades</div>
        ${c.skills.map(s=>`<div class="skill-card">
          <div class="sk-head"><span class="sk-icon">${s.icon}</span><span class="sk-name">${s.name}</span><span class="sk-type">${s.type}</span></div>
          <div class="sk-flavor">${s.flavor}</div>
          <div class="sk-desc">${applyTooltips(s.desc)}</div>
        </div>`).join('')}
      </div>
      <div class="ms"><div class="ms-title">🔨 Baneos Pasivos</div>
        ${c.passives.map(p=>`<div class="skill-card">
          <div class="sk-head"><span class="sk-name">${p.name}</span></div>
          <div class="sk-desc">${applyTooltips(p.desc)}</div>
        </div>`).join('')}
      </div>
      ${c.rasgoUnico ? `
      <div class="ms">
        <div class="ms-title">✨ ${c.rasgoUnico.titulo}</div>
        <div class="rasgo-desc">${c.rasgoUnico.descripcion}</div>
        <div class="rasgo-grid">
          ${c.rasgoUnico.efectos.map(e=>`
            <div class="rasgo-card">
              <div class="rasgo-ally">${e.aliado}</div>
              <div class="rasgo-name">${e.nombre}</div>
              <div class="rasgo-text">${e.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}
      <div class="ms"><div class="ms-title">📡 Pings</div>
        <table class="ptable">
          <thead><tr><th>Ping</th><th>Nombre</th><th>Efecto</th></tr></thead>
          <tbody>${c.pings.map(p=>`<tr>
            <td class="pnum">${p.n}</td>
            <td class="pname">${p.name}</td>
            <td class="pdesc">${applyTooltips(p.desc)}</td>
          </tr>`).join('')}</tbody>
        </table>
      </div>
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

  // ── Buscador inteligente (nombre, elemento:xx, rareza:xx) ──
document.getElementById('search-input')?.addEventListener('input', e => {
  const raw = e.target.value.trim();
  
  // Reiniciamos los filtros a sus valores por defecto
  fRarity = 'all';
  fElem = 'all';
  fSearch = '';

  if (raw) {
    // Separa por espacios y analiza cada token
    const tokens = raw.split(/\s+/);
    const nameParts = [];

    tokens.forEach(token => {
      // ¿Es un filtro de elemento?
      const elemMatch = token.match(/^(elemento|elem):(.+)$/i);
      if (elemMatch) {
        fElem = elemMatch[2].toLowerCase();
        return;
      }
      // ¿Es un filtro de rareza?
      const rarityMatch = token.match(/^(rareza|rarity):(.+)$/i);
      if (rarityMatch) {
        const val = rarityMatch[2].toLowerCase();
        fRarity = (val === 'all' ? 'all' : val); // acepta "all", "5", "4", etc.
        return;
      }
      // Si no es un comando, es parte del nombre
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

  // 👆 Tooltips de efectos (click en móvil)
  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('effect-tooltip')) {
      e.target.classList.toggle('show-tooltip');
    }
  });

  renderCards();
});
// ── Datos de Habilidades de Personajes ──
const EFFECT_TOOLTIPS = {
  // Anteriores
  "Bala de Ban": "Munición especial en los tambores N°6 o N°12. Siempre es Golpe Crítico e ignora parte de la DEF.",
  "Quemadura Severa": "Aumenta el daño de Fuego recibido por el enemigo en un 40% durante 2 turnos.",
  "Tambor de 12 Balas": "Recurso propio de ReyDNS. Comienza con 12 balas y las consume al atacar. Si llega a 0, recarga perdiendo un turno.",
  "Mantra": "Inflige daño de Fuego basado en el ATQ total del equipo.",
  "Slow-Log": "Debuff que reduce la VEL del objetivo en (15%–25%) y le inflige daño en base al (30%–40% de la DEF de Miki) al inicio de cada turno.",
  "Engranaje": "Acumulación que Miki obtiene cuando un aliado usa su Habilidad (máx. 5). Al llegar a 5, los consume para ejecutar un FUA.",
  "FUA": "Ataque Adicional que se ejecuta automáticamente al cumplir ciertas condiciones.",

  // Hawk
  "Marca de la Mariposa": "Marca aplicada por Hawk durante 2 turnos. Al consumirla, aplica Hipnosis y Tela.",
  "Hipnosis": "Debuff que obliga al enemigo a atacar a sus aliados. Recibe +15% daño de todas las fuentes.",
  "Tela": "Debuff que reduce la Vida Máxima (-15%) y la Resistencia a Efectos (-15%) del enemigo.",
  "Polvo de Hadas": "Acumulación que potencia los FUA de Hawk (+12% por carga, máx. 5). Se obtiene al usar la Habilidad y se consume con la Ultimate.",
  "Función Final": "Inflige daño verdadero masivo y aplica Aturdimiento e Inundado a todos los enemigos.",

  // Belle
  "XP": "Acumulación de Belle (máx. 40). Cada carga otorga +1% de VEL. Se obtiene con golpes críticos.",
  "Mod-Bot": "Robot compañero que se vincula al aliado con más ATQ. Realiza Ataques Conjuntos y potencia al aliado.",
  "Casete": "Carga que Belle obtiene al usar habilidades (máx. 3). Al llegar a 3, activa un FUA global con probabilidad de Electrocutado.",
  "Electrocutado": "Debuff que inflige Daño de Rayo (25% VEL de Belle) al inicio del turno. 10% de prob. de causar Parálisis (inmoviliza 1 turno).",
  "DJ Suprema": "El aliado vinculado recibe el 100% de su XP y los FUA se activan también con Ultimate.",
  "Mute": "Aumenta un Ping aleatorio del aliado vinculado durante 1 ataque (excepto el 6to).",

  // Fabru
  "Marca de Hackeo": "Marca aplicada por Fabru. Los drones priorizan atacar a este enemigo.",
  "Drones de Plasma": "Invocaciones de Fabru (máx. 3). Heredan estadísticas y atacan con Corte de Plasma.",
  "Corte de Plasma": "Ataque básico de los drones. Inflige (40%–80%) del ATQ del drone como Daño de Rayo.",
  "Sistema Caído": "Debuff que reduce VEL (-25%) y DEF (-20%) durante 2 turnos. Los enemigos afectados tienen 15% de prob. de fallar ataques.",
  "Vulnerabilidad Expuesta": "Debuff que reduce DEF un 20% adicional durante 1 turno. Se acumula con Sistema Caído.",
  "Paquete de Datos": "Aumenta el Daño de Rayo de él y sus drones en +3% por carga.",
  "Código Raíz": "Habilidad que consume todos los Paquetes de Datos. El siguiente ataque ignora 30% DEF y aplica Aturdimiento.",

  // Eugenio
  "Naipe": "Carta que Eugenio roba al inicio del turno o con ataques. Forma combinaciones de póker.",
  "Comodín": "Carta especial que permite elegir cualquier Naipe. Se obtiene al alcanzar 200 de Suerte o con el Baneo 2.",
  "Suerte": "Estadística especial de Eugenio (máx. 200). Aumenta al inicio de cada turno y potencia sus habilidades.",
  "Escalera Real": "Combinación de póker. Aplica todos los estados (Quemadura, Electrocutado, etc.) a todos los enemigos por 2 turnos.",
  "Póker": "Combinación de póker. Copia las estadísticas base de un aliado y las suma a las suyas por 2 turnos.",
  "Escalera": "Combinación de póker. Daño de Ruptura +120% y +70 de Suerte.",
  "Trío": "Combinación de póker. ATQ +80% y 3 ataques adicionales que ignoran DEF y escudos.",
  "Doble Pareja": "Combinación de póker. Prob. Crítica +35% y Daño Crítico +70% durante ese turno.",
  "Pareja": "Combinación de póker. Provoca 'Burla' y otorga 'Solidez' (DEF +45%, escudo del 25% de Vida Máx.).",
  "Carta Alta": "Combinación de póker. Si el primer Naipe es un As, +25% a todas las estadísticas y +45% daño de efectos de tiempo.",

  // Kyou
"Marca de Vulnerabilidad": "Debuff que hace que el objetivo reciba un 10% más de daño de todas las fuentes durante 2 turnos.",
"Vulnerabilidad Expuesta": "Debuff que reduce la DEF del objetivo en (20%–35%) durante 2 turnos.",
"Secreto al Descubierto": "Debuff que hace que los enemigos reciban un 15% más de daño de todos los elementos durante 2 turnos.",
"Filtración de Datos": "Efecto instantáneo: el próximo ataque recibido por el enemigo inflige un 30% más de daño (se consume tras un golpe).",
"Expediente": "Acumulación de Kyou (máx. 5/6). Aumenta el Daño de Rayo del equipo en un 4% por carga. Puede consumirse para añadir debuffs aleatorios.",

// Ttlim (y otros)
"Ralentización": "Estado que reduce la VEL del enemigo en un porcentaje (varía según la fuente).",
"Congelación": "Estado que aturde al enemigo durante 1 turno. Al descongelarse, puede recibir daño adicional.",
"Rosa Gélida": "Acumulación de Ttlim (máx. 3). Se obtiene al aplicar Ralentización o Congelación. Consumir 3 potencia su siguiente ataque.",
"Campo Congelado": "Zona creada por Ttlim (2-3 turnos): los enemigos dentro pierden 15% VEL y reciben +15% daño de Hielo.",

// Cris
"Marca del Fragmento": "Debuff que hace que el enemigo reciba un 10% más de daño de Fuego de todo el equipo durante 2 turnos.",
"Fragmento de Espejo": "Acumulación de Cris (máx. 5). Aumenta su Daño Crítico en un 4% por carga. Se obtiene al morir enemigos o romper escudos.",
"Quemadura": "Debuff de Daño en el tiempo que inflige un porcentaje del ATQ como Daño de Fuego durante X turnos.",

// Quency
"Marca de Sakura": "Debuff que hace que el enemigo reciba un 15% más de daño de todos los aliados durante 2 turnos.",
"Esquiva Inaudito": "Buff de Quency que otorga +5% Prob. de Evasión por cada enemigo en el campo durante 1 turno.",
"Contraataque Relámpago": "Ataque adicional de Quency que inflige Daño de Viento y consume la Marca de Sakura.",
"Ceguera Floral": "Debuff que otorga un 50% de probabilidad de fallar ataques contra cualquier aliado durante 1 turno.",
"Pétalo": "Acumulación de Quency (máx. 5). Aumenta su Daño Crítico en un 6% por carga. Con 3/5 acumulaciones desbloquea efectos adicionales.",
"Corte de Conejo": "Versión mejorada del Ataque Básico de Quency que golpea 2 veces.",
"Relieve": "Efecto del Baneo 3 que redirige el primer golpe letal que la dejaría entre 40% y 100% de HP al aliado con mayor vida (una vez por batalla).",

// Eydis
"Fisura Rúnica": "Debuff que reduce la DEF en un 15%. Al recibir un golpe crítico, detona causando daño adicional en área y se elimina (versiones avanzadas pueden detonar múltiples veces).",
"Fisura Rúnica Avanzada": "Variante de Fisura Rúnica que puede detonar hasta 2-3 veces antes de desaparecer.",
"Piedra Rúnica": "Acumulación de Eydis (máx. 3). Aumenta el daño de las detonaciones de Fisura Rúnica en un 5% por carga. Con 3, el Ataque Básico se transforma en Golpe de Ruptura.",
"Golpe de Ruptura": "Ataque potenciado de Eydis que consume Piedras Rúnicas, ignora 40% de DEF, inflige alto daño y aplica Fisura Rúnica.",

// iKayto
"Escarcha": "Debuff que hace que el enemigo reciba un 15% más de daño de Hielo por acumulación (máx. 2 acumulaciones).",
"Postura Alta": "Estado de iKayto que aumenta VEL (+20%) y Prob. Crítica (+15%).",
"Postura Baja": "Estado de iKayto que aumenta Daño de Hielo (+30%) y reduce el daño recibido (-20%).",
"Compases": "Medidor de iKayto (máx. 3-4). Se obtiene al cambiar de postura o ejecutar FUA. Al alcanzar el máximo, su siguiente ataque se convierte en Danza del Vacío Helado.",
"Danza del Vacío Helado": "Ataque potenciado de iKayto que inflige un 130% del daño original, aplica 2 acumulaciones de Escarcha a todos los enemigos y reinicia los Compases.",
};