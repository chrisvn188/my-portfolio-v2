import React from 'react';

const MobileMenuList = ({ menuList, handleShowNav }) => {
  return (
    <ul className='space-y-10'>
      {menuList.map(item => (
        <MobileMenuItem
          key={item.tab}
          item={item}
          handleShowNav={handleShowNav}
        />
      ))}
    </ul>
  );
};

const MobileMenuItem = ({ item, handleShowNav }) => {
  return (
    <li className='text-right'>
      <a
        href={item.path}
        className='text-2xl text-slate-100 transition-all hover:underline items-center inline-block'
        onClick={handleShowNav}
        data-tab={item.tab}>
        <span className='uppercase'>{item.tab}</span>
      </a>
    </li>
  );
};

export default MobileMenuList;
