"use client";
import { CircularProgress } from "@mui/material";
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
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(
      "https://admin.noeticit.tech/api/restaurants"
    );
    setData(result?.data);
    setAllRestaurant(result?.data?.all_restaurant);
    setDiscountPrice(result?.data?.discount_product);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", marginTop: "2rem" }}>
            <Slider />
          </div>
          <div style={divStyle}>
            <AboutSection />
          </div>
          {discountPrice.length && (
            <div style={divStyle}>
              <DiscountList discount_product={discountPrice} />
            </div>
          )}
          <div style={divStyle}>
            <AllRestaurant all_restaurant={allRestaurant} />
          </div>
        </div>
      )}
    </>
  );
}
