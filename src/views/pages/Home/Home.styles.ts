import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Main = styled("main")({
  marginTop: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10vw",
  "@media only screen and (max-width: 620px)": {
    "& img": {
      display: "none",
    },
    "&": {
      justifyContent: "center",
    },
    "& > section": {
      height: "calc(100vh - 100px)",
    },
  },
  "@media only screen and (max-width: 350px)": {
    "& p:first-child": {
      fontSize: 26,
    },
    "& p:nth-child(2)": {
      fontSize: 16,
    },
  },
});

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled(Typography)({
  fontSize: 36,
  color: "#1976D2",
  fontWeight: 700,
});

export const Subtitle = styled(Typography)({
  fontSize: 20,
  color: "#222",
  marginBottom: 10,
  textAlign: "center",
});

export const BackgroundImage = styled("img")({
  height: "calc((100vh - 160px))",
  width: "40vw",
  borderRadius: 5,
  boxShadow: "5px 5px 10px #222",
});
