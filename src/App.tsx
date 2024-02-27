import React from "react";
import "./App.css";
import Container from "./@shared-components/Container";
import Button from "./@shared-components/Button";
import Avatar from "./@shared-components/Avatar";
import Tab from "./@shared-components/Tab";

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
      <Tab
        headers={[
          { title: "Videos", isActive: false },
          { title: "Photos", isActive: true },
        ]}
      />
    </Container>
  );
}

export default App;
