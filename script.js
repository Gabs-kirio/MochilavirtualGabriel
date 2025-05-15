function alterarConteudo(titulo, detalhes, subjectId) {
    document.querySelector(".container h1").innerText = titulo;
    document.querySelector(".container p").innerText = detalhes;

    const botoesMateria = document.querySelectorAll(".btnMateria1");
    botoesMateria.forEach(el => el.style.display = "none");

    const conteudosMateria = document.querySelectorAll(".conteudoMateria1");
    conteudosMateria.forEach(el => el.style.display = "none");

    const botaoMateria = document.getElementById(`botao-${subjectId}-materia1`);
    if (botaoMateria) botaoMateria.style.display = "block";

    document.querySelector(".menu-amigos").style.display = "none";

    const conteudoArea = document.getElementById(`conteudo-${subjectId}-materia1`);
    if (conteudoArea) conteudoArea.style.display = "block";

    // Esconder link do MediaFire ao selecionar matéria
    document.getElementById("mediafire-link").style.display = "none";
}

function changeTheme(theme) {
    document.body.classList.remove("theme-light", "theme-dark", "theme-pixel", "theme-custom");
    document.body.classList.add("theme-" + theme);

    if (theme === "light" || theme === "dark") {
        document.getElementById("custom-bg").style.display = "none";
        document.body.style.backgroundImage = "";
    } else if (theme === "pixel") {
        document.getElementById("custom-bg").style.display = "none";
        document.body.style.backgroundImage = "url('pixel-art.jpg')";
    } else if (theme === "custom") {
        document.getElementById("custom-bg").style.display = "block";
        document.body.style.backgroundImage = "";
    }
}
