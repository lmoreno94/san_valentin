const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const heartColors = ["#ff4b5c", "#ff6f91", "#ffc1cc"];
const messages = [
    "¡Feliz San Valentín! 💕",
    "No necesito flores 🌷 ni chocolates 🍫, ya tengo el mejor regalo del mundo: tú 💖. Aunque si quieres chocolates 🍬, no voy a decir que no 😉✨.",
    "Feliz San Valentín ❤️. No sé qué hice para merecerte, pero me alegra tenerte en mi vida 😊.",
    "Hoy es solo una excusa más para recordarte lo mucho que me encantas 😘. ¡Que tengas un día increíble! 🌹",
    "No necesito este día para decirte lo genial que eres, pero igual aprovecho para recordártelo 💕. Feliz San Valentín 🎉.",
    "De todas las cosas buenas que me han pasado, tú eres de las mejores 🙌. Gracias por ser tú ❤️.",
    "No soy muy fan de los clichés 🙄, pero contigo todo lo típico se siente especial 😏. Feliz San Valentín ❤️.",
    "Hoy me tocó pensar en cosas que me gustan, y sorpresa, tú sigues en la cima de la lista 😍.",
    "No soy de los que celebran todo 🤷‍♂️, pero si se trata de ti, cualquier excusa es buena 😉. Feliz San Valentín 💖.",
    "Si este día es sobre estar con alguien especial, entonces creo que me gané la lotería contigo 🎰✨.",
    "Eres de esas personas que hacen que días normales como hoy sean un poco más especiales 😌. Feliz San Valentín 💞.",
    "Tener a alguien como tú en mi vida hace que cualquier día sea más llevadero 😎. Feliz San Valentín ❤️.",
    "Hoy solo quiero recordarte que haces mis días mucho mejores 🌞. Feliz San Valentín ❤️.",
    "Eres como mi café de la mañana: necesario y me llenas de energía ☕❤️. ¡Feliz San Valentín!",
    "No soy muy bueno con las palabras, pero creo que tú ya sabes cuánto me importas 💬💕. ¡Que tengas un gran día!",
    "¿Sabías que tienes el poder de alegrar cualquier día? ✨ Bueno, hoy no es la excepción. Feliz San Valentín ❤️.",
    "Eres esa persona que hace que todo tenga más sentido 💡. Gracias por estar ahí. Feliz San Valentín 💖.",
    "Hoy celebro que te tengo en mi vida 🎉. No necesito más excusas para ser feliz contigo ❤️.",
    "El día está bonito, pero no tanto como tú 😉. Feliz San Valentín 🌹.",
    "Dicen que nadie es perfecto, pero tú haces que dude de eso 🤔❤️. Feliz San Valentín.",
    "Eres la razón por la que hoy se siente un poco más especial 🌟. Gracias por ser tú 💕.",
    "Si cada día tiene un detalle bonito, tú eres el de todos mis días 🌸. Feliz San Valentín ❤️.",
];
let currentMessageIndex = 0;

class Heart {
    constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.x - this.size,
            this.y + this.size / 3,
            this.x,
            this.y + this.size
        );
        ctx.bezierCurveTo(
            this.x + this.size,
            this.y + this.size / 3,
            this.x + this.size / 2,
            this.y - this.size / 2,
            this.x,
            this.y
        );
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }
}

function createHearts() {
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 15 + 5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 2 + 1;
        const color = heartColors[Math.floor(Math.random() * heartColors.length)];
        hearts.push(new Heart(x, y, size, speed, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

function changeMessage() {
    const messageElement = document.getElementById("message");
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Cambia el índice y reinicia al inicio
    messageElement.innerText = messages[currentMessageIndex];
}

document.getElementById("noButton").addEventListener("mouseenter", (event) => {
    const button = event.target;
    const card = document.querySelector(".card");

    // Obtener las dimensiones de la carta
    const cardRect = card.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Generar nuevas posiciones aleatorias dentro de la carta
    const randomX = Math.random() * (cardRect.width - buttonWidth);
    const randomY = Math.random() * (cardRect.height - buttonHeight);

    // Aplicar las nuevas posiciones al botón
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Función para crear fuegos artificiales
function launchFireworks() {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fireworksCanvasWrapper.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const particles = [];
    const colors = ["#ff4b5c", "#ff6f91", "#ffc1cc", "#ffd700", "#ffa07a"];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 1;
            this.speedX = Math.random() * 5 - 2.5;
            this.speedY = Math.random() * 5 - 2.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.life = 100;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
        }

        draw() {
            ctx.globalAlpha = this.life / 100;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
    }

    function explode(x, y) {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(x, y));
        }
    }

    canvas.addEventListener("click", (e) => explode(e.clientX, e.clientY));
    explode(canvas.width / 2, canvas.height / 2);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            fireworksCanvasWrapper.removeChild(canvas);
        }
    }

    animate();
}

const fireworksCanvasWrapper = document.getElementById(
    "fireworksCanvasWrapper"
);

// Función para crear fuegos artificiales
function launchFireworks() {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fireworksCanvasWrapper.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const particles = [];
    const colors = ["#ff4b5c", "#ff6f91", "#ffc1cc", "#ffd700", "#ffa07a"];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 1;
            this.speedX = Math.random() * 5 - 2.5;
            this.speedY = Math.random() * 5 - 2.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.life = 100;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
        }

        draw() {
            ctx.globalAlpha = this.life / 100;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
    }

    function explode(x, y) {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(x, y));
        }
    }

    canvas.addEventListener("click", (e) => explode(e.clientX, e.clientY));
    explode(canvas.width / 2, canvas.height / 2);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            fireworksCanvasWrapper.removeChild(canvas);
        }
    }

    animate();
}

createHearts();
animate();

document.getElementById("yesButton").addEventListener("click", () => {
    document.getElementById("message_si").innerText =
        "¡Gracias! 🌹 ❤️ Me haces muy feliz.";

    const noButton = document.getElementById("noButton");

    // Reiniciar posición del botón "No"
    noButton.style.position = "initial";
    noButton.style.left = "0";
    noButton.style.top = "0";

    launchFireworks();
    changeMessage();
});

document.getElementById("noButton").addEventListener("click", () => {
    document.getElementById("message").innerText =
        "Oh... 😢 Espero que cambies de opinión.";

    document.getElementById("message_si").innerText =
        "Oh... 😢 Espero que cambies de opinión.";
});
