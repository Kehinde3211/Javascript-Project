const inputText = document.getElementById('text-input');
const outputText = document.getElementById('text-output');

inputText.addEventListener = ('change', (event) => {
    const value = event.target.value;
    outputText.textContent = value;
});