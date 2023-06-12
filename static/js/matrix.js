// configuration settings
const fontSize = 14;
const color = "hsl(194, 94%, 75%)"; // color of characters
const bgcolor = "rgba(31, 32, 41, 0.1)"; // background color
const rain_randomness = 0.97; // randomness of text coloumns appearing

const symbols = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";

const content_div = document.querySelector("section.home-content");
const canvas = document.querySelector("canvas#matrix-canvas");

function setCanvasDimensions() {
    canvas.width = content_div.clientWidth - 20; // -20 for padding
    canvas.height = 300;
}

const ctx = canvas.getContext("2d");

class Character {
    constructor(x, y, fontSize) {
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
    }
    
    draw(ctx, canvasHeight) {
        const char = symbols.charAt(Math.floor(Math.random() * symbols.length));
        ctx.fillText(char, this.x * this.fontSize, this.y * this.fontSize);
        
        if (this.y * this.fontSize > canvasHeight && Math.random() > rain_randomness) {
            this.y = 0;
        } else {
            this.y++;
        }
    }
}

const letters = [];

function populateLetters(fontSize) {
    letters.length = 0; // clearing the array
    
    const col_count = Math.ceil(canvas.width / fontSize);
    for (let i = 0; i < col_count; i++) {
        letters.push(
            new Character(i, Math.floor(canvas.height / fontSize) + 5, fontSize)
        );
    }
}

function animate() {
    ctx.fillStyle = bgcolor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = color;
    ctx.textAlight = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${fontSize}px monospace`;
    
    letters.forEach(letter => {
        letter.draw(ctx, canvas.height);
    }); 
}

let prevTimeStamp = 0;
let timer = 0;
const fps = 15;

function runAnimation(timestamp) {
    if (timestamp == null) timestamp = 0;
    
    const delta = timestamp - prevTimeStamp;
    prevTimeStamp = timestamp;
    
    if (timer >= 1000 / fps) {
        timer = 0;
        animate(); 
    } else {
        timer += delta;
    }
    
    requestAnimationFrame(runAnimation);
}


function initAnimation() {
    setCanvasDimensions();
    populateLetters(fontSize);
}

window.addEventListener("resize", initAnimation);

initAnimation();
runAnimation();