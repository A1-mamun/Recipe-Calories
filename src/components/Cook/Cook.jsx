import PropTypes from "prop-types";
const Cook = ({ cook, idx, handlePreparing }) => {
  const { name, time, calorie } = cook;
  return (
    <tr>
      <th>{idx}</th>
      <td>{name}</td>
      <td>{time} minutes </td>
      <td>{calorie} calories</td>
      <td>
        <button
          onClick={() => handlePreparing(cook)}
          className="btn bg-green-500 btn-sm rounded-full font-lexend font-medium"
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Cook.propTypes = {
  cook: PropTypes.object,
  idx: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func,
};
export default Cook;
