import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className="flex justify-between container mx-auto">
        <Recipes></Recipes>
        <SideBar></SideBar>
      </div>
    </>
  );
}

export default App;
