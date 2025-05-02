import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";


export default function App(){
  const isOwnerPath=useLocation().pathname.includes("owner")

  return(
    <div>
      {isOwnerPath ?"": <Navigation />}
      <div className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/rooms" element={<AllRooms />} ></Route>
        <Route path="/rooms/:id" element={<RoomDetails />} ></Route>
        <Route path="/my-bookings" element={<MyBookings />} ></Route>
      </Routes>
      </div>
    <Footer />
    </div>
  )
}