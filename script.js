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
            "amc": { titulo: "Conteúdo AMC", descricao: "Aqui estão os detalhes da matéria de Arquitetura e Manutenção de Computadores." },
            "gt": { titulo: "Conteúdo GT", descricao: "Aqui estão os detalhes da matéria de Gestão do Tempo." },
            "nr": { titulo: "Conteúdo NR", descricao: "A robótica é um campo multidisciplinar que envolve o design, construção, operação e aplicação de robôs. Este ramo da engenharia visa criar máquinas inteligentes que podem auxiliar os seres humanos em diversas tarefas e setores." },
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
