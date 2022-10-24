import { styled } from "@mui/system";

export const Link = styled("a")({
  transition: "all .2s",
  "&:hover": {
    transform: "scale(1.2)",
  },
  "& img": {
    height: 50,
    width: 50,
  },
});
