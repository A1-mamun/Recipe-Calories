import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
const Cooks = ({ cooks, handlePreparing }) => {
  return (
    <div>
      {/* want to cook area */}
      <h1 className=" text-2xl font-semibold font-lexend mb-4">
        Want to cook: {cooks.length}
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
            {cooks.map((cook, idx) => (
              <Cook
                key={idx}
                idx={idx + 1}
                cook={cook}
                handlePreparing={handlePreparing}
              ></Cook>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooks.propTypes = {
  cooks: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func,
};
export default Cooks;
