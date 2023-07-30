import { Divider, Stack, Typography } from "@mui/material";
import { IoFastFood } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselItem, responsive } from "../styles/discount";
import CommonCard from "./common/CommonCard";
const DiscountList = () => {
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IoFastFood style={{ fontSize: "1.5rem" }} />
          <Typography variant="h4" gutterBottom>
            Discount
          </Typography>
        </Stack>
      </div>
      <Divider />
      <div>
        <Carousel
          responsive={responsive}
          transitionDuration={500}
          autoPlay
          infinite
        >
          <div style={carouselItem}>
            <CommonCard />
          </div>

          <div style={carouselItem}>
            <CommonCard />
          </div>

          <div style={carouselItem}>
            <CommonCard />
          </div>

          <div style={carouselItem}>
            <CommonCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DiscountList;
