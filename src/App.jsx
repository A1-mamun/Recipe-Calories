import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cooks, setCooks] = useState([]);

  const notify = () => toast("Already Exist !");

  const handleCook = (recipe) => {
    const isExixt = cooks.find((cook) => cook.id == recipe.id);
    if (isExixt) {
      notify();
    } else {
      setCooks([...cooks, recipe]);
    }
  };
  // console.log(typeof setCooks);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className="flex flex-col lg:flex-row justify-between gap-6 container mx-auto px-3 md:px-5 lg:px-2 mb-4 md:mb-8">
        <Recipes handleCook={handleCook}></Recipes>
        <ToastContainer />
        <SideBar cooks={cooks} setCooks={setCooks}></SideBar>
      </div>
    </>
  );
}

export default App;
