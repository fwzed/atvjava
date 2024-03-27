document.addEventListener('DOMContentLoaded', function() {
    const verificarBtn = document.getElementById('verificarBtn');
    verificarBtn.addEventListener('click', function() {
        const salario = parseFloat(document.getElementById('salario').value);
        const resultadoElement = document.getElementById('resultado');
        
        if (salario > 5000) {
            resultadoElement.textContent = 'MAIOR QUE R$5.000,00';
        } else {
            resultadoElement.textContent = 'IGUAL OU MENOR QUE R$5.000,00';
        }
    });
});