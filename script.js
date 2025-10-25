
let currentTheme = 'pink';
let musicPlaying = false;

// Expressions array
const expressions = [
    '( ◡ ω ◡ )',
    '(◕‿◕)',
    '(´｡• ᵕ •｡`)',
    '(✿◠‿◠)',
    '( ´ ∀ ` )',
    '(◡ ‿ ◡)',
    '(˘▾˘)~♪',
    '(◠‿◠✿)'
];

// Quotes array
const quotes = [
    "You're like a cupcake - sweet, cute, and making everyone smile! 🧁✨",
    "Every day with you is like Valentine's Day! 💕",
    "You shine brighter than all the stars in the sky! ⭐✨",
    "Your smile is the magic that can make the day beautiful! 😊💖",
    "You are a true princess with a heart of gold! 👑💛",
    "Like cherry blossoms, you bring happiness! 🌸",
    "You are a unicorn in a world full of ordinary horses! 🦄💫"
];

// Mood messages
const moodMessages = {
    happy: "Wow, how wonderful! Let's spread the happiness! 😊✨",
    excited: "Your energy is amazing! Keep shining! 🤩⚡",
    cute: "Aww you are the cutest! 🥰💕",
    dreamy: "Sweet dreams, okay? Hope they come true! 😌💭",
    lovely: "Love is in the air! Spread the love! 😍💖"
};

// Change expression
function changeExpression() {
    const face = document.getElementById('mainFace');
    const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];
    face.textContent = randomExpression;

    // Add bounce effect
    face.style.animation = 'none';
    setTimeout(() => {
        face.style.animation = 'bounceIn 0.8s ease-out';
    }, 10);
}

// Set mood
function setMood(mood) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.mood-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active to clicked button
    event.target.classList.add('active');

    // Show mood message
    const messageDiv = document.getElementById('moodMessage');
    messageDiv.textContent = moodMessages[mood];
    messageDiv.style.animation = 'bounceIn 0.5s ease-out';

    // Change quote based on mood
    setTimeout(() => {
        const quoteBox = document.getElementById('quoteBox');
        quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }, 500);
}

// Create sparkles
function createSparkles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Emoji rain
function emojiRain() {
    const emojis = ['💖', '💕', '💗', '💝', '🌸', '🦄', '✨', '🌈', '🎀', '🧸'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji-rain';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }, i * 100);
    }
}

// Heart explosion
function heartExplosion() {
    const hearts = ['💖', '💕', '💗', '💝', '💘'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            const angle = (i / 25) * 360;
            const distance = 200;
            const x = Math.cos(angle * Math.PI / 180) * distance;
            const y = Math.sin(angle * Math.PI / 180) * distance;

            heart.style.animation = `heartExplode 2s ease-out forwards`;
            heart.style.setProperty('--x', x + 'px');
            heart.style.setProperty('--y', y + 'px');

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 50);
    }
}

