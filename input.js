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
        document.getElementById("display").innerHTML = "The Ox is the second of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Ox was about to be the first to arrive, but Rat tricked Ox into giving him a ride. Then, just as they arrived, Rat jumped down and landed ahead of Ox. Thus, Ox became the second animal.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");
        })
    }
    if(tiger.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Tiger";
        document.getElementById("display").innerHTML = "iTgers are the third of the Chinese zodiacs. According to legend, Tiger was confident that no one could compete with its speed and vigor for the celestial race that would decide the order of the zodiacs. However, when Tiger climbed out of the river, thinking it was first, it was informed that Rat placed first for its cunning and Ox placed second for its diligence. This left the king of the jungle having to settle for third place.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(rabbit.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Rabbit";
        document.getElementById("display").innerHTML = "The Rabbit is the fourth of all zodiac animals. Legend has it the Rabbit was proud—arrogant even—of its speed. He was neighbors with Ox and always made fun of how slow Ox was. One day, the Jade Emperor said the zodiac order would be decided by the order in which the animals arrived at his party. Rabbit set off at daybreak. But when he got there, no other animals were in sight. Thinking that he would obviously be first, he went off to the side and napped. However, when he woke up, three other animals had already arrived. One of them was the Ox he had always looked down upon.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(dragon.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Dragon";
        document.getElementById("display").innerHTML = "The Dragon is the fifth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Everyone expected the powerful Dragon to arrive early on. However, he came after Rat, Ox, Tiger and Rabbit. When asked why he was so late, Dragon said that on the way, he saw a village suffering from drought. He had to stop and create rain for them. The Jade Emperor was happy when he heard of this noble deed and gave him the fifth position.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(snake.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Snake";
        document.getElementById("display").innerHTML = "The Snake is the sixth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Because of their similar looks, Snake and Dragon were good friends. They arrived at the same time. But unfortunately, due to the size difference, the Jade Emperor first saw Dragon, and then Snake.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(horse.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Horse";
        document.getElementById("display").innerHTML = "The Horse is the seventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Horse had to pass a cemetery on his way, but he was too scared. He hesitated for the longest time because running past it with his eyes closed. After he overcame that obstacle, he went at full speed and managed to arrive seventh.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(goat.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Goat";
        document.getElementById("display").innerHTML = "The Goat is the eighth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Goat and Deer set off together, but they needed to cross a river. There were no boats available, so they had to swim across. The Deer couldn’t take it and gave up. Goat struggled on by himself and finally made it to the party as eighth place.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(monkey.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Monkey";
        document.getElementById("display").innerHTML = "The Monkey is the ninth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Monkey became ninth.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(rooster.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Rooster";
        document.getElementById("display").innerHTML = "The Rooster is the tenth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Rooster became tenth.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(dog.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Dog";
        document.getElementById("display").innerHTML = "The Dog is the eleventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Dog became eleventh.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
    if(pig.includes(zodiac) ===  true){
        document.getElementById("year").innerHTML = "You were born in the year of the Pig";
        document.getElementById("display").innerHTML = "The Pig is the twelfth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Pig was late because he overslept. Another story says that a wolf destroyed his house. He had to rebuild his home before he could set off. When he arrived, he was the last one and could only take twelfth place.";
        open.addEventListener("click", () => {
            modal_container.classList.add("show");

        })
    }
}