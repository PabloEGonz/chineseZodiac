import { Link, useParams } from "react-router-dom";
import { getDescription } from "../redux/zodiacSlice";
import { useAppSelector } from "../redux/hooks";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

const Info = () => {
  const dispatch = useAppDispatch();
  const { description } = useAppSelector((state) => state.zodiac);
  const { zodiacId } = useParams();
  useEffect(() => {
    dispatch(getDescription(zodiacId || ""));
  }, []);
  return (
    <div className="zodiacs">
      <h1 className="display-3">{description.title}</h1>
      <h3 className="display-6">{description.intro}</h3>
      <div className="lead m-5 px-5">{description.description}</div>
      <div className="pic">
        <img className="rounded" src={description.image} />
      </div>
      <h3>
        <Link to="/" id="return">
          Go Back
        </Link>
      </h3>
    </div>
  );
};

export default Info;
