import { GiNinjaHead } from 'react-icons/gi'

export const Logo = () => {
  return (
    <a className='group text-3xl flex gap-4' href='#hero'>
      <GiNinjaHead className='text-brand-yellow animate-bounce group-hover:animate-none' />
      <span className='text-slate-100'>CAB.</span>
    </a>
  )
}
