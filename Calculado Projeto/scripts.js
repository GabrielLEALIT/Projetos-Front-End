// Captura o elemento do visor pelo ID
const screen = document.getElementById('screen');

// Adiciona um valor no visor
function appendValue(val) {
  // Se o visor estiver com '0' ou 'Erro', substitui pelo caractere digitado
  if (screen.innerText === '0' || screen.innerText === 'Erro') {
    screen.innerText = val;
  } else {
    // Caso contrário, concatena o novo caractere ao texto existente
    screen.innerText += val;
  }
}

// Limpa o visor (Função atrelada ao botão "C")
function clearScreen() {
  screen.innerText = '0';
}

// Executa o cálculo matemático da expressão
function calculate() {
  try {
    // Substitui os símbolos visuais '×' e '÷' pelos operadores JS '*' e '/'
    let expression = screen.innerText.replace(/×/g, '*').replace(/÷/g, '/');

    // Executa a conta
    screen.innerText = eval(expression);
  } catch (error) {
    // Caso haja erro de sintaxe na expressão digitada
    screen.innerText = 'Erro';
  }
}