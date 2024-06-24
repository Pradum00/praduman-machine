import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../utills/localStorageManager.js'
import { Navigate, Outlet } from 'react-router-dom';

export default function NotRequireUser() {
  const user = getItem(KEY_ACCESS_TOKEN);
  return (
    !user?<Outlet/>:<Navigate to="/"/>
  )
}  
