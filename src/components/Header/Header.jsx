import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetPage, resetRowsPerPage } from "../../redux/News/slice";

import Container from "@mui/material/Container";
import { StyledHeader } from "./Header.styled";

import logo from "./logo.svg";

export const Header = () => {
  const dispatch = useDispatch();

  const handleImgClick = () => {
    dispatch(resetPage());
    dispatch(resetRowsPerPage());
  };

  return (
    <StyledHeader>
      <Container fixed sx={{ display: "flex", justifyContent: "center" }}>
        <Link to="/">
          <img src={logo} alt="Formula" onClick={handleImgClick} />
        </Link>
      </Container>
    </StyledHeader>
  );
};
