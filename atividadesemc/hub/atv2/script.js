document.addEventListener('DOMContentLoaded', function() {
    const verificarBtn = document.getElementById('verificarBtn');
    verificarBtn.addEventListener('click', function() {
        const numero = parseInt(document.getElementById('numero').value);
        const resultadoElement = document.getElementById('resultado');
        
        if (numero % 2 === 0) {
            resultadoElement.textContent = 'Este é um número par.';
        } else {
            resultadoElement.textContent = 'Este é um número ímpar.';
        }
    });
});