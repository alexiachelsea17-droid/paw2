import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'

function PublicLayout() {
  return (
    <div>
        <h1>Header</h1>
        <ThemeSwap/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default PublicLayout