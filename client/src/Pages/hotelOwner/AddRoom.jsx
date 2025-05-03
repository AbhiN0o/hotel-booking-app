import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

    const [images,setImages]=useState({
        1:null,
        2:null,
        3:null,
        4:null
    })

    const [input,setInput]=useState({
        roomType:"",
        pricePerNight:0,
        amenities:{
            "Free Wifi":false,
            "Free Breakfast":false,
            "Room Service":false,
            "Mountain View":false,
            "Pool Access":false,
        },
    })

  return (
    <form>
        <Title align={"left"} font={"outfit"} title={"Add Room"} subtitle={"Fill in the details carefully and accurate room details , pricing , and amenities, to enhance the user booking experience"}  />
        {/* Upload area for images */}
        <p className='text-gray-800 mt-10'></p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key)=>{
                return (
                    <label htmlFor={`roomImage${key}`} key={key} className=''>
                        <img src={images[key]? URL.createObjectURL(images[key]) : assets.uploadArea} className='max-h-13 cursor-pointer opacity-80'></img>
                        <input type='file' accept="image/*" id={`roomImage${key}`} hidden onChange={(e)=>{setImages({...images,[key]:e.target.files[0]})}}></input>
                    </label>
                )
            })}
        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
                <p className='text-gray-800 mt-4'>Room Type</p>
                <select onChange={(e)=>{setInput({...input,roomType:e.target.value})}} value={input.roomType} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                    <option value={""}>Select Room Type</option>
                    <option value={"Single Bed"}>Single Bed</option>
                    <option value={"Doube Bed"}>Double Bed</option>
                    <option value={"Luxury Room"}>Luxury Room</option>
                    <option value={"Family Suite"}>Family Suite</option>
                </select>
            </div>
            <div className='mt-4 text-gray-800'>
                <p>Price<span className='text-xs'>/night</span></p>
                <input type='text' placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.pricePerNight} onChange={(e)=>{setInput({...input,pricePerNight:e.target.value})}}></input>
            </div>
        </div>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(input.amenities).map((amenity,index)=>{
                return (
                    <div className='flex items-center' key={index}>
                        <input type='checkbox' id={`amenities${index+1}`} checked={input.amenities[amenity]} onChange={()=>{setInput({...input,amenities:{...input.amenities,[amenity]:!input.amenities[amenity]}})}}></input>
                        <label className='ml-1.5' htmlFor={`amenities${index+1}`} >{amenity}</label>
                    </div>
                )
            })}
        </div>
        <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>
            Add Room
        </button>
    </form>
  )
}

export default AddRoom
