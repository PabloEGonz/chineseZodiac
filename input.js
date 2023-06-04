let rat = [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020];
let ox = [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021];
let tiger = [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022];
let rabbit = [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023];
let dragon = [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024];
let snake = [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025];
let horse = [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026];
let goat = [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027];
let monkey = [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028];
let rooster = [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029];
let dog = [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030];
let pig = [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031];

import render from "./modules/render.js";
import renderPopup from "./modules/renderPopup.js";

// render(2);


let input = document.getElementById("inputyear");

const knowYourZodiac = () => {
    // Takes the input year and stores it in the variable 
    const zodiac = parseInt(input.value);

    if (dog.includes(zodiac) === true) {
        renderPopup(0);
    }
    else if (dragon.includes(zodiac) === true) {
        renderPopup(1);
    }
    else if (goat.includes(zodiac) === true) {
        renderPopup(2);
    }
    else if (horse.includes(zodiac) === true) {
        renderPopup(3);
    }
    else if (monkey.includes(zodiac) === true) {
        renderPopup(4);
    }
    else if (ox.includes(zodiac) === true) {
        renderPopup(5);
    }
    else if (pig.includes(zodiac) === true) {
        renderPopup(6);
    }
    else if (rabbit.includes(zodiac) === true) {
        renderPopup(7);
    }
    else if (rat.includes(zodiac) === true) {
        renderPopup(8);
    }
    else if (rooster.includes(zodiac) === true) {
        renderPopup(9);
    }
    else if (snake.includes(zodiac) === true) {
        renderPopup(10);
    }
    else if (tiger.includes(zodiac) === true) {
        renderPopup(11);
    }
    else {
        renderPopup(13);
    }
}

const button = document.querySelector('#submitbutton');

button.addEventListener("click", knowYourZodiac);

//event listener to click the submitbutton on enter
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        button.click()
    }
});