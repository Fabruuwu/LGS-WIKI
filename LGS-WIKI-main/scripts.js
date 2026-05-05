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
    id:1,name:'ReyDNS',tagline:'"El propietario del server"',
    element:'fuego',rarity:5,role:'Main DPS',paradigma:'Paradigma de la Artillería',
    art: 'Personajes 1.0 - tanda 2/ReyDNS.jpg',
    stats:{HP:420,ATQ:380,DEF:110,VEL:126,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Bono Fuego':0},
    skills:[
      {icon:'🗡️',name:'Advertencia',type:'Ataque Básico',flavor:'Desearia un descanso',desc:'Realiza un disparo e inflige <strong>(50%–110% del ATQ)</strong> como Daño Piro.'},
      {icon:'🔥',name:'Enserio tengo que castigarte?',type:'Habilidad',flavor:'Abueno',desc:'Inflige <strong>(130%–280% del ATQ)</strong> como Daño Piro.'},
      {icon:'🌟',name:'Pareces un bot',type:'Ultimate',flavor:'No intentes escapar',desc:'Daño Piro masivo. Al finalizar, recarga el tambor con 12 balas nuevas.'},
      {icon:'🧠',name:'Te tendre que banear',type:'Talento',flavor:'Preparados, listos...',desc:'Las balas N°6 y N°12 son críticas garantizadas e ignoran DEF.'}
    ],
    passives:[
      {name:'Deberia de silenciarte?',desc:'Una "Bala de Ban" retrasa el turno enemigo 15%.'},
      {name:'Che',desc:'Por cada bala normal que acierta, gana +2% de VEL.'},
      {name:'Nadie lo soportaria',desc:'Inicia con tambor lleno y avanza turno 30%.'}
    ],
    pings: [
      { n: 1, name: 'Problemas con hacker', desc: 'Obtiene un turno adicional inmediato.' },
      { n: 2, name: 'Ban de IP', desc: 'Aplica Quemadura Severa: +40% daño Fuego aliado.' },
      { n: 3, name: 'Mantenimiento de Red', desc: 'Habilidad +3 niveles (Máximo Nivel 15).' },
      { n: 4, name: 'Admin Power', desc: 'Ignora un 15% de la DEF enemiga al disparar.' },
      { n: 5, name: 'Database Update', desc: 'Ultimate +3 niveles (Máximo Nivel 15).' },
      { n: 6, name: 'GenkiWarn', desc: 'Cada bala sube el Daño Crítico de la siguiente en 15%.' }
    ]
  },
  {
    id:2,name:'Miki',tagline:'"Nadie escapa de su tarjeta de credito"',
    element:'caos',rarity:5,role:'Soporte / Control',paradigma:'Paradigma de la Estadística',
    art: 'Personajes 1.0 - tanda 2/Miki.png',
    stats:{HP:680,ATQ:180,DEF:260,VEL:112,'Prob. Crítica':'5%','Daño Crítico':'50%','Rec. Energía':20,'Bono Vacío':0},
    skills:[
      {icon:'🗡️',name:'Golpe economico',type:'Ataque Básico',flavor:'Llave dorada.',desc:'Inflige <strong>(45%–95% de su DEF)</strong> como Daño de Vacío.'},
      {icon:'🔥',name:'Muteo Temporal',type:'Habilidad',flavor:'No gastes más.',desc:'85% prob. base de aplicar "Slow-Log" por 2 turnos.'},
      {icon:'🌟',name:'Reinicio de Top Up',type:'Ultimate',flavor:'C6 o nada.',desc:'Retrasa acción enemiga (25%–55%) y sube VEL aliada.'},
      {icon:'🧠',name:'Agenda del Moderador',type:'Talento',flavor:'Cargas de engranaje.',desc:'Al llegar a 5 cargas, ejecuta un FUA basado en DEF.'}
    ],
    passives:[
      {name:'Guía de un delphin',desc:'+15% Acierto de Efecto.'},
      {name:'Doble tarjetón',desc:'Limpia 1 debuff de un aliado aleatorio.'}
    ],
    pings: [
      { n: 1, name: 'Primera Recarga', desc: 'Inicia combate con un 20% de Recarga de Energía.' },
      { n: 2, name: 'Interés Compuesto', desc: 'Aumenta la DEF propia en un 10% por cada carga de Talento.' },
      { n: 3, name: 'Inversión Segura', desc: 'Habilidad +3 niveles (Máximo Nivel 15).' },
      { n: 4, name: 'Cashback', desc: 'Al usar la Ultimate, recupera 1 punto de habilidad.' },
      { n: 5, name: 'Capital de Riesgo', desc: 'Ultimate +3 niveles (Máximo Nivel 15).' },
      { n: 6, name: 'Balleneo historico', desc: 'Ultimate puede aturdir (100% si tienen Slow-Log).' }
    ]
  },
  {
    id: 3, 
    name: 'Belle', 
    tagline: '"En su presencia los mortales temen"',
    element: 'electro', 
    rarity: 5, 
    role: 'Sub-DPS / Buffer', 
    paradigma: 'Paradigma del Legado',
    sinergia: `
      <div class="sinergia-header">✦ Sinergia Especial: Quency ✦</div>
      <p>Si Quency está en el campo, Belle obtiene <strong>"Propaganda"</strong>: +15% de Prob. de Evasión.</p>
      <p>Si Quency esquiva un ataque, Belle obtiene <strong>"Kitsune"</strong> y refuerza "Propaganda":</p>
      <div class="sinergia-detail">
        <strong>Kitsune:</strong> +45% de Evasión (acumulable 2 veces).<br>
        <strong>Propaganda (Reforzada):</strong> Todos los buffs de Belle pasan a ser globales (1 turno).
      </div>
    `,
    art: 'Personajes 1.0 - tanda 1/Belle.png',
    stats: { 
      HP: 350, ATQ: 330, DEF: 150, VEL: 148, 
      'Prob. Crítica': '5%', 'Daño Crítico': '50%', 
      'Rec. Energía': 20, 'Acierto Efecto': 20,
      'Res. Efectos': 10, 'Efecto Ruptura': 30, 'Bono Rayo': 0 
    },
    skills: [
      {icon: '🗡️', name: 'Dinamic Warn', type: 'Ataque Básico', desc: 'Inflige (50%–115% del ATQ). Genera XP que otorga <strong>+1% de VEL</strong>.'},
      {icon: '🤖', name: '¡No aprendes?, Mod-Bot!', type: 'Habilidad', desc: 'Vincula a Mod-Bot al aliado con más ATQ, subiendo su ATQ según la VEL de Belle.'},
      {icon: '🌟', name: 'Sabía que me necesitabas', type: 'Ultimate', desc: 'Daño de Rayo global. Otorga +20% Recarga de Energía al equipo.'},
      {icon: '🧠', name: 'Simplemente soy mejor', type: 'Talento', desc: 'Lanza FUA global al consumir cargas de Casete.'}
    ],
    passives: [
      { name: 'No me provoques', desc: 'Aliado vinculado gana +15% VEL.' },
      { name: 'Rebobinado', desc: 'El FUA recupera energía y XP.' },
      { name: 'Ataque PE', desc: 'Críticos del aliado dan XP a Belle.' }
    ],
    pings: [
      { n: 1, name: 'Efecto Causa', desc: 'Inicia combate con 2 cargas de Casete.' },
      { n: 2, name: 'El rank es visual', desc: 'Aliado vinculado obtiene 50% de las XP de Belle.' },
      { n: 3, name: 'Sinfonía de Datos', desc: 'Habilidad +3 niveles (Máximo Nivel 15).' },
      { n: 4, name: 'Salvavidas', desc: 'Si el aliado muere, revive con 1 HP y obtiene un escudo del 40% de la Vida de Belle.' },
      { n: 5, name: 'Eco del Servidor', desc: 'Ultimate +3 niveles (Máximo Nivel 15).' },
      { n: 6, name: 'Me considero el mejor', desc: 'Estado DJ Suprema: Todos los buffs son globales e ignora 20% de la DEF enemiga.' }
    ]
  }
];

