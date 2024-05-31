import Banner from "../Components/Restaurants/Banner";
import Deals from "../Components/Restaurants/Deals";
import Foods from "../Components/Restaurants/Foods";
import Information from "../Components/Restaurants/Information";
import Tabs from "../Components/Restaurants/Tabs";
import { FoodItems } from "../utils/function";

const RestaurantPage = () => {
  return (
    <div className="w-full">
      <Banner />
      <Information/>
      <Deals/>
      <Tabs/>
      {
        FoodItems?.map((item, index)=>{
          return (
            <Foods key={index} title={item.title} sub_title={item.sub_title} foods={item.foods}/>
          )
        })
      }
    </div>
  );
};

export default RestaurantPage;
