const MenuItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.path}
        className='flex gap-4 text-xl text-slate-100 px-6 py-3 rounded-full transition-all hover:bg-brand-violet items-center'>
        <item.Icon />
        <span className='capitalize'>{item.tab}</span>
      </a>
    </li>
  )
}

export const MenuList = ({ menuList }) => {
  return (
    <ul className='space-y-6'>
      {menuList.map(item => (
        <MenuItem key={item.tab} item={item} />
      ))}
    </ul>
  )
}
