function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '23/09/2025';
    if (password === correctPassword) {
        window.location.href = 'amor.html';
    } else {
        alert('Clave incorrecta, mi amor. Intenta de nuevo.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const petalsContainer = document.querySelector('.petals');
    if (!petalsContainer) {
        console.error('Petals container not found.');
        return;
    }

    // Create 20 hearts for falling effect
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petalsContainer.appendChild(petal);
    }
});