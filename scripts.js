// ======================= CONFIGURAÇÕES GERAIS =======================
const CUSTOM_COLORS_KEY = "customBackgroundColors";
const themeAudio = document.getElementById("theme-music");
const themeTracks = {
  light: null,
  dark: null,
  pixel: null,
  math: null,
  custom: null,
  acherongif: null,
};

const colorPanel = document.getElementById("color-panel");
const input1 = document.getElementById("color1");
const input2 = document.getElementById("color2");
const input3 = document.getElementById("color3");
const collapseBtn = document.getElementById("collapse-panel");

// ======================= FUNÇÕES DE TEMA =======================
function applyThreeColorBackground(save = false) {
  const c1 = input1?.value ?? "#000000";
  const c2 = input2?.value ?? "#000000";
  const c3 = input3?.value ?? "#000000";
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
  if (save) {
    localStorage.setItem(CUSTOM_COLORS_KEY, JSON.stringify({ c1, c2, c3 }));
  }
}

function loadSavedCustomColors() {
  const saved = localStorage.getItem(CUSTOM_COLORS_KEY);
  if (!saved) return;
  const { c1, c2, c3 } = JSON.parse(saved);
  if (input1) input1.value = c1;
  if (input2) input2.value = c2;
  if (input3) input3.value = c3;
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
}

function removeMathFormulas() {
  document.querySelectorAll(".math-formula").forEach(el => el.remove());
}

function createMathFormulas() {
  if (!document.body.classList.contains("theme-math")) return;
  removeMathFormulas();
  const formulas = [
    "E = mc²",
    "a² + b² = c²",
    "sin(θ) = oposto/hipotenusa",
    "f(x) = ax² + bx + c",
    "∫ x dx = x²/2 + C",
    "Δ = b² - 4ac",
    "Σ (n=1) ^∞ 1/n² = π²/6",
  ];
  formulas.forEach(text => {
    const d = document.createElement("div");
    d.className = "math-formula";
    d.innerText = text;
    d.style.top = Math.random() * window.innerHeight + "px";
    d.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(d);
  });
}

function changeTheme(theme) {
  removeMathFormulas();
  document.body.classList.remove(
    "theme-light", "theme-dark", "theme-pixel",
    "theme-custom", "theme-math", "theme-acherongif"
  );

  document.body.classList.add("theme-" + theme);

  if (theme === "pixel") {
    document.body.style.backgroundImage = "url('pixel-art.jpg')";
  } else if (theme === "math") {
    document.body.style.backgroundImage = "url('math-bg.png')";
    createMathFormulas();
  } else if (theme === "custom") {
    loadSavedCustomColors();
  } else if (theme === "acherongif") {
    document.body.style.backgroundImage = "";
  } else {
    document.body.style.backgroundImage = "";
  }

  if (colorPanel) {
    if (theme === "custom") {
      colorPanel.classList.remove("hidden", "collapsed");
      if (collapseBtn) collapseBtn.textContent = "–";
    } else {
      colorPanel.classList.add("hidden");
      colorPanel.classList.remove("collapsed");
    }
  }

  if (themeAudio) {
    const track = themeTracks[theme];
    if (track) {
      themeAudio.src = track;
      themeAudio.volume = 0.5;
      themeAudio.play().catch(()=>{});
    } else {
      themeAudio.pause();
      themeAudio.currentTime = 0;
    }
  }

  localStorage.setItem("selectedTheme", theme);
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");
  const forceMath = localStorage.getItem("forceMathTheme");
  const today = new Date();
  const startEvent = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  const endEvent = new Date(today.getFullYear(), today.getMonth(), 30, 23, 59, 59);

  if (today >= startEvent && today <= endEvent && forceMath === "true") {
    changeTheme("math");
  } else {
    changeTheme(savedTheme || "light");
  }
}
window.addEventListener("load", applySavedTheme);

// ======================= SCROLL DO CONTAINER =======================
const container = document.getElementById("container");
if (container) {
  container.addEventListener("wheel", function (e) {
    e.preventDefault();
    const STEP = 40;
    const direction = e.deltaY > 0 ? 1 : -1;
    container.scrollBy({ top: direction * STEP, behavior: "smooth" });
  }, { passive: false });
}

// ======================= TOGGLE BOTÕES LATERAIS =======================
const btn = document.getElementById("exibir-conteudo-btn");
const caixa = document.getElementById("botoes-esquerda");

btn?.addEventListener("click", () => {
  caixa?.classList.toggle("hidden");
});

// ======================= CHAT LOCALSTORAGE =======================
function saveMessage(message) {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push(message);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessages() {
  const chatMessages = document.getElementById("chat-messages");
  if (!chatMessages) return;
  chatMessages.innerHTML = "";
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach((msg, index) => {
    const item = document.createElement("div");
    item.className = "message-item";
    item.innerHTML = `<p>${msg}</p><button onclick="deleteMessage(${index})">❌ Excluir</button>`;
    chatMessages.appendChild(item);
  });
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  if (!input) return;
  const message = input.value.trim();
  if (!message) return;
  saveMessage(message);
  loadMessages();
  input.value = "";
}

function deleteMessage(index) {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.splice(index, 1);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  loadMessages();
}

// Inicializa chat na carga
window.addEventListener("load", loadMessages);
