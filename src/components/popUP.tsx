import { useAppSelector } from "../redux/hooks";
import indefinite from "indefinite";
import { Link } from "react-router-dom";

const PopUP = () => {
  const { animal } = useAppSelector((state) => state.zodiac);
  return (
    <div
      id="modalpopup"
      className="modal mt-5"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div className="modal-dialog d-flex flex-column align-items-center mt-5 p-5 text-center">
        <h1 id="year">{animal.year}</h1>
        {animal.type && (
          <h3>
            You are {indefinite(animal.type)} {animal.name}
          </h3>
        )}
        <button
          type="button"
          className="btn-close position-absolute align-self-end"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <p className="lead " id="display">
          {animal.descr}
        </p>
        {animal.type && (
          <Link
            className="links"
            to={`zodiac/${animal.type.replace(/[ ]+/g, "")}`}
          >
            Click here to know more
          </Link>
        )}
      </div>
    </div>
  );
};

export default PopUP;
