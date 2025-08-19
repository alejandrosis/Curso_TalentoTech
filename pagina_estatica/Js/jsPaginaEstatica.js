// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener referencias a elementos del formulario
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    // Elementos del formulario
    const nameInput = document.getElementById('name');
    const reasonSelect = document.getElementById('reason');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    
    // Función para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Función para validar nombre (solo letras y espacios)
    function isValidName(name) {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return nameRegex.test(name) && name.trim().length >= 2;
    }
    
    // Función para mostrar error en un campo
    function showError(input, message) {
        // Remover error previo si existe
        removeError(input);
        
        // Crear elemento de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.9rem';
        errorDiv.style.marginTop = '0.5rem';
        
        // Insertar después del input
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
        
        // Cambiar estilo del input
        input.style.borderColor = '#e74c3c';
        input.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
    }
    
    // Función para remover error de un campo
    function removeError(input) {
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        
        // Restaurar estilo del input
        input.style.borderColor = '#ddd';
        input.style.boxShadow = 'none';
    }
    
    // Función para validar todos los campos
    function validateForm() {
        let isValid = true;
        
        // Validar nombre
        if (!nameInput.value.trim()) {
            showError(nameInput, 'El nombre es obligatorio');
            isValid = false;
        } else if (!isValidName(nameInput.value.trim())) {
            showError(nameInput, 'El nombre solo debe contener letras y espacios');
            isValid = false;
        } else {
            removeError(nameInput);
        }
        
        // Validar motivo de contacto
        if (!reasonSelect.value) {
            showError(reasonSelect, 'Debes seleccionar un motivo de contacto');
            isValid = false;
        } else {
            removeError(reasonSelect);
        }
        
        // Validar email
        if (!emailInput.value.trim()) {
            showError(emailInput, 'El correo electrónico es obligatorio');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Por favor, ingresa un correo electrónico válido');
            isValid = false;
        } else {
            removeError(emailInput);
        }
        
        // Validar mensaje
        if (!messageTextarea.value.trim()) {
            showError(messageTextarea, 'El mensaje es obligatorio');
            isValid = false;
        } else if (messageTextarea.value.trim().length < 10) {
            showError(messageTextarea, 'El mensaje debe tener al menos 10 caracteres');
            isValid = false;
        } else {
            removeError(messageTextarea);
        }
        
        return isValid;
    }
    
    // Validación en tiempo real para cada campo
    nameInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            if (!isValidName(this.value.trim())) {
                showError(this, 'El nombre solo debe contener letras y espacios');
            } else {
                removeError(this);
            }
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            if (!isValidEmail(this.value.trim())) {
                showError(this, 'Por favor, ingresa un correo electrónico válido');
            } else {
                removeError(this);
            }
        }
    });
    
    messageTextarea.addEventListener('blur', function() {
        if (this.value.trim() && this.value.trim().length < 10) {
            showError(this, 'El mensaje debe tener al menos 10 caracteres');
        } else if (this.value.trim().length >= 10) {
            removeError(this);
        }
    });
    
    // Manejar el envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío por defecto
        
        // Validar el formulario
        if (validateForm()) {
            // Simular envío del formulario
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Cambiar texto del botón
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simular tiempo de envío
            setTimeout(function() {
                // Ocultar formulario y mostrar mensaje de éxito
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Agregar animación al mensaje de éxito
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(20px)';
                
                setTimeout(function() {
                    successMessage.style.transition = 'all 0.5s ease';
                    successMessage.style.opacity = '1';
                    successMessage.style.transform = 'translateY(0)';
                }, 100);
                
                // Resetear formulario después de 5 segundos
                setTimeout(function() {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    successMessage.style.display = 'none';
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    
                    // Remover todos los errores
                    const errorMessages = contactForm.querySelectorAll('.error-message');
                    errorMessages.forEach(error => error.remove());
                    
                    // Restaurar estilos de inputs
                    const inputs = contactForm.querySelectorAll('input, select, textarea');
                    inputs.forEach(input => {
                        input.style.borderColor = '#ddd';
                        input.style.boxShadow = 'none';
                    });
                }, 5000);
                
            }, 2000); // Simular 2 segundos de envío
        }
    });
    
    // Efectos adicionales para mejorar la experiencia del usuario
    
    // Efecto de focus en inputs
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.style.transform = 'scale(1.02)';
            this.parentNode.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.style.transform = 'scale(1)';
        });
    });
    
    // Contador de caracteres para el textarea
    const charCounter = document.createElement('div');
    charCounter.style.textAlign = 'right';
    charCounter.style.fontSize = '0.8rem';
    charCounter.style.color = '#666';
    charCounter.style.marginTop = '0.5rem';
    messageTextarea.parentNode.appendChild(charCounter);
    
    function updateCharCounter() {
        const currentLength = messageTextarea.value.length;
        const minLength = 10;
        charCounter.textContent = `${currentLength} caracteres (mínimo ${minLength})`;
        
        if (currentLength < minLength && currentLength > 0) {
            charCounter.style.color = '#e74c3c';
        } else if (currentLength >= minLength) {
            charCounter.style.color = '#27ae60';
        } else {
            charCounter.style.color = '#666';
        }
    }
    
    messageTextarea.addEventListener('input', updateCharCounter);
    updateCharCounter(); // Inicializar contador
    
    // Animación suave para las secciones al hacer scroll
    const sections = document.querySelectorAll('section');
    
    function animateOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Inicializar animaciones
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
    });
    
    // Ejecutar animación al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar inmediatamente
    
    console.log('JavaScript cargado correctamente. Formulario listo para usar.');
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
