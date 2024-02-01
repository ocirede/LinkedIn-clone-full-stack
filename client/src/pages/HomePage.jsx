import React from 'react'
import Sidebar1 from '../components/Sidebar1'
import Hero from '../components/Hero'
import Sidebar3 from '../components/Sidebar3'
export default function HomePage() {
  return (
    <>
    <div className="flex h-screen">
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-2 flex flex-col items-center">
            <Sidebar1/>
            </div>
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-1 flex flex-col items-center">
            <Hero/>
            </div>
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-2 flex flex-col items-center">
              <Sidebar3/>
            </div>
      </div>
    </>
  )
}
