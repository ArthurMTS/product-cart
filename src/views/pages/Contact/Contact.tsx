import React from "react";
import { Main } from "./Contact.styles";
import Facebook from "assets/icons/Facebook.svg";
import Linkedin from "assets/icons/Linkedin.svg";
import Mail from "assets/icons/Mail.svg";
import Phone from "assets/icons/Phone.svg";
import Twitter from "assets/icons/Twitter.svg";
import { Footer, Header, IconLink } from "components";

export const Contact: React.FC = () => (
  <React.Fragment>
    <Header />
    <Main>
      <IconLink
        to="https://www.youtube.com/watch?v=tvkxupwbFLk"
        icon={Facebook}
        alt="Facebook icon"
      />
      <IconLink
        to="https://www.youtube.com/watch?v=tvkxupwbFLk"
        icon={Linkedin}
        alt="Linkedin icon"
      />
      <IconLink
        to="https://www.youtube.com/watch?v=tvkxupwbFLk"
        icon={Twitter}
        alt="Twitter icon"
      />
      <IconLink
        to="https://www.youtube.com/watch?v=tvkxupwbFLk"
        icon={Mail}
        alt="Mail icon"
      />
      <IconLink
        to="https://www.youtube.com/watch?v=tvkxupwbFLk"
        icon={Phone}
        alt="Phone icon"
      />
    </Main>
    <Footer />
  </React.Fragment>
);
