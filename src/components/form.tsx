import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getZodiac } from "../redux/zodiacSlice";

const Form = () => {
  const dispatch = useAppDispatch();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("Jan");
  const [year, setYear] = useState("");

  const handleSubmit = () => {
    if (day.trim() && year.trim())
      dispatch(getZodiac(`${day} ${month} ${year} 00:12:00 GMT`));
  };

  return (
    <div
      id="searchb"
      className="container d-flex flex-column align-items-center mt-3"
    >
      <label className="font-weight-bolder">Please Enter your Birth Date</label>
      <br />
      <input
        id="input-day"
        type="number"
        max="31"
        min="1"
        className="text-center form-control w-auto"
        required
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <select
        id="input-month"
        name="month"
        value={month}
        className="form-select w-auto"
        onChange={(e) => setMonth(e.target.value)}
      >
        <option>Jan</option>
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
      <input
        id="input-year"
        type="number"
        className="text-center form-control w-auto"
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button
        id="submitbutton"
        type="submit"
        className="btn px-4 mt-3"
        data-bs-toggle="modal"
        data-bs-target="#modalpopup"
        onClick={handleSubmit}
      >
        Go!
      </button>
    </div>
  );
};

export default Form;
