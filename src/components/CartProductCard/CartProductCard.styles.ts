import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled("div")({
  height: 100,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#FFFFFF",
});

export const ProductData = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  gap: 10,
});

export const TitleWrapper = styled("div")({
  
});

export const Image = styled("img")({
  height: 60,
  width: 60,
  cursor: "pointer",
});

export const Title = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": {
    color: "rgb(25, 118, 210)",
  },
});

export const Description = styled("div")({
  display: "flex",
  gap: 10,
});

export const Units = styled(Typography)({
  fontStyle: "italic",
  fontWeight: 500,
});

export const Price = styled(Typography)({
  fontStyle: "italic",
  fontWeight: 500,
});

export const ProductActions = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 10,
  paddingRight: 10,
  "& > div": {
    display: "flex",
    flexDirection: "column",
    marginRight: 15,
  },
});

export const DeleteIcon = styled("img")({
  cursor: "pointer",
});
