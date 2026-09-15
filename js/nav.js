// Navbar compartida por todas las páginas.
// Para agregar/editar una sección del menú, tocar SOLO este archivo.
// Se inyecta con document.write() en el lugar exacto donde estaba el <nav>,
// por eso este <script> NO debe llevar "defer" ni "async" en el HTML.
document.write(`
<nav>
  <div class="nav-logo" onclick="goTo('home')">LGS</div>
  <button class="nav-hamburger" id="nav-hamburger" aria-label="Menú">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-links" id="nav-links">
    <button class="nav-btn" data-page="home"       onclick="goTo('home');closeMenu()">Inicio</button>
    <button class="nav-btn" data-page="personajes" onclick="goTo('personajes');closeMenu()">Personajes</button>
    <button class="nav-btn" data-page="inventario" onclick="goTo('inventario');closeMenu()">Inventario</button>
    <button class="nav-btn" data-page="tierlist"   onclick="goTo('tierlist');closeMenu()">Tier List</button>
    <button class="nav-btn" data-page="equipos"    onclick="goTo('equipos');closeMenu()">Equipos</button>
    <button class="nav-btn" data-page="notas"      onclick="goTo('notas');closeMenu()">Notas</button>
  </div>
</nav>
`);
