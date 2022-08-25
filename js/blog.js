const kaomojis = [
    "¯\\_| ✖ 〜 ✖ |_/¯",
    "(￢‿￢ )",
    "(o˘◡˘o)",
    "o( ❛ᴗ❛ )o",
    "(─‿‿─)",
    "(◕‿◕)",
    "(^人^)",
    "ヽ(o^ ^o)ﾉ",
    "(≧ω≦)",
    "¯\\_╏ ՞ ︿ ՞ ╏_/¯",
    "(＞﹏＜)",
]

const kaomoji_display = document.querySelector("#kaomoji");

let previous_kaomoji_index = 0;

setInterval(() => {
    let kaomoji_index = Math.round(Math.random() * (kaomojis.length - 1));
    if (previous_kaomoji_index === kaomoji_index)
        kaomoji_index = previous_kaomoji_index === 3 ? 5 : 3;

    const selected_kaomoji = kaomojis[kaomoji_index];
    kaomoji_display.innerHTML = selected_kaomoji;

    previous_kaomoji_index = kaomoji_index;
}, 1500)