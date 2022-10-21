import { Button, styled, Typography } from "@mui/material";

export const Main = styled("main")({
  marginTop: 120,
  display: "flex",
  gap: "1vw",
  padding: "0 5vw",
});

export const Image = styled("img")({
  width: "20vw",
  borderRadius: 5,
  alignSelf: "flex-start",
});

export const DescriptionWrapper = styled("div")({
  width: "40vw",
  backgroundColor: "#FFFFFF",
  padding: 20,
  borderRadius: 5,
});

export const Title = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#222",
});

export const Rating = styled(Typography)({
  fontSize: 18,
  fontStyle: "italic",
  color: "#555",
});

export const Description = styled(Typography)({
  marginTop: 10,
  fontSize: 18,
  color: "#222",
  textAlign: "justify",
  textIndent: 50,
});

export const Aside = styled("div")({
  backgroundColor: "#FFFFFF",
  padding: 20,
  borderRadius: 5,
  alignSelf: "flex-start",
});

export const Price = styled(Typography)({
  textAlign: "center",
  fontSize: 26,
  fontWeight: 700,
  color: "#1976D2",
  display: "flex",
  flexDirection: "column",
  "& span": {
    fontSize: 20,
    color: "#222",
  },
});

export const AddButton = styled(Button)({
  marginTop: 10,
});
