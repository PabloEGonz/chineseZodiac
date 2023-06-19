import renderPopup from "./renderPopup.js";
let day = document.getElementById("input-day");
let month = document.getElementById("input-month");
let year = document.getElementById("input-year");
const modalWindow = document.querySelector('.modal-dialog');

// const date = new ZodiacSign('1 April 2001 00:12:00 GMT').chinese;
// console.log(date);

const knowYourZodiac = () => {
    // Takes the input year and stores it in the variable 
    if (day.value.trim() && month.valuetrim() & year.valuetrim()) {
        const zodiac = new ZodiacSign(`${day.value} ${month.value} ${year.value} 00:12:00 GMT`).chinese;
        if (zodiac.includes('Dog')) {
            renderPopup(0, zodiac);
        }
        else if (zodiac.includes('Dragon')) {
            renderPopup(1, zodiac);
        }
        else if (zodiac.includes('Goat')) {
            renderPopup(2, zodiac);
        }
        else if (zodiac.includes('Horse')) {
            renderPopup(3, zodiac);
        }
        else if (zodiac.includes('Monkey')) {
            renderPopup(4, zodiac);
        }
        else if (zodiac.includes('Ox')) {
            renderPopup(5, zodiac);
        }
        else if (zodiac.includes('Pig')) {
            renderPopup(6, zodiac);
        }
        else if (zodiac.includes('Rabbit')) {
            renderPopup(7, zodiac);
        }
        else if (zodiac.includes('Rat')) {
            renderPopup(8, zodiac);
        }
        else if (zodiac.includes('Rooster')) {
            renderPopup(9, zodiac);
        }
        else if (zodiac.includes('Snake')) {
            renderPopup(10, zodiac);
        }
        else if (zodiac.includes('Tiger')) {
            renderPopup(11, zodiac);
        }
        else {
            renderPopup(12);
        }
        // input.value = '';
    }
    modalWindow.innerHTML = ' <h1> You need to fill the required </h1>'
}

export default knowYourZodiac;