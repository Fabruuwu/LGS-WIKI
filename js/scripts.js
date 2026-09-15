// Lógica compartida: navegación, render de la grilla de personajes y modal.
// Depende de data/personajes-data.js (CHARS, EC, GRAD, EFFECT_TOOLTIPS).


let fElem='all', fRole='all', fSearch='';

// ── Navegación ──
function setupNav(){
  const page=document.body.dataset.page||'home';
  document.querySelectorAll('.nav-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.page===page));
}
function goTo(page){
  const target=page==='home'?'index.html':`${page}.html`;
  window.location.href=target;
}
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
    return (fElem==='all'||c.element===fElem)&&
           (fRole==='all'||c.roleTag===fRole)&&
           c.name.toLowerCase().includes(fSearch.toLowerCase());
  });
  document.getElementById('char-count').textContent=list.length;
  if(!list.length){
    grid.innerHTML='<div class="empty-state"><span class="empty-icon">🔍</span><div class="empty-text">No se encontraron personajes</div></div>';
    return;
  }
  grid.innerHTML=list.map(c=>{
    const el=EC[c.element];
    const artHtml=c.art?`<img src="${c.art}" alt="${c.name}">`:`<div class="card-art-bg" style="${GRAD[c.element]}"></div>`;
    return`<div class="char-card" onclick="openChar(${c.id})">
      <div class="card-art">${artHtml}<div class="elem-badge" style="background:${el.color};box-shadow:0 0 9px ${el.color}"></div></div>
      <div class="card-footer"><div class="card-name">${c.name}</div><div class="card-el-name">${el.label}</div></div>
    </div>`;
  }).join('');
}

// ── Filtros (elemento / rol) ──
function setupFilters(){
  const elemBox=document.getElementById('filter-elements');
  const roleBox=document.getElementById('filter-roles');
  if(!elemBox || !roleBox) return; // esta página no tiene filtros (ej: no es personajes.html)

  // Genera los pills de elemento a partir de EC, así siempre están sincronizados con la data.
  const allBtn=`<button class="pill active" data-elem="all">Todos</button>`;
  const elemBtns=Object.entries(EC).map(([key,val])=>
    `<button class="pill" data-elem="${key}" style="border-color:${val.color}55">${val.label}</button>`
  ).join('');
  elemBox.innerHTML=allBtn+elemBtns;

  elemBox.addEventListener('click', e=>{
    const btn=e.target.closest('.pill'); if(!btn) return;
    fElem=btn.dataset.elem;
    elemBox.querySelectorAll('.pill').forEach(p=>p.classList.toggle('active',p===btn));
    renderCards();
  });

  roleBox.addEventListener('click', e=>{
    const btn=e.target.closest('.pill'); if(!btn) return;
    fRole=btn.dataset.role;
    roleBox.querySelectorAll('.pill').forEach(p=>p.classList.toggle('active',p===btn));
    renderCards();
  });
}

