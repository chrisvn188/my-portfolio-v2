import React from 'react';
import MobileMenuList from './mobileMenuList/MobileMenuList';
import { FaTimes } from 'react-icons/fa';

const MobileNavbar = ({ menuList, handleShowNav }) => {
  return (
    <nav className='lg:hidden bg-brand-dark fixed top-0 right-0 h-screen w-full sm:w-[18rem] p-6 grid items-center z-10'>
      <button
        className='absolute top-[2.5rem] left-[1.5rem] text-2xl'
        onClick={handleShowNav}>
        <FaTimes />
      </button>
      <MobileMenuList menuList={menuList} handleShowNav={handleShowNav} />
    </nav>
  );
};

export default MobileNavbar;
