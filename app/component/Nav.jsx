import { useMediaQuery } from "@mui/material";
import {
  contentStyle,
  logoStyle,
  logo_container,
  mobileLogoStyle,
  mobilenavbar,
  navbar,
} from "../styles/nav";
const Nav = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <nav style={isMobile ? mobilenavbar : navbar}>
      <div
        style={
          isMobile
            ? { ...logo_container, ...contentStyle }
            : { ...logo_container }
        }
      >
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          style={isMobile ? mobileLogoStyle : logoStyle}
        />
      </div>
    </nav>
  );
};

export default Nav;
