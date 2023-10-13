import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueIshColor">
          <strong>Career</strong>XSearch</h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Companies</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueIshColor">Register</li>
      </div>
    </div>
  )
}

export default NavBar