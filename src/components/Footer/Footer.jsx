import { Container, Box } from "@mui/material";
import { StyledFooter, StyledFooterLogo, StyledFooterText } from "./Footer.styled";
import logo from "./footerLogo.svg";

export const Footer = () => {
    const handleMailClick = () => {
        window.location.href = "mailto:info@formula.com";
      };

  return (
    <StyledFooter>
      <Container fixed sx={{}}>
        <StyledFooterLogo src={logo} alt="Formula" />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <StyledFooterText>©Formula 2023. All Rights Reserved</StyledFooterText>
          <StyledFooterText className="mail" onClick={handleMailClick}>info@formula.com</StyledFooterText>
        </Box>
      </Container>
    </StyledFooter>
  );
};
