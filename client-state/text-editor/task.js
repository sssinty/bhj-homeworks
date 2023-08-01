const entryField = document.querySelector('#editor');
const deleteText = document.querySelector('.delete');
const saveText = localStorage.getItem('text');

if(saveText != null) {
    entryField.value = saveText;
}

entryField.addEventListener('change', () => {
    localStorage.setItem('text', entryField.value);
});


deleteText.addEventListener('click', () => {
    localStorage.removeItem('text');
});

