const nameInput = document.getElementById('js-name-input');
const nameOutput = document.getElementById('js-name-output');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});