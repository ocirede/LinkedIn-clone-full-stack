import React from 'react'
import Hero from '../components/Hero'
import Sidebar3 from '../components/Sidebar3'
import Sidebar1 from '../components/Sidebar1'
import Sidebar2 from '../components/Sidebar2'
import Posts from '../components/Posts'
import PostForm from '../components/PostForm'
export default function HomePage() {
  return (
    <>
    <div className="flex h-screen">
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-2 flex flex-col items-center">
            <Hero/>
            <Sidebar1 />
            </div>
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-1 flex flex-col items-center">
            <PostForm />
            <Posts />
            </div>
            <div style={{backgroundColor: "#F4F2EE"}} className=" w-2/6 p-2 flex flex-col items-center">
              <Sidebar3/>
              <Sidebar2/>
            </div>
      </div>
    </>
  )
}
