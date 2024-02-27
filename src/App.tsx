import React from "react";
import "./App.css";
import Container from "./@shared-components/Container";
import Button from "./@shared-components/Button";
import Avatar from "./@shared-components/Avatar";
import Tab from "./@shared-components/Tab";
import Card from "./@shared-components/Card";
import Logo from "./@shared-components/Logo";

function App() {
  return (
    <Container>
      <Button title="Share Profile" color="tetiary" />
      <Avatar
        fallBack="Udfghfgh"
        imageUrl="https://via.placeholder.com/150/92c952"
        alt="dsf"
      />
      <Avatar
        fallBack="U"
        imageUrl="https://via.placeholder.com/150/92c952"
        size="medium"
        alt="dsf"
      />
      <Avatar
        fallBack="U"
        imageUrl="https://via.placeholder.com/150/92c952"
        size="large"
        shape="square"
        alt="dsf"
      />
      <Tab
        headers={[
          { title: "Videos", isActive: false },
          { title: "Photos", isActive: true },
        ]}
        variant="text"
      />
      <Card></Card>
      <Logo size="medium"/>
    </Container>
  );
}

export default App;
