// react
import React from "react";
// modules
import ConnectedHeader from "./components/Header";
import ConnectedImageList from "./components/ImageURL";
import ConnectedSearch from "./components/Search";

const App = () => {
  return (
    <div>
      <ConnectedHeader />
      <ConnectedSearch />
      <ConnectedImageList />
    </div>
  );
};
export default App;
