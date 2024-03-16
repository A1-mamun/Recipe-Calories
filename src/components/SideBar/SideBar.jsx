const SideBar = () => {
  return (
    <div className="w-2/5 border-2 rounded-2xl p-5 text-center">
      {/* want to cook area */}
      <h1 className=" text-2xl font-semibold font-lexend mb-4">
        Want to cook: 01
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
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes </td>
              <td>400 calories</td>
              <td>
                <button className="btn bg-green-500 btn-sm rounded-full font-lexend font-medium">
                  Preparing
                </button>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes </td>
              <td>400 calories</td>
              <td>
                <button className="btn bg-green-500 btn-sm rounded-full font-lexend font-medium">
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* currently cooking area */}
      <h1 className=" text-2xl font-semibold font-lexend mb-4">
        Want to cook: 01
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
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes </td>
              <td>400 calories</td>
            </tr>
            <tr>
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes </td>
              <td>400 calories</td>
            </tr>
            <tr>
              <th></th>
              <td></td>
              <td>
                Total Time = <br /> 20 minutes{" "}
              </td>
              <td>
                Total Calroies = <br /> 400 calories
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
