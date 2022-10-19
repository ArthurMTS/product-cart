import { Header } from "components/Header";
import React from "react";
import { BackgroundImage, Main, Section, Subtitle, Title } from "./Home.styles";
import BackgroundHome from "assets/images/BackgroundHome.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PagesRoutes } from "views/constants/routes";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const onShoppingButtonClick = () => {
    navigate(PagesRoutes.products);
  };
  
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Section>
          <Title>
            Dusk Store
          </Title>
          <Subtitle>
            The place to find everything you want.
          </Subtitle>
          <Button
            variant="contained"
            onClick={onShoppingButtonClick}
          >
            Go shopping!
          </Button>
        </Section>

        <BackgroundImage src={BackgroundHome} alt="Glass window leading to a shop" />
      </Main>
    </React.Fragment>
  );
};