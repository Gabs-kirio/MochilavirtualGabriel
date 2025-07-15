// Função para alterar o conteúdo ao selecionar uma matéria
function alterarConteudo(titulo, detalhes, subjectId) {
  // Agora usa innerHTML para que, se "titulo" ou "detalhes" tiverem tags HTML, elas sejam interpretadas
  document.getElementById("titulo-principal").innerHTML = titulo;
  document.getElementById("instrucoes").innerHTML = detalhes;

  // Esconde o botão "Download Material"
  document.getElementById("mediafire-container").style.display = "none";

  // Exibe o botão "Ver Conteúdo"
  var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
  btnExibirConteudo.style.display = "block";
  btnExibirConteudo.setAttribute("data-subject", subjectId);

  // Oculta a área de conteúdo ao selecionar uma nova matéria
  document.getElementById("conteudo-materia").style.display = "none";

  // Redefine o texto do botão para "📖3° Bimestre"
  btnExibirConteudo.innerText = "📖3° Bimestre";
}
const btn = document.getElementById("exibir-conteudo-btn");
const caixa = document.getElementById("botoes-esquerda");

btn.addEventListener("click", () => {
  // Para esconder imediatamente:
  caixa.classList.toggle("botoes-esquerda");

});

function exibirConteudo() {
  var conteudoMateria = document.getElementById("conteudo-materia");
  var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");

  // Se o conteúdo já estiver visível, oculta-o e muda o texto do botão
  if (conteudoMateria.style.display === "block") {
    conteudoMateria.style.display = "none";
    btnExibirConteudo.innerHTML = "📖3° Bimestre";
  } else {
    // Obtém o ID da matéria definida no atributo data-subject do botão
    var subjectId = btnExibirConteudo.getAttribute("data-subject");

    // Objeto com os conteúdos de cada matéria
    var conteudos = {
  "amc": {
    titulo: "Conteúdo AMC",
    descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2 - 15/07</h1><h3>PC custo</h3><h1>Como Escolher um PC Custo-Benefício</h1><h2>1. Defina o objetivo principal do PC</h2><table><tr><th>Uso principal</th><th>Requisitos</th></tr><tr><td>Estudos, navegação e tarefas leves</td><td>Processador básico (Intel i3/Ryzen 3), 8 GB de RAM, SSD</td></tr><tr><td>Jogos medianos / edição leve</td><td>Processador intermediário (i5/Ryzen 5), 16 GB RAM, GPU dedicada</td></tr><tr><td>Jogos pesados / edição profissional</td><td>Processador potente (i7/Ryzen 7+), 16-32 GB RAM, GPU potente</td></tr><tr><td>Programação / multitarefa</td><td>Priorize RAM (16 GB+) e SSD</td></tr></table><h2>2. Priorize os componentes certos</h2><strong>CPU (Processador):</strong> Prefira Intel i3/i5 ou Ryzen 3/5. Evite Celeron e Pentium.<br><strong>RAM:</strong> Mínimo 8 GB, ideal 16 GB para jogos/edição.<br><strong>Armazenamento:</strong> Use SSD (mínimo 240 GB). Pode combinar com HD.<br><strong>Placa de vídeo:</strong> Para jogos/edição, considere GTX 1650, RTX 3050 ou RX 6600.</div><h2>3. Estabeleça um orçamento</h2><ul><li><strong>Até R$ 2.000:</strong> PC usado ou recondicionado, 8 GB RAM + SSD.</li><li><strong>R$ 2.500 a R$ 3.500:</strong> Ryzen 5 ou i5, 16 GB RAM, ótimo para uso geral.</li><li><strong>R$ 4.000 a R$ 5.000+:</strong> PCs com GPU dedicada boa, ideal para jogos e edição.</li></ul><h2>4. Montar ou comprar pronto?</h2><ul><li><strong>Montar:</strong> Mais barato e peças melhores.</li><li><strong>Comprar pronto:</strong> Mais prático, mas verifique a qualidade das peças.</li></ul><h2>5. Avalie marcas e garantia</h2><ul><li>Verifique se as peças têm garantia individual (em PCs montados).</li><li>Pesquise a reputação da loja.</li><li>Dell, Lenovo e Acer têm bom suporte. PCs montados podem ser mais potentes pelo mesmo preço.</li></ul><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p><h1>Aula 11</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 12</h1><h3>a</h3><p>a</p><h1>Aula 13</h1><h3>b</h3><p>a</p><h1>Aula 14</h1><h3>a</h3><p>a</p><h1>Aula 15</h1><h3>a</h3><p>a</p><h1>Aula 16</h1><h3>a</h3><p>a</p><h1>Aula 17</h1><h3>a</h3><p>a</p><h1>Aula 18</h1><h3>a</h3><p>a</p><h1>Aula 19</h1><h3>a</h3><p>a</p><h1>Aula 20</h1><h3>a</h3><p>a</p>"
  },


      "gt": {
        titulo: "Conteúdo GT",
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2</h1><h3>a</h3><p>a</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      },
      "nr": { 
        titulo: "Conteúdo NR", 
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2</h1><h3>a</h3><p>a</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      },
      "poo": {
        titulo: "Conteúdo POO JAVA",
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2</h1><h3>a</h3><p>a</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p><h1>Aula 11</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 12</h1><h3>a</h3><p>a</p><h1>Aula 13</h1><h3>b</h3><p>a</p><h1>Aula 14</h1><h3>a</h3><p>a</p><h1>Aula 15</h1><h3>a</h3><p>a</p><h1>Aula 16</h1><h3>a</h3><p>a</p><h1>Aula 17</h1><h3>a</h3><p>a</p><h1>Aula 18</h1><h3>a</h3><p>a</p><h1>Aula 19</h1><h3>a</h3><p>a</p><h1>Aula 20</h1><h3>a</h3><p>a</p>"
      },
      "progweb": {
        titulo: "Conteúdo PROG WEB",
        descricao: "<h1>Aula 1 - 10/07</h1><h3>Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2 - 14/07</h1><h3>MySQL, JS e PHP</h3><p><strong>SQL (Structured Query Language)</strong> é uma linguagem padrão utilizada para gerenciar e manipular bancos de dados relacionais, permitindo que você acesse, recupere, atualize e exclua dados.</p><p><strong>JavaScript, frequentemente abreviado como JS</strong>, é uma linguagem de programação de alto nível e interpretada, amplamente utilizada para criar interatividade em páginas web e, mais recentemente, em aplicações de servidor (back-end) com Node.js.</p><p><strong> PHP (PHP: Hypertext Preprocessor)</strong> é uma linguagem de script de código aberto amplamente utilizada, especialmente para o desenvolvimento web. É uma linguagem do lado do servidor, o que significa que o código é processado no servidor antes de ser enviado para o navegador do usuário.</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      },
      "htmlcss": {
        titulo: "Conteúdo HTML & CSS",
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2 - 14/07</h1><h3>Inserção do guia de aprendizagem no site</h3><p>Inserimos o guia de aprendizagem no site (a base dele)</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      },
      "logpr": {
        titulo: "Conteúdo LOG PR",
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2</h1><h3>a</h3><p>a</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      },
      "so": {
        titulo: "Conteúdo SO",
        descricao: "<h1>Aula 1</h1><h3>10/07 - Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h1>Aula 2</h1><h3>a</h3><p>a</p><h1>Aula 3</h1><h3>b</h3><p>a</p><h1>Aula 4</h1><h3>a</h3><p>a</p><h1>Aula 5</h1><h3>a</h3><p>a</p><h1>Aula 6</h1><h3>a</h3><p>a</p><h1>Aula 7</h1><h3>a</h3><p>a</p><h1>Aula 8</h1><h3>a</h3><p>a</p><h1>Aula 9</h1><h3>a</h3><p>a</p><h1>Aula 10</h1><h3>a</h3><p>a</p>"
      }
    };

    // Verifica se existe conteúdo para o subjectId selecionado e insere usando innerHTML
    if (conteudos[subjectId]) {
      document.getElementById("titulo-conteudo").innerHTML = conteudos[subjectId].titulo;
      document.getElementById("descricao-conteudo").innerHTML = conteudos[subjectId].descricao;
      conteudoMateria.style.display = "block";
      btnExibirConteudo.innerHTML = " 3° Bimestre";
    }
  }
}


// Função para alterar o tema e salvar no localStorage
function changeTheme(theme) {
  // Remove os temas anteriores e aplica o novo
  document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom", "theme-math", "Acherongif");
  document.body.classList.add("theme-" + theme);

  // Salva o tema escolhido no localStorage
  localStorage.setItem("selectedTheme", theme);

  var customBg = document.getElementById("custom-bg");

  if (theme === "light" || theme === "dark" || theme === "pixel" || theme === "math"|| theme === "Acherongif") {
    if (customBg) customBg.style.display = "none";
    if (theme === "pixel") {
      document.body.style.backgroundImage = "url('pixel-art.jpg')";
    } else if (theme === "math") {
      document.body.style.backgroundImage = "url('math-bg.png')";
      createMathFormulas(); // Ativa as fórmulas matemáticas
    } else {
      document.body.style.backgroundImage = "";
    }
  } else if (theme === "custom") {
    if (customBg) customBg.style.display = "block";
    applySavedCustomBackground();
  }
}

// Função para aplicar o último tema salvo ao carregar a página
function applySavedTheme() {
  var savedTheme = localStorage.getItem("selectedTheme");
  var forceMath = localStorage.getItem("forceMathTheme");

  var today = new Date();
  var startEvent = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0); // Hoje à meia-noite
  var endEvent = new Date(today.getFullYear(), today.getMonth(), 30, 23, 59, 59); // Dia 30 às 23h59

  // Se estamos dentro do período do evento e a opção está ativada, força o tema Matemática
  if (today >= startEvent && today <= endEvent && forceMath === "true") {
    changeTheme("math");
  } else if (savedTheme) {
    changeTheme(savedTheme);
  } else {
    changeTheme("light");
  }
}

