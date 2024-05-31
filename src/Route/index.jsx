import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Page/Home"
import RestaurantPage from "../Page/Restaurant"

const RouteComponent = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteComponent