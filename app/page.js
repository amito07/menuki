"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AboutSection from "./component/AboutSection";
import AllRestaurant from "./component/AllRestaurant";
import DiscountList from "./component/DiscountList";
import Slider from "./component/Slider";

const divStyle = {
  width: "100%",
  marginTop: "5rem",
};

export default function Home() {
  const [data, setData] = useState({});

  
  const fetchData = async () => {
    const result = await axios.get("http://menuki.noeticit.tech/api/restaurants");
    setData(result?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("data",data)
  const {all_restaurant, discount_product} = data
  console.log('GGG',all_restaurant)
  console.log('GGG123',discount_product)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <Slider />
      </div>
      <div style={divStyle}>
        <AboutSection />
      </div>
      <div style={divStyle}>
        <DiscountList discount_product={discount_product ? discount_product : []} />
      </div>
      <div style={divStyle}>
        <AllRestaurant all_restaurant = {all_restaurant ? all_restaurant : []} />
      </div>
    </div>
  );
}
