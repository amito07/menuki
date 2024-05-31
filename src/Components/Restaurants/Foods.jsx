import { FireIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import FoodModal from "./FoodModal";
const Foods = ({ title, sub_title, foods }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (
    <div className="container mx-auto mb-10">
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-12">
          <span className="flex items-center gap-x-2 font-bold text-white text-4xl">
            <FireIcon className="w-10" color="orange" />
            {title}
          </span>
          {sub_title && (
            <h1 className="text-white font-semibold mt-2">
              Most ordered right now.
            </h1>
          )}
        </div>
        {foods?.map((food, index) => {
          return (
            <>
              <div className="col-span-12 md:col-span-6 bg-black p-5 rounded-lg mt-6 hover:scale-110 transition-all duration-500 cursor-pointer" onClick={handleOpenModal}>
                <div className="flex justify-between">
                  <div className="text-white">
                    <h1 className="text-xl font-semibold">{food?.name}</h1>
                    <h1>{food?.value}</h1>
                    <p className="w-[90%] mt-2">
                      {food?.description}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={`/src/assets/restaurants/${1+index}.jpg`}
                      alt="food"
                      className="rounded-lg object-contain w-72"
                    />
                  </div>
                </div>
              </div>
              {showModal && (
              <FoodModal onClose={handleCloseModal}/>
            )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
