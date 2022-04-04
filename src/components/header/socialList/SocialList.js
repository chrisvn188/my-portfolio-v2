export const SocialList = ({ socialLinks }) => {
  return (
    <ul className='justify-center gap-4 hidden lg:flex'>
      {socialLinks.map(item => (
        <SocialItem item={item} key={item.name} />
      ))}
    </ul>
  );
};

const SocialItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.url}
        target='_blank'
        rel='noreferrer'
        className='text-slate-100 w-[2rem] h-[2rem] flex items-center justify-center bg-brand-light rounded-full hover:-translate-y-2 transition-all hover:bg-brand-violet'>
        <item.icon />
      </a>
    </li>
  );
};
