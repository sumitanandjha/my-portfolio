import React, { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Profile Image */}
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-white cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src="sumit_profile.jpg" // Replace with your profile image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name */}
          <h1 className="text-xl font-bold">Sumit Anand Jha</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

        {/* Coding Profiles */}
        <div className="flex space-x-4">
          <a
            href="https://leetcode.com/u/jhasumitanand/" // Replace with your LeetCode profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            LeetCode
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/sumitsviqq/" // Replace with your GFG profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            GFG
          </a>
          <a
            href="https://www.naukri.com/code360/profile/8eb0be21-e175-4070-acd4-47d868423077" // Replace with your CodeStudio profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            CodeStudio
          </a>
        </div>
      </nav>

      {/* Modal for Enlarged Profile Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-4 rounded-lg">
            <img
              src="sumit_profile.jpg" // Replace with your profile image URL
              alt="Enlarged Profile"
              className="w-96 h-96 object-cover rounded-lg"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
