import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Image from "next/image";

const cardStyle = {
  maxWidth: 345,
  boxShadow: "-6px 12px 24px -7px rgba(0,0,0,0.75)",
  borderRadius: "2%",
};

const ggstyle = {
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
};

const CommonCard = () => {
  return (
    <div style={cardStyle}>
      <div style={ggstyle}>
        <Image
          style={{ borderRadius: "5px" }}
          width={310}
          height={250}
          src="/assets/images/discount/pro2.jpg"
        />
      </div>
      <div style={ggstyle}>
        <Typography variant="h5" gutterBottom>
          Cheese Burger
        </Typography>
      </div>
      <div style={ggstyle}>
        <Chip
          style={{ backgroundColor: "#34C840", color: "white" }}
          label="10% Discount"
        />
        <Chip
          style={{
            marginLeft: "4px",
            backgroundColor: "#FFBD00",
            color: "black",
          }}
          label="Takeout 2.0"
        />
      </div>
    </div>
  );
};

export default CommonCard;
