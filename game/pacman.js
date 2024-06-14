const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileSize = 20;
const tilesCount = canvas.width / tileSize;

let score = 0;
let speed = 200;
let level = 1;

// Game elements
let pacMan = { x: 1, y: 1, direction: 'right' };
const ghosts = [
    { x: tilesCount - 2, y: tilesCount - 2, direction: 'left' },
    { x: 1, y: tilesCount - 2, direction: 'up' }
];
const dots = [];
const walls = [
    { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 },
    { x: 5, y: 6 }, { x: 7, y: 6 },
    { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 },
];

// Initialize dots
for (let x = 0; x < tilesCount; x++) {
    for (let y = 0; y < tilesCount; y++) {
        if (!walls.some(wall => wall.x === x && wall.y === y) &&
            !ghosts.some(ghost => ghost.x === x && ghost.y === y) &&
            (x !== pacMan.x || y !== pacMan.y)) {
            dots.push({ x, y });
        }
    }
}

// Draw game elements
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw walls
    ctx.fillStyle = 'blue';
    walls.forEach(wall => {
        ctx.fillRect(wall.x * tileSize, wall.y * tileSize, tileSize, tileSize);
    });

    // Draw dots
    ctx.fillStyle = 'white';
    dots.forEach(dot => {
        ctx.fillRect(dot.x * tileSize + tileSize / 4, dot.y * tileSize + tileSize / 4, tileSize / 2, tileSize / 2);
    });
    
    // Draw Pac-Man
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(pacMan.x * tileSize + tileSize / 2, pacMan.y * tileSize + tileSize / 2, tileSize / 2, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacMan.x * tileSize + tileSize / 2, pacMan.y * tileSize + tileSize / 2);
    ctx.fill();
    
    // Draw ghosts
    ctx.fillStyle = 'red';
    ghosts.forEach(ghost => {
        ctx.beginPath();
        ctx.arc(ghost.x * tileSize + tileSize / 2, ghost.y * tileSize + tileSize / 2, tileSize / 2, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// Move Pac-Man
function movePacMan() {
    const { x, y } = pacMan;
    let newX = x, newY = y;
    
    switch (pacMan.direction) {
        case 'right':
            newX = (x + 1) % tilesCount;
            break;
        case 'left':
            newX = (x - 1 + tilesCount) % tilesCount;
            break;
        case 'up':
            newY = (y - 1 + tilesCount) % tilesCount;
            break;
        case 'down':
            newY = (y + 1) % tilesCount;
            break;
    }

    if (!walls.some(wall => wall.x === newX && wall.y === newY)) {
        pacMan.x = newX;
        pacMan.y = newY;
    }
}

// Move ghosts (simple AI)
function moveGhosts() {
    ghosts.forEach(ghost => {
        const directionOptions = ['right', 'left', 'up', 'down'];
        ghost.direction = directionOptions[Math.floor(Math.random() * directionOptions.length)];
        
        const { x, y } = ghost;
        let newX = x, newY = y;

        switch (ghost.direction) {
            case 'right':
                newX = (x + 1) % tilesCount;
                break;
            case 'left':
                newX = (x - 1 + tilesCount) % tilesCount;
                break;
            case 'up':
                newY = (y - 1 + tilesCount) % tilesCount;
                break;
            case 'down':
                newY = (y + 1) % tilesCount;
                break;
        }

        if (!walls.some(wall => wall.x === newX && wall.y === newY)) {
            ghost.x = newX;
            ghost.y = newY;
        }
    });
}

// Check for collisions
function checkCollisions() {
    dots.forEach((dot, index) => {
        if (dot.x === pacMan.x && dot.y === pacMan.y) {
            dots.splice(index, 1); // Remove dot
            score += 10;
            document.getElementById('score').innerText = `Score: ${score}`;
        }
    });
    
    ghosts.forEach(ghost => {
        if (pacMan.x === ghost.x && pacMan.y === ghost.y) {
            alert(`Game Over! Your score: ${score}`);
            document.location.reload();
        }
    });

    if (dots.length === 0) {
        level++;
        speed = Math.max(50, speed - 10);
        alert(`Level ${level}!`);
        initializeLevel();
    }
}

// Initialize level
function initializeLevel() {
    // Clear dots
    dots.length = 0;

    // Re-initialize dots
    for (let x = 0; x < tilesCount; x++) {
        for (let y = 0; y < tilesCount; y++) {
            if (!walls.some(wall => wall.x === x && wall.y === y) &&
                !ghosts.some(ghost => ghost.x === x && ghost.y === y) &&
                (x !== pacMan.x || y !== pacMan.y)) {
                dots.push({ x, y });
            }
        }
    }

    // Reset Pac-Man and ghosts positions
    pacMan.x = 1;
    pacMan.y = 1;
    pacMan.direction = 'right';

    ghosts[0].x = tilesCount - 2;
    ghosts[0].y = tilesCount - 2;
    ghosts[0].direction = 'left';

    if (ghosts.length > 1) {
        ghosts[1].x = 1;
        ghosts[1].y = tilesCount - 2;
        ghosts[1].direction = 'up';
    }

    drawGame();
}

// Handle keyboard input
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowRight':
            pacMan.direction = 'right';
            break;
        case 'ArrowLeft':
            pacMan.direction = 'left';
            break;
        case 'ArrowUp':
            pacMan.direction = 'up';
            break;
        case 'ArrowDown':
            pacMan.direction = 'down';
            break;
    }
});

// Game loop
function gameLoop() {
    movePacMan();
    moveGhosts();
    checkCollisions();
    drawGame();

    setTimeout(gameLoop, speed);
}

initializeLevel();
gameLoop();

// Fullscreen and Minimize buttons
const fullscreenBtn = document.getElementById('fullscreenBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const gameCanvas = document.getElementById('gameCanvas');

fullscreenBtn.addEventListener('click', () => {
    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    } else if (gameCanvas.mozRequestFullScreen) { // Firefox
        gameCanvas.mozRequestFullScreen();
    } else if (gameCanvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
        gameCanvas.webkitRequestFullscreen();
    } else if (gameCanvas.msRequestFullscreen) { // IE/Edge
        gameCanvas.msRequestFullscreen();
    }
    fullscreenBtn.style.display = 'none';
    minimizeBtn.style.display = 'inline';
});

minimizeBtn.addEventListener('click', () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
    fullscreenBtn.style.display = 'inline';
    minimizeBtn.style.display = 'none';
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.style.display = 'inline';
        minimizeBtn.style.display = 'none';
    }
});
document.addEventListener('mozfullscreenchange', () => {
    if (!document.mozFullScreenElement) {
        fullscreenBtn.style.display = 'inline';
        minimizeBtn.style.display = 'none';
    }
});
document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
        fullscreenBtn.style.display = 'inline';
        minimizeBtn.style.display = 'none';
    }
});
document.addEventListener('msfullscreenchange', () => {
    if (!document.msFullscreenElement) {
        fullscreenBtn.style.display = 'inline';
        minimizeBtn.style.display = 'none';
    }
});
