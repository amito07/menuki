import RestaurantCard from "./RestaurantCard";
import { brandLists } from "../utils/brandList";
const Restaurants = () => {
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl">All Restaurant</h1>
      </div>
      <div className="flex justify-center lg:justify-evenly">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 max-w-screen-lg">
        {brandLists.map((brand, index) => (
          <RestaurantCard
            key={index}
            img={brand.img_url}
            restaurant_name={brand.restaurant_name}
            rate={brand.rate}
            reviewed_person={brand.reviewed_person}
            restaurant_type={brand.restaurant_type}
            time={brand.time}
            delivery_option={brand.delivery_option}
          />
        ))}
      </div>

      </div>
    </div>
  );
};

export default Restaurants;
