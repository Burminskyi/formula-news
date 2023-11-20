import styled from "@emotion/styled";
import logo from "./mailLogo.svg";

export const StyledFooter = styled.footer`
  padding-top: 10px;
  padding-bottom: 12px;
  box-shadow: 0px -2px 4px 0px rgba(223, 223, 223, 0.25);
`;

export const StyledFooterLogo = styled.img`
  display: block;
  margin-bottom: 16px;
`;

export const StyledFooterText = styled.p`
  font-size: 13px;
  line-height: 24px;
  position: relative;

  &.mail {
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: -22px;
      width: 20px;
      height: 20px;
      background-image: url(${logo});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
