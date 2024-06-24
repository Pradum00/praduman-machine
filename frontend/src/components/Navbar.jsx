// import React from 'react';
import { Link } from 'react-router-dom';
import { KEY_ACCESS_TOKEN,removeItem } from '../utills/localStorageManager';
import { FaUserAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
    const handleLogout=()=>{
      removeItem(KEY_ACCESS_TOKEN);
      navigate("/login");
    }
  return (
    <div className='h-12 w-full border-2 flex justify-between items-center'>
        <div className='text-lg font-bold italic'>
          <Link to="/">MXpertz</Link>
            
        </div>
        <div className='flex gap-8 mr-5 font-semibold'>
            <div><Link to="/create-student">students</Link></div>
            <div className='flex  justify-center items-center gap-2'>
             <FaUserAlt size={20}/>
            <div className='flex cursor-pointer items-center gap-1 bg-red-200 px-2 py-1 rounded-md' onClick={handleLogout}>
              <IoMdLogOut size={20}/>Logout
            </div>
            </div>
        </div>
       
       

    </div>
    
  )
}
