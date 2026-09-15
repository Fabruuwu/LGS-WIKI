// Datos de la Tier List: posiciones por región, glosario de tags y fortalezas/debilidades.
// Debe cargarse ANTES que el <script> inline de tierlist.html (usa CHARS/EC de personajes-data.js también).

// ════════════════════════════════════════
// DATOS DE LA TIERLIST — REGIÓN 0
// ════════════════════════════════════════
const TIERLIST_REGION0 = [
  {
    tier:'T0', cls:'tier-t0',
    dps:    [ {id:1,  img:'Personajes 1.0 De frente/ReyDNSCarta.jpg'} ],
    subdps: [ {id:3,  img:'Personajes 1.0 De frente/BelleCarta.jpg'} ],
    supp:   [ {id:19, img:'Personajes 1.0 De frente/RegutaCarta.jpg'},
              {id:3,  img:'Personajes 1.0 De frente/BelleCarta.jpg'} ],
    sust:   [],
  },
  {
    tier:'T0.5', cls:'tier-t05',
    dps:    [ {id:5,  img:'Personajes 1.0 De frente/FabruCarta.jpg'} ],
    subdps: [],
    supp:   [],
    sust:   [ {id:25, img:'Personajes 1.0 De frente/EscarlataCarta.jpg'},
              {id:13, img:'Personajes 1.0 De frente/PobertoCarta.jpg'} ],
  },
  {
    tier:'T1', cls:'tier-t1',
    dps:    [ {id:9,  img:'Personajes 1.0 De frente/CrisCarta.jpg'} ],
    subdps: [ {id:4,  img:'Personajes 1.0 De frente/HawkCarta.jpg'} ],
    supp:   [ {id:2,  img:'Personajes 1.0 De frente/MikiCarta.jpg'},
              {id:7,  img:'Personajes 1.0 De frente/KyouCarta.jpg'} ],
    sust:   [],
  },
  {
    tier:'T1.5', cls:'tier-t15',
    dps:    [ {id:12, img:'Personajes 1.0 De frente/iKaytoCarta.jpg'} ],
    subdps: [ {id:6,  img:'Personajes 1.0 De frente/EugenioCarta.jpg'} ],
    supp:   [ {id:6,  img:'Personajes 1.0 De frente/EugenioCarta.jpg'} ],
    sust:   [],
  },
  {
    tier:'T2', cls:'tier-t2',
    dps:    [],
    subdps: [ {id:8,  img:'Personajes 1.0 De frente/TtlimCarta.jpg'},
              {id:10, img:'Personajes 1.0 De frente/QuencyCarta.jpg'},
              {id:11, img:'Personajes 1.0 De frente/EydisCarta.jpg'} ],
    supp:   [ {id:15, img:'Personajes 1.0 De frente/KoenigCarta.jpg'} ],
    sust:   [],
  },
];

// ════════════════════════════════════════
// DATOS DE LA TIERLIST — REGIÓN 1 (UNIFICADA)
// ════════════════════════════════════════
const TIERLIST_REGION1 = [
  {
    tier:'T0', cls:'tier-t0',
    dps:    [
      {id:1,  img:'Personajes 1.0 De frente/ReyDNSCarta.jpg'},
      {id:16, img:'Personajes 1.1 De frente/TtlimSPFrente.jpg'}
    ],
    subdps: [
      {id:4,  img:'Personajes 1.0 De frente/HawkCarta.jpg'},
      {id:3,  img:'Personajes 1.0 De frente/BelleCarta.jpg'}
    ],
    supp:   [
      {id:19, img:'Personajes 1.0 De frente/RegutaCarta.jpg'},
      {id:2,  img:'Personajes 1.0 De frente/MikiCarta.jpg'}
    ],
    sust:   [
      {id:13, img:'Personajes 1.0 De frente/PobertoCarta.jpg'},
      {id:25, img:'Personajes 1.0 De frente/EscarlataCarta.jpg'}
    ],
  },
  {
    tier:'T0.5', cls:'tier-t05',
    dps:    [
      {id:5,  img:'Personajes 1.0 De frente/FabruCarta.jpg'},
      {id:9,  img:'Personajes 1.0 De frente/CrisCarta.jpg'}
    ],
    subdps: [
      {id:22, img:'Personajes 1.1 De frente/DawnFrente.jpg'}
    ],
    supp:   [],
    sust:   [],
  },
  {
    tier:'T1', cls:'tier-t1',
    dps:    [
      {id:17, img:'Personajes 1.1 De frente/YanfeiFrente.jpg'},
      {id:21, img:'Personajes 1.1 De frente/ArekuFrente.jpg'}
    ],
    subdps: [
      {id:18, img:'Personajes 1.1 De frente/TakoFrente.jpg'}
    ],
    supp:   [
      {id:7,  img:'Personajes 1.0 De frente/KyouCarta.jpg'}
    ],
    sust:   [
      {id:20, img:'Personajes 1.1 De frente/SofftsuFrente.jpg'}
    ],
  },
  {
    tier:'T1.5', cls:'tier-t15',
    dps:    [
      {id:12, img:'Personajes 1.0 De frente/iKaytoCarta.jpg'}
    ],
    subdps: [
      {id:6,  img:'Personajes 1.0 De frente/EugenioCarta.jpg'},
      {id:10, img:'Personajes 1.0 De frente/QuencyCarta.jpg'},
      {id:11, img:'Personajes 1.0 De frente/EydisCarta.jpg'}
    ],
    supp:   [
      {id:15, img:'Personajes 1.0 De frente/KoenigCarta.jpg'}
    ],
    sust:   [],
  },
  {
    tier:'T2', cls:'tier-t2',
    dps:    [],
    subdps: [
      {id:8,  img:'Personajes 1.0 De frente/TtlimCarta.jpg'}
    ],
    supp:   [],
    sust:   [],
  },
];

