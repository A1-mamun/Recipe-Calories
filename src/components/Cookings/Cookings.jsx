import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
const Cookings = ({ cookings, times, calories }) => {
  return (
    <div>
      {/* currently cooking area */}
      <h1 className=" text-2xl font-semibold font-lexend mb-4">
        Currently cooking: {cookings.length}
      </h1>
      <hr className="w-3/4 mx-auto" />

      <div className="overflow-x-auto mt-3 mb-6">
        <table className="table table-zebra font-fira text-base">
          {/* head */}
          <thead className=" text-base font-medium">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookings.map((cooking, idx) => (
              <Cooking key={idx} idx={idx + 1} cooking={cooking}></Cooking>
            ))}
            <tr>
              <th></th>
              <td></td>
              <td>
                Total Time = <br /> {times} minutes{" "}
              </td>
              <td>
                Total Calroies = <br /> {calories} calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cookings.propTypes = {
  cookings: PropTypes.array,
  times: PropTypes.number,
  calories: PropTypes.number,
};

export default Cookings;
