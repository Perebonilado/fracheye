import React from "react";
import "./App.css";
import Container from "./@shared-components/Container";
import Button from "./@shared-components/Button";
import Avatar from "./@shared-components/Avatar";
import Tab from "./@shared-components/Tab";
import Card from "./@shared-components/Card";

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
      />
      <Card></Card>
    </Container>
  );
}

export default App;
