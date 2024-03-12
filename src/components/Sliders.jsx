import "react-responsive-carousel/lib/styles/carousel.min.css";
import { list } from "../utils/sliderItems";
import { Carousel } from "react-responsive-carousel";
const Sliders = () => {
  return (
    <div className="mt-16">
      <Carousel showThumbs={false} autoPlay={true}>
        {list.map((item, index) => (
          <div key={index}>
            <img className="w-96 h-64 object-cover scale-95" alt="slider" src={item.img_url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Sliders;
