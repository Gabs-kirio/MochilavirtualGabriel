// Função para alterar o conteúdo ao selecionar uma matéria
function alterarConteudo(titulo, detalhes, subjectId) {
    document.getElementById("titulo-principal").innerText = titulo;
    document.getElementById("instrucoes").innerText = detalhes;

    // Esconde o botão "Download Material"
    document.getElementById("mediafire-container").style.display = "none";

    // Exibe o botão "Ver Conteúdo"
    var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
    btnExibirConteudo.style.display = "block";
    btnExibirConteudo.setAttribute("data-subject", subjectId);

    // Oculta a área de conteúdo ao selecionar uma nova matéria
    document.getElementById("conteudo-materia").style.display = "none";

    // Redefine o texto do botão para "📖 Ver Conteúdo"
    btnExibirConteudo.innerText = "📖 Ver Conteúdo";
}

// Função para exibir/ocultar o conteúdo da matéria
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
            "amc": { titulo: "Conteúdo AMC", descricao: "Um datacenter, ou centro de processamento de dados, é um local físico onde são armazenados e processados grandes volumes de dados, utilizando servidores, equipamentos de rede e sistemas de armazenamento. É uma infraestrutura essencial para o funcionamento da internet e de diversas aplicações e serviços, garantindo segurança, velocidade e capacidade para lidar com as demandas digitais." },
            "gt": { titulo: "Conteúdo GT", descricao: "A Técnica Pomodoro é um método de gerenciamento de tempo que divide o trabalho em blocos de tempo focados, chamados, intercalados com pequenas pausas. O objetivo é aumentar a produtividade e reduzir a fadiga mental. É feito um bloco de 25 minutos de foco total e 5 de descanço, depois de 4 blocos tem uma pausa de 30 minutos" },
            "nr": { titulo: "Conteúdo NR", descricao: "A robótica é um campo multidisciplinar que envolve o design, construção, operação e aplicação de robôs. Este ramo da engenharia visa criar máquinas inteligentes que podem auxiliar os seres humanos em diversas tarefas e setores." },
            "poo": { titulo: "Conteúdo POO JAVA", descricao: "No meu software, existe uma logica matematica usada por uma conta: o computador faz uma conta de proporção entre as horas livres e a dificuldade na materia colocada, assim gernado as horas semanais de estudo." },
            "progweb": { titulo: "Conteúdo PROG WEB", descricao: "Importancia da programação web: Hoje em dia, a internet não é mais um brinquedo, mas sim uma ferramenta, logo, a prog web (criação de sites e sistemas) é uma habilidade essencial para trabalhadores do 'novo mundo'. A programação web possui grandes vantagens como: Alta empregabilidade, autonomia, capacidade de resolver problemas, base de empregabilidade e inclusão moral e social. Então, estudar prog web é mais que aprender uma profissão, é entender sobre como o mundo funciona" },
            "htmlcss": { titulo: "Conteúdo HTML & CSS", descricao: "Meu site possui os temas, esse esquema de troca de cores do botão, a fonte da letra e os simbolos." },
            "logpr": { titulo: "Conteúdo LOG PR", descricao: "Lógica de programação é a base para desenvolver soluções computacionais, envolvendo a criação de algoritmos e a estruturação de passos lógicos para resolver problemas de forma eficiente. É a habilidade de pensar de maneira sistemática e sequencial para que o computador possa executar as tarefas desejadas. ." },
            "so": { titulo: "Conteúdo SO", descricao: "Não há um "melhor" sistema operacional que se aplique a todos. A escolha depende das necessidades individuais do usuário e do uso que será feito do sistema. O Windows é amplamente popular e conhecido pela facilidade de uso, compatibilidade com diversos softwares e jogos. O Linux é valorizado pela segurança, personalização e desempenho em hardware mais limitado. O macOS, exclusivo para computadores Apple, é conhecido por seu design, integração com outros dispositivos Apple e eficiência em tarefas criativas" }
        };

        if (conteudos[subjectId]) {
            document.getElementById("titulo-conteudo").innerText = conteudos[subjectId].titulo;
            document.getElementById("descricao-conteudo").innerText = conteudos[subjectId].descricao;
            conteudoMateria.style.display = "block";
            btnExibirConteudo.innerText = "❌ Fechar Conteúdo"; // Altera o texto do botão
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

    if (savedTheme) {
        changeTheme(savedTheme);
    } else {
        changeTheme("light"); // Se nenhum tema estiver salvo, usa o tema claro como padrão
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

    var body = document.body;

    // Remove fórmulas existentes para evitar sobrecarga
    removeMathFormulas();

    formulas.forEach((formulaText) => {
        var formula = document.createElement("div");
        formula.className = "math-formula";
        formula.innerText = formulaText;

        // Define posição aleatória na tela
        formula.style.top = Math.random() * window.innerHeight + "px";
        formula.style.left = Math.random() * window.innerWidth + "px";

        body.appendChild(formula);
    });
}

// Função para remover todas as fórmulas matemáticas
function removeMathFormulas() {
    var existingFormulas = document.querySelectorAll(".math-formula");
    existingFormulas.forEach(formula => formula.remove());
}

// Exibe fórmulas matemáticas a cada 5 segundos, mas apenas se o tema Matemático estiver ativo
setInterval(() => {
    if (document.body.classList.contains("theme-math")) {
        createMathFormulas();
    }
}, 5000);

function changeTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom", "theme-math");
    document.body.classList.add("theme-" + theme);

    localStorage.setItem("selectedTheme", theme);

    var customBg = document.getElementById("custom-bg");

    if (theme === "custom") {
        if (customBg) {
            customBg.style.display = "block";
            applySavedCustomBackground();
        }
    } else {
        if (customBg) customBg.style.display = "none";
    }

    if (theme === "math") {
        createMathFormulas(); // Gera fórmulas matemáticas
    } else {
        removeMathFormulas(); // Remove as fórmulas se outro tema for escolhido
    }
}

