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
    descricao: "<h3>10/07 Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p><h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
  },


      "gt": {
        titulo: "Conteúdo GT",
        descricao: "<h3> 10/07 Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "nr": { 
        titulo: "Conteúdo NR", 
        descricao: "<h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "poo": {
        titulo: "Conteúdo POO JAVA",
        descricao: "<h3>11/07 Software</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p><h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p><h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "progweb": {
        titulo: "Conteúdo PROG WEB",
        descricao: "<h3>11/07 Registro de aulas no site</h3><p>Foi feito o registro de todas aulas do bimestre dentro do site</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p><h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "htmlcss": {
        titulo: "Conteúdo HTML & CSS",
        descricao: "<h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "logpr": {
        titulo: "Conteúdo LOG PR",
        descricao: "<h3> 10/07 Guia de aprendizagem dos alunos</h3><p>Foi feito o planejamento de aulas do bimestre</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      },
      "so": {
        titulo: "Conteúdo SO",
        descricao: "<h3>Introdução a criação de jogos</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p><h3>Aula 1</h3><p>a</p><h3>Aula 2</h3><p>a</p><h3>Aula 3</h3><p>a</p><h3>Aula 4</h3><p>a</p><h3>Aula 5</h3><p>a</p><h3>Aula 6</h3><p>a</p><h3>Aula 7</h3><p>a</p><h3>Aula 8</h3><p>a</p><h3>Aula 9</h3><p>a</p><h3>Aula 10</h3><p>a</p>"
      }
    };

    // Verifica se existe conteúdo para o subjectId selecionado e insere usando innerHTML
    if (conteudos[subjectId]) {
      document.getElementById("titulo-conteudo").innerHTML = conteudos[subjectId].titulo;
      document.getElementById("descricao-conteudo").innerHTML = conteudos[subjectId].descricao;
      conteudoMateria.style.display = "block";
      btnExibirConteudo.innerHTML = "❌ 3° Bimestre";
    }
  }
}


// Função para alterar o tema e salvar no localStorage
function changeTheme(theme) {
  // Remove os temas anteriores e aplica o novo
  document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom", "theme-math");
  document.body.classList.add("theme-" + theme);

  // Salva o tema escolhido no localStorage
  localStorage.setItem("selectedTheme", theme);

  var customBg = document.getElementById("custom-bg");

  if (theme === "light" || theme === "dark" || theme === "pixel" || theme === "math") {
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
    "theme-math"
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

function voltarParaInicio() {
  window.location.href = "index.html"; // Altere para o caminho da sua página inicial
}
