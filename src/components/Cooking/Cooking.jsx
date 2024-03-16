import PropTypes from "prop-types";
const Cooking = ({ cooking, idx }) => {
  const { name, time, calorie } = cooking;
  return (
    <tr>
      <th>{idx}</th>
      <td>{name}</td>
      <td>{time} minutes </td>
      <td>{calorie} calories</td>
    </tr>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.array.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Cooking;
