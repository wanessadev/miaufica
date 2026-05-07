// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Novos elementos para a surpresa
const coupleImg = document.getElementById("couple-img"); // Adicione este ID na <img> dos bonecos
const specialBtn = document.getElementById("special-btn"); // Adicione este ID no seu novo botão

let yesScale = 1;

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Lógica unificada para o botão NÃO fugir e o SIM crescer
noBtn.addEventListener("mouseover", () => {
    // 1. O botão SIM cresce
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;

    // 2. O botão NÃO foge
    const distance = Math.random() * (200 - 100) + 100;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Quando o SIM é clicado (O grande momento!)
yesBtn.addEventListener("click", () => {
    title.textContent = "Ebaaaa! Te amo, baby! ♡";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});

