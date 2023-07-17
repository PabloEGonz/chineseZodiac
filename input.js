import knowYourZodiac from "./modules/knowZodiac.js";
const input = document.getElementById("input-year");
const button = document.querySelector('#submitbutton');

button.addEventListener("click", knowYourZodiac);

//event listener to click the submitbutton on enter
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        button.click()
    }
});

