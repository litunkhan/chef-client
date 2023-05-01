/* eslint-disable no-unused-vars */
import React from 'react';




const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold text-white mb-4">Mexican Recipes</h2>
          <ul className="list-disc text-gray-400 ml-4">
            <li>Tacos</li>
            <li>Burritos</li>
            <li>Enchiladas</li>
            <li>Quesadillas</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-xl font-bold text-white mb-4">Chips</h2>
          <ul className="list-disc text-gray-400 ml-4">
            <li>Tortilla Chips</li>
            <li>Salsa</li>
            <li>Guacamole</li>
            <li>Queso</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
            
            <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
            <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className='text-center text-white pt-14'>Copy-Right 2011</p>
    </footer>
  );
};

export default Footer;



