import Select from "./select";

const Form = () => {
  return (
    <div
      id="searchb"
      className="container d-flex flex-column align-items-center mt-3"
    >
      <label className="font-weight-bolder">
        Please Enter your Birth Date
      </label>
      <br />
      <input
        id="input-day"
        type="number"
        max="31"
        min="1"
        className="text-center"
        required
      />
      <Select />
      <input id="input-year" type="number" className="text-center" required />
      <button
        id="submitbutton"
        type="submit"
        className="btn px-4 mt-3"
        data-bs-toggle="modal"
        data-bs-target="#modalpopup"
      >
        Go!
      </button>
    </div>
  );
};

export default Form;
