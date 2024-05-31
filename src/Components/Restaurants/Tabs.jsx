const Tabs = () => {
  return (
    <div className="container mx-auto mb-10">
        <nav>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <a href="#" className="nav-link2 text-white font-semibold p-4 rounded-lg hover:bg-green-500 hover:bg-opacity-25 transition-all duration-500">Popular (1)</a>
                <a href="#" className="nav-link2 text-white font-semibold ml-4 p-4 rounded-lg hover:bg-green-500 hover:bg-opacity-25 transition-all duration-500">Rice (3)</a>
                <a href="#" className="nav-link2 text-white font-semibold ml-4 p-4 rounded-lg hover:bg-green-500 hover:bg-opacity-25 transition-all duration-500">Beverage (1)</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Tabs