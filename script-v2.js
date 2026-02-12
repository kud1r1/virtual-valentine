const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const finalMessage = document.getElementById('finalMessage');

let yesClickCount = 0;

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '♥';  // <-- text heart (CSS colour will apply)

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

    const colors = ['#ff4d6d', '#F4C2C2', '#c77dff'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}


setInterval(createHeart, 700);

// No → Yes trick
noBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    yesBtn.textContent = 'Yes 😉';
});

// Yes Flow
yesBtn.addEventListener('click', () => {
    yesClickCount++;

    // 🔥 Hide No button immediately when Yes is clicked
    noBtn.style.display = 'none';

    if (yesClickCount === 1) {
        yesBtn.style.transform = 'scale(1.6)';
        yesBtn.textContent = 'A big Yes — let the story begin ✨';
    } 
    else if (yesClickCount === 2) {
        yesBtn.style.display = 'none';

        finalMessage.textContent =
`In this chapter, family comes first.

With your dad visiting the UK,
our Valentine story pauses briefly.
I’ve planned something productive and exciting—
definitely worth the wait for our next date.

The next chapter opens
towards the end of this month
or the first week of the next ❤️
once my Valentine confirms the date.`;

        // window.scrollTo({
        //     top: document.body.scrollHeight,
        //     behavior: 'smooth'
        // });
    }
});
