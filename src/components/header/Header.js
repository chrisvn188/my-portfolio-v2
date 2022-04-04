import React from 'react';
import Logo from '../shared/logo/Logo';
import Navbar from '../navbar/Navbar';
import { styles } from '../../styles/styles';
import { SocialList } from './socialList/SocialList';
import { MenuButton } from './menuButton/MenuButton';

const Header = ({ onMenuBtnClick, menuList, socialLinks, handleShowNav }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar menuList={menuList} />
      <SocialList socialLinks={socialLinks} />
      <MenuButton onClick={onMenuBtnClick} handleShowNav={handleShowNav} />
    </header>
  );
};

export default Header;
