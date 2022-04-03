import React from 'react';
import MenuList from './menuList/MenuList';

const Navbar = ({ menuList }) => {
  return (
    <nav className='hidden lg:block'>
      <MenuList menuList={menuList} />
    </nav>
  );
};

export default Navbar;
