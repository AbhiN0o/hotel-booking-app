import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./Pages/Homepage";


export default function App(){
  const isOwnerPath=useLocation().pathname.includes("owner")

  return(
    <div>
      {isOwnerPath ?"": <Navigation />}
      <div className="min-h-[70vh]">
      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
      </Routes>
      </div>
    </div>
  )
}