const Recipe = () => {
  return (
    <div className="w-3/5 grid grid-cols-2">
      <div className="card w-96 bg-base-100 shadow-xl p-5 border-2">
        <figure>
          <img
            className="rounded-2xl mb-6"
            src="https://i.ibb.co/m4Lxqnh/recipe-4.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="card-title mb-3">Spaghetti Bolognese</h2>
          <p className="mb-5">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <hr />
          <h2 className="card-title mt-5 mb-3">Ingredients: 6</h2>
          <ul className="list-disc ml-8 mb-5">
            <li>500g ground beef</li>
            <li>500g grounf</li>
            <li>500g ground be</li>
          </ul>
          <hr />
          <div className="flex gap-10 my-5">
            <div className="flex gap-2">
              <img src="../../../public/clock.png" alt="" />
              <p>30 minutes</p>
            </div>
            <div className="flex gap-2">
              <img src="../../../public/flame.png" alt="" />
              <p>300 calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn bg-green-500 rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl p-5 border-2">
        <figure>
          <img
            className="rounded-2xl mb-6"
            src="https://i.ibb.co/m4Lxqnh/recipe-4.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="card-title mb-3">Spaghetti Bolognese</h2>
          <p className="mb-5">
            Classic Italian pasta dish with savory meat sauce.
          </p>
          <hr />
          <h2 className="card-title mt-5 mb-3">Ingredients: 6</h2>
          <ul className="list-disc ml-8 mb-5">
            <li>500g ground beef</li>
            <li>500g grounf</li>
            <li>500g ground be</li>
          </ul>
          <hr />
          <div className="flex gap-10 my-5">
            <div className="flex gap-2">
              <img src="../../../public/clock.png" alt="" />
              <p>30 minutes</p>
            </div>
            <div className="flex gap-2">
              <img src="../../../public/flame.png" alt="" />
              <p>300 calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn bg-green-500 rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
