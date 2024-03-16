import PropTypes from "prop-types";
const Recipe = ({ recipe, handleCook }) => {
  const { image, name, description, ingredients, time, calorie } = recipe;
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-xl p-5 border-2">
        <figure>
          <img
            className="rounded-2xl mb-6 h-56 w-full"
            src={image}
            alt="Recipe"
          />
        </figure>
        <div className="">
          <h2 className="card-title mb-3">{name}</h2>
          <p className="mb-5">{description}</p>
          <hr />
          <h2 className="card-title mt-5 mb-3">
            Ingredients: {ingredients.length}
          </h2>
          <ul className="list-disc ml-8 mb-5">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <hr />
          <div className="flex gap-10 my-5">
            <div className="flex gap-2">
              <img src="../../../public/clock.png" alt="" />
              <p>{time} minutes</p>
            </div>
            <div className="flex gap-2">
              <img src="../../../public/flame.png" alt="" />
              <p>{calorie} calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleCook(recipe)}
              className="btn bg-green-500 rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCook: PropTypes.func,
};
export default Recipe;
