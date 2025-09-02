// ===========================
// DATOS: todos los ramos (1-9) con id, nombre, créditos y prerrequisitos
// Nota: prerrequisitos pueden ser códigos (p.ej. "CM0211") o condiciones de créditos con formato "CREDITS>=46".
// ===========================
const materias = [
  // SEM 1
  { id:"BU0008", nombre:"Inducción (BU0008)", creditos:0, prereq:[] },
  { id:"BU0011", nombre:"Bienestar Universitario (BU0011)", creditos:1, prereq:[], coreq:["BU0600"] },
  { id:"BU0600", nombre:"Taller de Salud (BU0600)", creditos:0, prereq:[] },
  { id:"CM0211", nombre:"Matemáticas 1 (CM0211)", creditos:3, prereq:[] },
  { id:"EC0418", nombre:"Economía (EC0418)", creditos:3, prereq:[] },
  { id:"NI0104", nombre:"Negocios Internacionales (NI0104)", creditos:3, prereq:["BILINGUE_B1"] },
  { id:"NI0310", nombre:"Proyecto 0: Aprendizaje activo (NI0310)", creditos:1, prereq:[] },
  { id:"NI0311", nombre:"Búsqueda de información (NI0311)", creditos:1, prereq:[] },
  { id:"OG0360", nombre:"Administración y Estrategia (OG0360)", creditos:3, prereq:[] },

  // SEM 2
  { id:"CM0212", nombre:"Matemáticas 2 (CM0212)", creditos:3, prereq:["CM0211"] },
  { id:"CO0342", nombre:"Información financiera y de costos (CO0342)", creditos:3, prereq:[] },
  { id:"NI0100", nombre:"Mercadeo Internacional (NI0100)", creditos:3, prereq:["NI0104"] },
  { id:"NI0312", nombre:"Comunicación intercultural (NI0312)", creditos:2, prereq:[] },
  { id:"NI0313", nombre:"Proyecto 1: Laboratorio de culturas (NI0313)", creditos:3, prereq:["NI0312"], coreq:[] },
  { id:"NI0314", nombre:"Gestión de la información (NI0314)", creditos:1, prereq:["NI0311"] },

  // SEM 3
  { id:"EC0421", nombre:"Economía del Comercio Internacional (EC0421)", creditos:3, prereq:["EC0418"] },
  { id:"FI0138", nombre:"Fundamentos de Finanzas (FI0138)", creditos:3, prereq:["CO0342"] },
  { id:"NI0316", nombre:"Pensamiento Histórico de los Negocios (NI0316)", creditos:3, prereq:["NI0104"] },
  { id:"NI0317", nombre:"Derecho del Comercio Internacional (NI0317)", creditos:3, prereq:[] },
  { id:"NI0318", nombre:"Presentaciones Efectivas (NI0318)", creditos:1, prereq:[] },
  { id:"NI0319", nombre:"Proyecto 2: Selección de Mercados (NI0319)", creditos:3, prereq:["NI0100"] },

  // SEM 4
  { id:"NI0320", nombre:"Gestión de la Distribución Física Internacional 1 (NI0320)", creditos:1, prereq:["CREDITS>=46"] },
  { id:"NI0321", nombre:"Análisis Geopolítico (NI0321)", creditos:3, prereq:["NI0316"] },
  { id:"NI0322", nombre:"Comunicación Escrita (NI0322)", creditos:1, prereq:[] },
  { id:"NI0323", nombre:"Proyecto 3: Integración Económica y Acceso a Mercados (NI0323)", creditos:3, prereq:["NI0317"] },
  { id:"NI0324", nombre:"Estadística Aplicada a los Negocios (NI0324)", creditos:3, prereq:["CM0212"] },
  { id:"OG0368", nombre:"Formulación y Evaluación de Proyectos (OG0368)", creditos:3, prereq:["CO0342"] },

  // SEM 5
  { id:"FI0224", nombre:"Finanzas Internacionales (FI0224)", creditos:3, prereq:["FI0138"] },
  { id:"NI0251", nombre:"Gerencia Comercial Internacional (NI0251)", creditos:3, prereq:["NI0316","NI0321"] },
  { id:"NI0325", nombre:"Introducción a estudios internacionales (NI0325)", creditos:2, prereq:["NI0316","NI0321"] },
  { id:"NI0326", nombre:"Legislación de comercio exterior 1 (NI0326)", creditos:1, prereq:["CREDITS>=73"] },
  { id:"NI0327", nombre:"Programación para los negocios (NI0327)", creditos:1, prereq:["NI0324","NI0322"] },
  { id:"NI0328", nombre:"Proyecto 4: Organizaciones Intergubernamentales (NI0328)", creditos:3, prereq:["CREDITS>=55","NI0325","NI0323"] },

  // SEM 6
  { id:"CO0371", nombre:"Analítica de Negocios (CO0371)", creditos:3, prereq:["NI0324","NI0327"] },
  { id:"NI0299", nombre:"Gestión Intercultural (NI0299)", creditos:3, prereq:["CREDITS>=74"] },
  { id:"NI0329", nombre:"Estrategia Internacional (NI0329)", creditos:3, prereq:["CREDITS>=74"] },
  { id:"NI0330", nombre:"Gestión de la Cadena de Suministro Global 1 (NI0330)", creditos:1, prereq:["NI0320"] },
  { id:"NI0331", nombre:"Protocolo Empresarial (NI0331)", creditos:1, prereq:[] },
  { id:"NI0332", nombre:"Proyecto 5: Cadenas de Suministro Globales (NI0332)", creditos:3, prereq:["NI0326","NI0320"] },

  // SEM 7
  { id:"NI0333", nombre:"Negociación de Contratos Internacionales (NI0333)", creditos:2, prereq:["NI0323"] },
  { id:"NI0334", nombre:"Laboratorio Multilingüe (NI0334)", creditos:1, prereq:["NI0299"] },
  { id:"NI0335", nombre:"Proyecto 6: Plan de Internacionalización (NI0335)", creditos:3, prereq:["NI0329"] },
  { id:"OG0370", nombre:"Competencias Evaluativas (OG0370)", creditos:1, prereq:["CREDITS>=90"] },
  { id:"PT0113", nombre:"Pre-Práctica (PT0113)", creditos:0, prereq:[] },
  { id:"PT4002", nombre:"Práctica Negocios Internacionales (PT4002)", creditos:0, prereq:[] },

  // SEM 8
  { id:"PT0191", nombre:"Período de Práctica (PT0191)", creditos:18, prereq:["PT0113","NI0335","NI0326","NI0330","CREDITS>=111"] },

  // SEM 9
  { id:"NI0336", nombre:"Negociación Internacional (NI0336)", creditos:2, prereq:["NI0333","PT0191"] },
  { id:"NI0337", nombre:"Gerencia Internacional (NI0337)", creditos:3, prereq:["NI0335","PT0191"] },
  { id:"OG0372", nombre:"Proyecto EA (OG0372)", creditos:2, prereq:["PT0191","CREDITS>=100"] },
  { id:"OG0373", nombre:"Seminario Internacional (OG0373)", creditos:1, prereq:["PT0191","CREDITS>=100"] }
];

