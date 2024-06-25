const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 200;

// Crear estrellas
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        velocity: Math.random() * 0.5
    });
}

// Función para animar las estrellas
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.x += star.velocity;
        star.y += star.velocity;

        // Reposicionar las estrellas al llegar al borde
        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;

        // Dibujar estrella
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    });
    requestAnimationFrame(animateStars);
}

// Ajustar el canvas al redimensionar la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
    });
});

animateStars();
