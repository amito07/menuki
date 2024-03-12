import { brandLists } from "../utils/brandList";
const Partner = () => {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h3 className="font-bold text-2xl">Our Partner</h3>
      </div>
      <div className="flex flex-row gap-5">
        <marquee className="mt-6">
          <div className="flex gap-5 overflow-x-visible">
            {brandLists.map((brand, index) => (
              <img
                className="w-28 h-75"
                key={index}
                alt="brand"
                src={brand.img_url}
              />
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Partner;
