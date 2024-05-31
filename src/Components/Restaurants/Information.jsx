import {
  ArchiveBoxIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
const Information = () => {
  return (
    <div className="mt-20 grid grid-cols-12 mb-10 p-3 md:p-0">
      <div className="col-span-12 lg:col-start-3 lg:col-span-4 space-y-2">
        <h1 className="text-4xl font-bold text-white">Kacchi Bhai</h1>
        <span className="flex items-center text-white font-semibold gap-x-2">
          <MapPinIcon className="w-4" color="orange" /> Mirpur 1, Dhaka
        </span>
        <span className="flex items-center text-white font-semibold gap-x-2">
          {" "}
          <ArchiveBoxIcon className="w-4" color="green" />
          Tk 50 Minimum
        </span>
        <span className="flex items-center text-white font-semibold gap-x-2">
          {" "}
          <StarIcon className="w-4" color="yellow" />
          3.4/5 (20)
        </span>
      </div>
    </div>
  );
};

export default Information;
