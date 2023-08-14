import {
  dog,
  dragon,
  goat,
  horse,
  monkey,
  ox,
  pig,
  rabbit,
  rat,
  tiger,
  snake,
  rooster,
} from "../redux/zodiacInfo";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link to="zodiac/Rat">
          <img className="sidebar-img rounded" src={rat} alt="zodiac animal" />
        </Link>
        <Link to="zodiac/Ox">
          <img className="sidebar-img rounded" src={ox} alt="zodiac animal" />
        </Link>
        <Link to="zodiac/Tiger">
          <img
            className="sidebar-img rounded"
            src={tiger}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Rabbit">
          <img
            className="sidebar-img rounded"
            src={rabbit}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Dragon">
          <img
            className="sidebar-img rounded"
            src={dragon}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Snake">
          <img
            className="sidebar-img rounded"
            src={snake}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Horse">
          <img
            className="sidebar-img rounded"
            src={horse}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Goat">
          <img className="sidebar-img rounded" src={goat} alt="zodiac animal" />
        </Link>
        <Link to="zodiac/Monkey">
          <img
            className="sidebar-img rounded"
            src={monkey}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Rooster">
          <img
            className="sidebar-img rounded"
            src={rooster}
            alt="zodiac animal"
          />
        </Link>
        <Link to="zodiac/Dog">
          <img className="sidebar-img rounded" src={dog} alt="zodiac animal" />
        </Link>
        <Link to="zodiac/Pig">
          <img className="sidebar-img rounded" src={pig} alt="zodiac animal" />
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
