import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Main = styled("main")({
  marginTop: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10vw",
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
});

export const BackgroundImage = styled("img")({
  height: "calc((100vh - 100px))",
  width: "40vw",
  borderRadius: 5,
  boxShadow: "5px 5px 10px #222",  
});