let fRarity='all', fElem='all', fSearch='';

function setupNav(){
  const page=document.body.dataset.page||'home';
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.page===page));
}

function goTo(page){ window.location.href=page==='home'?'index.html':`${page}.html`; }
function toggleMenu(){ 
  document.getElementById('nav-links')?.classList.toggle('open');
  document.getElementById('nav-hamburger')?.classList.toggle('open');
}
function closeMenu(){ 
  document.getElementById('nav-links')?.classList.remove('open');
  document.getElementById('nav-hamburger')?.classList.remove('open');
}
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
    grid.innerHTML=`<div class="empty-state">No se encontraron personajes</div>`;
    return;
  }
  grid.innerHTML=list.map(c=>{
    const el=EC[c.element];
    const artHtml=c.art ?`<img src="${c.art}">` :`<div class="card-art-bg" style="${GRAD[c.element]}"></div>`;
    return`<div class="char-card" data-rarity="${c.rarity}" onclick="openChar(${c.id})">
      <div class="card-art">${artHtml}<div class="elem-badge" style="background:${el.color}"></div><div class="rarity-badge">${stars(c.rarity)}</div></div>
      <div class="card-footer"><div class="card-name">${c.name}</div><div class="card-el-name">${el.label}</div></div>
    </div>`;
  }).join('');
}

