import React from "react";
import "./App.css";
import {
  SelectionGroup,
  LoadingSpinner,
  Tag,
  Notification,
  Tabs,
} from "./components";

function App() {
  return (
    <div className="App">
      <Tag />
      <LoadingSpinner />
      <SelectionGroup />
      <Notification />
      <Tabs />
    </div>
  );
}

export default App;