// Add new gentle animations
const newStyle = document.createElement('style');
newStyle.textContent = `
            @keyframes gentleFloat {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes sweetFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(180deg);
                    opacity: 0;
                }
            }
            
            @keyframes happyBounce {
                0%, 100% { transform: scale(1); }
                25% { transform: scale(1.1) rotate(-5deg); }
                50% { transform: scale(1.2); }
                75% { transform: scale(1.1) rotate(5deg); }
            }
            
            @keyframes gentlePop {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            
            @keyframes gentleFade {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
document.head.appendChild(newStyle);

// Surprise me function (updated)
function surpriseMe() {
    const surprises = [
        () => {
            showCuteMessage('🎉✨ Surprise! You are the brightest star! ✨🎉');
            gentleSparkles();
        },
        () => {
            changeExpression();
            showCuteMessage('😊💕 New cute face unlocked! 💕😊');
        },
        () => {
            floatingHearts();
            showCuteMessage('💖🌈 Love is everywhere! 🌈💖');
        },
        () => {
            sweetAnimation();
            showCuteMessage('🍭🌸 Sweet surprise for sweet you! 🌸🍭');
        },
        () => {
            happyBounce();
            showCuteMessage('🎊😄 Happy dance time! 😄🎊');
        }
    ];

    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    randomSurprise();
}

// Start activity
function startActivity(type) {
    const activities = {
        magical: () => {
            showCuteMessage('🌟✨ The magic begins! Feel the warmth and happiness! ✨🌟');
            gentleSparkles();
        },
        kawaii: () => {
            showCuteMessage("🥰💕 Kawaii power activated! You're even cuter now! 💕🥰");
            floatingHearts();
        },
        sweet: () => {
            showCuteMessage('🍰🌸 Sweet dreams coming true! Life is as sweet as you! 🌸🍰');
            sweetAnimation();
        }
    };

    activities[type]();
}

// New gentle effects
function cuteEffects() {
    gentleSparkles();
    setTimeout(() => floatingHearts(), 500);
}

function happyTime() {
    showCuteMessage('😊💛 Happy time! Hope your day is full of smiles! 💛😊');
    happyBounce();
}

function gentleSparkles() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = ['✨', '💫', '🌟'][Math.floor(Math.random() * 3)];
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.animation = 'sparkle 3s ease-in-out infinite';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }, i * 200);
    }
}

function floatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝'];

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.bottom = '-50px';
            heart.style.fontSize = '25px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '100';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.animation = 'gentleFloat 4s ease-out forwards';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 300);
    }
}

function sweetAnimation() {
    const sweets = ['🍰', '🧁', '🍭', '🍪', '🎂'];

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sweet = document.createElement('div');
            sweet.style.position = 'fixed';
            sweet.style.left = Math.random() * window.innerWidth + 'px';
            sweet.style.top = '-50px';
            sweet.style.fontSize = '30px';
            sweet.style.pointerEvents = 'none';
            sweet.style.zIndex = '100';
            sweet.textContent = sweets[Math.floor(Math.random() * sweets.length)];
            sweet.style.animation = 'sweetFall 3s ease-in-out forwards';

            document.body.appendChild(sweet);

            setTimeout(() => {
                sweet.remove();
            }, 3000);
        }, i * 400);
    }
}

function happyBounce() {
    const mainFace = document.getElementById('mainFace');
    mainFace.style.animation = 'happyBounce 1s ease-in-out';
    setTimeout(() => {
        mainFace.style.animation = '';
    }, 1000);
}

function showCuteMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '30%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'rgba(255, 255, 255, 0.95)';
    messageDiv.style.padding = '25px 35px';
    messageDiv.style.borderRadius = '20px';
    messageDiv.style.fontSize = '18px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.boxShadow = '0 10px 30px rgba(255, 105, 180, 0.3)';
    messageDiv.style.border = '3px solid #ff69b4';
    messageDiv.style.animation = 'gentlePop 0.5s ease-out';
    messageDiv.textContent = message;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.animation = 'gentleFade 0.5s ease-in forwards';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 3000);
}

// Change theme
function changeTheme(theme) {
    const themes = {
        pink: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        mint: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        peach: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        purple: 'linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)'
    };

    document.body.style.background = themes[theme];
    currentTheme = theme;
}

// Toggle music (placeholder)
function toggleMusic() {
    musicPlaying = !musicPlaying;
    const btn = document.querySelector('.music-player button');
    btn.textContent = musicPlaying ? '🎵 Playing...' : '🎵 Music';

    if (musicPlaying) {
        // Add some visual music effect
        setInterval(() => {
            if (musicPlaying) {
                createSparkles();
            }
        }, 2000);
    }
}

// Auto change quotes
setInterval(() => {
    const quoteBox = document.getElementById('quoteBox');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
}, 10000);

// Auto change expression
setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance
        changeExpression();
    }
}, 5000);

// Add click sparkles
document.addEventListener('click', function (e) {
    if (Math.random() < 0.7) { // 70% chance
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
});

// Welcome animation
window.addEventListener('load', function () {
    setTimeout(() => {
        createSparkles();
    }, 1000);

    setTimeout(() => {
        emojiRain();
    }, 2000);
});

// Add animation delays to cards
const cards = document.querySelectorAll('.cute-card');
cards.forEach((card, index) => {
    card.style.animationDelay = (index * 0.2) + 's';
});