import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const Main = styled("main")({
  width: "100%",
  padding: "120px 10vw 0 10vw",
  display: "flex",
  flexDirection: "column",
});

export const CartText = styled(Typography)({
  fontSize: 26,
  fontWeight: 600,
  lineHeight: "39px",
  letterSpacing: 0,
  color: "#353545",
});

export const CartContent = styled("section")({
  display: "flex",
  gap: "1vw",
});

export const CartProducts = styled("div")({
  width: "50vw",
  //height: "70vh",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  //overflow: "scroll",
});

export const CartSummary = styled("div")({
  paddingTop: 20,
  borderRadius: 5,
  width: "40vw",
  height: "40vh",
  backgroundColor: "#FFFFFF",
  position: "relative",
});

export const SummaryItem = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  justifyContent: "space-between",
  "&:nth-child(3)": {
    marginTop: 50,
  },
});

export const SummaryLabel = styled(Typography)({
  fontWeight: 400,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const SummaryValue = styled(Typography)({
  fontWeight: 600,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const BuyButton = styled(Button)({
  width: "100%",
  height: 40,
  position: "absolute",
  bottom: 0,
});