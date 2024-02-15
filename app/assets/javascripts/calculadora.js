document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const operationResultsList = document.getElementById('operationResultsList');
  const clearLink = document.getElementById('clearLink');

  document.getElementById('calculateBtn').addEventListener('click', function() {
    const expressao = display.value.trim();

    if (expressao !== '') {
      try {
        const resultado = eval(expressao);
        const newListItem = document.createElement('li');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Resultado da Operação: ' + expressao + ' = ' + resultado;
        newParagraph.classList.add('operation-result');
        newListItem.appendChild(newParagraph);
        operationResultsList.insertBefore(newListItem, operationResultsList.firstChild);
        
        if (operationResultsList.childElementCount > 14) {  
          operationResultsList.innerHTML = '';
        }

        if (operationResultsList.childElementCount > 0) {
          clearLink.style.display = 'block';
        } else {
          clearLink.style.display = 'none';
        }

        display.value = '';
      } catch (error) {
        console.error('Erro ao calcular a expressão:', error);
      }
    }
  });

  clearLink.addEventListener('click', function(event) {
    event.preventDefault();
    operationResultsList.innerHTML = '';
    clearLink.style.display = 'none';
  });

  window.appendToDisplay = function(value) {
    display.value += value;
  };

  window.clearDisplay = function() {
    display.value = '';
  };
});
