"use client";
import Nav from "@/app/component/Nav";
import { sliders } from "@/app/utils/fakeData";
import { fakeFoods } from "@/app/utils/fakeFood";
import { Card, CardMedia, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const RestaurantPage = ({ params }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foods, setFoods] = React.useState(fakeFoods);
  const selectedCategoryStyle = {
    backgroundColor: "#32ce4c",
    color: "#fff",
    border: "none",
    borderRadius: "5%",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const loadCategories = (fakeFoods) => {
    const categories = [];
    fakeFoods.map((food) => categories.push(food.category));
    const newCategories = new Set(categories);
    setCategoryList(Array.from(newCategories));
  };
  useEffect(() => {
    setFoods(fakeFoods);
    loadCategories(fakeFoods);
  }, [foods]);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginTop: "80px", marginLeft: "0px" }}>
        <img
          src={sliders[0].img_url}
          alt=""
          style={{
            width: "98vw",
            backgroundSize: "cover",
            height: "40vh",
            borderRadius: "25px",
            margin: "10px",
          }}
        />
      </div>
      <div style={{ marginTop: "5px", paddingLeft: "15px" }}>
        <h1>Dishes</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "10vw",
          marginRight: "10vw",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <h3
            style={
              selectedCategory === ""
                ? {
                    ...selectedCategoryStyle,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginTop: "0px",
                  }
                : { marginLeft: "10px", marginRight: "10px", marginTop: "10px" }
            }
            onClick={(e) => handleCategorySelect("")}
          >
            All
          </h3>
          {categoryList &&
            categoryList.map((category) => (
              <h3
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "0px",
                  paddingTop: "10px",
                }}
                onClick={(e) => handleCategorySelect(category)}
              >
                <span
                  style={
                    selectedCategory == category ? selectedCategoryStyle : {}
                  }
                >
                  {category}
                </span>
              </h3>
            ))}
        </div>
        <div style={{ marginTop: "0px" }}>
          <TextField
            id="outlined-basic"
            label="Search by Name"
            variant="outlined"
            size="small"
          />
        </div>
      </div>
      <div>
        <Nav/>
      </div>
      <div>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: "center", marginTop: "5px" }}
        >
          {foods &&
            foods.map((food, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image={food.img_url}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {food.name ?? ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group
                    </Typography>
                    <div style={{ display: "flex" }}>
                      <Typography variant="body2" color="text.secondary">
                        <del>{food.actual_price}</del>
                      </Typography>
                      <Typography
                        variant="body"
                        color="text.primary"
                        sx={{ marginLeft: "5px" }}
                      >
                        {food.actual_price}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default RestaurantPage;
