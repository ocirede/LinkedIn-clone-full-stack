import React from 'react';

const Hero = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-6">
    <img className="w-full h-80 object-cover" src="/public/lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg" alt="Profile Image" />
    <div className="px-4 py-4">
      <div className="font-bold text-xl mb-2">FedeKos IbrAsh </div>
      <p className="text-gray-700 text-base">
        MERN Full Stack Developer at DCI Digital Career Institute | Open to new opportunities
      </p>
    </div>
    <div className="px-6 py-4">
  <button className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Open to</button>
  <button className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">Add profile Section</button>
  <button className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">More..</button>
</div>
<div className='flex items-center px-6 py-4 gap-3'>
    <div className='h-10 w-1/2 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold'>
        Open to work
    </div>
    <div className='h-10 w-1/2 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold'>
        See who's Hiring
    </div>
</div>
  </div>
  
  );
};

export default Hero;