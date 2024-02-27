import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./@shared-components/Container";
import Button from "./@shared-components/Button";
import Avatar from "./@shared-components/Avatar";

function App() {
  return (
    <Container>
      <Button title="Share Profile" color="tetiary" />
      <Avatar
        fallBack="Udfghfgh"
        imageUrl="https://via.placeholder.com/150/92c952"
      />
      <Avatar
        fallBack="U"
        imageUrl="https://via.placeholder.com/150/92c952"
        size="medium"
      />
      <Avatar
        fallBack="U"
        imageUrl="https://via.placeholder.com/150/92c952"
        size="large"
        shape="square"
      />
    </Container>
  );
}

export default App;