// ===========================
// Estado interno
// ===========================
let estado = {}; // id -> "blocked"|"available"|"pending"|"inprogress"|"approved"
let approvedCredits = 0;

// Inicializar: todos bloqueados inicialmente; luego se actualizará disponibilidad
materias.forEach(m => estado[m.id] = "blocked");

// total de créditos (para progress)
const totalCredits = materias.reduce((s,m) => s + (typeof m.creditos === "number" ? m.creditos : 0), 0);

// ===========================
// Utilidades para comprobar prerrequisitos
// ===========================
function checkPrereqSatisfied(pr) {
  // pr puede ser un código (p.ej. "CM0211") o "CREDITS>=46" o "BILINGUE_B1" o similar
  if (!pr) return true;
  if (pr.startsWith("CREDITS>=")) {
    const n = parseInt(pr.split(">=")[1]);
    return approvedCredits >= n;
  }
  if (pr === "BILINGUE_B1") {
    // asumimos que el usuario cumple bilingüismo? Por seguridad lo dejamos bloqueado hasta que apruebes NI0104.
    // Aquí decidimos: tratar "BILINGUE_B1" como un prerrequisito que NO se satisface automáticamente.
    return estado["NI0104"] === "approved";
  }
  // es un codigo; verificar que exista y esté aprobado
  if (estado[pr] && estado[pr] === "approved") return true;
  return false;
}

