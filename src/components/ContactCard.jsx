import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className=" text-center p-1 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">IMPACGO SOLUTIONS</h2>
        <p className="mt-2 text-gray-600">info@impacgo.com</p>
        <p className="text-gray-600">+91-9866323418</p>
        <p className="mt-2 text-gray-600">No 9-29-19, Gupta Villa, Third Floor, Balaji Nagar</p>
        <p className="text-gray-600">Visakhapatnam - 530003</p>
      </div>
      <div className="flex justify-center p-4 bg-gray-100">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Impacgo Solutions on Facebook"
          className="mx-2 text-blue-600 hover:text-blue-800 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Impacgo Solutions on Twitter"
          className="mx-2 text-blue-400 hover:text-blue-600 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/impacgo-solutions-private-limited/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Impacgo Solutions on LinkedIn"
          className="mx-2 text-blue-700 hover:text-blue-900 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
