function alterarConteudo(titulo, detalhes, subjectId) {
  // Atualiza o título e o parágrafo do container
  document.querySelector(".container h1").innerText = titulo;
  document.querySelector(".container p").innerText = detalhes;

  // Esconde o botão "Download Material" ao selecionar uma matéria
  var mediafireContainer = document.getElementById("mediafire-container");
  if (mediafireContainer) {
    mediafireContainer.style.display = "none";
  }
  // Aqui você pode incluir outras ações específicas para cada matéria
}

function changeTheme(theme) {
  // Remove todos os temas atuais e adiciona o novo tema
  document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom");
  document.body.classList.add("theme-" + theme);
  
  var customBg = document.getElementById("custom-bg");
  
  if (theme === "light" || theme === "dark" || theme === "pixel") {
    if (customBg) customBg.style.display = "none";
    if (theme === "pixel") {
      // Define a imagem de fundo para Pixel Art
      document.body.style.backgroundImage = "url('pixel-art.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    } else {
      document.body.style.backgroundImage = "";
    }
  } else if (theme === "custom") {
    // Exibe a paleta de cores para personalização
    if (customBg) customBg.style.display = "block";
    // Se já houver cores personalizadas salvas, aplica-as
    applySavedCustomBackground();
  }
}

function applyCustomBackground() {
  // Obtém os valores selecionados nos color pickers
  var color1 = document.getElementById("custom-color1").value;
  var color2 = document.getElementById("custom-color2").value;
  var color3 = document.getElementById("custom-color3").value;
  var gradient;

  // Cria um gradiente linear com as cores escolhidas
  if (color1 && color2 && color3) {
    gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ", " + color3 + ")";
  } else if (color1 && color2) {
    gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
  } else if (color1) {
    gradient = color1;
  }

  // Aplica o gradiente como background da página
  document.body.style.backgroundImage = gradient;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";

  // Salva as cores escolhidas no localStorage para persistência
  var customColors = { color1: color1, color2: color2, color3: color3 };
  localStorage.setItem("customColors", JSON.stringify(customColors));
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
    
    // Atualiza os color pickers com as cores salvas
    document.getElementById("custom-color1").value = colors.color1;
    document.getElementById("custom-color2").value = colors.color2;
    document.getElementById("custom-color3").value = colors.color3;
  }
}

// Se desejar, ao carregar a página, se houver um fundo personalizado salvo
// e se o tema estiver definido como "custom", ele será aplicado automaticamente.
window.addEventListener("load", function () {
  var savedColors = localStorage.getItem("customColors");
  if (savedColors && document.body.classList.contains("theme-custom")) {
    applySavedCustomBackground();
  }
});
