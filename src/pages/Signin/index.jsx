import React, { useState } from "react";
import { Container, Image, ImageContainer } from "./component";
import Mojito from "../../assets/images/mojito.jpeg";

import Login from "./Login";
import Register from "./Register";

const Signin = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container>
      {isRegister ? (
        <Register setIsRegister={setIsRegister} />
      ) : (
        <Login setIsRegister={setIsRegister} />
      )}
      <ImageContainer>
        <Image src={Mojito} alt="Mojito" />
      </ImageContainer>
    </Container>
  );
};

export default Signin;
