import { SocialItem } from './SocialItem';

export const SocialList = ({ socialLinks }) => {
  return (
    <ul className='justify-center gap-4 hidden lg:flex'>
      {socialLinks.map(item => (
        <SocialItem item={item} key={item.name} />
      ))}
    </ul>
  );
};
