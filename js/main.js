// ===== Datos: fases del ciclo de gestión =====
const phases = [
  {
    icon: "📋",
    title: "Planificación",
    question: "¿Qué tecnología necesita la empresa y por qué?",
    text: "Es la fase estratégica. Se analiza la situación actual de la infraestructura, se identifican las necesidades del negocio y se define hacia dónde debe ir la TI. Aquí se alinea la tecnología con la misión, visión y objetivos de la organización, y se establece el presupuesto y las prioridades.",
    activities: [
      "Diagnóstico de la infraestructura actual (inventario y brechas)",
      "Definir objetivos de TI alineados al plan estratégico",
      "Análisis costo-beneficio y presupuesto (TCO, ROI)",
      "Evaluación de riesgos y requisitos legales",
      "Priorizar proyectos en una hoja de ruta (roadmap)"
    ],
    deliverables: [
      "Plan Estratégico de TI (PETI)",
      "Presupuesto y cartera de proyectos",
      "Matriz de riesgos inicial",
      "Políticas de TI"
    ],
    tools: ["Análisis FODA", "COBIT 2019", "Balanced Scorecard de TI", "Análisis de brechas"]
  },
  {
    icon: "📐",
    title: "Diseño",
    question: "¿Cómo debe estar construida la solución?",
    text: "Se traduce el plan en una arquitectura concreta. Se definen los componentes de hardware, software, redes, almacenamiento y seguridad, cómo se conectan entre sí y qué niveles de servicio deben cumplir. Un buen diseño piensa en escalabilidad, disponibilidad y seguridad desde el inicio.",
    activities: [
      "Diseñar la arquitectura de red, servidores y nube",
      "Seleccionar proveedores y tecnologías",
      "Definir niveles de servicio (SLA) y capacidad",
      "Incorporar seguridad desde el diseño (security by design)",
      "Planificar redundancia, respaldos y continuidad"
    ],
    deliverables: [
      "Documento de arquitectura técnica",
      "Diagramas de red y topología",
      "Especificaciones y pliegos de compra",
      "Plan de continuidad y recuperación (DRP)"
    ],
    tools: ["TOGAF", "ITIL 4 (diseño de servicios)", "Diagramas de red", "Modelos en la nube (IaaS/PaaS/SaaS)"]
  },
  {
    icon: "🚀",
    title: "Implementación",
    question: "¿Cómo se pone en marcha sin interrumpir el negocio?",
    text: "Se ejecuta lo diseñado: adquisición, instalación, configuración, migración de datos, pruebas y puesta en producción. Esta fase requiere una gestión de proyectos y de cambios rigurosa para minimizar riesgos, además de preparar a las personas que usarán la nueva tecnología.",
    activities: [
      "Adquisición e instalación de equipos y licencias",
      "Configuración, integración y migración de datos",
      "Pruebas funcionales, de carga y de seguridad",
      "Gestión del cambio y comunicación a usuarios",
      "Capacitación y puesta en producción por fases"
    ],
    deliverables: [
      "Infraestructura operativa",
      "Actas de pruebas y aceptación",
      "Manuales técnicos y de usuario",
      "Registro en la base de datos de configuración (CMDB)"
    ],
    tools: ["Gestión de proyectos (PMBOK / Scrum)", "ITIL: gestión de cambios", "Plan de reversión", "Ambientes de prueba"]
  },
  {
    icon: "📈",
    title: "Evaluación",
    question: "¿La tecnología está cumpliendo lo que prometió?",
    text: "Se mide el desempeño de la infraestructura TIC frente a los objetivos planteados. Mediante indicadores, auditorías y la opinión de los usuarios se identifican mejoras, se decide qué renovar o retirar y se retroalimenta la siguiente planificación, cerrando el ciclo de mejora continua.",
    activities: [
      "Medir KPIs: disponibilidad, tiempo de respuesta, costos",
      "Auditorías técnicas y de seguridad",
      "Encuestas de satisfacción de usuarios",
      "Revisar cumplimiento de SLA y normativas",
      "Decidir renovación, optimización o retiro de activos"
    ],
    deliverables: [
      "Informe de desempeño de TI",
      "Hallazgos de auditoría",
      "Plan de mejora continua",
      "Insumos para el siguiente ciclo de planificación"
    ],
    tools: ["Ciclo PDCA (Deming)", "Cuadros de mando (dashboards)", "COBIT: evaluación de capacidad", "ISO/IEC 27001: auditoría interna"]
  }
];

