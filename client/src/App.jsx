import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./Pages/hotelOwner/Layout";
import Dashboard from "./Pages/hotelOwner/Dashboard";
import AddRoom from "./Pages/hotelOwner/AddRoom";
import ListRoom from "./Pages/hotelOwner/ListRoom";


export default function App(){
  const isOwnerPath=useLocation().pathname.includes("owner")

  return(
    <div>
      {isOwnerPath ?"": <Navigation />}
      {/* <HotelReg /> */}
      <div className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/rooms" element={<AllRooms />} ></Route>
        <Route path="/rooms/:id" element={<RoomDetails />} ></Route>
        <Route path="/my-bookings" element={<MyBookings />} ></Route>
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-room" element={<AddRoom />} />
          <Route path="list-room" element={<ListRoom />} />
        </Route>
      </Routes>
      </div>
    <Footer />
    </div>
  )
}