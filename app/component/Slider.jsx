import { Paper, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { sliders } from "../utils/fakeData";

const Item = ({ item, isMobile }) => {
  return (
    <Paper sx={isMobile ? { height: "40vh" } : { height: "80vh" }}>
      <Image src={item.img_url} fill />
    </Paper>
  );
};

const Slider = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  return (
    <div style={isMobile ? { marginTop: "60px" } : { marginTop: "80px" }}>
      <Carousel>
        {sliders.map((item, i) => (
          <Item key={i} item={item} isMobile={isMobile} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