// ===== Datos: importancia de la gestión de infraestructura =====
const areas = [
  {
    icon: "🖥️",
    title: "Gestión de hardware y software",
    summary: "Controlar el ciclo de vida de cada activo tecnológico: desde su compra hasta su retiro.",
    why: [
      "Evita compras duplicadas y equipos obsoletos",
      "Asegura licencias legales y evita sanciones",
      "Permite planificar renovaciones y presupuesto",
      "Facilita el soporte al saber qué existe y dónde"
    ],
    practices: [
      "Inventario actualizado de activos (ITAM / CMDB)",
      "Gestión de licencias y parches",
      "Políticas de renovación tecnológica",
      "Disposición segura y ecológica de equipos"
    ],
    kpi: "Porcentaje de activos inventariados, licencias en cumplimiento, edad promedio del parque informático y costo total de propiedad (TCO)."
  },
  {
    icon: "📡",
    title: "Monitoreo y optimización de recursos",
    summary: "Vigilar en tiempo real el estado de servidores, redes y aplicaciones para actuar antes de que fallen.",
    why: [
      "Detecta fallas antes de que afecten al usuario",
      "Evita sobredimensionar (gastar de más) o quedarse corto",
      "Reduce costos de energía y de nube",
      "Sustenta decisiones con datos reales"
    ],
    practices: [
      "Herramientas de monitoreo y alertas (p. ej. Zabbix, Nagios)",
      "Gestión de capacidad y del rendimiento",
      "Virtualización y consolidación de servidores",
      "Revisión periódica de consumo en la nube"
    ],
    kpi: "Disponibilidad (uptime %), tiempo medio entre fallas (MTBF), tiempo medio de reparación (MTTR) y uso de CPU, memoria y almacenamiento."
  },
  {
    icon: "🔐",
    title: "Seguridad tecnológica",
    summary: "Proteger la confidencialidad, integridad y disponibilidad de la información (tríada CIA).",
    why: [
      "Un ciberataque puede detener por completo la operación",
      "Protege datos de clientes y la reputación",
      "Permite cumplir leyes de protección de datos",
      "Garantiza la continuidad del negocio"
    ],
    practices: [
      "Gestión de riesgos y SGSI según ISO/IEC 27001",
      "Autenticación multifactor y mínimo privilegio",
      "Copias de seguridad (regla 3-2-1) y plan de recuperación",
      "Firewalls, antimalware, cifrado y gestión de parches"
    ],
    kpi: "Número de incidentes de seguridad, tiempo de detección y respuesta, porcentaje de sistemas actualizados y resultados de pruebas de recuperación."
  },
  {
    icon: "🎓",
    title: "Capacitación continua",
    summary: "La mejor tecnología fracasa si las personas no saben usarla o no la adoptan.",
    why: [
      "El error humano es una causa frecuente de incidentes",
      "Aumenta la productividad y el retorno de la inversión",
      "Reduce la resistencia al cambio",
      "Mantiene al equipo de TI actualizado ante nuevas tecnologías"
    ],
    practices: [
      "Plan anual de formación técnica y de usuarios",
      "Concientización en ciberseguridad (simulacros de phishing)",
      "Certificaciones profesionales (ITIL, CompTIA, cloud)",
      "Manuales, tutoriales y mesa de ayuda"
    ],
    kpi: "Horas de capacitación por colaborador, tasa de adopción de nuevas herramientas, resultados de simulacros y reducción de tickets por desconocimiento."
  },
  {
    icon: "🔗",
    title: "Integración tecnológica",
    summary: "Lograr que sistemas, datos y plataformas trabajen juntos como un solo ecosistema.",
    why: [
      "Elimina islas de información y doble digitación",
      "Da una visión única del cliente y del negocio",
      "Agiliza procesos de punta a punta",
      "Facilita la transformación digital y la escalabilidad"
    ],
    practices: [
      "Arquitectura empresarial y estándares comunes",
      "Uso de APIs, servicios web y middleware",
      "Sistemas integrados (ERP, CRM)",
      "Gobierno de datos y calidad de la información"
    ],
    kpi: "Número de procesos automatizados, interfaces integradas, tiempo de ciclo de los procesos y errores por reingreso de datos."
  },
  {
    icon: "⚖️",
    title: "Ética y uso responsable de la tecnología",
    summary: "Usar la tecnología respetando la privacidad, la equidad, el medio ambiente y la ley.",
    why: [
      "Genera confianza en clientes y colaboradores",
      "Evita sanciones legales y daño reputacional",
      "Previene sesgos y usos indebidos de datos e IA",
      "Contribuye a la sostenibilidad (TI verde)"
    ],
    practices: [
      "Código de ética y política de uso aceptable",
      "Privacidad, exactitud, propiedad y accesibilidad de la información (Mason, 1986)",
      "Uso transparente y supervisado de la inteligencia artificial",
      "Reciclaje de residuos electrónicos y eficiencia energética"
    ],
    kpi: "Cumplimiento de políticas, incidentes de privacidad, porcentaje de residuos electrónicos reciclados y consumo energético de la infraestructura."
  }
];

