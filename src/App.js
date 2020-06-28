import React from "react";
import "./App.scss";
import Header from "./components/header";
import Welcome from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
