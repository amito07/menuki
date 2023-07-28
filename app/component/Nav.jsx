import { useMediaQuery } from "@mui/material";
const navbar = {
  backgroundColor: "#f2f2f2",
  height: "80px",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "100",
  width: "100%",
};

const mobilenavbar = {
  backgroundColor: "#f2f2f2",
  height: "60px",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "100",
  width: "85%",
};

const logo_container = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  maxHeight: "60px",
  margin: "auto",
};

const contentStyle = {
  justifyContent: "center",
  width: "100%",
};
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
        <img src="/assets/images/logo.png" alt="Logo" style={logoStyle} />
      </div>
    </nav>
  );
};

export default Nav;
