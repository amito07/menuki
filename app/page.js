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
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [discountPrice, setDiscountPrice] = useState([]);

  
  const fetchData = async () => {
    const result = await axios.get("http://menuki.noeticit.tech/api/restaurants");
    setData(result?.data);
    setAllRestaurant(result?.data?.all_restaurant);
    setDiscountPrice(result?.data?.discount_product);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const {all_restaurant, discount_product} = data

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <Slider />
      </div>
      <div style={divStyle}>
        <AboutSection />
      </div>
      <div style={divStyle}>
        <DiscountList discount_product={discountPrice} />
      </div>
      <div style={divStyle}>
        <AllRestaurant all_restaurant = {allRestaurant} />
      </div>
    </div>
  );
}
