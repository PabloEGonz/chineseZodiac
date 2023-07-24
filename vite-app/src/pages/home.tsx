const Home = () => {
  return (
    <>
        <main>
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
            their ascribed attributes, based on the lunar calendar. In order,
            the zodiac animals are: Rat, Ox, Tiger, Rabbit, Dragon, Snake,
            Horse, Goat, Monkey, Rooster, Dog, Pig.
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

      <div
        id="searchb"
        className="container d-flex flex-column align-items-center mt-3"
      >
        <label className="font-weight-bolder"
          >Please Enter the Sate you Were Born</label> <br />
        <input
          id="input-day"
          type="number"
          max="31"
          min="1"
          className="text-center"
          required
        />
        <select id="input-month" name="month">
          <option selected>Jan</option>
          <option>Feb</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>Aug</option>
          <option>Sept</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <input id="input-year" type="number" className="text-center" required />
        <button
          id="submitbutton"
          type="submit"
          className="btn btn-primary px-4 mt-3"
          data-bs-toggle="modal"
          data-bs-target="#modalpopup"
        >
          Go!
        </button>
      </div>
      <div
        id="modalpopup"
        className="modal mt-5"
        aria-labelledby="modal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog d-flex flex-column align-items-center mt-5 p-5 text-center"
        ></div>
      </div>
    </main>
    <section className="zodiacs"></section>
    </>
  )
}

export default Home