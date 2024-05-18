function fun() {
    const userInput = document.getElementById('ui').value;
    const paragraph = document.getElementById('hp');
    const words = userInput.split(' ');
    const highlightedText = words.map(word => {
        if (word.length >= 8) {
            return `<span class="hl">${word}</span>`;
        }
        return word;
    }).join(' ');
    paragraph.innerHTML = highlightedText;
}
function resetHighlight() {
    document.getElementById('hp').innerHTML = '';
    document.getElementById('ui').value = '';
}
const paragraph = document.getElementById('paragraph');
const text = paragraph.textContent;
const words = text.split(' ');
const highlightedText = words.map(word => {
    if (word.length >= 8) {
        return `<span class="hl">${word}</span>`;
    }
    return word;
}).join(' ');
paragraph.innerHTML = highlightedText;