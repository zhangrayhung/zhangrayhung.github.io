
// Helper function to get the current season
function getSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) {
        return 'spring'; // Mar, Apr, May
    } else if (month >= 5 && month <= 7) {
        return 'summer'; // Jun, Jul, Aug
    } else if (month >= 8 && month <= 10) {
        return 'autumn'; // Sep, Oct, Nov
    } else {
        return 'winter'; // Dec, Jan, Feb
    }
}

// Function to create a falling item
function createFallingItem(season) {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    item.style.position = 'fixed';
    item.style.top = '-10px';
    item.style.left = Math.random() * window.innerWidth + 'px';
    item.style.fontSize = Math.random() * 20 + 10 + 'px';
    item.style.opacity = Math.random();
    item.style.zIndex = 9999;
    item.style.pointerEvents = 'none';

    const animationDuration = Math.random() * 5 + 5; // 5 to 10 seconds
    item.style.animation = `fall ${animationDuration}s linear infinite`;


    switch (season) {
        case 'spring':
            item.innerHTML = '🌸';
            break;
        case 'summer':
            item.innerHTML = '💧';
            break;
        case 'autumn':
            item.innerHTML = '🍂';
            break;
        case 'winter':
            item.innerHTML = '❄️';
            break;
    }

    document.body.appendChild(item);

    // Remove item after it falls
    setTimeout(() => {
        item.remove();
    }, animationDuration * 1000);
}

// Function to start the animation
function startSeasonalAnimation() {
    const season = getSeason();

    // Add keyframes animation to the head
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    setInterval(() => {
        createFallingItem(season);
    }, 500);
}

// Start the animation when the page loads
window.addEventListener('load', startSeasonalAnimation);
