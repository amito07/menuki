const Banner = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-visible">
    <img
      src="/src/assets/images/cover.jpg"
      alt="bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <img
      src="/src/assets/brands/7.jpeg"
      alt=""
      className="absolute rounded-full translate-x-1/2 md:translate-y-1/3 bottom-0 border-4 border-green-500 transform translate-y-1/3"
    />
  </div>
  )
}

export default Banner