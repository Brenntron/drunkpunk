import React from "react";
import "./App.scss";
import Header from "./components/header";
import Welcome from "./components/welcome";
import SetList from "./components/setList";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <SetList />
    </div>
  );
}

export default App;
