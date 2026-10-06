const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Intro: contador de carga =====
(function intro() {
  const loader = document.getElementById("loader");
  const count = document.getElementById("loaderCount");
  const finish = () => {
    loader.classList.add("done");
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
  };
  if (reduceMotion) { loader.style.display = "none"; finish(); return; }
  document.body.classList.add("loading");
  let n = 0;
  const tick = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 9));
    count.textContent = String(n).padStart(2, "0");
    if (n >= 100) { clearInterval(tick); setTimeout(finish, 250); }
  }, 35);
})();

// ===== Menú móvil =====
const navLinks = document.getElementById("navLinks");
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", e => {
  if (e.target.closest("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ===== Barra de progreso y enlace activo =====
const progress = document.getElementById("progress");
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...navLinks.querySelectorAll("a")];
const nav = document.getElementById("nav");
function onScroll() {
  const y = scrollY;
  nav.classList.toggle("scrolled", y > innerHeight * 0.6);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  let current = "";
  sections.forEach(s => { if (y >= s.offsetTop - 160) current = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Aparición al hacer scroll =====
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ===== Ciclo: la fase visible actualiza el indicador =====
const phases = [...document.querySelectorAll(".phase")];
const cycleFill = document.getElementById("cycleFill");
const cycleNum = document.getElementById("cycleNum");
const cycleName = document.getElementById("cycleName");
const dots = [...document.querySelectorAll(".cycle-svg .dots circle")];
const CIRC = 2 * Math.PI * 80;

function setPhase(i) {
  phases.forEach((p, k) => p.classList.toggle("active", k === i));
  dots.forEach((d, k) => d.classList.toggle("on", k <= i));
  cycleFill.style.strokeDashoffset = CIRC * (1 - (i + 1) / 4);
  cycleNum.textContent = String(i + 1).padStart(2, "0");
  cycleName.textContent = phases[i].dataset.name;
}
const phaseObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) setPhase(+en.target.dataset.phase); });
}, { rootMargin: "-45% 0px -45% 0px" });
phases.forEach(p => phaseObserver.observe(p));
setPhase(0);

// ===== Acordeón de importancia =====
document.querySelectorAll(".acc-head").forEach(head => {
  head.addEventListener("click", () => {
    const item = head.parentElement;
    const willOpen = !item.classList.contains("open");
    document.querySelectorAll(".acc-item.open").forEach(o => {
      o.classList.remove("open");
      o.querySelector(".acc-head").setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      item.classList.add("open");
      head.setAttribute("aria-expanded", "true");
      setTimeout(() => head.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }), 350);
    }
  });
});

// ===== Autoevaluación =====
const questions = [
  {
    q: "¿Cuál es el propósito principal de la gerencia de recursos de TIC?",
    opts: ["Adquirir la tecnología más moderna del mercado", "Alinear la tecnología con los objetivos del negocio", "Reducir el personal del departamento de TI", "Instalar el mismo software en todos los equipos"],
    a: 1,
    why: "La gerencia de TIC busca que la tecnología apoye la estrategia de la organización y le genere valor."
  },
  {
    q: "¿En qué fase del ciclo se elaboran el Plan Estratégico de TI y el presupuesto?",
    opts: ["Diseño", "Implementación", "Planificación", "Evaluación"],
    a: 2,
    why: "En la planificación se definen los objetivos, las prioridades, el presupuesto y los riesgos."
  },
  {
    q: "El indicador MTTR (tiempo medio de reparación) se relaciona sobre todo con…",
    opts: ["El monitoreo y la optimización de recursos", "La ética tecnológica", "La capacitación continua", "La gestión de licencias"],
    a: 0,
    why: "El MTTR mide la rapidez con la que se restablece un servicio, un dato clave del monitoreo de la infraestructura."
  },
  {
    q: "¿Qué norma internacional define los requisitos de un Sistema de Gestión de Seguridad de la Información?",
    opts: ["ISO 9001", "ISO/IEC 27001", "TOGAF", "ISO 14001"],
    a: 1,
    why: "ISO/IEC 27001 establece los requisitos de un SGSI basado en la gestión de riesgos."
  },
  {
    q: "¿Por qué se dice que la evaluación cierra el ciclo de gestión?",
    opts: ["Porque, al terminarla, ya no se invierte más en TI", "Porque sus resultados alimentan la siguiente planificación", "Porque sustituye a la fase de diseño", "Porque se realiza una sola vez en la vida de un sistema"],
    a: 1,
    why: "La evaluación produce mejoras que inician un nuevo ciclo: es el principio de mejora continua."
  }
];

const quizBox = document.getElementById("quizBox");
let qi = 0, score = 0;
const letters = ["A", "B", "C", "D"];

function renderQuestion() {
  const q = questions[qi];
  quizBox.innerHTML = `
    <div class="quiz-top"><span>Pregunta ${String(qi + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}</span><span>Aciertos: ${score}</span></div>
    <div class="quiz-bar"><div style="width:${(qi / questions.length) * 100}%"></div></div>
    <h3>${q.q}</h3>
    <div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><i>${letters[k]}</i>${o}</button>`).join("")}</div>
    <p class="feedback" id="fb" aria-live="polite"></p>
    <div class="quiz-actions"></div>`;
}

function renderResult() {
  const msg = score === questions.length ? "Excelente. Dominas los fundamentos de la gerencia de recursos de TIC."
    : score >= 3 ? "Muy bien. Repasa las secciones en las que tuviste dudas."
    : "Vuelve a recorrer el sitio e inténtalo de nuevo.";
  quizBox.innerHTML = `
    <div class="result">
      <p class="score">${score}<em>/${questions.length}</em></p>
      <p>${msg}</p>
      <div class="quiz-actions"><button class="btn" id="retry">Intentar de nuevo</button></div>
    </div>`;
}

quizBox.addEventListener("click", e => {
  const opt = e.target.closest(".opt");
  if (opt && !opt.disabled) {
    const q = questions[qi];
    const k = +opt.dataset.k;
    const all = quizBox.querySelectorAll(".opt");
    all.forEach(b => (b.disabled = true));
    all[q.a].classList.add("right");
    if (k === q.a) score++; else opt.classList.add("wrong");
    document.getElementById("fb").textContent = (k === q.a ? "Correcto. " : "Incorrecto. ") + q.why;
    const last = qi === questions.length - 1;
    quizBox.querySelector(".quiz-actions").innerHTML =
      `<button class="btn" id="next">${last ? "Ver resultado" : "Siguiente →"}</button>`;
    return;
  }
  if (e.target.id === "next") { qi++; qi < questions.length ? renderQuestion() : renderResult(); }
  if (e.target.id === "retry") { qi = 0; score = 0; renderQuestion(); }
});
renderQuestion();
