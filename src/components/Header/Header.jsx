import Container from "@mui/material/Container";
import { StyledHeader } from "./Header.styled";
import logo from "./logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Container fixed sx={{ display: "flex", justifyContent: "center" }}>
        <img src={logo} alt="Formula" />
      </Container>
    </StyledHeader>
  );
};
