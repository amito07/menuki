<<<<<<< HEAD
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
=======
'use client';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { sliders } from '@/app/utils/fakeData';
import { categories } from '@/app/utils/fakeCategory';
import TextField from '@mui/material/TextField';
import { Card, CardHeader, CardMedia, Collapse, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { fakeFoods } from '@/app/utils/fakeFood';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RestaurantPage = ({ params }) => {
    const { id } = params;
    const [restaurantName, setRestaurantName] = useState('');
    const [coverImgUrl, setCoverImgUrl] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [foods, setFoods] = React.useState([]);
    const [showFood, setShowFood] = React.useState([]);
    const [expanded, setExpanded] = React.useState([]);
    const selectedCategoryStyle = {
        backgroundColor: 'orange',
        color: '#fff',
        border: 'none',
        borderRadius: '5%',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
    };
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        if (category) {
            const selectedCategoryFood = [];
            foods.map((food) => {
                if (food.category === category) {
                    selectedCategoryFood.push(food);
                }
            });
            setShowFood(selectedCategoryFood);
        } else {
            setShowFood(foods);
        }
    };
    const loadCategories = (Foods) => {
        const categories = [];
        Foods.map((food) => categories.push(food.category));
        const newCategories = new Set(categories);
        setCategoryList(Array.from(newCategories));
    };

    const handleExpandClick = (index) => {
        const newExpandedList = [...foods];
        newExpandedList[index].expanded = !newExpandedList[index].expanded;
        setExpanded(newExpandedList);
    };

    const handleFoodSearch = (e) =>{
        const newSearchedfoods = foods.filter(food=> (food.name.toLowerCase()).includes(e.target.value.toLowerCase()));
        setShowFood(newSearchedfoods);
    }   

    const fetchFoodData = async (id) => {
        const res = await fetch(`${process.env.base_url}/api/restaurant/${id}`);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setRestaurantName(data.restaurant_name);
            setCoverImgUrl(data.restaurant_img_url);
            data?.food_list.map((food) => (food.expanded = false));
            loadCategories(data.food_list);
            setFoods(data.food_list);
            setShowFood(data.food_list);
        }
    };
    useEffect(() => {
        fetchFoodData(id);
    }, []);
    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginTop: '80px', marginLeft: '0px' }}>
                {coverImgUrl && (
                    <img
                        src={`${process.env.base_url}${coverImgUrl}`}
                        alt=""
                        style={{
                            width: '98vw',
                            backgroundSize: 'cover',
                            height: '40vh',
                            borderRadius: '25px',
                            margin: '10px',
                        }}
                    />
                )}
            </div>
            <div style={{ marginTop: '5px', paddingLeft: '15px' }}>
                <h1>Dishes</h1>
            </div>
            <div
>>>>>>> a8f4fa6ea65bc2d3ce441b35126218da1933aca8
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "0px",
                  paddingTop: "10px",
                }}
<<<<<<< HEAD
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
=======
            >
                <div style={{ display: 'flex' }}>
                    <h3
                        style={
                            selectedCategory === ''
                                ? {
                                      ...selectedCategoryStyle,
                                      paddingLeft: '10px',
                                      paddingRight: '10px',
                                      marginTop: '0px',
                                  }
                                : { marginLeft: '10px', marginRight: '10px', marginTop: '10px' }
                        }
                        onClick={(e) => handleCategorySelect('')}
                    >
                        All
                    </h3>
                    {categoryList &&
                        categoryList.map((category) => (
                            <h3
                                style={{
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    marginTop: '0px',
                                    paddingTop: '10px',
                                }}
                                onClick={(e) => handleCategorySelect(category)}
                            >
                                <span style={selectedCategory == category ? selectedCategoryStyle : {}}>
                                    {category}
                                </span>
                            </h3>
                        ))}
                </div>
                <div style={{ marginTop: '0px' }}>
                    <TextField id="outlined-basic" label="Search by Name" variant="outlined" size="small" onChange={handleFoodSearch}/>
                </div>
            </div>
            <div>
                <Grid container spacing={3} sx={{ justifyContent: 'center', marginTop: '5px' }}>
                    {showFood &&
                        showFood.map((food, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 180 }}
                                        image={`${process.env.base_url}${food.img_url}`}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {food.name ?? ''}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {food.desc ?? ''}
                                        </Typography>
                                        <div style={{ display: 'flex' }}>
                                            {food.discount_available == 1 ? (
                                                <Typography variant="body2" color="text.secondary">
                                                    <del>{`৳${food.actual_price}`}</del>
                                                </Typography>
                                            ) : (
                                                <Typography variant="body" color="text.primary">
                                                    {`৳${food.actual_price}`}
                                                </Typography>
                                            )}
                                            {food.discount_available == 1 ? (
                                                <Typography
                                                    variant="body"
                                                    color="text.primary"
                                                    sx={{ marginLeft: '5px' }}
                                                >
                                                    {`৳${food.discounted_price}`}
                                                </Typography>
                                            ) : (
                                                ''
                                            )}

                                            <ExpandMore
                                                expand={food.expanded}
                                                onClick={(e) => handleExpandClick(index)}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </div>
                                    </CardContent>
                                    <Collapse in={food.expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>Variants:</Typography>
                                            <hr />
                                            {food?.variants.map((vari, index) => (
                                                <div
                                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                                    key={index}
                                                >
                                                    <Typography variant="h6">{vari.variant}</Typography>
                                                    <div style={{ display: 'flex', marginTop: '3px' }}>
                                                        {food.discount_available == 1 ? (
                                                            <Typography variant="body2" color="text.secondary">
                                                                <del>{vari.actual_price}</del>
                                                            </Typography>
                                                        ) : (
                                                            ''
                                                        )}
                                                        <Typography
                                                            variant="body"
                                                            color="text.primary"
                                                            style={{ marginLeft: '5px' }}
                                                        >
                                                            {food.discount_available == 1
                                                                ? vari.discounted_price
                                                                : vari.actual_price}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            ))}
                                            <hr />
                                            <Typography paragraph>{food.desc}</Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </div>
>>>>>>> a8f4fa6ea65bc2d3ce441b35126218da1933aca8
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