// Chama a função ao carregar a página para aplicar o último tema salvo
window.addEventListener("load", applySavedTheme);

// 1) Obtenha o elemento de áudio
const themeAudio = document.getElementById("theme-music");

// 2) Mapear cada tema ao seu arquivo MP3
const themeTracks = {
  light: null,               // sem música para o tema claro
  dark: null,
  pixel: null,
  math: null,
  custom: null,
  Acherongif: null,
}

// 3) Altere a função changeTheme para cuidar do áudio
function changeTheme(theme) {
  // --- seu código atual de troca de classes e background ---
  document.body.className = ""; 
  document.body.classList.add("theme-" + theme);
  // … resto da sua lógica …

  // --- tratar o áudio ---
  const track = themeTracks[theme];
  if (track) {
    themeAudio.src = track;
    themeAudio.volume = 0.5;  // ajuste entre 0 e 1  
    themeAudio.play();
  } else {
    themeAudio.pause();
    themeAudio.currentTime = 0;
  }
}

// Função para gerar fórmulas matemáticas animadas no tema Matemática
function createMathFormulas() {
  if (!document.body.classList.contains("theme-math")) return; // Se não for o tema Matemático, sai da função

  var formulas = [
    "E = mc²",
    "a² + b² = c²",
    "sin(θ) = oposto/hipotenusa",
    "f(x) = ax² + bx + c",
    "∫ x dx = x²/2 + C",
    "Δ = b² - 4ac",
    "Σ (n=1) ^∞ 1/n² = π²/6"
  ];

  // Remove fórmulas existentes para evitar sobrecarga
  removeMathFormulas();

  formulas.forEach((formulaText) => {
    var formula = document.createElement("div");
    formula.className = "math-formula";
    formula.innerText = formulaText; // Aqui usamos innerText pois são fórmulas simples

    // Define posição aleatória na tela
    formula.style.top = Math.random() * window.innerHeight + "px";
    formula.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(formula);
  });
}

