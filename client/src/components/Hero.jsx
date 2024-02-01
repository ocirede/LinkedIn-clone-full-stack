import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

const Hero = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white mt-6 p-6">
      <div className="flex flex-col items-center flex-grow">
        <img
          className="w-24 h-24 object-cover rounded-full mb-4"
          src= '/public/lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg'
          alt="Profile"
        />
        {user?(<div className="text-xl font-bold mb-2">{user.username}</div>):""}
        <p className="text-gray-700 text-sm">MERN Full Stack Developer</p>
      </div>
      <div className="mt-6 flex flex-col justify-between">
  <button className="bg-blue-600 rounded-full px-4 py-2 text-sm font-semibold text-white mb-2">
    Open to work
  </button>
  <button className="bg-blue-600 rounded-full px-4 py-2 text-sm font-semibold text-white mb-2">
    Add profile section
  </button>
  <button className="bg-blue-600 rounded-full px-4 py-2 text-sm font-semibold text-white mb-2">
    More...
  </button>
</div>


      <div className="flex flex-col items-center mt-4">
        <div className="h-6 w-2/3 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
          Open to work
        </div>
        <div className="h-6 w-2/3 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
          See who's hiring
        </div>
      </div>
    </div>
  );
};

export default Hero;
