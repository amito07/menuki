import {
  MobilecardStyle,
  cardStyle,
  ggstyle,
  locationTagStyle,
  tag1Style,
  tag2Style,
} from "@/app/styles/restaurantCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Chip, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const RestaurantCard = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <>
      <div style={isMobile ? MobilecardStyle : cardStyle}>
        <div style={ggstyle}>
          <Image
            style={{ borderRadius: "5px" }}
            width={isMobile ? 400 : 280}
            height={200}
            src="/assets/images/discount/pro2.jpg"
          />
        </div>
        <div style={ggstyle}>
          <Typography variant="h4" gutterBottom>
            Chilox Restaurant
          </Typography>
        </div>
        <div style={ggstyle}>
          <Chip style={tag1Style} label="Pizza" />
          <Chip style={tag2Style} label="Burger" />
        </div>

        <div style={ggstyle}>
          <Chip
            style={locationTagStyle}
            label="Location: Mirpur 1 Sony Cinema Hall"
            icon={<LocationOnIcon style={{ color: "white" }} />}
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
