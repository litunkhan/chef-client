/* eslint-disable no-unused-vars */
import React from 'react';
import errorimage from './404_page_cover.jpg'

const Error = () => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center h-screen">
      <img src={errorimage} alt="Error" className="w-40 h-40 mb-6" />
      <p className="text-xl font-medium mb-2">Page Not Found</p>
    </div>
        </div>
    );
};

export default Error;