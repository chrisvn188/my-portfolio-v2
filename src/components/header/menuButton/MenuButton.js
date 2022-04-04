import { FaBars } from 'react-icons/fa';

export const MenuButton = ({ handleShowNav }) => {
  return (
    <button
      className='text-2xl text-slate-100 lg:hidden'
      onClick={handleShowNav}>
      <FaBars />
    </button>
  );
};
