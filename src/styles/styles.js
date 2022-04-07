export const styles = {
  wrapper: 'bg-brand text-slate-200',
  header:
    'flex justify-between py-8 px-6 items-center bg-brand lg:bg-brand-dark lg:fixed lg:w-[18rem] lg:h-screen lg:flex-col lg:z-10',
  main: 'lg:ml-[18rem]',
  headingTwo: 'text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest',
  headingThree:
    'text-xl lg:text-2xl capitalize text-brand-yellow tracking-widest',
  paragraph: 'text-xl lg:text-2xl max-w-[60ch]',
  section(backgroundColor = '') {
    return `py-20 lg:min-h-screen px-6 sm:px-8 md:px-10 lg:px-14 ${backgroundColor}`;
  },
};
