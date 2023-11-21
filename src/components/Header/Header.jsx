import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import { StyledHeader } from "./Header.styled";
import logo from "./logo.svg";


export const Header = () => {
  return (
    <StyledHeader>
      <Container fixed sx={{ display: "flex", justifyContent: "center" }}>
      <Link to="/">
          <img src={logo} alt="Formula" />
        </Link>
      </Container>
    </StyledHeader>
  );
};
