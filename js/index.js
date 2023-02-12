const quotes = [
    ["", "Accept who you are. Unless", "you're a serial killer."],
    ["", "When life gives you lemons,", "squirt someone in the eye."],
    ["", "If a book about failures", "doesn't sell, is it a success?"],
    ["", "If you're too open-minded;", "your brains will fall out."],
    ["", "Never miss a", "good chance to shut up."],
    ["", "I intend to live forever.", "So far, so good."],
    ["", "A Penny Saved", "is a Penny Earned"],
    ["", "If you fall, I'll be there.", "- The floor, 1982."],
    ["", "A day without sunshine is like,", "you know, night."],
    ["", "I love you more than coffee", "but not always before coffee."],
    ["", "Every man is guilty of all", "the good he did not do."],
]

const matrix_container = document.getElementById("quote");
const init_matrix_text = "!function(n,e){'object'==typeof exports&&'undefined'!=typeof module?module.exports=e():'function'==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){'use strict';var n={update:null,begin:";

function computeLetterWidth(container_element) {
    const computed_styles = window.getComputedStyle(container_element);
    const dummy_el = document.createElement(container_element.tagName);
    const span_el = document.createElement("span");

    Array.from(computed_styles).forEach(key => {
        dummy_el.style
            .setProperty(key, computed_styles.getPropertyValue(key),'important');
    });

    span_el.innerText = "x";

    dummy_el.appendChild(span_el);
    document.body.appendChild(dummy_el);

    const width = span_el.getBoundingClientRect().width;

    document.body.removeChild(dummy_el);
    console.log(width);
    return width;
}

function replaceSubString(original_text, replace_text, index) {
    return original_text.substring(0, index) + replace_text + original_text.substring(index + replace_text.length);
}

function initializeMatrix(matrix_container, rows = 1) {
    matrix_container.classList.remove('quote-letter-fix');

    const letter_width = computeLetterWidth(matrix_container);
    const container_width = matrix_container.clientWidth;
    const letter_count = Math.floor(container_width / letter_width);
    let matrix_text = "";
    const matrix = [];
    let matrix_style = "";
    
    matrix_container.innerHTML = "";
    matrix_container.style.setProperty("--quote-letter-count", letter_count)
    matrix_container.classList.add('quote-letter-fit')

    for (i = 0; i < letter_count * rows; i++){
        const span = document.createElement("span");
        matrix.push(span);
        matrix_container.appendChild(span);
        matrix_text += init_matrix_text[i % init_matrix_text.length];
        matrix_style += "B";
    }

    return {
        matrix: [matrix, matrix_style],
        matrix_text
    }
}

function updateMatrixText(matrix, matrix_text, rows = 1, text_lines) {
    const row_width = matrix[0].length / rows;
    const row_center_pos = Math.floor(row_width / 2);

    matrix[1] = "B".repeat(matrix[1].length);

    for (i = 0; i < text_lines.length; i++) {
        const line_half_size = Math.floor(text_lines[i].length / 2);
        const row_start_pos = row_center_pos - line_half_size;
        const start_index = row_width * i + row_start_pos;

        matrix_text = replaceSubString(matrix_text, text_lines[i], start_index);
        matrix[1] = replaceSubString(matrix[1], "F".repeat(text_lines[i].length), start_index);
    }

    return matrix_text;
}

function updateMatrixData(current_state, required_state) {
    let updated_state = current_state;
    let new_state = ""

    if (current_state === required_state) {
        return [current_state, true];
    }

    for (let i = 0; i < required_state.length; i++) {
        if (updated_state[i] === required_state[i]) {
            new_state += current_state[i];
        } else {
            const new_code = (updated_state.charCodeAt(i) + 1 - 32) % 94 + 32;
            new_state += String.fromCharCode(new_code);
            updated_state = new_state + updated_state.substring(new_state.length);
        }
    }

    if (current_state === required_state) {
        return [current_state, true];
    }

    return [new_state, false];
}

function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

async function renderQuoteText(matrix, matrix_text, new_matrix_text = "", no_animation = false) {
    if (no_animation) {
        for (i = 0; i < matrix_text.length; i++){
            matrix[0][i].className = matrix[1][i] === "B" ? "quote-background-char" : "quote-foreground-char";
            matrix[0][i].innerText = matrix_text[i];
        }

        return;
    }
    
    let done = false;
    let current_state = matrix_text;

    const progressMatrix = async () => {
        [current_state, done] = updateMatrixData(current_state, new_matrix_text);

        for (i = 0; i < current_state.length; i++){
            matrix[0][i].className = matrix[1][i] === "B" ? "quote-background-char" : "quote-foreground-char";
            matrix[0][i].innerText = current_state[i];
        }

        await sleep(20);
        if (!done) window.requestAnimationFrame(progressMatrix);
    }

    window.requestAnimationFrame(progressMatrix);
}

async function animateQuotes(matrix, matrix_text, line_count) {
    const random = random_quote_index++ % (quotes.length - 1);
    const random_quote = quotes[random];

    matrix_text_new = updateMatrixText(matrix, matrix_text, line_count, random_quote);
    await renderQuoteText(matrix, matrix_text, matrix_text_new, false);
    return [matrix, matrix_text_new];
}

let random_quote_index = Math.ceil(Math.random() * 14);
let current_random_quote = "";
let run_animation = true;
let {matrix, matrix_text} = initializeMatrix(matrix_container, 4);
let previous_width = window.innerWidth;

renderQuoteText(matrix, matrix_text, "", true);

async function runQuotesAnimation() {
    while (run_animation) {
        [matrix, matrix_text] = await animateQuotes(matrix, matrix_text, 4);
        await sleep(30000);
    }
}

window.onresize = async () => {
    if (window.innerWidth === previous_width) return;

    const new_matrix_data = initializeMatrix(matrix_container, 4);
    matrix = new_matrix_data.matrix;
    matrix_text = new_matrix_data.matrix_text;

    renderQuoteText(matrix, matrix_text, "", true);
    previous_width = window.innerWidth;
}

runQuotesAnimation()