// ===== Datos: autoevaluación =====
const questions = [
  {
    q: "¿Cuál es el principal propósito de la gerencia de recursos TIC?",
    opts: ["Comprar la tecnología más moderna del mercado", "Alinear la tecnología con los objetivos del negocio", "Reducir el personal del departamento de TI", "Instalar software en todos los equipos"],
    a: 1,
    why: "La gerencia de TIC busca que la tecnología apoye y genere valor para la estrategia de la empresa."
  },
  {
    q: "¿En qué fase se elabora el Plan Estratégico de TI y el presupuesto?",
    opts: ["Diseño", "Implementación", "Planificación", "Evaluación"],
    a: 2,
    why: "La planificación define objetivos, prioridades, presupuesto y riesgos."
  },
  {
    q: "El indicador MTTR (tiempo medio de reparación) se relaciona principalmente con…",
    opts: ["Monitoreo y optimización de recursos", "Ética tecnológica", "Capacitación continua", "Gestión de licencias"],
    a: 0,
    why: "MTTR mide qué tan rápido se restablece un servicio, clave en el monitoreo de la infraestructura."
  },
  {
    q: "¿Qué norma internacional se utiliza para un Sistema de Gestión de Seguridad de la Información?",
    opts: ["ISO 9001", "ISO/IEC 27001", "TOGAF", "ISO 14001"],
    a: 1,
    why: "ISO/IEC 27001 establece los requisitos de un SGSI basado en riesgos."
  },
  {
    q: "¿Por qué la evaluación cierra el ciclo de gestión?",
    opts: ["Porque al terminarla ya no se invierte más en TI", "Porque sus resultados retroalimentan la siguiente planificación", "Porque reemplaza a la fase de diseño", "Porque solo se hace una vez en la vida del sistema"],
    a: 1,
    why: "La evaluación genera mejoras que alimentan el siguiente ciclo: es mejora continua."
  }
];

// ===== Ciclo interactivo =====
const panel = document.getElementById("phasePanel");
const phaseBtns = document.querySelectorAll(".phase-btn");
const arcs = document.querySelectorAll(".cycle-ring .arc");
let current = 0;

function list(items) { return items.map(i => `<li>${i}</li>`).join(""); }

function showPhase(i) {
  current = i;
  const p = phases[i];
  phaseBtns.forEach((b, k) => {
    b.classList.toggle("active", k === i);
    b.setAttribute("aria-selected", k === i);
  });
  arcs.forEach((a, k) => a.classList.toggle("on", k <= i));
  document.getElementById("cycleNum").textContent = i + 1;
  panel.style.animation = "none";
  void panel.offsetWidth;
  panel.style.animation = "";
  panel.innerHTML = `
    <h3>${p.icon} ${p.title}</h3>
    <p class="q">${p.question}</p>
    <p>${p.text}</p>
    <div class="phase-grid">
      <div><h4>Actividades clave</h4><ul>${list(p.activities)}</ul></div>
      <div><h4>Entregables</h4><ul>${list(p.deliverables)}</ul></div>
    </div>
    <div class="chips">${p.tools.map(t => `<span class="chip">${t}</span>`).join("")}</div>
    <div class="phase-nav">
      <button class="btn btn-ghost small" data-go="${(i + 3) % 4}">← ${phases[(i + 3) % 4].title}</button>
      <button class="btn btn-ghost small" data-go="${(i + 1) % 4}">${phases[(i + 1) % 4].title} →</button>
    </div>`;
}
phaseBtns.forEach(b => b.addEventListener("click", () => showPhase(+b.dataset.phase)));
panel.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if (go) showPhase(+go.dataset.go);
});
showPhase(0);

