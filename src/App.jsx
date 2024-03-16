import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
    </>
  );
}

export default App;
