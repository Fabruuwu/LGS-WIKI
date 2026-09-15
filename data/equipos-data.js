// Datos de equipos recomendados: mapeo de cartas por personaje, comps por región y reglas del ranking.

const CARTA_IMG = {
  // Región 0
  1: 'Personajes 1.0 De frente/ReyDNSCarta.jpg',
  2: 'Personajes 1.0 De frente/MikiCarta.jpg',
  3: 'Personajes 1.0 De frente/BelleCarta.jpg',
  4: 'Personajes 1.0 De frente/HawkCarta.jpg',
  5: 'Personajes 1.0 De frente/FabruCarta.jpg',
  6: 'Personajes 1.0 De frente/EugenioCarta.jpg',
  7: 'Personajes 1.0 De frente/KyouCarta.jpg',
  8: 'Personajes 1.0 De frente/TtlimCarta.jpg',
  9: 'Personajes 1.0 De frente/CrisCarta.jpg',
  10: 'Personajes 1.0 De frente/QuencyCarta.jpg',
  11: 'Personajes 1.0 De frente/EydisCarta.jpg',
  12: 'Personajes 1.0 De frente/iKaytoCarta.jpg',
  13: 'Personajes 1.0 De frente/PobertoCarta.jpg',
  15: 'Personajes 1.0 De frente/KoenigCarta.jpg',
  19: 'Personajes 1.0 De frente/RegutaCarta.jpg',
  25: 'Personajes 1.0 De frente/EscarlataCarta.jpg',
  // Región 1
  16: 'Personajes 1.1 De Frente/TtlimSPFrente.jpg',
  17: 'Personajes 1.1 De Frente/YanfeiFrente.jpg',
  18: 'Personajes 1.1 De Frente/TakoFrente.jpg',
  20: 'Personajes 1.1 De Frente/SofftsuFrente.jpg',
  21: 'Personajes 1.1 De Frente/ArekuFrente.jpg',
  22: 'Personajes 1.1 De Frente/DawnFrente.jpg'
};

const DATA_EQUIPOS = {
  '1.0': [
    { chars:[1,3,19,13], dmg:183400 },
    { chars:[5,3,19,25], dmg:168200 },
    { chars:[9,10,15,13], dmg:114500 },
    { chars:[12,8,7,25], dmg:112800 },
    { chars:[1,6,15,25], dmg:106500 },
    { chars:[5,4,2,13], dmg:98400 },
    { chars:[9,4,2,25], dmg:91200 },
    { chars:[12,10,7,13], dmg:87600 },
    { chars:[1,8,2,25], dmg:82300 },
    { chars:[5,11,15,13], dmg:74900 }
  ],
  '1.1': [
    { chars:[16,3,19,13], dmg:198500 },
    { chars:[1,4,19,25], dmg:185000 },
    { chars:[21,3,7,13], dmg:146200 },
    { chars:[17,22,2,25], dmg:127800 },
    { chars:[5,18,15,20], dmg:109500 },
    { chars:[9,10,7,13], dmg:95300 },
    { chars:[12,11,2,25], dmg:88100 },
    { chars:[1,6,15,13], dmg:81600 },
    { chars:[5,8,19,20], dmg:73200 },
    { chars:[9,4,7,25], dmg:68900 }
  ]
};

const REGLAS_GENERAL = `
  <div class="reglas-box">
    <strong>Reglas:</strong><br>
    1- Los equipos son de máximo 4 integrantes y deberán conformarse por:<br>
    &nbsp;&nbsp;&nbsp;1 DPS · 1 SubDPS · 1 Soporte · 1 Sustain<br>
    &nbsp;&nbsp;&nbsp;(Esta regla NO puede romperse)<br><br>
    2- Se miden en un total de 50 turnos. La agilidad de cada personaje determina cuántas acciones realizan (AV = 100).<br><br>
    3- El enemigo tiene HP infinita y 90 de agilidad, por lo que algunos turnos también serán suyos.<br><br>
    4- Se toman las stats de los personajes a nivel 99 para los cálculos.
  </div>
`;