// Função para remover todas as fórmulas matemáticas
function removeMathFormulas() {
  var existingFormulas = document.querySelectorAll(".math-formula");
  existingFormulas.forEach(formula => formula.remove());
}

// Exibe fórmulas matemáticas a cada 5 segundos, mas somente se o tema Matemático estiver ativo
setInterval(() => {
  if (document.body.classList.contains("theme-math")) {
    createMathFormulas();
  }
}, 5000);

function toggleTemas() {
  var quadroTemas = document.getElementById("quadro-temas");

  // Alterna entre mostrar e ocultar
  if (quadroTemas.style.display === "none" || quadroTemas.style.display === "") {
    quadroTemas.style.display = "flex";
  } else {
    quadroTemas.style.display = "none";
  }
}
function changeTheme(theme) {
  // 1) Remove todas as fórmulas ativas
  removeMathFormulas();

  // 2) Remove classes anteriores e aplica a nova
  document.body.classList.remove(
    "theme-light",
    "theme-dark",
    "theme-pixel",
    "theme-custom",
    "theme-math",
    "theme-Acherongif",
  );
  document.body.classList.add("theme-" + theme);

  // 3) Salva no localStorage
  localStorage.setItem("selectedTheme", theme);

  // 4) Lógica de background e painel customizado
  var customBg = document.getElementById("custom-bg");
  if (["light", "dark", "pixel", "math"].includes(theme)) {
    if (customBg) customBg.style.display = "none";

    if (theme === "pixel") {
      document.body.style.backgroundImage = "url('pixel-art.jpg')";
    } else if (theme === "math") {
      document.body.style.backgroundImage = "url('math-bg.png')";
      createMathFormulas(); // recria as fórmulas apenas para o tema math
    } else {
      document.body.style.backgroundImage = "";
    }
  } else if (theme === "custom") {
    if (customBg) customBg.style.display = "block";
    applySavedCustomBackground();
  }
}

