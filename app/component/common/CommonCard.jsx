import { cardStyle, ggstyle } from "@/app/styles/commonCard";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Image from "next/image";

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