// ════════════════════════════════════════
// GLOSARIO DE ETIQUETAS
// ════════════════════════════════════════
const GLOSARIO_TIER = {
  'ADVANCE': 'Adelanta la acción de un aliado.',
  'DOUBLE TURN': 'Otorga un turno extra a un aliado.',
  'AGI BUFF': 'Aumenta la agilidad del equipo.',
  'ATK BUFF': 'Aumenta el ataque del equipo.',
  'EXTRA ATK': 'Realiza ataques adicionales de forma automática.',
  'FUA': 'Ataque adicional automático (Follow-Up Attack).',
  'HIGH DMG': 'Daño alto.',
  'AOE': 'Daño en área (Area of Effect).',
  'SNOWBALL': 'Capacidad de escalar su poder con el tiempo.',
  'SELF BUFF': 'Se aplica mejoras a sí mismo.',
  'CRIT GUARANTEED': 'Garantiza golpes críticos.',
  'ENERGY': 'Recupera puntos de energía.',
  'HEAL': 'Cura o regenera vida.',
  'SHIELD': 'Otorga escudos protectores.',
  'TANKY': 'Resistente, aguanta mucho daño.',
  'SIMPLE': 'Fácil de usar, mecánicas sencillas.',
  'DEBUFF': 'Reduce estadísticas enemigas.',
  'CONTROL': 'Aturde, ralentiza o inmoviliza enemigos.',
  'DMG AMP': 'Amplifica el daño que reciben los enemigos.',
  'UNIQUE': 'Mecánica única y original.',
  'HIGH POTENTIAL': 'Puede alcanzar números muy altos de daño si la suerte acompaña.',
  'FRAGIL': 'Muere con facilidad.',
  'SQUISHY': 'Muy poca resistencia, frágil.',
  'LOW HP': 'Puntos de vida bajos.',
  'STATS LOW': 'Estadísticas base bajas.',
  'LOW ATK': 'Ataque personal reducido.',
  'LOW DMG': 'Daño personal reducido.',
  'RNG DEPENDENT': 'Su rendimiento depende del azar.',
  'INCONSISTENT': 'Rendimiento inconsistente.',
  'AMMO MANAGEMENT': 'Requiere gestión de recursos (munición).',
  'COMPLEX': 'Curva de aprendizaje alta, mecánicas complejas.',
  'SETUP REQUIRED': 'Necesita preparación previa para rendir.',
  'DRONE DEPENDENT': 'Depende de invocaciones o drones externos.',
  'TEAM DEPENDENT': 'Su poder depende de la composición del equipo.',
  'NO HEAL': 'Carece de curación.',
  'NO DMG': 'Carece de daño.',
  'SELFISH': 'Sus habilidades solo se centran en sí mismo.',
  'REACTIVE': 'Necesita que ocurra algo para activar sus habilidades.',
  'POSTURE MANAGEMENT': 'Tiene que alternar entre estados o posturas.',
  'ENERGY HUNGRY': 'Gasta mucha energía para usar sus habilidades.',
  'DMG REDUCTION': 'Reduce el daño recibido.',
  'PASSIVE HEAL': 'Curación pasiva automática.',
  'SUB-DPS': 'Dañador secundario.',
  'RECARGA FORZADA': 'Debe recargar obligatoriamente, perdiendo un turno.',
  'FLEXIBLE': 'Versátil, se adapta a distintas situaciones.',
  // Nuevas para Región 1
  'HIGH BURST': 'Capacidad de infligir una cantidad masiva de daño en poco tiempo.',
  'RESOURCE CONSUMPTION': 'Consume recursos (como acumulaciones) para potenciar sus ataques.',
  'UNITARGET': 'Especializado en atacar a un solo enemigo.',
  'HIGH CRIT': 'Alta probabilidad de asestar golpes críticos.',
  'NO AOE': 'Carece de ataques que afecten a varios enemigos.',
  'UNITARGET ONLY': 'Todo su kit está diseñado para golpear a un único objetivo.',
  'OUTCLASSED': 'Ha sido superado por otras versiones o personajes del mismo rol.',
  'SLOW': 'Baja agilidad, tarda más en actuar.',
  'PROVOKE': 'Puede forzar a los enemigos a atacarlo.',
};