function openChar(id){
  const c=CHARS.find(x=>x.id===id); if(!c) return;
  const el=EC[c.element];
  
  const sinergiaHtml = c.sinergia 
    ? `<div class="tooltip-container">
         <span class="info-icon-btn">ℹ️</span>
         <div class="tooltip-box">${c.sinergia}</div>
       </div>` 
    : '';

  const heroContent=c.art ?`<img class="modal-hero-img" src="${c.art}">` :`<div class="modal-hero-bg" style="${GRAD[c.element]}"></div>`;
  const modalContent=document.getElementById('modal-content');
  if(!modalContent) return;

  modalContent.innerHTML=`
    <div class="modal-hero">
      ${sinergiaHtml}
      ${heroContent}
      <div class="modal-hero-grad"></div>
      <div class="modal-hero-info">
        <div class="modal-name">${c.name}</div>
        <div class="modal-tagline">${c.tagline}</div>
        <div class="modal-badges">
          <div class="mbadge"><div class="mbadge-dot" style="background:${el.color}; box-shadow:0 0 7px ${el.color}"></div>${el.label}</div>
          <div class="mbadge mbadge-rarity">⭐⭐⭐⭐⭐</div>
          <div class="mbadge mbadge-role">${c.role}</div>
          <div class="mbadge mbadge-paradigma">📘 ${c.paradigma}</div>
          <button class="mbadge mbadge-via" onclick="alert('Próximamente')">⚔️ Cambio de Vía</button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="ms"><div class="ms-title">📊 Estadísticas Base</div>
        <div class="stats-grid">${Object.entries(c.stats).map(([k,v])=>`<div class="srow"><span class="sname">${k}</span><span class="sval">${v}</span></div>`).join('')}</div>
      </div>
      <div class="ms"><div class="ms-title">⚙️ Habilidades</div>
        ${c.skills.map(s=>`<div class="skill-card"><div class="sk-head"><span>${s.icon}</span><span class="sk-name">${s.name}</span></div><div class="sk-desc">${s.desc}</div></div>`).join('')}
      </div>
      <div class="ms"><div class="ms-title">🔨 Baneos Pasivos</div>
        ${c.passives.map(p=>`<div class="skill-card"><div class="sk-head"><span class="sk-name">${p.name}</span></div><div class="sk-desc">${p.desc}</div></div>`).join('')}
      </div>
      <div class="ms"><div class="ms-title">📡 Pings</div>
        <table class="ptable">
          <thead><tr><th>Ping</th><th>Nombre</th><th>Efecto</th></tr></thead>
          <tbody>${c.pings.map(p=>`<tr><td class="pnum">${p.n}</td><td class="pname">${p.name}</td><td class="pdesc">${p.desc}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); document.body.style.overflow=''; }

document.addEventListener('DOMContentLoaded', () => {
  setupNav();
  document.getElementById('nav-hamburger')?.addEventListener('click', toggleMenu);
  document.getElementById('search-input')?.addEventListener('input', e => { fSearch=e.target.value; renderCards(); });
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  renderCards();
});