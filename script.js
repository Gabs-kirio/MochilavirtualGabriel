function alterarConteudo(titulo, mensagem, conteudoId, botaoConteudoId) {
  // Atualiza título e mensagem
  document.querySelector('.container h1').innerText = titulo;
  document.querySelector('.container p').innerText = mensagem;
  
  // Oculta o menu dos amigos
  const menuAmigos = document.querySelector('.menu-amigos');
  if (menuAmigos) {
    menuAmigos.style.display = 'none';
  }

  // Esconde todos os botões de conteúdo
  document.querySelectorAll('.botao-conteudo').forEach(botao => {
    botao.style.display = 'none';
  });

  // Exibe o botão de conteúdo específico
  document.getElementById(botaoConteudoId).style.display = 'block';
}

function exibirConteudoAula(conteudoId, botaoConteudoId) {
  // Esconde o título
  const h1 = document.querySelector('.container h1');
  h1.style.display = 'none';

  // Esconde o botão específico clicado
  document.getElementById(botaoConteudoId).style.display = 'none';

  // Exibe o conteúdo oculto com efeito fade
  const conteudo = document.getElementById(conteudoId);
  if (conteudo) {
    conteudo.style.display = 'block';
    conteudo.classList.add('fade');
    setTimeout(() => {
      conteudo.classList.add('show');
    }, 50);
  }

  // Exibe o botão "Voltar"
  document.getElementById('btn-voltar').style.display = 'block';
}

function voltar() {
  const container = document.querySelector('.container');

  // Oculta todos os conteúdos exibidos
  document.querySelectorAll('.conteudo-aula').forEach(element => {
    element.style.display = 'none';
    element.classList.remove('show');
  });

  // Restaura o título e a mensagem padrão
  container.querySelector('h1').innerText = 'Matérias do técnico';
  container.querySelector('h1').style.display = 'block';
  container.querySelector('p').innerText = 'Selecione uma opção para prosseguir';
  container.querySelector('p').style.display = 'block';

  // Oculta todos os botões de conteúdo
  document.querySelectorAll('.botao-conteudo').forEach(botao => {
    botao.style.display = 'none';
  });

  // Oculta o botão "Voltar"
  document.getElementById('btn-voltar').style.display = 'none';

  // Exibe novamente o menu dos amigos
  const menuAmigos = document.querySelector('.menu-amigos');
  if (menuAmigos) {
    menuAmigos.style.display = 'block';
  }
}
