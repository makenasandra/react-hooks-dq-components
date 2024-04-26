import React from "react";
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';
import MainContent from "./MainContent";

function App() {
  return <div className="app-container"> 
  <div className="app-container">
    <TopMenu />
    <SideMenu />
    <MainContent/>
  </div></div>;
}

export default App;
