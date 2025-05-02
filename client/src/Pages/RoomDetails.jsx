import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const {id}=useParams();

    const [room,setRoom]=useState(null)
    const [mainImage,setMainImage]=useState(null)

    useEffect(()=>{
        const room= roomsDummyData.find(room=>room._id===id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* Room details */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20%Off</p>
        </div>

        <div className='flex items-center gap-1 mt-2'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
        </div>

        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt='ocation-icon' ></img>
            <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}

        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full '>
                <img src={mainImage} alt='room image' className='w-full rounded-xl shadow-lg'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length>1 && room.images.map((image,index)=>{
                    return (
                        <img onClick={()=>{setMainImage(image)}} src={image} alt='room-image' key={index} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'}`}></img>
                    )
                })}
            </div>
        </div>
        
        {/* room highlights */}

        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    Experience luxury like never before!
                </h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((amen,index)=>{
                        return (
                            <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100' key={index}>   
                                <img src={facilityIcons[amen]} alt={amen} className='w-5 h-5' />
                                <p className='text-xs'>{amen}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* room price */}
            <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>
        {/* Check in checkout form */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                    <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                        <div className='flex flex-col'>
                            <label htmlFor='checkInDate' className='font-medium' >Check-In</label>
                            <input type='date' id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required></input>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='checkOutDate' className='font-medium' >Check-Out</label>
                            <input type='date' id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required></input>
                        </div>
                        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                        <div className='flex flex-col'>
                            <label htmlFor='guests' className='font-medium' >Guests</label>
                            <input type='number' id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required></input>
                        </div>
                    </div>

                    <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                        Check Availability
                    </button>
        </form>
        {/* Common specifications */}
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec,index)=>{
                return(
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} className='w-6.5'></img>
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
            <p>Our hotel booking app makes it easy to find and reserve the perfect room for your stay. Whether you’re traveling for business or leisure, we offer comfortable, well-appointed rooms with modern amenities like free Wi-Fi, flat-screen TVs, air conditioning, and mini-bars. Each room is designed with relaxation in mind, featuring plush bedding and private bathrooms with high-quality toiletries. Enjoy added conveniences like 24/7 concierge service, on-site dining, and access to a fitness center, pool, and spa. With our app, booking your stay is simple, secure, and hassle-free, ensuring you have everything you need for a memorable experience.</p>
        </div>
        {/* Posted By */}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt='host' className='h-14 w-14 md:h-18 md:w-18 rounded-full'></img>
                <div>
                    <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                    <div className='flex items-center mt-1'>
                        <StarRating ></StarRating>
                        <p className='ml-2'>200+ reviews</p>
                    </div>
                </div>
            </div>
            <button className='px-6 py-2.5 mt-4 roudned text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
        </div>
    </div>
  )
}

export default RoomDetails