function toggleChat() {
  var chatbox = document.getElementById("chatbox");

  // Alterna entre mostrar e ocultar
  if (chatbox.style.display === "none" || chatbox.style.display === "") {
    chatbox.style.display = "block";
    loadMessages(); // Carrega mensagens salvas
  } else {
    chatbox.style.display = "none";
  }
}

function sendMessage() {
  var input = document.getElementById("chat-input");
  var message = input.value.trim();

  if (message !== "") {
    var chatMessages = document.getElementById("chat-messages");
    var newMessage = document.createElement("p");
    newMessage.innerText = message;
    chatMessages.appendChild(newMessage);

    saveMessage(message); // Salva a mensagem localmente
    input.value = ""; // Limpa o campo de entrada
  }
}

function saveMessage(message) {
  var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push(message);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessages() {
  var chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = ""; // Limpa mensagens antigas

  var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach(function(msg) {
    var newMessage = document.createElement("p");
    newMessage.innerText = msg;
    chatMessages.appendChild(newMessage);
  });
}

function deleteMessage(index) {
  var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.splice(index, 1); // Remove a mensagem específica
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  loadMessages(); // Atualiza a lista após excluir
}

// Segunda definição de enviar mensagem (pode ser consolidada se necessário)
function sendMessage() {
  var input = document.getElementById("chat-input");
  var message = input.value.trim();

  if (message !== "") {
    var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    loadMessages(); // Atualiza a lista após enviar
    input.value = "";
  }
}

function loadMessages() {
  var chatMessages = document.getElementById("chat-messages");
  chatMessages.innerHTML = "";
  var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach((msg, index) => {
    var messageContainer = document.createElement("div");
    messageContainer.className = "message-item";
    messageContainer.innerHTML = `<p>${msg}</p> <button onclick="deleteMessage(${index})">❌ Excluir</button>`;
    chatMessages.appendChild(messageContainer);
  });
}

function applySavedCustomBackground() {
  var savedColors = localStorage.getItem("customColors");

  if (savedColors) {
    var colors = JSON.parse(savedColors);
    var gradient;

    if (colors.color1 && colors.color2 && colors.color3) {
      gradient = "linear-gradient(to right, " + colors.color1 + ", " + colors.color2 + ", " + colors.color3 + ")";
    } else if (colors.color1 && colors.color2) {
      gradient = "linear-gradient(to right, " + colors.color1 + ", " + colors.color2 + ")";
    } else if (colors.color1) {
      gradient = colors.color1;
    }

    document.body.style.backgroundImage = gradient;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }
}

// Segunda versão de alterarConteudo (para ocultar botões, etc.)
function alterarConteudo(titulo, detalhes, subjectId) {
  // Oculta os botões das matérias
  var botoesEsquerda = document.querySelector('.botoes-esquerda');
  var botoesDireita = document.querySelector('.botoes-direita');
  if (botoesEsquerda) botoesEsquerda.style.display = "none";
  if (botoesDireita) botoesDireita.style.display = "none";

  // Atualiza o título e as instruções com as informações da matéria selecionada
  // Utiliza innerHTML para permitir a renderização de HTML se necessário
  document.getElementById("titulo-principal").innerHTML = titulo;
  document.getElementById("instrucoes").innerHTML = detalhes;

  var downloadContainer = document.getElementById("download-container");

  // Exibe o botão de download apenas para a matéria POO JAVA
  if (subjectId === "poo") {
    downloadContainer.style.display = "block";
  } else {
    downloadContainer.style.display = "none";
  }

  // Exibe o botão "Ver Conteúdo"
  var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
  btnExibirConteudo.style.display = "block";
  btnExibirConteudo.setAttribute("data-subject", subjectId);
}
// --- Suas referências ao painel já devem existir:
const colorPanel = document.getElementById("color-panel");
const input1     = document.getElementById("color1");
const input2     = document.getElementById("color2");
const input3     = document.getElementById("color3");
const btnApply   = document.getElementById("apply-colors");

// Função que aplica o gradient usando as 3 cores
function applyThreeColorBackground() {
  const c1 = input1.value;
  const c2 = input2.value;
  const c3 = input3.value;
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
}

// Aplica o listener no botão “Aplicar”
btnApply.addEventListener("click", applyThreeColorBackground);

// === Função changeTheme ajustada ===
function changeTheme(theme) {
  // 1) Remover possíveis fórmulas antigas e classes anteriores
  removeMathFormulas();
  document.body.classList.remove(
    "theme-light", "theme-dark", "theme-pixel",
    "theme-math", "theme-custom"
  );

  // 2) Adicionar a classe do tema atual
  document.body.classList.add("theme-" + theme);

  // 3) Lógica de planos de fundo por tema
  if (theme === "pixel") {
    document.body.style.backgroundImage = "url('pixel-art.jpg')";
  } else if (theme === "math") {
    document.body.style.backgroundImage = "url('math-bg.png')";
    createMathFormulas();
  } else {
    // temas light, dark e custom tratamos abaixo
    document.body.style.backgroundImage = "";
  }

  // 4) Exibir ou ocultar painel CUSTOM e aplicar/limpar gradient
  if (theme === "custom") {
    colorPanel.classList.remove("hidden");
    // reaplica caso já tenha selecionado algo antes
    applyThreeColorBackground();
  } else {
    colorPanel.classList.add("hidden");
    // garante que não fique o gradient
    document.body.style.backgroundImage = "";
  }

  // 5) Se usar armazenamento de tema:
  localStorage.setItem("selectedTheme", theme);
  
  // … lógica de troca de classes e backgrounds …

  if (theme === "custom") {
    colorPanel.classList.remove("hidden");
    colorPanel.classList.remove("collapsed");  // garante expandido
    collapseBtn.textContent = "–";
    loadSavedCustomColors();
  } else {
    colorPanel.classList.add("hidden");
    colorPanel.classList.remove("collapsed");
    document.body.style.backgroundImage = "";
  }

  localStorage.setItem("selectedTheme", theme);


}
const CUSTOM_COLORS_KEY = "customBackgroundColors";
function applyThreeColorBackground() {
  const c1 = input1.value;
  const c2 = input2.value;
  const c3 = input3.value;

  // 1) Aplica o gradient no body
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;

  // 2) Salva a escolha do usuário no localStorage
  const colors = { c1, c2, c3 };
  localStorage.setItem(CUSTOM_COLORS_KEY, JSON.stringify(colors));
}
function loadSavedCustomColors() {
  const saved = localStorage.getItem(CUSTOM_COLORS_KEY);
  if (!saved) return;

  const { c1, c2, c3 } = JSON.parse(saved);

  // Define os inputs para refletirem o que foi salvo
  input1.value = c1;
  input2.value = c2;
  input3.value = c3;

  // Aplica o gradient imediatamente
  document.body.style.backgroundImage =
    `linear-gradient(to right, ${c1}, ${c2}, ${c3})`;
}
// Botão de minimizar o painel
const collapseBtn = document.getElementById("collapse-panel");
collapseBtn.addEventListener("click", () => {
  colorPanel.classList.toggle("collapsed");
  
  // Ajusta o símbolo do botão conforme o estado
  if (colorPanel.classList.contains("collapsed")) {
    collapseBtn.textContent = "+";  // mostra “+” para expandir
  } else {
    collapseBtn.textContent = "–";  // “–” para colapsar
  }
});

function voltarParaInicio() {
  window.location.href = "index.html"; // Altere para o caminho da sua página inicial
}
// Scroll incremental “de pouco em pouco” na roda do mouse
;(function(){
  const container = document.getElementById("ontainer");  
  if (!container) return;

  // Captura o evento de roda do mouse
  container.addEventListener("wheel", function(e) {
    e.preventDefault();   // impede o scroll “rápido” padrão

    const STEP = 40;      // quantos pixels rola a cada “tick” da roda
    const direction = e.deltaY > 0 ? 1 : -1;

    container.scrollBy({
      top: direction * STEP,
      behavior: "smooth"
    });
  }, { passive: false });
  
})();
