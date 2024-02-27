import React from "react";
import "./App.css";
import Container from "./@shared-components/Container";
import Button from "./@shared-components/Button";
import Avatar from "./@shared-components/Avatar";
import Tab from "./@shared-components/Tab";
import Card from "./@shared-components/Card";
import Logo from "./@shared-components/Logo";
import Navbar from "./@shared-components/Navbar";
import ProfileView from "./@modules/ProfileView/Layout";

function App() {
  return (
    <>
      <Navbar />
      <ProfileView />
    </>
  );
}

export default App;
