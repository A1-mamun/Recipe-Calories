import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className="flex justify-between container mx-auto">
        <Recipe></Recipe>
      </div>
    </>
  );
}

export default App;
