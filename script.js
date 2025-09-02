// Datos de la malla
const materias = [
  { id: "BU0008", nombre: "Inducción", creditos: 0, semestre: 1, requisitos: [] },
  { id: "BU0011", nombre: "Bienestar Universitario", creditos: 1, semestre: 1, requisitos: ["BU0600"] },
  { id: "BU0600", nombre: "Taller de Salud", creditos: 0, semestre: 1, requisitos: [] },
  { id: "CM0211", nombre: "Matemáticas 1", creditos: 3, semestre: 1, requisitos: [] },
  { id: "EC0418", nombre: "Economía", creditos: 3, semestre: 1, requisitos: [] },
  { id: "NI0104", nombre: "Negocios Internacionales", creditos: 3, semestre: 1, requisitos: [] },
  { id: "NI0310", nombre: "Proyecto 0: Aprendizaje Activo", creditos: 1, semestre: 1, requisitos: [] },
  { id: "NI0311", nombre: "Búsqueda de Información", creditos: 1, semestre: 1, requisitos: [] },
  { id: "OG0360", nombre: "Administración y Estrategia", creditos: 3, semestre: 1, requisitos: [] },

  // Semestre 2
  { id: "CM0212", nombre: "Matemáticas 2", creditos: 3, semestre: 2, requisitos: ["CM0211"] },
  { id: "CO0342", nombre: "Información financiera y de costos", creditos: 3, semestre: 2, requisitos: [] },
  { id: "NI0100", nombre: "Mercadeo Internacional", creditos: 3, semestre: 2, requisitos: ["NI0104"] },
  { id: "NI0312", nombre: "Comunicación Intercultural", creditos: 2, semestre: 2, requisitos: [] },
  { id: "NI0313", nombre: "Proyecto 1: Laboratorio de culturas", creditos: 3, semestre: 2, requisitos: ["NI0312"] },
  { id: "NI0314", nombre: "Gestión de la Información", creditos: 1, semestre: 2, requisitos: ["NI0311"] },

  // (... Agregar todos los demás hasta semestre 9 ...)
];

// Estado inicial
let estadoMaterias = {};
materias.forEach(m => {
  estadoMaterias[m.id] = "bloqueada"; // bloqueada, disponible, aprobada
});

// Renderizado de la malla
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let s = 1; s <= 9; s++) {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");
    semestreDiv.innerHTML = `<h2>Semestre ${s}</h2>`;

    materias.filter(m => m.semestre === s).forEach(materia => {
      const div = document.createElement("div");
      div.classList.add("materia", estadoMaterias[materia.id]);
      div.textContent = `${materia.nombre} (${materia.creditos} cr)`;
      div.onclick = () => aprobarMateria(materia.id);
      semestreDiv.appendChild(div);
    });

    contenedor.appendChild(semestreDiv);
  }
}

// Función para aprobar materias
function aprobarMateria(id) {
  if (estadoMaterias[id] === "bloqueada") return;

  if (estadoMaterias[id] === "aprobada") {
    estadoMaterias[id] = "disponible";
  } else {
    estadoMaterias[id] = "aprobada";
  }
  actualizarDisponibles();
  renderMalla();
}

// Desbloquear materias según requisitos
function actualizarDisponibles() {
  materias.forEach(m => {
    if (estadoMaterias[m.id] !== "aprobada") {
      const cumplidos = m.requisitos.every(req => estadoMaterias[req] === "aprobada");
      estadoMaterias[m.id] = cumplidos ? "disponible" : "bloqueada";
    }
  });
}

// Inicializar
actualizarDisponibles();
renderMalla();

