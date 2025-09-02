// ----------------------
// Pensum completo (datos)
 // ----------------------
const materias = [
  // SEM 1
  { id:"BU0008", nombre:"Inducción (BU0008)", creditos:0, prereq:[], coreq:[] },
  { id:"BU0011", nombre:"Bienestar Universitario (BU0011)", creditos:1, prereq:[], coreq:["BU0600"] },
  { id:"BU0600", nombre:"Taller de Salud (BU0600)", creditos:0, prereq:[], coreq:[] },
  { id:"CM0211", nombre:"Matemáticas 1 (CM0211)", creditos:3, prereq:[], coreq:[] },
  { id:"EC0418", nombre:"Economía (EC0418)", creditos:3, prereq:[], coreq:[] },
  { id:"NI0104", nombre:"Negocios Internacionales (NI0104)", creditos:3, prereq:["BILINGUE_B1"], coreq:[] },
  { id:"NI0310", nombre:"Proyecto 0: Aprendizaje activo (NI0310)", creditos:1, prereq:[], coreq:[] },
  { id:"NI0311", nombre:"Búsqueda de información (NI0311)", creditos:1, prereq:[], coreq:[] },
  { id:"OG0360", nombre:"Administración y Estrategia (OG0360)", creditos:3, prereq:[], coreq:[] },

  // SEM 2
  { id:"CM0212", nombre:"Matemáticas 2 (CM0212)", creditos:3, prereq:["CM0211"], coreq:[] },
  { id:"CO0342", nombre:"Información financiera y de costos (CO0342)", creditos:3, prereq:[], coreq:[] },
  { id:"NI0100", nombre:"Mercadeo Internacional (NI0100)", creditos:3, prereq:["NI0104"], coreq:[] },
  { id:"NI0312", nombre:"Comunicación intercultural (NI0312)", creditos:2, prereq:[], coreq:[] },
  { id:"NI0313", nombre:"Proyecto 1: Laboratorio de culturas (NI0313)", creditos:3, prereq:["NI0312"], coreq:[] },
  { id:"NI0314", nombre:"Gestión de la información (NI0314)", creditos:1, prereq:["NI0311"], coreq:[] },

  // SEM 3
  { id:"EC0421", nombre:"Economía del Comercio Internacional (EC0421)", creditos:3, prereq:["EC0418"], coreq:[] },
  { id:"FI0138", nombre:"Fundamentos de Finanzas (FI0138)", creditos:3, prereq:["CO0342"], coreq:[] },
  { id:"NI0316", nombre:"Pensamiento Histórico de los Negocios (NI0316)", creditos:3, prereq:["NI0104"], coreq:[] },
  { id:"NI0317", nombre:"Derecho del Comercio Internacional (NI0317)", creditos:3, prereq:[], coreq:[] },
  { id:"NI0318", nombre:"Presentaciones Efectivas (NI0318)", creditos:1, prereq:[], coreq:[] },
  { id:"NI0319", nombre:"Proyecto 2: Selección de Mercados (NI0319)", creditos:3, prereq:["NI0100"], coreq:[] },

  // SEM 4
  { id:"NI0320", nombre:"Gestión de la Distribución Física Internacional 1 (NI0320)", creditos:1, prereq:["CREDITS>=46"], coreq:[] },
  { id:"NI0321", nombre:"Análisis Geopolítico (NI0321)", creditos:3, prereq:["NI0316"], coreq:[] },
  { id:"NI0322", nombre:"Comunicación Escrita (NI0322)", creditos:1, prereq:[], coreq:[] },
  { id:"NI0323", nombre:"Proyecto 3: Integración Económica y Acceso a Mercados (NI0323)", creditos:3, prereq:["NI0317"], coreq:[] },
  { id:"NI0324", nombre:"Estadística Aplicada a los Negocios (NI0324)", creditos:3, prereq:["CM0212"], coreq:[] },
  { id:"OG0368", nombre:"Formulación y Evaluación de Proyectos (OG0368)", creditos:3, prereq:["CO0342"], coreq:[] },

  // SEM 5
  { id:"FI0224", nombre:"Finanzas Internacionales (FI0224)", creditos:3, prereq:["FI0138"], coreq:[] },
  { id:"NI0251", nombre:"Gerencia Comercial Internacional (NI0251)", creditos:3, prereq:["NI0316","NI0321"], coreq:[] },
  { id:"NI0325", nombre:"Introducción a estudios internacionales (NI0325)", creditos:2, prereq:["NI0316","NI0321"], coreq:[] },
  { id:"NI0326", nombre:"Legislación de comercio exterior 1 (NI0326)", creditos:1, prereq:["CREDITS>=73"], coreq:[] },
  { id:"NI0327", nombre:"Programación para los negocios (NI0327)", creditos:1, prereq:["NI0324","NI0322"], coreq:[] },
  { id:"NI0328", nombre:"Proyecto 4: Organizaciones Intergubernamentales (NI0328)", creditos:3, prereq:["CREDITS>=55","NI0325","NI0323"], coreq:[] },

  // SEM 6
  { id:"CO0371", nombre:"Analítica de Negocios (CO0371)", creditos:3, prereq:["NI0324","NI0327"], coreq:[] },
  { id:"NI0299", nombre:"Gestión Intercultural (NI0299)", creditos:3, prereq:["CREDITS>=74"], coreq:[] },
  { id:"NI0329", nombre:"Estrategia Internacional (NI0329)", creditos:3, prereq:["CREDITS>=74"], coreq:[] },
  { id:"NI0330", nombre:"Gestión de la Cadena de Suministro Global 1 (NI0330)", creditos:1, prereq:["NI0320"], coreq:[] },
  { id:"NI0331", nombre:"Protocolo Empresarial (NI0331)", creditos:1, prereq:[], coreq:[] },
  { id:"NI0332", nombre:"Proyecto 5: Cadenas de Suministro Globales (NI0332)", creditos:3, prereq:["NI0326","NI0320"], coreq:[] },

  // SEM 7
  { id:"NI0333", nombre:"Negociación de Contratos Internacionales (NI0333)", creditos:2, prereq:["NI0323"], coreq:[] },
  { id:"NI0334", nombre:"Laboratorio Multilingüe (NI0334)", creditos:1, prereq:["NI0299"], coreq:[] },
  { id:"NI0335", nombre:"Proyecto 6: Plan de Internacionalización (NI0335)", creditos:3, prereq:["NI0329"], coreq:[] },
  { id:"OG0370", nombre:"Competencias Evaluativas (OG0370)", creditos:1, prereq:["CREDITS>=90"], coreq:[] },
  { id:"PT0113", nombre:"Pre-Práctica (PT0113)", creditos:0, prereq:[], coreq:[] },
  { id:"PT4002", nombre:"Práctica Negocios Internacionales (PT4002)", creditos:0, prereq:[], coreq:[] },

  // SEM 8
  { id:"PT0191", nombre:"Período de Práctica (PT0191)", creditos:18, prereq:["PT0113","NI0335","NI0326","NI0330","CREDITS>=111"], coreq:[] },

  // SEM 9
  { id:"NI0336", nombre:"Negociación Internacional (NI0336)", creditos:2, prereq:["NI0333","PT0191"], coreq:[] },
  { id:"NI0337", nombre:"Gerencia Internacional (NI0337)", creditos:3, prereq:["NI0335","PT0191"], coreq:[] },
  { id:"OG0372", nombre:"Proyecto EA (OG0372)", creditos:2, prereq:["PT0191","CREDITS>=100"], coreq:[] },
  { id:"OG0373", nombre:"Seminario Internacional (OG0373)", creditos:1, prereq:["PT0191","CREDITS>=100"], coreq:[] }
];

