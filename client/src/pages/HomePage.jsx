import React from 'react'
import Sidebar1 from '../components/Sidebar1'
export default function HomePage() {
  return (
    <>
    <div className="flex h-screen">
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-4 flex flex-col items-center">
            <Sidebar1/>
            </div>
            <div className="flex-1 p-4 w-2/6">
            
            </div>
            <div className=" w-2/6 p-4 bg-gray-200 -z-10">

            </div>
            </div>
    </>
  )
}
