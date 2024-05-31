import { MapIcon, StarIcon } from "@heroicons/react/16/solid";
const Restaurant = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="absolute bottom-24 sm:bottom-12">
          <div className="h-1 w-20 bg-green-500" />
        </div>
        <h1 className="text-white text-4xl font-semibold">
          Our Renowned Restaurant
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-10">
          {[0, 1, 2, 4, 5, 7, 8, 9].map((item, i) => {
            return (
              <div
                key={i}
                className="bg-black text-white hover:bg-white hover:text-black p-1 rounded-lg transition-all duration-500 cursor-pointer"
              >
                <img
                  src={`/src/assets/restaurants/${i + 1}.jpg`}
                  alt="test"
                  className="w-full"
                />
                <div className="flex justify-between p-2">
                  <h1 className="font-bold text-2xl">Kacchi Bhai</h1>
                  <div className="flex flex-row gap-x-2 items-center">
                    <StarIcon color="orange" width={18} />
                    <span className="">5.0</span>
                    <span className="">(500)</span>
                  </div>
                </div>
                <div className="p-2">
                  <span className="text-green-500 font-bold">Fast-Food</span>
                  <span className="flex gap-x-2">
                    <MapIcon width={20} color="" />
                    <h1 className="">Dhaka</h1>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
