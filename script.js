const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const finalMessage = document.getElementById('finalMessage');

let yesClickCount = 0;

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 700);

// No → Yes trick
noBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    yesBtn.textContent = 'Yes 😉';
});

// Yes logic
yesBtn.addEventListener('click', () => {
    yesClickCount++;

    if (yesClickCount === 1) {
        yesBtn.style.transform = 'scale(1.6)';
        yesBtn.textContent = 'A big Yes — let the story begin ✨';
    } 
    else if (yesClickCount === 2) {
        yesBtn.style.display = 'none';
        finalMessage.textContent =
`In this chapter, family comes first.

With your dad visiting the UK,
our Valentine story gently pauses.

Resuming at the end of this month
or the first week of the next ❤️`;
    }
});
