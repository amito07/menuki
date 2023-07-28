"use client";
import AboutSection from "./component/AboutSection";
import AllRestaurant from "./component/AllRestaurant";
import DiscountList from "./component/DiscountList";
import Slider from "./component/Slider";

const divStyle = {
  width: "100%",
  marginTop: "5rem",
};

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <Slider />
      </div>
      <div style={divStyle}>
        <AboutSection />
      </div>
      <div style={divStyle}>
        <DiscountList />
      </div>
      <div style={divStyle}>
        <AllRestaurant />
      </div>
    </div>
  );
}
