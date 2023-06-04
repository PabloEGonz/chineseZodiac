import twelveZod from "./popup.js";
import render from "./render.js";
const modalWindow = document.querySelector('.modal-dialog');

const renderPopup = (id) => {
    modalWindow.innerHTML = `<h1 id="year">${twelveZod[id].year}</h1>
    <button
      type="button"
      class="btn-close position-absolute align-self-end"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <p class="lead "id="display">${twelveZod[id].descr}</p>
    <div id="links">${twelveZod[id].link}</div>`
    const link = document.querySelector('#links');
    link.addEventListener('click', () => {
      render(id);
    })
}

export default renderPopup;