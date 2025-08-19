// Funciones individuales para cada operación
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return null; // Control de error para división por cero
    }
    return a / b;
}

// Función principal que se llama al hacer clic en "Calcular"
function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero1) || isNaN(numero2)) {
        mostrarResultadoConAnimacion('<div class="error-message">❌ Por favor, ingresa números válidos</div>');
        return;
    }

    if (operacion === '') {
        mostrarResultadoConAnimacion('<div class="error-message">❌ Por favor, selecciona una operación</div>');
        return;
    }

    let resultado;
    let simbolo;

    switch (operacion) {
        case 'suma':
            resultado = sumar(numero1, numero2);
            simbolo = '+';
            break;
        case 'resta':
            resultado = restar(numero1, numero2);
            simbolo = '-';
            break;
        case 'multiplicacion':
            resultado = multiplicar(numero1, numero2);
            simbolo = '×';
            break;
        case 'division':
            resultado = dividir(numero1, numero2);
            if (resultado === null) {
                mostrarResultadoConAnimacion('<div class="error-message">❌ No se puede dividir por cero</div>');
                return;
            }
            simbolo = '÷';
            break;
        default:
            mostrarResultadoConAnimacion('<div class="error-message">❌ Operación no válida</div>');
            return;
    }

    mostrarResultadoConAnimacion(`
        <div class="result-text">${numero1} ${simbolo} ${numero2} =</div>
        <div class="result-number">${resultado}</div>
    `);

    // Pregunta para hacer un nuevo cálculo o utilizar el mismo
    setTimeout(() => {
        if (confirm('¿Deseas realizar un nuevo cálculo?')) {
            if (confirm('¿Deseas utilizar diferentes números?')) {
            limpiar();
            }
        }
    }, 500);    // Tiempo de espera 0.5 segundos
}

// Función para limpiar los campos
function limpiar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('operacion').value = '';
    document.getElementById('resultado').innerHTML = '<div class="result-text">El resultado aparecerá aquí</div>';
}

// Permitir presionar Enter para calcular
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcular();
    }
});

// Efecto visual para mostrar resultado
function mostrarResultadoConAnimacion(contenido) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.transform = 'scale(0.8)';
    resultadoDiv.style.opacity = '0.5';

    setTimeout(() => {
        resultadoDiv.innerHTML = contenido;
        resultadoDiv.style.transform = 'scale(1)';
        resultadoDiv.style.opacity = '1';
    }, 150);
}

document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Mostrar u ocultar el botón basado en el scroll
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) { // Muestra el botón después de 100px de scroll
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Desplazamiento suave al hacer clic en el botón
    backToTopBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Mostrar u ocultar el botón basado en el scroll
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) { // Muestra el botón después de 100px de scroll
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Desplazamiento suave al hacer clic en el botón
    backToTopBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
