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

const zodiacs = [
    {
        title: 'Year of the Dog',
        intro: 'Personality: Dogs are honest, loyal, reliable, and quick-witted.',
        description: ` <p>
        The biggest characteristics of Dogs are loyalty and honesty. In fact,
        Dog people are cautious by nature, which means it may take a comparably
        long time for Dogs to accept new friends. However, once Dogs accept a
        friend, they will be very loyal to the friends and always be supportive.
        Dogs are loyal friends, honest lovers and reliable families.
      </p>
      <p>
        Though being just and honest, Dogs are also very critical and sometimes
        make a sharp criticism. They are not good at taking the whole picture to
        consider things, which may lead to misunderstanding and blame their own
        mistakes on others.
      </p>`,
        image: ``
    }, {
        title: `Year of the Dragon`,
        intro: `Dragons can be impulsive, quirky, but wholeheartedly kind and giving.`,
        description: ` <p>
        Most people born in the Year of the Dragon are full of fighting spirit
        and strength. They are charismatic, attracting a lot of followers and
        their talented leadership skills naturally convince every subordinate.
        The Dragons may look indifferent, however, they actually are chivalrous
        and always think of others.
      </p>
      <p>
        But the Dragon’s pride may bring prejudice, and it is also a little hard
        for them to have the force of will to follow through. If they want to
        achieve excellence and get great success, then honing the willpower is
        indispensable.
      </p>`,
        image: `./photos/dragonPic.jpg`
    }, {
        title: `Year of the Goat`,
        intro: `Personality: Sheep are gentle, calm, upright, and sympathetic.`,
        description: ` <p>
        Among all the 12 Chinese zodiacs, the Sheep is the most gentle and soft
        one. The mild sheep seldom lose their temper to others or become very
        aggressive. They care about others’ feelings and never intend to hurt
        people. Their upright personality also makes them sympathetic enough to
        understand other people’s problems from various perspectives, especially
        for their friends and loved ones.
      </p>
      <p>
        However, sometimes they can be very passive and tend to be a pessimist
        to see bad aspects of things, which means that they need strong support
        and enough understanding from their friends. Also, they keep alert when
        strangers step into their domains.
      </p>`,
        image: `./photos/goatPic.png`
    },{
        title: `Year of the Horse`,
        intro: `Personality: Horses are cheerful, enthusiastic, insightful, and
        considerate.`,
        description: ` <p>
        Compared to other zodiac signs, people with Chinese zodiac Horse sign
        are more lively, energetic, courageous, and enthusiastic about people
        and life. However, they are not good at hiding emotions and their
        feelings will be easily shown on the face. But that doesn’t affect their
        great popularity among people, and no wonder that most of them are fond
        of joining social activities.
      </p>
      <p>
        Another character of the Horse is that they do have a keen eye and
        display strong logical thinking, which makes them easily discover the
        essence through the phenomena and be considerate enough to take care of
        other people’s emotions.
      </p>`,
        image: `./photos/horsePic.jpg`
    },
    {
        title: `Year of the Monkey`,
        intro: `Personality: Monkeys are lively, clever, agile, competitive, and sociable.`,
        description: `<p>
        People with the Chinese zodiac monkey sign are born to have brilliant
        minds. They are not only intelligent, smart and always appreciated by
        teachers and parents throughout adolescence but also have strong bodies,
        all of which make them perform well in an organization and they tend to
        be excellent leaders than anyone else. At work, they show initiative and
        hold the courage to face new challenges. At life, they are helpful and
        humorous enough to be favored by people.
      </p>
      <p>
        However, boasting may hinder them to make great success and they need
        more patience. Too many opportunistic behaviors may also affect others’
        impressions on them.
      </p>`,
        image: `./photos/monkeyPic.jpg`
    },
    {
        title: `Year of the Ox`,
        intro: `Personality: Oxen are faithful, obliging, persistent, and sympathetic.`,
        description: `<p>
        The faithful character of people with Chinese zodiac Ox sign helps them
        to get trust from the leaders and friends. They also have talents to be
        leaders and are good at managing, but maybe a little strict. Oxen like
        routines and respect traditional ideas, doing things step by step. The
        persistence makes most of them become tireless workers.
      </p>
      <p>
        They are likely to be self-made and insist that everyone should do their
        part while not putting up barriers to others' work. Although being a
        little conservative, Oxen always try to keep just and fair, no matter in
        life or at work, and never let people down.
      </p>`,
        image: `./photos/oxPic.jpg`
    },
    {
        title: `Year of the Pig`,
        intro: ` Personality: Pigs are diligent, upright, compassionate, and responsible.`,
        description: `<p>
        People born in the Year of the Pig are always diligent and upright and
        never to be pretentious. Thus Pigs are easy to get others’ trust. Their
        compassionate and genuine personality make them glad to offer others a
        hand at any time, which results in getting a lot of good friends. The
        strong sense of responsibility also makes Pig people spare no pains at
        work.
      </p>
      <p>
        Pigs may be a little realistic and emotional, and it is hard for them to
        detect lies and thus easily be fooled by bad people.
      </p>`,
        image: `./photos/pigPic.png`
    },
    {
        title: `Year of the Rabbit`,
        intro: ` Personality: Rabbits are are gentle, elegant, self-disciplined, and alert.`,
        description: `<p>
        People born in the years of the Rabbit tend to have some characteristics
        of the real rabbits which are quiet at most times but also acted swiftly
        when needed. Generally, the Rabbits are positive, gentle and elegant.
        They love freedom, but once set goals, they just march forward for it
        without distractions. They are also self-disciplined, the typical kind
        of people who are strict with themselves but tolerant of others.
      </p>
      <p>
        Though looking mild and soft, the Rabbits in fact are alert to strangers
        and outsiders. They don’t trust others easily, unlikely to be fooled by
        others. However, they do have courteous manners in social settings.
      </p>`,
        image: `./photos/rabbitPic.jpg`
    },
    {
        title: `Year of the Rat`,
        intro: `Personality: Rats are smart, quick-witted, strong-willed, and ambitious.`,
        description: `<p>
        People who were born in the Year of the Rat are always called Rats whose
        characteristics tend to be more quick-witted with a keen observation and
        foresight. Rats also have a bright and optimistic personality which
        makes them adapt to changes in any environment and easily get help from
        others. However, though Rats are ambitious in career, they may not be
        qualified to become great leaders due to the stubbornness and the lack
        of empathy and humility.
      </p>`,
        image: `./photos/ratPic.png`
    },
    {
        title: `Year of the Rooster`,
        intro: `Personality: Roosters are confident, sociable, intelligent and optimistic.`,
        description: `<p>
        By virtue of their outing personality, people with Chinese zodiac
        Rooster sign are good at making friends or adjusting themselves into a
        new environment. Whenever there is a tricky problem, they will not give
        up easily but try every means to solve it. Since they cannot stand
        lagging behind others, self-improving is an important part of their
        life.
      </p>
      <p>
        However, as the name implies, Rooster people tend to be cocky or even
        arrogant sometimes. Their craving for attention may make others feel
        uncomfortable. The lack of patience could be another problem.
      </p>`,
        image: `./photos/roosterPic.jpg`
    },
    {
        title: `Year of the Snake`,
        intro: `Personality: Snakes are calm, wise, observant, mysterious, and think
        deeply.`,
        description: `<p>
        People born in the years of the Snake easily attract others for the
        mysterious character and graceful behaviors. They are calm and thorough
        and can always carry out a plan from the beginning to the end. Once in
        dilemma, the Snake can be someone who leads people to get out of the
        woods. They also have a strong sense of responsibility and have a clear
        goal, which helps them to reach a peak in their career.
      </p>
      <p>
        The Snakes are typical deep thinkers who are perceptive and skeptical
        about everything. In the love aspect, the Snakes are devoted lovers who
        will not fall in love with someone else.
      </p>`,
        image: `./photos/snakePic.jpg`
    },
    {
        title: `Year of the Tiger`,
        intro: `Personality: Tigers are courageous, confident, and with a spirit of
        adventure.`,
        description: `<p>
        With the uncommon courage and confidence, people born in the Year of the
        Tiger are natural leaders and they can always bravely put brilliant
        ideas into practice. They are also generous, passionate and holding a
        strong sense of justice. When meeting the weak or see anything unfair,
        the Tigers stand up and offer help.
      </p>
      <p>
        Tigers are such persons who dare to love and hate. If a friend does
        something wrong, they may point it out directly. The daring also makes
        them rebellious, stubborn and arbitrary in life, and thus it is not easy
        for them to take others’ advice.
      </p>`,
        image: `/photos/tigerPic.jpg`
    },]


