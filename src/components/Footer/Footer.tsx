import { Logo } from "components";
import React from "react";
import { FooterWrapper } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Logo />
    </FooterWrapper>
  );
};