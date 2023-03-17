let container = document.getElementById('container');

container.addEventListener('click', e => {
    if (e.target.className == 'remove-button')
        e.target.parentElement.remove();
})