// ── Modal ──
function applyTooltips(desc){
  let html=desc;
  for(const [term,explanation] of Object.entries(EFFECT_TOOLTIPS)){
    html=html.replaceAll(term,`<span class="effect-tooltip" data-tooltip="${explanation}">${term}</span>`);
  }
  return html;
}
function openChar(id){
  const c=CHARS.find(x=>x.id===id); if(!c) return;
  const el=EC[c.element];
  const heroContent=c.art?`<img class="modal-hero-img" src="${c.art}" alt="${c.name}">`:`<div class="modal-hero-bg" style="${GRAD[c.element]}"></div>`;
  const modalContent=document.getElementById('modal-content');
  if(!modalContent) return;
  const statsHTML=Object.entries(c.stats).map(([k,v])=>{
    if(typeof v==='object' && v.lvl1!==undefined && v.lvl99!==undefined){
      return`<div class="srow"><span class="sname">${k}</span><span class="sval">LvL 1 [${v.lvl1}]<br>LvL 99 [${v.lvl99}]</span></div>`;
    }else{
      return`<div class="srow"><span class="sname">${k}</span><span class="sval">${v}</span></div>`;
    }
  }).join('');
  const skillsHTML=c.skills.map(s=>{
    let tagHtml=s.tag?`[${s.tag}] `:'';
    const levelText=s.type.replace('Nivel ','Nivel de Desbloqueo: LvL ');
    return`<div class="skill-card">
      <div class="sk-head"><span class="sk-icon">${s.icon}</span><span class="sk-name">${tagHtml}${s.name}</span><span class="sk-type">${levelText}</span></div>
      <div class="sk-flavor">${s.flavor||''}</div>
      <div class="sk-desc">${applyTooltips(s.desc)}</div>
    </div>`;
  }).join('');
  const talentoCoreHTML=c.talentoCore?`<div class="ms"><div class="ms-title">🧠 Talento Core</div><div class="skill-card"><div class="sk-desc">${c.talentoCore}</div></div></div>`:'';
  modalContent.innerHTML=`
    <div class="modal-hero">${heroContent}<div class="modal-hero-grad"></div>
      <div class="modal-hero-info">
        <div class="modal-name">${c.name}</div><div class="modal-tagline">${c.tagline}</div>
        <div class="modal-badges">
          <div class="mbadge"><div class="mbadge-dot" style="background:${el.color};box-shadow:0 0 7px ${el.color}"></div>${el.label}</div>
          <div class="mbadge mbadge-role">${c.role}</div>
          <div class="mbadge mbadge-paradigma">📘 ${c.paradigma}</div>
        </div>
      </div>
    </div>
    <div class="modal-body" style="font-size:1.05rem;">
      <div class="ms"><div class="ms-title">📊 Estadísticas Base</div><div class="stats-grid">${statsHTML}</div></div>
      <div class="ms"><div class="ms-title">⚙️ Habilidades</div>${skillsHTML}</div>
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
  setupFilters();
  document.getElementById('search-input')?.addEventListener('input', e => {
    fSearch=e.target.value.trim();
    renderCards();
  });
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click',e=>{ if(e.target===e.currentTarget) closeModal(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  // Tooltips
  const tooltipGlobal=document.getElementById('global-tooltip');
  let tooltipFixed=false;
  function showTooltip(text,x,y){
    tooltipGlobal.textContent=text;
    tooltipGlobal.classList.add('visible');
    const rect=tooltipGlobal.getBoundingClientRect();
    let left=x-rect.width/2, top=y-rect.height-8;
    if(left<8) left=8;
    if(left+rect.width>window.innerWidth-8) left=window.innerWidth-rect.width-8;
    if(top<8) top=y+20;
    tooltipGlobal.style.left=left+'px';
    tooltipGlobal.style.top=top+'px';
  }
  function hideTooltip(){ if(!tooltipFixed) tooltipGlobal.classList.remove('visible'); }
  document.body.addEventListener('mouseover', e => {
    const target=e.target.closest('.effect-tooltip');
    if(target){
      const text=target.getAttribute('data-tooltip');
      if(text){ const rect=target.getBoundingClientRect(); showTooltip(text,rect.left+rect.width/2,rect.top); }
    }
  });
  document.body.addEventListener('mouseout', e => {
    const target=e.target.closest('.effect-tooltip');
    if(target && !tooltipFixed) hideTooltip();
  });
  document.body.addEventListener('click', e => {
    const target=e.target.closest('.effect-tooltip');
    if(target){
      e.preventDefault();
      const text=target.getAttribute('data-tooltip');
      if(text){ const rect=target.getBoundingClientRect(); showTooltip(text,rect.left+rect.width/2,rect.top); tooltipFixed=true; }
    }else{ tooltipFixed=false; hideTooltip(); }
  });
  window.addEventListener('scroll',()=>{ tooltipFixed=false; hideTooltip(); },{passive:true});
  window.addEventListener('resize',()=>{ tooltipFixed=false; hideTooltip(); });
  renderCards();
});

// ── Tooltips actualizados ──