// dado un array de prereqs, devolver true si todos se cumplen
function allPrereqsSatisfied(prereqArray) {
  if (!prereqArray || prereqArray.length === 0) return true;
  return prereqArray.every(p => checkPrereqSatisfied(p));
}

// ===========================
// Construcción UI
// ===========================
const main = document.getElementById("main-accordion");
const approvedSpan = document.getElementById("approved-credits");
const totalSpan = document.getElementById("total-credits");
const progressBar = document.getElementById("progress-bar");

totalSpan.textContent = totalCredits;

// agrupar materias por semestre según códigos en la lista original (vamos a derivarlo por orden y bloques)
const semestres = [
  { num:1, ids:["BU0008","BU0011","BU0600","CM0211","EC0418","NI0104","NI0310","NI0311","OG0360"] },
  { num:2, ids:["CM0212","CO0342","NI0100","NI0312","NI0313","NI0314"] },
  { num:3, ids:["EC0421","FI0138","NI0316","NI0317","NI0318","NI0319"] },
  { num:4, ids:["NI0320","NI0321","NI0322","NI0323","NI0324","OG0368"] },
  { num:5, ids:["FI0224","NI0251","NI0325","NI0326","NI0327","NI0328"] },
  { num:6, ids:["CO0371","NI0299","NI0329","NI0330","NI0331","NI0332"] },
  { num:7, ids:["NI0333","NI0334","NI0335","OG0370","PT0113","PT4002"] },
  { num:8, ids:["PT0191"] },
  { num:9, ids:["NI0336","NI0337","OG0372","OG0373"] }
];

function findMateriaById(id){
  return materias.find(m => m.id === id);
}

