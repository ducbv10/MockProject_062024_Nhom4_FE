import React, { useState } from 'react';
import { FaBell, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Modal } from 'antd';
import LoginForm from '@/pages/Client/Auth/Login';
import 'tailwindcss/tailwind.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <header className="flex justify-between items-center p-4 bg-red-800 text-white h-24">
      <div className="flex items-center mr-4">
        <img src="logo" alt="Logo" className="w-24" />
      </div>
      <div className="block md:hidden" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`flex-grow ${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-start absolute md:static top-16 left-0 right-0 bg-red-800 md:bg-transparent text-center md:text-left`}>
        <ul className="flex flex-col md:flex-row list-none gap-6 md:gap-8">
          <li className="p-2">
            <a href="/" className="text-white font-semibold no-underline hover:underline">Home</a>
          </li>
          <li className="p-2">
            <a href="#introduction" className="text-white font-semibold no-underline hover:underline">Introduction</a>
          </li>
          <li className="p-2">
            <a href="#news" className="text-white font-semibold no-underline hover:underline">News</a>
          </li>
          <li className="p-2">
            <a href="#contact" className="text-white font-semibold no-underline hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FaSearch />
        </div>
        <div className="flex items-center gap-2">
          <FaShoppingCart />
          <span className="ml-2">Orders</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBell />
          <span className="ml-2">Notifications</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser />
          <span className="ml-2">
            <button onClick={showModal}>Sign In</button>
            <Modal
              visible={isModalOpen}
              onCancel={handleCancel}
              footer={null}
              className="modal-responsive"
            >
              <LoginForm />
            </Modal>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