// ===== Tarjetas de importancia =====
const cardsEl = document.getElementById("cards");
cardsEl.innerHTML = areas.map((a, i) => `
  <article class="card reveal" data-i="${i}" tabindex="0" aria-expanded="false">
    <button class="close-card" aria-label="Cerrar">✕</button>
    <div class="card-icon">${a.icon}</div>
    <h3>${a.title}</h3>
    <p class="summary">${a.summary}</p>
    <p class="more">Ver más →</p>
    <div class="card-detail">
      <div><h4>¿Por qué es importante?</h4><ul>${list(a.why)}</ul></div>
      <div><h4>Buenas prácticas</h4><ul>${list(a.practices)}</ul></div>
      <div><h4>¿Cómo se mide?</h4><div class="kpi">${a.kpi}</div></div>
    </div>
  </article>`).join("");

function toggleCard(card, open) {
  document.querySelectorAll(".card.open").forEach(c => {
    if (c !== card) { c.classList.remove("open"); c.setAttribute("aria-expanded", "false"); }
  });
  card.classList.toggle("open", open);
  card.setAttribute("aria-expanded", open);
  if (open) setTimeout(() => card.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
}
cardsEl.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  if (e.target.closest(".close-card")) { toggleCard(card, false); return; }
  if (!card.classList.contains("open")) toggleCard(card, true);
});
cardsEl.addEventListener("keydown", e => {
  const card = e.target.closest(".card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    toggleCard(card, !card.classList.contains("open"));
  }
});

// ===== Quiz =====
const quizBox = document.getElementById("quizBox");
let qi = 0, score = 0;

function renderQuestion() {
  const q = questions[qi];
  quizBox.innerHTML = `
    <div class="quiz-top"><span>Pregunta ${qi + 1} de ${questions.length}</span><span>Aciertos: ${score}</span></div>
    <div class="quiz-bar"><div style="width:${(qi / questions.length) * 100}%"></div></div>
    <h3>${q.q}</h3>
    <div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join("")}</div>
    <p class="feedback" id="fb"></p>
    <div class="quiz-actions"></div>`;
}
function renderResult() {
  const pct = Math.round((score / questions.length) * 100);
  const msg = pct === 100 ? "¡Excelente! Dominas la gerencia de recursos TIC. 🏆"
    : pct >= 60 ? "¡Muy bien! Repasa las secciones donde fallaste. 👍"
    : "Vuelve a recorrer el sitio y lo intentas de nuevo. 💪";
  quizBox.innerHTML = `
    <div class="quiz-bar"><div style="width:100%"></div></div>
    <div class="result">
      <p class="score">${score}/${questions.length}</p>
      <p>${msg}</p>
      <div class="quiz-actions" style="text-align:center"><button class="btn btn-primary" id="retry">Intentar de nuevo</button></div>
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
    document.getElementById("fb").innerHTML = (k === q.a ? "✅ ¡Correcto! " : "❌ Incorrecto. ") + q.why;
    const last = qi === questions.length - 1;
    quizBox.querySelector(".quiz-actions").innerHTML =
      `<button class="btn btn-primary" id="next">${last ? "Ver resultado" : "Siguiente →"}</button>`;
    return;
  }
  if (e.target.id === "next") {
    qi++;
    qi < questions.length ? renderQuestion() : renderResult();
  }
  if (e.target.id === "retry") { qi = 0; score = 0; renderQuestion(); }
});
renderQuestion();

// ===== Tema claro / oscuro =====
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (_) {}
document.getElementById("themeBtn").addEventListener("click", () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
});

// ===== Menú móvil =====
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });

// ===== Scroll: barra, progreso y enlace activo =====
const topbar = document.getElementById("topbar");
const progress = document.getElementById("progress");
const sections = [...document.querySelectorAll("main section")];
const navLinks = [...nav.querySelectorAll("a")];
function onScroll() {
  const y = window.scrollY;
  topbar.classList.toggle("scrolled", y > 40);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
  let id = "";
  sections.forEach(s => { if (y >= s.offsetTop - 120) id = s.id; });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Animaciones de aparición =====
document.querySelectorAll(".section h2, .section-intro, .pillar, .fw, .timeline li, .phase-panel, .conclusion")
  .forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ===== Fondo animado de red (nodos conectados) =====
(function network() {
  const c = document.getElementById("netCanvas");
  const ctx = c.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, nodes;
  function resize() {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;
    const n = Math.min(70, Math.floor((w * h) / 18000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          ctx.strokeStyle = `rgba(45,212,191,${1 - d / 140})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = "#818cf8";
      ctx.beginPath(); ctx.arc(a.x, a.y, 2.2, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }
  resize();
  addEventListener("resize", resize);
  draw();
})();
