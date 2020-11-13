import React from "react";
import "./App.css";
import {
  SelectionGroup,
  LoadingSpinner,
  Tag,
  Notification,
} from "./components";

function App() {
  return (
    <div className="App">
      <Tag />
      <LoadingSpinner />
      <SelectionGroup />
      <Notification />
    </div>
  );
}

export default App;
