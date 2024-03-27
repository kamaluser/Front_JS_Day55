document.querySelector("#button").addEventListener("click", applyStyles);


function applyStyles() {
    let fontSize = document.querySelector('#number').value + 'px';
    let color = document.querySelector('#color').value;
    document.body.style.fontSize = fontSize;
    document.body.style.color = color;
}
