import PropTypes from "prop-types";
import Cooks from "../Cooks/Cooks";
import Cookings from "../Cookings/Cookings";
import { useState } from "react";

const SideBar = ({ cooks, setCooks }) => {
  const [cookings, setCookings] = useState([]);
  const [times, setTimes] = useState(0);
  const [calories, setCalories] = useState(0);

  const handlePreparing = (cook) => {
    setCookings([...cookings, cook]);
    const remainingCooks = cooks.filter((recipe) => recipe.id !== cook.id);
    setCooks(remainingCooks);
    setTimes(times + cook.time);
    setCalories(calories + cook.calorie);
  };
  // console.log(cookings);
  return (
    <div className="w-2/5 border-2 rounded-2xl p-5 text-center">
      <Cooks cooks={cooks} handlePreparing={handlePreparing}></Cooks>
      <Cookings
        cookings={cookings}
        times={times}
        calories={calories}
      ></Cookings>
    </div>
  );
};

SideBar.propTypes = {
  cooks: PropTypes.array.isRequired,
  setCooks: PropTypes.func,
};
export default SideBar;
