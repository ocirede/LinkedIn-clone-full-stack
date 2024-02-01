import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
const Hero = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-1/2 mx-auto rounded-xl overflow-hidden shadow-lg bg-white mt-6 p-10">
      <div className="flex flex-col items-center flex-grow">
        <img
          className="w-24 h-24 object-cover rounded-full mb-4"
          src='/public/lachlan-dempsey-6VPEOdpFNAs-unsplash.jpg'
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
      </div>
    </div>
  );
};
export default Hero;