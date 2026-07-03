const inputText = document.getElementById('text-input');
const outputText = document.getElementById('text-output');
console.log(inputText, outputText);

inputText.addEventListener('input', (event) => {
    const value = event.target.value
    outputText.textContent = value;
});