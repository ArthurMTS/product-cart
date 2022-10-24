import { styled } from "@mui/system";

export const Main = styled("main")({
  width: "90vw",
  marginTop: 120,
  display: "flex",
  justifyContent: "center",
  gap: 20,
  flexWrap: "wrap",
  "@media only screen and (max-width: 320px)": {
    "&": {
      gap: 0,
    },
  },
});
