import React from "react";
import { Link } from "./IconLink.styles";

interface IconLinkProps {
  to: string;
  icon: string;
  alt?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ to, icon, alt }) => (
  <Link href={to} target="_blank">
    <img src={icon} alt={alt || ""} />
  </Link>
);
