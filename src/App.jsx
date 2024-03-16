import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className="flex justify-between container mx-auto">
        <Recipe></Recipe>
        <SideBar></SideBar>
      </div>
    </>
  );
}

export default App;
