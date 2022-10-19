import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled("header")({
  width: "100%",
  height: 100,
  backgroundColor: "#FFF",
  padding: "0 50px",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  left: 0,
  top: 0,
});

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

export const NavBar = styled("nav")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});

export const NavLink = styled(Link)({
  fontFamily: "roboto, sans-serif",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: 18,
  color: "#222",
  "&:hover": {
    borderBottom: "2px solid #1976D2",
  },
  "&:nth-child(4)": {
    borderBottom: "none",
    transform: "scale(1.1)",
    display: "flex",
    justifyContent: "center",
    color: "#1976D2",
    gap: 5,
  },
});

export const UserAvatar = styled("img")({
  width: 50,
  height: 50,
  marginLeft: 20,
  borderRadius: "100%",
  border: "2px solid #1976D2",
});
