const quotes = [
    ["I did not attend his funeral,", "but I sent a nice letter", "saying I approved of it."],
    ["Accept who you are. Unless", "you're a serial killer."],
    ["When life gives you lemons,", "squirt someone in the eye."],
    ["If a book about failures", "doesn't sell, is it a success?"],
    ["If you're too open-minded;", "your brains will fall out."],
    ["Never miss a good chance to", "shut up."],
    ["Taking naps sounds so", "childish. I prefer to call them", "horizontal life pauses."],
    ["I love you more than coffee", "but not always before coffee."],
    ["Always go to other people's", "funerals, otherwise", "they won't come to yours."],
    ["Every man is guilty of all", "the good he did not do."],
    ["The world is a globe.", "The farther you sail,", "the closer to home you are."],
    ["The early bird gets the worm,", "but the second mouse gets the cheese."],
    ["I intend to live forever.", "So far, so good."],
    ["It does not matter whether", "you win or lose, what matters is", "whether I win or lose!"],
    ["A Penny Saved is a Penny Earned"],
    ["Some days I amaze myself. Other days,", "I put my keys in the fridge."],
    ["Don't take life too seriously.", "You'll never get out of it alive."],
    ["If you fall, I'll be there.", "- The floor, 1982."],
    ["If you think you are", "too small to make a difference,", "try sleeping with a mosquito."],
    ["A day without sunshine is like,", "you know, night."],
]

let i = Math.ceil(Math.random() * 20);
let current_ghost_quote = "";

function setRandomGhostQuote() {
    const ghostQuoteWrapper = document.querySelector(".ghost-quote .letters");
    if (i > 40) i = 0;
    const random = i++ % 19;
    
    const random_quote = quotes[random];
    
    let quote = "";
    current_ghost_quote = "";    

    random_quote.forEach((quote_fragment) => {
        current_ghost_quote += quote_fragment.trim() + " ";
        quote_fragment = quote_fragment.replace(/\S/g, "<span class='letter' style='transform: scale(0);'>$&</span>");
        quote += quote_fragment + '<br>';
    })

    current_ghost_quote = current_ghost_quote.trim();

    ghostQuoteWrapper.innerHTML = quote;
}

const animateGhost = () => {
    setRandomGhostQuote();
    anime.timeline()
        .add({
            targets: '.ghost-quote .letter',
            scale: [0, 1],
            duration: 900,
            delay: (el, i) => 45 * (i + 1),
        })
        .add({
            targets: '.ghost-quote .letter',
            opacity: [1, 0],
            duration: 900,
            easing: "easeOutExpo",
            delay: (el, i) => 45 * (current_ghost_quote.length - i + 1) + 12000,
        })
    }

animateGhost();

setInterval(() => {
    animateGhost();
}, 20000)