// crear acordeón
function buildAccordion(){
  main.innerHTML = ""; // limpiar
  semestres.forEach(s => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `<h3>Semestre ${s.num}</h3><div class="semester-meta">${s.ids.length} materias</div>`;

    const body = document.createElement("div");
    body.className = "accordion-body";

    const grid = document.createElement("div");
    grid.className = "subjects-grid";

    s.ids.forEach(id => {
      const m = findMateriaById(id);
      if (!m) return;
      const card = document.createElement("div");
      card.className = "subject-card";
      card.setAttribute("data-id", m.id);
      card.setAttribute("data-state", "pending"); // será actualizado luego
      card.innerHTML = `
        <div>
          <div class="subject-title">${m.nombre}</div>
          <div class="subject-meta">${m.creditos} cr</div>
          <div class="prereq"><strong>Prereq:</strong> ${ (m.prereq && m.prereq.length) ? m.prereq.join(", ") : "Ninguno" }${ (m.coreq && m.coreq.length) ? " | Coreq: " + m.coreq.join(", ") : "" }</div>
        </div>
      `;

      // click handler
      card.addEventListener("click", (e) => {
        const id = card.getAttribute("data-id");
        if (card.classList.contains("blocked")) return; // no clickable
        cycleState(id);
      });

      grid.appendChild(card);
    });

    body.appendChild(grid);
    item.appendChild(header);
    item.appendChild(body);
    main.appendChild(item);

    // header click (acordeón)
    header.addEventListener("click", () => {
      if (body.style.maxHeight) {
        body.style.maxHeight = null;
      } else {
        // cerrar otros
        document.querySelectorAll(".accordion-body").forEach(b => b.style.maxHeight = null);
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  updateAllStates(); // pintar estados iniciales
}

// ===========================
// Lógica de estados
// Estados posibles en 'estado' obj: "blocked","available","pending","inprogress","approved"
// En la UI usamos data-state y clases blocked/approved/inprogress
// ===========================
function computeApprovedCredits(){
  approvedCredits = 0;
  for(const id in estado){
    if (estado[id] === "approved"){
      const m = findMateriaById(id);
      approvedCredits += (m && typeof m.creditos === "number") ? m.creditos : 0;
    }
  }
  approvedSpan.textContent = approvedCredits;
  const pct = totalCredits === 0 ? 0 : Math.round( (approvedCredits / totalCredits) * 100 );
  progressBar.style.width = pct + "%";
}

// actualiza disponibilidad: si todas las prereqs (tipo codigo o CREDITS>=X) se cumplen, queda available (si no aprobado aún)
function updateAvailability(){
  materias.forEach(m => {
    const id = m.id;
    // si ya aprobado, keep approved
    if (estado[id] === "approved") return;
    const prereqs = m.prereq || [];
    const satisfied = allPrereqsSatisfied(prereqs);
    estado[id] = satisfied ? "available" : "blocked";
  });
}

// cambia el estado ciclando y actualiza aprobación y desbloqueos
function cycleState(id){
  const current = estado[id];
  if (current === "blocked") return;
  if (current === "available" || current === "pending"){
    // pasar a inprogress
    estado[id] = "inprogress";
  } else if (current === "inprogress"){
    // pasar a approved
    estado[id] = "approved";
  } else if (current === "approved"){
    // quitar aprobada -> available
    estado[id] = "available";
  }
  // si approved cambió, recomputar créditos y disponibilidad de otros
  computeApprovedCredits();
  updateAvailability();
  updateAllStates();
}

// repintar todas las cards según 'estado' global
function updateAllStates(){
  // primera, asegurar disponibilidad antes de pintar
  updateAvailability();
  computeApprovedCredits();

  document.querySelectorAll(".subject-card").forEach(card => {
    const id = card.getAttribute("data-id");
    const st = estado[id] || "blocked";
    card.classList.remove("blocked");
    card.classList.remove("approved");
    card.classList.remove("inprogress");
    card.classList.remove("pending");
    card.setAttribute("data-state","pending");

    if (st === "blocked"){
      card.classList.add("blocked");
      card.setAttribute("data-state","pending");
    } else if (st === "available"){
      card.classList.add("pending"); // disponible pero no iniciado
      card.setAttribute("data-state","pending");
    } else if (st === "inprogress"){
      card.classList.add("inprogress");
      card.setAttribute("data-state","inprogress");
    } else if (st === "approved"){
      card.classList.add("approved");
      card.setAttribute("data-state","approved");
    }
  });

  // actualizar texto de créditos
  approvedSpan.textContent = approvedCredits;
}

// ===========================
// Inicialización
// ===========================
function init(){
  // por defecto, tratamos NI0104 (Negocios Internacionales) como available si no exige bilingüismo;
  // pero en la tabla dice Bilingüismo: nivel B1 — lo dejamos bloqueado hasta que apruebes NI0104 itself? 
  // Mejor: permitir NI0104 disponible (usuaria lo puede aprobar), y tratar BILINGUE_B1 como prerrequisito a otros que lo pidan.
  // En datos, NI0104 no tiene prereq: por eso inicializamos availability.
  materias.forEach(m => {
    estado[m.id] = "blocked";
  });

  // marcar como available aquellos sin prereqs
  updateAvailability();
  buildAccordion();
  computeApprovedCredits();
}

init();

// ===========================
// Nota: si quieres persistencia (guardar estados entre recargas), podemos agregar localStorage.
// ===========================