// ════════════════════════════════════════
// FORTALEZAS Y DEBILIDADES POR PERSONAJE
// ════════════════════════════════════════
const FORTALEZAS_DEBILIDADES = {
  // Región 0
  1:  { fortalezas: ['HIGH DMG','SELF BUFF','CRIT GUARANTEED','FLEXIBLE'], debilidades: ['AMMO MANAGEMENT','RECARGA FORZADA','FRAGIL'] },
  2:  { fortalezas: ['DEBUFF','CONTROL','SELF BUFF','TANKY'], debilidades: ['LOW DMG','SETUP REQUIRED','RNG DEPENDENT'] },
  3:  { fortalezas: ['AGI BUFF','ATK BUFF','EXTRA ATK','FUA'], debilidades: ['SQUISHY','RNG DEPENDENT','COMPLEX'] },
  4:  { fortalezas: ['CONTROL','DMG AMP','FUA','SELF BUFF'], debilidades: ['RNG DEPENDENT','SQUISHY','COMPLEX'] },
  5:  { fortalezas: ['HIGH DMG','AOE','DEBUFF','EXTRA ATK'], debilidades: ['SQUISHY','DRONE DEPENDENT','COMPLEX'] },
  6:  { fortalezas: ['HIGH POTENTIAL','UNIQUE','ATK BUFF','RNG DEPENDENT'], debilidades: ['INCONSISTENT','COMPLEX','RNG DEPENDENT'] },
  7:  { fortalezas: ['DEBUFF','DMG AMP','ENERGY','SUB-DPS'], debilidades: ['SQUISHY','COMPLEX','SETUP REQUIRED'] },
  8:  { fortalezas: ['CONTROL','DEBUFF','SELF BUFF','AOE'], debilidades: ['SQUISHY','RNG DEPENDENT','COMPLEX'] },
  9:  { fortalezas: ['HIGH DMG','SELF BUFF','AOE','SNOWBALL'], debilidades: ['FRAGIL','TEAM DEPENDENT','COMPLEX'] },
  10: { fortalezas: ['EVASION','FUA','SELF BUFF','DEBUFF'], debilidades: ['SQUISHY','RNG DEPENDENT','LOW HP'] },
  11: { fortalezas: ['DEBUFF','AOE','SELF BUFF','SUB-DPS'], debilidades: ['COMPLEX','LOW DMG','TEAM DEPENDENT'] },
  12: { fortalezas: ['AOE','CONTROL','SELF BUFF','FUA'], debilidades: ['COMPLEX','POSTURE MANAGEMENT','SQUISHY'] },
  13: { fortalezas: ['SHIELD','DMG REDUCTION','TANKY','SIMPLE'], debilidades: ['LOW ATK','NO HEAL','REACTIVE'] },
  15: { fortalezas: ['ENERGY','ATK BUFF','AGI BUFF','SIMPLE'], debilidades: ['LOW DMG','SELFISH','NO HEAL'] },
  19: { fortalezas: ['ADVANCE','ENERGY','DMG AMP','DOUBLE TURN'], debilidades: ['FRAGIL','STATS LOW','RNG DEPENDENT'] },
  25: { fortalezas: ['HEAL','SHIELD','PASSIVE HEAL','TANKY'], debilidades: ['NO DMG','ENERGY HUNGRY','REACTIVE'] },
  // Región 1 - Nuevos personajes
  16: { fortalezas: ['HIGH BURST','SNOWBALL','SELF BUFF','HIGH DMG'], debilidades: ['SETUP REQUIRED','FRAGIL','COMPLEX'] },
  17: { fortalezas: ['HIGH BURST','SELF BUFF','DEBUFF'], debilidades: ['RESOURCE CONSUMPTION','INCONSISTENT'] },
  18: { fortalezas: ['CONTROL','DEBUFF','DMG AMP','SELF BUFF'], debilidades: ['SETUP REQUIRED','COMPLEX','SQUISHY'] },
  20: { fortalezas: ['SHIELD','PROVOKE','SELF BUFF','TANKY'], debilidades: ['SLOW','COMPLEX','SETUP REQUIRED'] },
  21: { fortalezas: ['HIGH BURST','UNITARGET','HIGH CRIT'], debilidades: ['NO AOE','SQUISHY','UNITARGET ONLY'] },
  22: { fortalezas: ['CONTROL','DEBUFF','SNOWBALL','SELF BUFF'], debilidades: ['SETUP REQUIRED','COMPLEX'] },
};