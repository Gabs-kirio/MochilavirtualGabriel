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
      // Exibe o botão "Ver Conteúdo"
    var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
    btnExibirConteudo.style.display = "block";
    btnExibirConteudo.setAttribute("data-subject", subjectId);

    // Oculta a área de conteúdo
    document.getElementById("conteudo-materia").style.display = "none";
}

function exibirConteudo() {
     var conteudoMateria = document.getElementById("conteudo-materia");
    var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
   // Se o conteúdo já estiver visível, oculta ele e muda o texto do botão
    if (conteudoMateria.style.display === "block") {
        conteudoMateria.style.display = "none";
        btnExibirConteudo.innerText = "📖 Ver Conteúdo"; // Texto volta ao padrão
    } else {
        // Caso contrário, exibe o conteúdo e muda o texto do botão para "Fechar Conteúdo"
        var subjectId = btnExibirConteudo.getAttribute("data-subject");
    var conteudos = {
        "amc": { titulo: "Conteúdo AMC", descricao: "Aqui estão os detalhes da matéria de Arquitetura e Manutenção de Computadores." },
        "gt": { titulo: "Conteúdo GT", descricao: "Aqui estão os detalhes da matéria de Gestão do Tempo." },
        "nr": { titulo: "Conteúdo NR", descricao: "Aqui estão os detalhes da matéria de Noção de Robótica." },
        "poo": { titulo: "Conteúdo POO JAVA", descricao: "Aqui estão os detalhes da matéria de Programação Orientada a Objetos com Java." },
        "progweb": { titulo: "Conteúdo PROG WEB", descricao: "Importancia da programação web: Hoje em dia, a internet não é mais um brinquedo, mas sim uma ferramenta, logo, a prog web (criação de sites e sistemas) é uma habilidade essencial para trabalhadores do 'novo mundo'. A programação web possui grandes vantagens como: Alta empregabilidade, autonomia, capacidade de resolver problemas, base de empregabilidade e inclusão moral e social. Então, estudar prog web é mais que aprender uma profissão, é entender sobre como o mundo funciona" },
        "htmlcss": { titulo: "Conteúdo HTML & CSS", descricao: "Aqui estão os detalhes da matéria de HTML & CSS." },
        "logpr": { titulo: "Conteúdo LOG PR", descricao: "Aqui estão os detalhes da matéria de Lógica de Programação." },
        "so": { titulo: "Conteúdo SO", descricao: "Aqui estão os detalhes da matéria de Sistemas Operacionais." }
    };

   if (conteudos[subjectId]) {
            document.getElementById("titulo-conteudo").innerText = conteudos[subjectId].titulo;
            document.getElementById("descricao-conteudo").innerText = conteudos[subjectId].descricao;
            conteudoMateria.style.display = "block";
            btnExibirConteudo.innerText = "❌ Fechar Conteúdo"; // Altera o texto do botão
        }
    }

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
