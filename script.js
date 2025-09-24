
function validarEmail() {
    const emailInput = document.getElementById('emailInput').value.trim();
    const resultElement = document.getElementById('emailResult');
    
    const emailRegex = /^([a-z]+\d{1,2}@curnvirtual\.edu\.co)|([aeiou][a-z]*[._][a-z]*@curn\.edu\.co)$/i;
    
    if (emailRegex.test(emailInput)) {
        resultElement.textContent = '✓ Correo institucional válido';
        resultElement.className = 'result valid';
    } else {
        resultElement.textContent = '✗ Formato de correo inválido. Ejemplos válidos: emartinezm21@curnvirtual.edu.co o a.eliantlm@curn.edu.co';
        resultElement.className = 'result invalid';
    }
}

function validarHex() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const resultElement = document.getElementById('hexResult');
    
    const hexRegex = /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/;
    
    if (hexRegex.test(hexInput)) {
        resultElement.textContent = '✓ Número hexadecimal válido';
        resultElement.className = 'result valid';
    } else {
        resultElement.textContent = '✗ Formato de número hexadecimal inválido. Debe ser # seguido de 3 o 6 dígitos hexadecimales (0-9, A-F)';
        resultElement.className = 'result invalid';
    }
}

function validarDecimal() {
    const decimalInput = document.getElementById('decimalInput').value.trim();
    const resultElement = document.getElementById('decimalResult');
    
    const decimalRegex = /^([0-4],\d|5,0)$/;
    
    if (decimalRegex.test(decimalInput)) {
        const valor = parseFloat(decimalInput.replace(',', '.'));
        if (valor >= 0 && valor <= 5) {
            resultElement.textContent = '✓ Número decimal válido';
            resultElement.className = 'result valid';
            return;
        }
    }
    
    resultElement.textContent = '✗ Número decimal inválido. Debe estar entre 0,0 y 5,0 con coma como separador decimal';
    resultElement.className = 'result invalid';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') validarEmail();
    });
    
    document.getElementById('hexInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') validarHex();
    });
    
    document.getElementById('decimalInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') validarDecimal();
    });
});