let input = document.getElementById("inputyear");

//event listener to click the submitbutton on enter

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        document.getElementById("submitbutton").click();
    }
});

let knowYourZodiac = function () {
    // Takes the input year and stores it in the variable 
    const zodiac = parseInt(input.value);


    if (rat.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Rat!";
        document.getElementById("display").innerHTML = "The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.";
        document.getElementById("links").innerHTML = '<a id="ratlink" href="zodiacs/rat.html">click here to know more</a> ';
    }
    else if (ox.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Ox!";
        document.getElementById("display").innerHTML = "The Ox is the second of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Ox was about to be the first to arrive, but Rat tricked Ox into giving him a ride. Then, just as they arrived, Rat jumped down and landed ahead of Ox. Thus, Ox became the second animal.";
        document.getElementById("links").innerHTML = '<a id="oxlink" href="zodiacs/ox.html">click here to know more</a>';
    }
    else if (tiger.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Tiger!";
        document.getElementById("display").innerHTML = "Tigers are the third of the Chinese zodiacs. According to legend, Tiger was confident that no one could compete with its speed and vigor for the celestial race that would decide the order of the zodiacs. However, when Tiger climbed out of the river, thinking it was first, it was informed that Rat placed first for its cunning and Ox placed second for its diligence. This left the king of the jungle having to settle for third place.";
        document.getElementById("links").innerHTML = '<a id="tigerlink" href="zodiacs/tiger.html">click here to know more</a>'
    }
    else if (rabbit.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Rabbit!";
        document.getElementById("display").innerHTML = "The Rabbit is the fourth of all zodiac animals. Legend has it the Rabbit was proud—arrogant even—of its speed. He was neighbors with Ox and always made fun of how slow Ox was. One day, the Jade Emperor said the zodiac order would be decided by the order in which the animals arrived at his party. Rabbit set off at daybreak. But when he got there, no other animals were in sight. Thinking that he would obviously be first, he went off to the side and napped. However, when he woke up, three other animals had already arrived. One of them was the Ox he had always looked down upon.";
        document.getElementById("links").innerHTML = '<a id="rabbitlink" href="zodiacs/rabbit.html">click here to know more</a>';
    }
    else if (dragon.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Dragon!";
        document.getElementById("display").innerHTML = "The Dragon is the fifth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Everyone expected the powerful Dragon to arrive early on. However, he came after Rat, Ox, Tiger and Rabbit. When asked why he was so late, Dragon said that on the way, he saw a village suffering from drought. He had to stop and create rain for them. The Jade Emperor was happy when he heard of this noble deed and gave him the fifth position.";
        document.getElementById("links").innerHTML = '<a id="dragonlink" href="zodiacs/dragon.html">click here to know more</a>'
    }
    else if (snake.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Snake!";
        document.getElementById("display").innerHTML = "The Snake is the sixth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Because of their similar looks, Snake and Dragon were good friends. They arrived at the same time. But unfortunately, due to the size difference, the Jade Emperor first saw Dragon, and then Snake.";
        document.getElementById("links").innerHTML = '<a id="snakelink" href="zodiacs/snake.html">click here to know more</a>'
    }
    else if (horse.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Horse!";
        document.getElementById("display").innerHTML = "The Horse is the seventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Horse had to pass a cemetery on his way, but he was too scared. He hesitated for the longest time because running past it with his eyes closed. After he overcame that obstacle, he went at full speed and managed to arrive seventh.";
        document.getElementById("links").innerHTML = '<a id="horselink" href="zodiacs/horse.html">click here to know more</a>'
    }
    else if (goat.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Goat!";
        document.getElementById("display").innerHTML = "The Goat is the eighth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Goat and Deer set off together, but they needed to cross a river. There were no boats available, so they had to swim across. The Deer couldn’t take it and gave up. Goat struggled on by himself and finally made it to the party as eighth place.";
        document.getElementById("links").innerHTML = '<a id="goatlink" href="zodiacs/goat.html">click here to know more</a>'
    }
    else if (monkey.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Monkey!";
        document.getElementById("display").innerHTML = "The Monkey is the ninth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Monkey became ninth.";
        document.getElementById("links").innerHTML = '<a id="monkeylink" href="zodiacs/monkey.html">click here to know more</a>'
    }
    else if (rooster.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Rooster!";
        document.getElementById("display").innerHTML = "The Rooster is the tenth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Rooster became tenth.";
        document.getElementById("links").innerHTML = '<a id="roosterlink" href="zodiacs/rooster.html">click here to know more</a>'
    }
    else if (dog.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Dog!";
        document.getElementById("display").innerHTML = "The Dog is the eleventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Dog became eleventh.";
        document.getElementById("links").innerHTML = '<a id="doglink" href="zodiacs/dog.html">click here to know more</a>'
    }
    else if (pig.includes(zodiac) === true) {
        document.getElementById("year").innerHTML = "You were born in the year of the Pig!";
        document.getElementById("display").innerHTML = "The Pig is the twelfth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Pig was late because he overslept. Another story says that a wolf destroyed his house. He had to rebuild his home before he could set off. When he arrived, he was the last one and could only take twelfth place.";
        document.getElementById("links").innerHTML = '<a id="piglink" href="zodiacs/pig.html">click here to know more</a>'
    }
    else {
        document.getElementById("year").innerHTML = "Invalid Input!";
        document.getElementById("display").innerHTML = "Please make sure you're entering a valid year, This webpage doesn't accept a year previous to 1924 and no more than 2031.";
    }

}