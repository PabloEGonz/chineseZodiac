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



const open = document.getElementById("submitbutton");
const close = document.getElementById("close");
let modal_container = document.getElementById("modal_container");

close.addEventListener("click", () => {
    modal_container.classList.remove("show");
})


document.getElementById("submitbutton").onclick = function(){

    var zodiac = parseInt(document.getElementById("inputyear").value);
   
    
    if(rat.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Rat";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(ox.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Ox";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");
        })
    }
    if(tiger.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Tiger";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(rabbit.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Rabbit";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(dragon.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Dragon";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(snake.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Snake";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(horse.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Horse";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(goat.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Goat";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(monkey.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Monkey";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(rooster.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Rooster";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(dog.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Dog";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(pig.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Pig";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
}