// Agrupación por semestres (orden de visualización)
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

// ----------------------
// Estado y persistencia
// ----------------------
const STORAGE_KEY = "pensum_eafit_v1";
let state = {
  // id -> "blocked"|"available"|"inprogress"|"approved"
  materiaState: {}, 
  bilingual: false
};

// total credits
const totalCredits = materias.reduce((s,m) => s + (m.creditos||0), 0);

// DOM references
const main = document.getElementById("main-accordion");
const approvedSpan = document.getElementById("approved-credits");
const totalSpan = document.getElementById("total-credits");
const progressBar = document.getElementById("progress-bar");
const bilingCheckbox = document.getElementById("bilingue-checkbox");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

totalSpan.textContent = totalCredits;

// helpers
function findById(id){ return materias.find(m => m.id === id); }

// load/save
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw){
    try{
      const obj = JSON.parse(raw);
      if (obj && obj.materiaState) state = obj;
    }catch(e){
      console.warn("No se pudo cargar estado:", e);
    }
  }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast("Progreso guardado");
}

// initialize default state
function initState(){
  materias.forEach(m => {
    if (!state.materiaState[m.id]) state.materiaState[m.id] = "blocked";
  });
  if (typeof state.bilingual !== "boolean") state.bilingual = false;
}

// Check one prereq (string)
function checkPrereq(pr){
  if (!pr) return true;
  // credits condition
  if (pr.startsWith("CREDITS>=")){
    const need = parseInt(pr.split(">=")[1]);
    return getApprovedCredits() >= need;
  }
  if (pr === "BILINGUE_B1"){
    return !!state.bilingual;
  }
  // direct id
  if (state.materiaState[pr] && state.materiaState[pr] === "approved") return true;
  return false;
}

