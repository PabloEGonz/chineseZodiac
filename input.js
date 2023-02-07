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




const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");


close.addEventListener("click", () => {
    modal_container.classList.remove("show");
})


document.getElementById("submitbutton").onclick = function(){

    var zodiac = parseInt(document.getElementById("inputyear").value);
   
    
    if(rat.includes(zodiac) ===  true){
            modal_container.classList.add("show");
    }
    if(ox.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing1";
    }
    if(tiger.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing2";
    }
    if(rabbit.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing3";
    }
    if(dragon.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing4";
    }
    if(snake.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing5";
    }
    if(horse.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing6";
    }
    if(goat.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing7";
    }
    if(monkey.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing8";
    }
    if(rooster.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing9";
    }
    if(dog.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing10";
    }
    if(pig.includes(zodiac) ===  true){
        document.getElementById("display").innerHTML = "testing11";
    }
}