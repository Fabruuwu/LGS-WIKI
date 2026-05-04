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
    id:1,name:'ReyDNS',tagline:'"El Gatillo del Servidor"',
    element:'fuego',rarity:5,role:'Main DPS',paradigma:'Paradigma de la Artillería',
    art: 'Personajes 1.0 - tanda 2/ReyDNS.jpg',
    stats:{HP:420,ATQ:380,DEF:110,VEL:126,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Bono Fuego':0},
    skills:[
      {icon:'🗡️',name:'Tiro de Advertencia',type:'Ataque Básico',
       flavor:'ReyDNS dispara un tiro rápido con su revólver, consumiendo 1 bala del tambor.',
       desc:'Inflige <strong>(50%–110% del ATQ)</strong> como Daño Piro a un solo enemigo.'},
      {icon:'🔥',name:'Fuego a Discreción',type:'Habilidad',
       flavor:'Gasta 3 balas consecutivas contra un solo objetivo con postura de ejecución.',
       desc:'Inflige <strong>(130%–280% del ATQ)</strong> como Daño Piro. Si alguna bala es una <strong>"Bala de Ban"</strong> (N°6 o N°12), el daño final aumenta en <strong>(20%–45%)</strong> adicional.'},
      {icon:'🌟',name:'Limpieza de Servidor (Wipe)',type:'Ultimate',
       flavor:'El juicio final del Owner. Vacía todas las balas restantes sobre un solo enemigo.',
       desc:'Cada bala inflige <strong>(40%–90% del ATQ)</strong> como Daño Piro. Con 6+ balas gana <strong>+30%–75% de Daño Crítico</strong>. Al finalizar, recarga el tambor con <strong>12 balas nuevas</strong>.'},
      {icon:'🧠',name:'La Ruleta del Administrador',type:'Talento',
       flavor:'El Owner no sigue las reglas de energía. Tiene un Tambor de 12 Balas.',
       desc:'La <strong>Bala N°6 y N°12</strong> son Golpes Críticos garantizados e ignoran <strong>(15%–40%) de la DEF</strong>. Con 0 balas, pierde su turno para recargar y obtiene escudo del <strong>(10%–25%) de HP máx</strong>.'},
    ],
    passives:[
      {name:'Dedo en el Gatillo',desc:'Una "Bala de Ban" retrasa el siguiente turno del enemigo en un <strong>15%</strong>.'},
      {name:'Inercia de Plomo',desc:'Por cada bala normal que acierta, gana <strong>+2% de VEL</strong> (se resetea al inicio de su siguiente turno).'},
      {name:'Privilegios de Owner',desc:'Entra al combate con el tambor lleno. Su primera acción avanza su turno en un <strong>30%</strong> adicional.'},
    ],
    pings:[
      {n:1,name:'Acceso Directo',desc:'Obtiene un turno adicional inmediato. Su primer Ataque Básico no consume balas.'},
      {n:2,name:'Ban de IP',desc:'Las "Balas de Ban" aplican <strong>Quemadura Severa</strong>: +40% de daño Fuego de todos los aliados por 2 turnos.'},
      {n:3,name:'Jerarquía Elevada',desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'},
      {n:4,name:'Protocolo de Emergencia',desc:'Al caer bajo el 30% de HP, recarga 6 balas y activa el escudo del Talento sin perder turno. (CD: 3 turnos)'},
      {n:5,name:'Decreto Supremo',desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'},
      {n:6,name:'Aniquilación del Registro',desc:'Durante la Ultimate, cada bala sube el <strong>Daño Crítico</strong> de la siguiente en 15%. Si elimina al enemigo, recupera el tambor completo y avanza 100% en la barra de turnos.'},
    ]
  },
  {
    id:2,name:'Miki',tagline:'"Nada escapa a su cronología... ni los mensajes borrados."',
    element:'caos',rarity:5,role:'Soporte / Control',paradigma:'Paradigma de la Estadística',
    art: 'Personajes 1.0 - tanda 2/Miki.png',
    stats:{HP:680,ATQ:180,DEF:260,VEL:112,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Bono Vacío':0},
    skills:[
      {icon:'🗡️',name:'Golpe de Archivo',type:'Ataque Básico',
       flavor:'Un toque firme con su llave dorada que adelanta sus asuntos pendientes.',
       desc:'Inflige <strong>(45%–95% de su DEF)</strong> como Daño de Vacío. Avanza su acción propia en <strong>10%</strong>.'},
      {icon:'🔥',name:'Muteo Temporal',type:'Habilidad',
       flavor:'Activa el protocolo de silencio. El objetivo entra en "Slow-Log".',
       desc:'85% de probabilidad base de aplicar <strong>"Slow-Log"</strong> por 2 turnos: reduce VEL en <strong>(15%–35%)</strong> e inflige <strong>(20%–40% de la DEF de Miki)</strong> al inicio de cada turno.'},
      {icon:'🌟',name:'Reinicio de Instancia',type:'Ultimate',
       flavor:'El reloj astronómico da marcha atrás. Una ola de color sepia inunda el campo.',
       desc:'Retrasa la acción de todos los enemigos en <strong>(25%–55%)</strong>. Aumenta VEL de aliados en <strong>(15%–30%)</strong> por 2 turnos. Inflige <strong>(110%–210% de su DEF)</strong> como Daño de Vacío a todos.'},
      {icon:'🧠',name:'Agenda del Moderador',type:'Talento',
       flavor:'Miki sabe exactamente cuándo intervenir.',
       desc:'Cuando un aliado usa su <strong>Habilidad</strong>, Miki gana 1 "Engranaje" (máx. 5). Al llegar a 5, ejecuta un <strong>FUA</strong>: <strong>(60%–130% de su DEF)</strong> como Daño de Vacío. El objetivo reduce su Resistencia a Efectos en <strong>20%</strong> por 2 turnos.'},
    ],
    passives:[
      {name:'Guía de estilo',desc:'Aumenta el <strong>Acierto de Efecto</strong> de Miki en un <strong>15%</strong>.'},
      {name:'Copia de seguridad',desc:'Al inicio del turno de Miki, limpia <strong>1 debuff</strong> de un aliado aleatorio.'},
      {name:'Términos del servicio',desc:'Los enemigos con <strong>"Slow-Log"</strong> reducen su <strong>ATQ</strong> en un 10%.'},
    ],
    pings:[
      {n:1,name:'Hilo de bienvenida',desc:'Otorga a todo el equipo <strong>+15% de Recarga de Energía</strong> durante los primeros 3 turnos.'},
      {n:2,name:'Atajos del teclado',desc:'El Talento ahora requiere <strong>4 cargas</strong> en lugar de 5 para el FUA.'},
      {n:3,name:'Archivo expandido',desc:'<strong>Habilidad +3 niveles</strong> (máx. nivel 8).'},
      {n:4,name:'Modo sigilo',desc:'Al usar Ataque Básico contra un enemigo con debuff, recupera <strong>15% de HP máx</strong>.'},
      {n:5,name:'Actualización de firmware',desc:'<strong>Ultimate +3 niveles</strong> (máx. nivel 8).'},
      {n:6,name:'Baneo permanente',desc:'Al usar la Ultimate, 50% de probabilidad de <strong>aturdir</strong> a los enemigos 1 turno. Si tienen "Slow-Log", sube al <strong>100%</strong>.'},
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
    return c.name.toLowerCase().includes(fSearch.toLowerCase());
  });
  // char-count ya no existe, lo ignoramos
  const countEl=document.getElementById('char-count');
  if(countEl) countEl.textContent=list.length;

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