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
        desc:'Las "Balas de Ban" aplican <strong>Quemado extremo</strong>. Si el enemigo ya tiene la marca, la bala ignora un <strong>20% adicional de su DEF</strong>.'
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

  // ── Tooltip flotante (hover + click) ──
  const tooltipGlobal = document.getElementById('global-tooltip');
  let tooltipFixed = false; // se fija al hacer click

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
    if (!tooltipFixed) {
      tooltipGlobal.classList.remove('visible');
    }
  }

  // Hover (PC)
  document.body.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target) {
      const text = target.getAttribute('data-tooltip');
      if (text) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const topY = rect.top;
        showTooltip(text, centerX, topY);
      }
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target && !tooltipFixed) {
      hideTooltip();
    }
  });

  // Click (móvil / fijar)
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.effect-tooltip');
    if (target) {
      e.preventDefault();
      const text = target.getAttribute('data-tooltip');
      if (text) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const topY = rect.top;
        showTooltip(text, centerX, topY);
        tooltipFixed = true; // queda fijo hasta click fuera
      }
    } else {
      tooltipFixed = false;
      hideTooltip();
    }
  });

  // Ocultar al hacer scroll o redimensionar
  window.addEventListener('scroll', () => { tooltipFixed = false; hideTooltip(); }, { passive: true });
  window.addEventListener('resize', () => { tooltipFixed = false; hideTooltip(); });
  renderCards();
});
// ── Datos de Habilidades de Personajes ──
const EFFECT_TOOLTIPS = {
  // Anteriores
  "Bala de Ban": "Munición especial en los tambores N°6 o N°12. Siempre es Golpe Crítico e ignora parte de la DEF.",
  "Quemado extremo": "Aumenta el daño de Fuego recibido por el enemigo en un 40% durante 2 turnos.",
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