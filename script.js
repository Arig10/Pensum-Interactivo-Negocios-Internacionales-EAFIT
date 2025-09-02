// Datos del pensum
const pensum = [
  {
    semestre: "Semestre 1",
    materias: [
      { nombre: "Matemáticas I", creditos: 4, requisitos: "Ninguno" },
      { nombre: "Fundamentos de Administración", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Introducción a los Negocios Internacionales", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Cátedra EAFIT", creditos: 2, requisitos: "Ninguno" },
      { nombre: "Lectoescritura Universitaria", creditos: 2, requisitos: "Ninguno" },
      { nombre: "Idioma I", creditos: 3, requisitos: "Ninguno" }
    ]
  },
  {
    semestre: "Semestre 2",
    materias: [
      { nombre: "Matemáticas II", creditos: 4, requisitos: "Matemáticas I" },
      { nombre: "Microeconomía", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Contabilidad Financiera", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Historia Global", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Idioma II", creditos: 3, requisitos: "Idioma I" }
    ]
  },
  {
    semestre: "Semestre 3",
    materias: [
      { nombre: "Estadística I", creditos: 4, requisitos: "Matemáticas II" },
      { nombre: "Macroeconomía", creditos: 3, requisitos: "Microeconomía" },
      { nombre: "Teoría de la Organización", creditos: 3, requisitos: "Fundamentos de Administración" },
      { nombre: "Derecho de los Negocios", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Idioma III", creditos: 3, requisitos: "Idioma II" }
    ]
  },
  {
    semestre: "Semestre 4",
    materias: [
      { nombre: "Estadística II", creditos: 4, requisitos: "Estadística I" },
      { nombre: "Comercio Internacional I", creditos: 3, requisitos: "Introducción a los Negocios Internacionales" },
      { nombre: "Finanzas I", creditos: 3, requisitos: "Contabilidad Financiera" },
      { nombre: "Geopolítica", creditos: 3, requisitos: "Historia Global" },
      { nombre: "Idioma IV", creditos: 3, requisitos: "Idioma III" }
    ]
  },
  {
    semestre: "Semestre 5",
    materias: [
      { nombre: "Métodos de Investigación", creditos: 3, requisitos: "Estadística II" },
      { nombre: "Comercio Internacional II", creditos: 3, requisitos: "Comercio Internacional I" },
      { nombre: "Finanzas II", creditos: 3, requisitos: "Finanzas I" },
      { nombre: "Marketing Internacional", creditos: 3, requisitos: "Microeconomía" },
      { nombre: "Electiva I", creditos: 3, requisitos: "Ninguno" }
    ]
  },
  {
    semestre: "Semestre 6",
    materias: [
      { nombre: "Negociación Internacional", creditos: 3, requisitos: "Comercio Internacional II" },
      { nombre: "Economía Internacional", creditos: 3, requisitos: "Macroeconomía" },
      { nombre: "Operaciones Internacionales", creditos: 3, requisitos: "Comercio Internacional II" },
      { nombre: "Electiva II", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Idioma V", creditos: 3, requisitos: "Idioma IV" }
    ]
  },
  {
    semestre: "Semestre 7",
    materias: [
      { nombre: "Gerencia Internacional", creditos: 3, requisitos: "Teoría de la Organización" },
      { nombre: "Derecho Internacional", creditos: 3, requisitos: "Derecho de los Negocios" },
      { nombre: "Estrategia Empresarial", creditos: 3, requisitos: "Gerencia Internacional" },
      { nombre: "Electiva III", creditos: 3, requisitos: "Ninguno" }
    ]
  },
  {
    semestre: "Semestre 8",
    materias: [
      { nombre: "Seminario de Negocios Internacionales", creditos: 3, requisitos: "Economía Internacional" },
      { nombre: "Ética y Responsabilidad Social", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Electiva IV", creditos: 3, requisitos: "Ninguno" },
      { nombre: "Electiva V", creditos: 3, requisitos: "Ninguno" }
    ]
  },
  {
    semestre: "Semestre 9",
    materias: [
      { nombre: "Práctica Profesional", creditos: 9, requisitos: "80% de créditos aprobados" },
      { nombre: "Trabajo de Grado", creditos: 6, requisitos: "Métodos de Investigación" }
    ]
  }
];

// Renderizar pensum
const contenedor = document.getElementById("pensum");

pensum.forEach((sem) => {
  const semDiv = document.createElement("div");
  semDiv.classList.add("semestre");

  const header = document.createElement("div");
  header.classList.add("semestre-header");
  header.textContent = sem.semestre;

  const contenido = document.createElement("div");
  contenido.classList.add("semestre-contenido");

  sem.materias.forEach((mat) => {
    const materia = document.createElement("div");
    materia.classList.add("materia");
    materia.innerHTML = `<strong>${mat.nombre}</strong> - Créditos: ${mat.creditos} <br> Requisitos: ${mat.requisitos}`;
    contenido.appendChild(materia);
  });

  header.addEventListener("click", () => {
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
  });

  semDiv.appendChild(header);
  semDiv.appendChild(contenido);
  contenedor.appendChild(semDiv);
});
