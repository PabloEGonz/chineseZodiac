import zodiacs from "./zodiacInfo.js"
const container = document.querySelector('.zodiacs');

const render = (id) => {
    container.classList.add('show');
    container.innerHTML = `<h1 class="display-3">${zodiacs[id].title}</h1>
<h3 class="display-6">${zodiacs[id].intro}</h3>
<div class="lead m-5 px-5">${zodiacs[id].description}</div>
<div class="pic"><img class="rounded" loading="lazy" src="${zodiacs[id].image}" /></div>
<h3><a id="return">Go Back</a></h3>`;
    const close = document.querySelector('#return');
    close.addEventListener('click', () => container.classList.remove('show'));
    document.querySelector('.btn-close').click();
}
export default render;
