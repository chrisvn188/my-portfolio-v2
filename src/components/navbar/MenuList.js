import { MenuItem } from './MenuItem';

export const MenuList = ({ menuList }) => {
  return (
    <ul className='space-y-6'>
      {menuList.map(item => (
        <MenuItem key={item.tab} item={item} />
      ))}
    </ul>
  );
};
