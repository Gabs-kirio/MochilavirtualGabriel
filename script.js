// Função chamada quando um botão de matéria é clicado.
// Recebe título, descrição (detalhes) e o identificador da matéria (subjectId)
function alterarConteudo(titulo, detalhes, subjectId) {
  // Atualiza o título e a descrição do container.
  document.querySelector(".container h1").innerText = titulo;
  document.querySelector(".container p").innerText = detalhes;

  // Oculta todos os botões "materia 1".
  const botoesMateria = document.querySelectorAll(".btnMateria1");
  botoesMateria.forEach((el) => {
    el.style.display = "none";
  });

  // Oculta todas as áreas de conteúdo extra.
  const conteudosMateria = document.querySelectorAll(".conteudoMateria1");
  conteudosMateria.forEach((el) => {
    el.style.display = "none";
  });

  // Exibe o botão "materia 1" correspondente à matéria selecionada.
  document.getElementById(`botao-${subjectId}-materia1`).style.display = "block";

  // Oculta o menu dos amigos.
  document.querySelector(".menu-amigos").style.display = "none";
}

// Função para exibir ou ocultar o conteúdo extra da matéria selecionada.
// Recebe o identificador da matéria (subjectId)
function exibirMeuConteudo(subjectId) {
  var conteudo = document.getElementById(`conteudo-${subjectId}-materia1`);
  if (conteudo.style.display === "block") {
    // Se já estiver visível, oculta-o.
    conteudo.style.display = "none";
  } else {
    // Caso contrário, exibe-o.
    conteudo.style.display = "block";
  }
}

// Função para alterar o tema da página.
// Temas disponíveis: "light", "dark", "pixel" e "custom" (personalizado)
function changeTheme(theme) {
  // Remove as classes de temas existentes e adiciona a nova.
  document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom");
  document.body.classList.add("theme-" + theme);

  // Para os temas claro e escuro, oculta a área de personalização e limpa o background.
  if (theme === "light" || theme === "dark") {
    document.getElementById("custom-bg").style.display = "none";
    document.body.style.backgroundImage = "";
  } else if (theme === "pixel") {
    // Para o modo Pixel Art, oculta a área de personalização e define o fundo localmente.
    document.getElementById("custom-bg").style.display = "none";
    document.body.style.backgroundImage = "url('pixel-art.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (theme === "custom") {
    // Para o tema personalizado, exibe a área para inserir o URL da imagem.
    document.getElementById("custom-bg").style.display = "block";
    // Inicialmente, limpa qualquer imagem de fundo definida.
    document.body.style.backgroundImage = "";
  }
}

// Função para aplicar uma imagem definida por URL como fundo no modo personalizado.
function applyCustomBackground() {
  var url = document.getElementById("custom-url").value;
  if (url) {
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  }
}
