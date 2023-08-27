const Description = () => {
  return (
    <div
      className="container d-flex flex-column g-5 justify-content-between align-items-center text-center"
      id="main"
    >
      <h1 className="display-5 mt-5">Chinese Zodiac Animal Signs</h1>
      <div id="headerp" className="container lead text-center mt-5">
        <p>
          This is a webpage that tells you what Chinese Zodiacs sign you are,
          you have to enter your date of birth and it will show your zodiac
          animal.
        </p>
        <p>
          The Chinese zodiac is a repeating 12-year cycle of animal signs and
          their ascribed attributes, based on the lunar calendar. In order, the
          zodiac animals are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse,
          Goat, Monkey, Rooster, Dog, Pig.
        </p>
        <p className="just-desk">
          Your birth year determines your Chinese zodiac sign, but it can get
          tricky, as the lunar calendar varies from the solar, or Gregorian,
          calendar.
        </p>
        <p className="just-desk">
          Because the dates of Chinese New Year change every year, individuals
          born in January or February will need to pay special attention to
          their birth date in addition to their birth year.
        </p>
      </div>
    </div>
  );
};

export default Description;
