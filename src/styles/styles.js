const COLORS = ['violet', 'red', 'yellow']

export const styles = {
  section(backgroundColor = '', color = 'text-slate-100') {
    return `py-20 lg:min-h-screen px-6 sm:px-8 md:px-10 lg:px-12 ${backgroundColor} ${color} `
  },

  link(color) {
    const DEFAULT = COLORS[0]
    let backgroundColor

    if (!COLORS.includes(color)) {
      backgroundColor = DEFAULT
    }
    if (color === 'violet') {
      backgroundColor = 'bg-brand-violet'
    }
    if (color === 'red') {
      backgroundColor = 'bg-brand-red'
    }
    if (color === 'yellow') {
      backgroundColor = 'bg-brand-yellow'
    }

    return `flex items-center gap-2 text-xs sm:text-lg md:text-xl text-slate-100 px-5 py-2 lg:px-6 lg:py-3 rounded-full hover:-translate-y-2 transition-all active:-translate-y-1 inline-block ${backgroundColor}`
  },

  button(bgColor) {
    const DEFAULT = COLORS[0]
    let backgroundColor

    if (!COLORS.includes(bgColor)) {
      backgroundColor = DEFAULT
    }
    if (bgColor === 'violet') {
      backgroundColor = 'bg-brand-violet'
    }
    if (bgColor === 'red') {
      backgroundColor = 'bg-brand-red'
    }
    if (bgColor === 'yellow') {
      backgroundColor = 'bg-brand-yellow'
    }

    return `text-base sm:text-lg md:text-xl px-6 py-3 rounded-full hover:-translate-y-2 transition-all ${backgroundColor} text-slate-100`
  },
}
