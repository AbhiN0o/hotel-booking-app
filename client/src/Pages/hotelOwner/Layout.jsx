import React from 'react'
import NavBarOwner from '../../components/hotelOwner/NavBarOwner'
import SidebarOwner from '../../components/hotelOwner/SidebarOwner'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBarOwner/>
      <div className='flex h-full'>
        <SidebarOwner />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