function allPrereqsSatisfied(arr){
  if (!arr || arr.length === 0) return true;
  return arr.every(p => checkPrereq(p));
}

function getApprovedCredits(){
  return materias.reduce((s,m) => {
    const st = state.materiaState[m.id];
    return s + ((st === "approved") ? (m.creditos||0) : 0);
  }, 0);
}

// compute availability for everything
function updateAvailability(){
  materias.forEach(m => {
    const id = m.id;
    // if already approved, keep approved
    if (state.materiaState[id] === "approved") return;
    const satisfied = allPrereqsSatisfied(m.prereq || []);
    state.materiaState[id] = satisfied ? "available" : "blocked";
  });
}

// build UI
function buildUI(){
  main.innerHTML = "";
  semestres.forEach(s => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.innerHTML = `<h3>Semestre ${s.num}</h3><div class="meta">${s.ids.length} materias</div>`;

    const body = document.createElement("div");
    body.className = "accordion-body";

    const grid = document.createElement("div");
    grid.className = "subjects-grid";

    s.ids.forEach(id => {
      const m = findById(id);
      if (!m) return;
      const card = document.createElement("div");
      card.className = "subject-card";
      card.setAttribute("data-id", m.id);

      // prereqs display text
      const prereqText = (m.prereq && m.prereq.length) ? m.prereq.join(", ") : "Ninguno";
      const coreqText = (m.coreq && m.coreq.length) ? m.coreq.join(", ") : null;

      card.innerHTML = `
        <div>
          <div class="subject-title">${m.nombre}</div>
          <div class="subject-sub"><span class="badge">${m.id}</span> • ${m.creditos} cr</div>
          <div class="prereq"><strong>Prerrequisitos:</strong> ${prereqText}${ coreqText ? " • <strong>Correquisito:</strong> " + coreqText : "" }</div>
        </div>
      `;

      // click handling
      card.addEventListener("click", (e) => {
        const id = card.getAttribute("data-id");
        const curr = state.materiaState[id];
        if (curr === "blocked"){
          // show missing prereqs
          const mobj = findById(id);
          const missing = (mobj.prereq || []).filter(p => !checkPrereq(p));
          const missingText = missing.map(pm => {
            if (pm.startsWith("CREDITS>=")) {
              const n = parseInt(pm.split(">=")[1]);
              const r = Math.max(0, n - getApprovedCredits());
              return `${n} créditos (faltan ${r})`;
            }
            if (pm === "BILINGUE_B1") return "Bilingüismo (nivel B1)";
            return pm;
          }).join(", ");
          alert("No puedes iniciar esta materia todavía.\nRequisitos pendientes: " + (missingText||"Ninguno"));
          return;
        }

        // cycle: available -> inprogress -> approved -> available
        if (curr === "available"){
          state.materiaState[id] = "inprogress";
          showToast(`Materia "${m.nombre}" marcada como EN CURSO`);
        } else if (curr === "inprogress"){
          // confirm approve
          const confirmApprove = confirm(`¿Marcar "${m.nombre}" como APROBADA?`);
          if (!confirmApprove) return;
          state.materiaState[id] = "approved";
          showToast(`¡"${m.nombre}" aprobada!`);
        } else if (curr === "approved"){
          const confirmUndo = confirm(`¿Quitar aprobación de "${m.nombre}"? Esto puede bloquear materias dependientes.`);
          if (!confirmUndo) return;
          state.materiaState[id] = "available";
          showToast(`Aprobación de "${m.nombre}" eliminada.`);
        }

        // after change, recompute
        updateAfterChange();
      });

      grid.appendChild(card);
    });

    body.appendChild(grid);
    item.appendChild(header);
    item.appendChild(body);
    main.appendChild(item);

    // accordion click
    header.addEventListener("click", () => {
      const open = body.style.maxHeight && body.style.maxHeight !== "0px";
      // close others
      document.querySelectorAll(".accordion-body").forEach(b => b.style.maxHeight = null);
      if (!open){
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  refreshUIStates();
}

// refresh UI based on state
function refreshUIStates(){
  // update availability before painting
  updateAvailability();

  // update progress numbers
  const approved = getApprovedCredits();
  approvedSpan.textContent = approved;
  const pct = totalCredits === 0 ? 0 : Math.round((approved / totalCredits) * 100);
  progressBar.style.width = pct + "%";

  // set card states
  document.querySelectorAll(".subject-card").forEach(card => {
    const id = card.getAttribute("data-id");
    const st = state.materiaState[id] || "blocked";
    card.setAttribute("data-state", st === "blocked" ? "blocked" : (st === "inprogress" ? "inprogress" : (st === "approved" ? "approved" : "available")));
  });

  // bilingual checkbox reflect state
  bilingCheckbox.checked = !!state.bilingual;
}

// called after any state change
function updateAfterChange(){
  // recompute availability and show counts of unlocked
  updateAvailability();

  // count how many became available in this step? optional
  // save automatically
  saveState();
  refreshUIStates();
}

// small toast (simple)
function showToast(msg){
  // quick alert-free toast using a small DOM element
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.position = "fixed";
  t.style.right = "18px";
  t.style.bottom = "18px";
  t.style.background = "linear-gradient(90deg,#8e44ad,#b288dd)";
  t.style.color = "white";
  t.style.padding = "8px 12px";
  t.style.borderRadius = "8px";
  t.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(()=> { t.style.opacity = "0"; setTimeout(()=>t.remove(),400); }, 1600);
}

// Save/reset buttons handlers
saveBtn.addEventListener("click", () => {
  saveState();
});
resetBtn.addEventListener("click", () => {
  const ok = confirm("¿Seguro que quieres resetear todo el progreso? Esta acción no se puede deshacer.");
  if (!ok) return;
  // clear localstorage and reset state
  localStorage.removeItem(STORAGE_KEY);
  // rebuild fresh
  state = { materiaState: {}, bilingual: false };
  initState();
  updateAvailability();
  buildUI();
  showToast("Progreso reseteado");
});

// bilingual checkbox
bilingCheckbox.addEventListener("change", (e) => {
  state.bilingual = !!e.target.checked;
  updateAfterChange();
});

// persistence: load if exist
loadState();
initState();
updateAvailability();
buildUI();

// auto-save on unload
window.addEventListener("beforeunload", () => saveState());

