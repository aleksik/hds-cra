import React from "react";

import "./App.css";
import { Login, Cookies, SelectionGroup, LoadingSpinner, Tag, Notification, Tabs } from "./components";

function App() {
  return (
    <div className="App">
      <Tag />
      <LoadingSpinner />
      <SelectionGroup />
      <Notification />
      <Tabs />
      <Cookies />
      <Login />
    </div>
  );
}

export default App;
