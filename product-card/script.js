const container = document.querySelector('.container');
const scent1 = document.querySelector('.scent-1');
const scent2 = document.querySelector('.scent-2');

scent2.addEventListener('click', () => {
    container.classList.toggle('change');
});