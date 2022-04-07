import { MenuList } from './MenuList';

export const Navbar = ({ menuList }) => {
  return (
    <nav className='hidden lg:block'>
      <MenuList menuList={menuList} />
    </nav>
  );
};
