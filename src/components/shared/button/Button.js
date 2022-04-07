const styles = {
  button:
    'text-xl text-brand-violet bg-brand-yellow px-6 py-3 rounded-full hover:-translate-y-2 transition-all',
};

export const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
