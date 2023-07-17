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
    image: `./photos/dogPic.svg`
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
    image: `./photos/dragonPic.svg`
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
    image: `./photos/goatPic.svg`
  }, {
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
    image: `./photos/horsePic.svg`
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
    image: `./photos/monkeyPic.svg`
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
    image: `./photos/oxPic.svg`
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
    image: `./photos/pigPic.svg`
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
    image: `./photos/rabbitPic.svg`
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
    image: `./photos/ratPic.svg`
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
    image: `./photos/roosterPic.svg`
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
    image: `./photos/snakePic.svg`
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
    image: `/photos/tigerPic.svg`
  },];

export default zodiacs;