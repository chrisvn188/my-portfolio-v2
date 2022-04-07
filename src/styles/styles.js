const COLORS = ['violet', 'red', 'yellow'];

export const styles = {
  section(backgroundColor = '') {
    return `py-20 lg:min-h-screen px-6 sm:px-8 md:px-10 lg:px-14 ${backgroundColor}`;
  },

  link(color) {
    const DEFAULT = COLORS[0];
    let backgroundColor;

    if (!COLORS.includes(color)) {
      backgroundColor = DEFAULT;
    }
    if (color === 'violet') {
      backgroundColor = 'bg-brand-violet';
    }
    if (color === 'red') {
      backgroundColor = 'bg-brand-red';
    }
    if (color === 'yellow') {
      backgroundColor = 'bg-brand-yellow';
    }

    return `text-xl text-slate-100 px-5 py-2 lg:px-6 lg:py-3 rounded-full hover:-translate-y-2 transition-all active:-translate-y-1 inline-block ${backgroundColor}`;
  },

  button(color) {
    const DEFAULT = COLORS[0];
    let backgroundColor;

    if (!COLORS.includes(color)) {
      backgroundColor = DEFAULT;
    }
    if (color === 'violet') {
      backgroundColor = 'bg-brand-violet';
    }
    if (color === 'red') {
      backgroundColor = 'bg-brand-red';
    }
    if (color === 'yellow') {
      backgroundColor = 'bg-brand-yellow';
    }

    return `text-xl text-brand-violet bg-brand-yellow px-6 py-3 rounded-full hover:-translate-y-2 transition-all ${backgroundColor}`;
  },
};
