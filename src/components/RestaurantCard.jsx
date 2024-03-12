import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { MdDeliveryDining } from "react-icons/md";
import PropTypes from 'prop-types';

const RestaurantCard = ({img, restaurant_name, rate, reviewed_person, restaurant_type, time, delivery_option}) => {
  return (
    <div className="mt-16 rounded-t-xl min-w-80 w-80">
    <div className="flex flex-col overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <img
        className="w-96 h-56 hover:scale-105 transition-all cursor-pointer object-cover rounded-t-xl hover:rounded-t-xl"
        alt="brand"
        src={img}
      />
      <div className="flex flex-row justify-between p-2">
        <h1 className="font-bold">{restaurant_name}</h1>
        <div className="flex flex-row items-center">
          <StarIcon className="w-5 h-5 text-yellow-400 border-orange-400" />
          <span>{rate}({reviewed_person})</span>
        </div>
      </div>
      <h1 className="font-semibold text-gray-400 p-2">{restaurant_type}</h1>
      <div className="mt-2 p-2 flex flex-row gap-1">
        <div className="flex flex-row items-center">
          <ClockIcon className="w-5 h-5" />
          <span>{time} min</span>
        </div>
        <div className="flex flex-row items-center">
          <MdDeliveryDining className="w-5 h-5" />
          <span>{delivery_option}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

RestaurantCard.propTypes = {
    img: PropTypes.string.isRequired,
    restaurant_name: PropTypes.string.isRequired,
    rate : PropTypes.number.isRequired,
    reviewed_person: PropTypes.number.isRequired,
    restaurant_type: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    delivery_option: PropTypes.string.isRequired
  }

export default RestaurantCard