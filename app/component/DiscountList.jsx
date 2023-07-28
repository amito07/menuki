import { Divider, Stack, Typography } from "@mui/material";
import { IoFastFood } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonCard from "./common/CommonCard";
const DiscountList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItem = {
    padding: "10px",
    marginLeft: "20px",
  };
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IoFastFood style={{ fontSize: "1.5rem" }} />
          <Typography variant="h5" gutterBottom>
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
          // autoPlaySpeed={500}
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
