import { styled } from "@mui/system";

export const Main = styled("main")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
  width: "100%",
  height: "100vh",
  background: "linear-gradient(#fff, #1976D2)",
  "@media only screen and (max-width: 375px)": {
    "&": {
      paddingTop: 100,
      flexDirection: "column",
    },
  },
});
