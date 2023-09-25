import React from 'react'
import Header from '../Header'
import SideMenu from '../SideMenu'
import { Outlet } from 'react-router-dom'

export default function Container() {
  return (
    <>
      <Header/>
      <div style = {{ display: 'flex' }}>
            <SideMenu />
            <Outlet />
      </div>
    </>
  )
}
