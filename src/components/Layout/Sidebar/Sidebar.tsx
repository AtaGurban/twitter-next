import React, { FC } from 'react'
import {BsHouseFill, BsBellFill} from "react-icons/bs"
import {FaUser} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import SidebarItem from './SidebarItem'
import SidebarLogo from './SidebarLogo'
import SidebarTweetButton from './SidebarTweetButton'
import { MAIN_PAGE, NOTIFICATION_PAGE, USER_INFO_PAGE } from '@/utils/pathConsts'
const items = [
  {
    label: "Home",
    href: MAIN_PAGE,
    icon: BsHouseFill
  },
  {
    label: "Notifications",
    href: NOTIFICATION_PAGE,
    icon: BsBellFill
  },
  {
    label: "Profile",
    href: USER_INFO_PAGE.slice(-4),
    icon: FaUser
  },
]
const Sidebar:FC = () => {
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo/>
          {items.map((item)=>
            <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon}/>
          )
          }
          <SidebarItem onClick={()=>{}} icon={BiLogOut} label="Logout"/>
          <SidebarTweetButton/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar