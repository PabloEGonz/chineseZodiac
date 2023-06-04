import zodiacs from "./zodiacInfo.js"
const container = document.querySelector('.zodiacs');

const render = (id) => {
    console.log(id);
container.innerHTML = `<h1 class="display-3">${zodiacs[id].title}</h1>
<h3 class="display-6">${zodiacs[id].intro}</h3>
<div class="lead m-5 px-5">${zodiacs[id].description}</div>
<div class="pic"><img class="rounded" loading="lazy" src="${zodiacs[id].image}" /></div>
<h3><a href="/index.html">Go Back</a></h3>`;
}
export default render;