// Aplica o fundo personalizado ao carregar o tema customizado
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



function toggleTemas() {
    var quadroTemas = document.getElementById("quadro-temas");

    // Alterna entre mostrar e ocultar
    if (quadroTemas.style.display === "none" || quadroTemas.style.display === "") {
        quadroTemas.style.display = "flex";
    } else {
        quadroTemas.style.display = "none";
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

function deleteMessage(index) {
    var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.splice(index, 1); // Remove a mensagem específica
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    loadMessages(); // Atualiza a lista após excluir
}
function applySavedTheme() {
    var savedTheme = localStorage.getItem("selectedTheme");
    var forceMath = localStorage.getItem("forceMathTheme"); // Verifica se a opção está ativada

    if (forceMath === "true") {
        changeTheme("math"); // Inicia o site no tema Matemática
    } else if (savedTheme) {
        changeTheme(savedTheme); // Aplica o último tema usado
    } else {
        changeTheme("light"); // Se nada estiver salvo, usa o tema claro como padrão
    }
}

// Função para ativar/desativar a entrada automática no tema Matemática
function toggleMathTheme() {
    var forceMath = localStorage.getItem("forceMathTheme");

    if (forceMath === "true") {
        localStorage.setItem("forceMathTheme", "false");
        alert("Agora o site abrirá no último tema utilizado.");
    } else {
        localStorage.setItem("forceMathTheme", "true");
        alert("Agora o site abrirá automaticamente no tema Matemática.");
    }
}
function applySavedTheme() {
    var savedTheme = localStorage.getItem("selectedTheme");
    var forceMath = localStorage.getItem("forceMathTheme");

    var today = new Date();
    var startEvent = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0); // Hoje à meia-noite
    var endEvent = new Date(today.getFullYear(), today.getMonth(), 30, 23, 59, 59); // Dia 30 às 23h59

    // Se estamos dentro do período do evento e a opção não foi desativada, força o tema Matemática
    if (today >= startEvent && today <= endEvent && forceMath === "true") {
        changeTheme("math");
    } else if (savedTheme) {
        changeTheme(savedTheme); // Aplica o último tema usado antes do evento
    } else {
        changeTheme("light"); // Se nada estiver salvo, usa o tema claro como padrão
    }
}
function toggleMathTheme() {
    var forceMath = localStorage.getItem("forceMathTheme");

    if (forceMath === "true") {
        localStorage.setItem("forceMathTheme", "false");
        alert("Agora o site abrirá no último tema utilizado.");
    } else {
        localStorage.setItem("forceMathTheme", "true");
        alert("Agora o site abrirá automaticamente no tema Matemática até o dia 30.");
    }
}
function alterarConteudo(titulo, detalhes, subjectId) {
    document.getElementById("titulo-principal").innerText = titulo;
    document.getElementById("instrucoes").innerText = detalhes;

    var downloadContainer = document.getElementById("download-container");

    // Exibe apenas no POO Java
    if (subjectId === "poo") {
        downloadContainer.style.display = "block"; // Mostra o botão
    } else {
        downloadContainer.style.display = "none"; // Oculta o botão
    }

    // Exibe o botão "Ver Conteúdo"
    var btnExibirConteudo = document.getElementById("exibir-conteudo-btn");
    btnExibirConteudo.style.display = "block";
    btnExibirConteudo.setAttribute("data-subject", subjectId);
}
function voltarParaInicio() {
    window.location.href = "index.html"; // Altere para o nome da sua página inicial
}

// Seleciona o container central que você deseja controlar o scroll
const container = document.querySelector('.container');

function alterarConteudo(titulo, detalhes, subjectId) {
    // Oculta os botões das matérias
    var botoesEsquerda = document.querySelector('.botoes-esquerda');
    var botoesDireita = document.querySelector('.botoes-direita');
    if (botoesEsquerda) botoesEsquerda.style.display = "none";
    if (botoesDireita) botoesDireita.style.display = "none";

    // Atualiza o título e as instruções com as informações da matéria selecionada
    document.getElementById("titulo-principal").innerText = titulo;
    document.getElementById("instrucoes").innerText = detalhes;

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
