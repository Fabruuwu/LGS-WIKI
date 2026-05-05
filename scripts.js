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
    art:null,
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
        desc:'Inflige un total de <strong>(130%–280% del ATQ)</strong> como Daño Piro. Si alguna de las balas es una <strong>"Bala de Ban"</strong> (N°6 o N°12), el daño final aumenta en <strong>(20%–45%)</strong> adicional.'
      },
      {
        icon:'🌟', name:'Limpieza de Servidor (Wipe)', type:'Ultimate',
        flavor:'El juicio final del Owner. Vacía todas las balas restantes sobre un solo enemigo.',
        desc:'Cada bala inflige <strong>(50%–100% del ATQ)</strong> como Daño Piro. Con 6+ balas gana <strong>+30%–75% de Daño Crítico</strong>. Al finalizar, recarga el tambor con <strong>12 balas nuevas</strong>.'
      },
      {
        icon:'🧠', name:'La Ruleta del Administrador', type:'Talento',
        flavor:'El Owner no sigue las reglas de energía. Tiene un Tambor de 12 Balas.',
        desc:'<strong>Balas de Ban (N°6 y N°12):</strong> siempre son Golpes Críticos garantizados e ignoran <strong>(15%–40%) de la DEF</strong>. Si empieza su turno con 0 balas, pierde la acción para recargar <strong>12 balas</strong> y obtiene un escudo del <strong>(10%–20%) de su Vida Máx.</strong> por 1 turno.'
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
        desc:'Entra al combate con el tambor lleno. Su primera acción avanza su turno en un <strong>25%</strong> adicional. Desbloquea <strong>"Mantra"</strong>: inflige el <strong>15% del ATQ total del equipo</strong> como Daño de Fuego a un enemigo (CD: 5 turnos). ReyDNS queda Imposibilitado 1 turno tras usarlo.'
      },
    ],
    pings:[
      {
        n:1, name:'Acceso Directo',
        desc:'Obtiene un turno adicional inmediato. Su primer Ataque Básico no consume balas.'
      },
      {
        n:2, name:'Ban de IP',
        desc:'Las "Balas de Ban" aplican <strong>Quemadura Severa</strong>: +40% de daño Fuego de todos los aliados por 2 turnos. Si el enemigo ya tiene la marca, la bala ignora un <strong>20% adicional de su DEF</strong>.'
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
    // ═══ NUEVO: Rasgo Único ═══
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
        desc:'85% de probabilidad base de aplicar <strong>"Slow-Log"</strong> por 2 turnos: reduce VEL en <strong>(15%–25%)</strong> e inflige <strong>(30%–40% de la DEF de Miki)</strong> al inicio de cada turno.'
      },
      {
        icon:'🌟', name:'Reinicio de Tienda', type:'Ultimate',
        flavor:'El reloj astronómico da marcha atrás. Una ola de color sepia inunda el campo.',
        desc:'Retrasa la acción de todos los enemigos en <strong>(25%–55%)</strong>. Aumenta DEF, VIDA, ATQ, Prob. Crítica y Daño Crítico de todos los aliados en <strong>(15%–30%)</strong> por 1 turno. Inflige <strong>(110%–210% de su DEF)</strong> como Daño de Vacío a todos.'
      },
      {
        icon:'🧠', name:'Agenda del Moderador', type:'Talento',
        flavor:'Miki sabe exactamente cuándo intervenir.',
        desc:'Cuando un aliado (excepto Miki) usa su Habilidad, Miki gana 1 "Engranaje" (máx. 5). Al llegar a 5, ejecuta un <strong>FUA</strong>: <strong>(60%–130% de su DEF)</strong> como Daño de Vacío. El objetivo reduce su Resistencia a Efectos en <strong>20%</strong> por 2 turnos.'
      },
    ],
    passives:[
      { name:'Guía de estilo', desc:'Aumenta el <strong>Acierto de Efecto</strong> de Miki en un <strong>15%</strong>.' },
      { name:'Copia de seguridad', desc:'Al inicio del turno de Miki, limpia <strong>1 debuff</strong> de un aliado aleatorio.' },
      { name:'Términos del servicio', desc:'Los enemigos con <strong>"Slow-Log"</strong> reducen su <strong>ATQ</strong> en un 10%.' },
    ],
    pings:[
      { n:1, name:'Hilo de bienvenida', desc:'Otorga a todo el equipo <strong>+15% de Recarga de Energía</strong> durante los primeros 3 turnos.' },
      { n:2, name:'Atajos del teclado', desc:'El Talento ahora requiere <strong>4 cargas</strong> en lugar de 5 para el FUA.' },
      { n:3, name:'Archivo expandido', desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).' },
      { n:4, name:'Modo sigilo', desc:'Al usar Ataque Básico contra un enemigo con debuff, recupera <strong>15% de HP máx</strong>.' },
      { n:5, name:'Actualización de firmware', desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).' },
      { n:6, name:'Baneo permanente', desc:'Al usar la Ultimate, 50% de probabilidad de <strong>aturdir</strong> a los enemigos 1 turno. Si tienen "Slow-Log", sube al <strong>100%</strong>.' },
    ]
}
,{
    id:3,name:'Belle',tagline:'"En su presencia los mortales temen"',
    element:'electro',rarity:5,role:'Sub-DPS / Buffer',paradigma:'Paradigma del Legado',
    art: 'Personajes 1.0 - tanda 1/Belle.png',
    stats:{HP:350,ATQ:330,DEF:150,VEL:148,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Acierto de Efecto':20,'Res. a Efectos':10,'Ef. de Ruptura':30,'Bono Rayo':0,'Bono Curación':0},
    skills:[
      {icon:'🗡️',name:'Dinamic Warn',type:'Ataque Básico',
       flavor:'Un disparo de advertencia con su sintetizador.',
       desc:'Inflige <strong>(50%–115% del ATQ)</strong> como Daño de Rayo. Genera 1 <strong>XP</strong> por golpe crítico (máx. 40 acumulaciones, cada una otorga +1% de VEL).'},
      {icon:'🔥',name:'¡No aprendes?, Mod-Bot!',type:'Habilidad',
       flavor:'Belle activa a su robot compañero y lo asigna al aliado más poderoso.',
       desc:'Vincula <strong>Mod-Bot</strong> al aliado con más ATQ. Aumenta su ATQ en <strong>(60%–120%) de la VEL actual de Belle</strong>. Cada vez que ese aliado ataca, Mod-Bot hace un Ataque Conjunto de <strong>(40%–90% del ATQ de Belle)</strong> como Daño de Rayo y le aumenta el Efecto de Ruptura en 20%.'},
      {icon:'🌟',name:'Sabía que me necesitabas',type:'Ultimate',
       flavor:'Un drop masivo de graves y luces que satura el campo de batalla.',
       desc:'Inflige <strong>(150%–320% del ATQ)</strong> como Daño de Rayo a todos. Si Mod-Bot está vinculado, añade daño adicional del 25% de la VEL de Belle. Si VEL > 250, su Efecto de Ruptura iguala su VEL durante la Ultimate. Otorga a aliados <strong>+20% de Recarga de Energía</strong> por 2 turnos.'},
      {icon:'🧠',name:'Simplemente soy mejor',type:'Talento',
       flavor:'La DJ no espera, impone el ritmo.',
       desc:'Empieza con 5 XP. Cuando Belle o el aliado vinculado usan su Habilidad, gana 1 <strong>"Casete"</strong> (máx. 3). Al llegar a 3, lanza un FUA de <strong>(80%–180% del ATQ)</strong> como Daño de Rayo con 50% de prob. de aplicar <strong>Electrocutado</strong> (Daño de Rayo = 25% VEL de Belle al inicio del turno, 10% de prob. de Parálisis) por 2 turnos.'},
    ],
    passives:[
      {name:'No me provoques',desc:'Mientras Mod-Bot esté vinculado, el aliado enlazado gana <strong>+15% de VEL</strong>. Si Belle tiene más de 250 VEL, aplica "Mute": durante 1 ataque, aumenta un Ping aleatorio del aliado (excepto el 6to), una vez por partida.'},
      {name:'Rebobinado',desc:'Al lanzar el FUA, Belle recupera 10 de Energía y gana 2 XP. Su Efecto de Ruptura aumenta un <strong>0.20% por XP</strong> (máx. +50%).'},
      {name:'Ataque PE',desc:'Los golpes críticos del aliado vinculado otorgan 1 XP a Belle. El daño de "Electrocutado" aumenta un <strong>30%</strong> contra enemigos con menos del 50% de HP.'},
    ],
    pings:[
      {n:1,name:'Efecto Causa',desc:'Al comenzar el combate, Belle obtiene <strong>2 cargas de Casete</strong> de inmediato.'},
      {n:2,name:'El rank es visual',desc:'El aliado vinculado obtiene el 50% de las XP de Belle. Al lanzar un FUA, el aliado recupera <strong>5 de Energía</strong>.'},
      {n:3,name:'Subidón',desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'},
      {n:4,name:'Salvavidas de Moderación',desc:'Si el aliado vinculado recibe daño fatal, sobrevive con 1 HP y obtiene un escudo del <strong>40% de la Vida de Belle</strong> por 2 turnos (una vez por batalla).'},
      {n:5,name:'Alter Ego',desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'},
      {n:6,name:'Me considero el mejor',desc:'Tras la Ultimate, entra en <strong>"DJ Suprema"</strong> 2 turnos: el aliado vinculado recibe 100% de la XP de Belle, los FUA se activan también al usar Ultimate, e ignora 20% de la DEF enemiga.'},
    ]
  },
  {
    id:4,name:'Hawk',tagline:'"Shhh... No pienses. Solo obedece."',
    element:'caos',rarity:5,role:'Sub-DPS / Debuffer',paradigma:'Paradigma del Warn',
    art: 'Personajes 1.0 - tanda 1/Hawk.png',
    stats:{HP:620,ATQ:380,DEF:170,VEL:118,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Acierto de Efecto':20,'Res. a Efectos':10,'Ef. de Ruptura':30,'Bono Vacío':0,'Bono Curación':0},
    skills:[
      {icon:'🗡️',name:'Aguja Mental',type:'Ataque Básico',
       flavor:'Un pequeño rayo magenta que se clava en la sien del enemigo.',
       desc:'Inflige <strong>(65%–120% del ATQ)</strong> como Daño de Vacío. Aplica <strong>"Marca de la Mariposa"</strong> por 2 turnos.'},
      {icon:'🔥',name:'Palabras de Seda',type:'Habilidad',
       flavor:'Hawk se ajusta las gafas y murmura una orden. Las mariposas obedecen.',
       desc:'Inflige <strong>(70%–150% del ATQ)</strong> como Daño de Vacío. Si el enemigo tiene "Marca de la Mariposa", la consume para aplicar <strong>Hipnosis</strong> (ataca a sus propios aliados, +15% daño recibido) y <strong>Tela</strong> (Vida Máx -15%, Res. a Efectos -15%) por 2 turnos. Genera 1 <strong>Polvo de Hadas</strong> (máx. 5).'},
      {icon:'🌟',name:'Vals de las Mil Mariposas',type:'Ultimate',
       flavor:'Sus alas se despliegan. Una tormenta de polvo hipnótico lo envuelve todo.',
       desc:'Inflige <strong>(180%–360% del ATQ)</strong> como Daño de Vacío a todos. Consume todo el Polvo de Hadas: por cada acumulación, aumenta todas las stats de Hawk en <strong>10%</strong> por 2 turnos y aplica Hipnosis a un enemigo sin ella. Si ya tenía Hipnosis, su DEF baja 30%. Por 2 turnos, los FUA de Hawk hacen <strong>+40% de daño</strong> y generan 1 Polvo adicional al realizarse.'},
      {icon:'🧠',name:'Alas de la Dominación',type:'Talento',
       flavor:'Cada vez que un títere baila, ella aplaude.',
       desc:'Cuando un aliado ataca a un enemigo con Hipnosis, Hawk realiza un <strong>FUA</strong> de <strong>(60%–130% del ATQ)</strong> como Daño de Vacío (máx. 3 veces por turno). Empieza con 2 Polvo de Hadas. Cada acumulación aumenta el daño de FUA en <strong>12%</strong> (máx. +60%).'},
    ],
    passives:[
      {name:'Voz Melosa',desc:'La Hipnosis y Tela ahora duran <strong>3 turnos</strong> en lugar de 2.'},
      {name:'Danza de las Almas',desc:'Cuando un enemigo bajo Hipnosis ataca a un aliado enemigo, Hawk obtiene <strong>8 puntos de Energía</strong>.'},
      {name:'Primer Acto',desc:'Al inicio del combate, aplica <strong>"Marca de la Mariposa"</strong> a 2 enemigos aleatorios.'},
    ],
    pings:[
      {n:1,name:'Audiencia Cautiva',desc:'El límite de Polvo de Hadas aumenta a 6. El bono máximo de FUA es de <strong>+72%</strong>.'},
      {n:2,name:'Crítica Teatral',desc:'Los enemigos bajo Hipnosis reciben un <strong>25% más de Daño Crítico</strong> de los aliados.'},
      {n:3,name:'Palabras de Terciopelo',desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'},
      {n:4,name:'Beso de la Mariposa',desc:'El FUA del Talento reduce la VEL del enemigo golpeado en un <strong>20%</strong> por 1 turno.'},
      {n:5,name:'Ovación Final',desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'},
      {n:6,name:'Teatro de los Títeres',desc:'Una vez por batalla al usar la Ultimate, activa <strong>"Función Final"</strong>: todos los enemigos reciben 100% de daño verdadero basado en el Acierto de Efecto de Hawk y quedan Aturdidos e Inundados (+30% daño de Rayo) por 1 turno. Con 2+ hipnotizados, el daño sube al <strong>150%</strong>.'},
    ]
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
          <div class="sk-desc">${s.desc}</div>
        </div>`).join('')}
      </div>
      <div class="ms"><div class="ms-title">🔨 Baneos Pasivos</div>
        ${c.passives.map(p=>`<div class="skill-card">
          <div class="sk-head"><span class="sk-name">${p.name}</span></div>
          <div class="sk-desc">${p.desc}</div>
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
            <td class="pdesc">${p.desc}</td>
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

  // Filtros personajes
  document.getElementById('rarity-filters')?.addEventListener('click',e=>{
    const p=e.target.closest('.pill'); if(!p) return;
    document.querySelectorAll('#rarity-filters .pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active'); fRarity=p.dataset.rarity; renderCards();
  });

  document.getElementById('elem-filters')?.addEventListener('click',e=>{
    const p=e.target.closest('.pill'); if(!p) return;
    document.querySelectorAll('#elem-filters .pill').forEach(x=>x.classList.remove('active'));
    p.classList.add('active'); fElem=p.dataset.elem; renderCards();
  });

  document.getElementById('search-input')?.addEventListener('input',e=>{
    fSearch=e.target.value; renderCards();
  });

  // Modal
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click',e=>{
    if(e.target===e.currentTarget) closeModal();
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  renderCards();
});