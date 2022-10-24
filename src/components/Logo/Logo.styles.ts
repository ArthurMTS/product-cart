import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LogoBox = styled(Link)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  gap: 5,
  "&:hover > p": {
    transition: "all .2s",
    color: "#1976D2",
  },
});

export const LogoText = styled(Typography)({
  fontSize: 24,
  color: "#353545",
  fontWeight: 700,
  textShadow: "2px 2px 2px #656575",
});