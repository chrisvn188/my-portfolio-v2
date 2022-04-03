import React from 'react';

const styles = {
  link(color) {
    let backgroundColor;
    if (color === 'violet') {
      backgroundColor = 'bg-brand-violet';
    } else if (color === 'red') {
      backgroundColor = 'bg-brand-red';
    } else {
      backgroundColor = '';
    }
    return `text-xl text-slate-100 px-5 py-2 lg:px-6 lg:py-3 ${backgroundColor} rounded-full hover:-translate-y-2 transition-all active:-translate-y-1 inline-block`;
  },
};

const Link = ({ children, color = '', href }) => {
  return (
    <a className={styles.link(color)} href={href}>
      {children}
    </a>
  );
};

export default Link;
