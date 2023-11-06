import "./App.css";
import MyNav from "./Components/MyNav.jsx";
import MyFooter from "./Components/MyFooter.jsx";
import Welcome from "./Components/Welcome.jsx";
import AllTheBooks from "./Components/AllTheBooks.jsx";
import { useState } from "react";
import FilterContext from "./Context/filter";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <>
    
      <FilterContext.Provider value={{ filter, setFilter }}>
        <MyNav/>
        <Welcome />
        <AllTheBooks/>
        <MyFooter />
      </FilterContext.Provider>
    </>
  );
}

export default App;
