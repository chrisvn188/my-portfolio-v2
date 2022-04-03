import ErrorText from '../formErrorText/FormErrorText';

const FormInput = ({ name, onChange, placeholder, value, errorMessage }) => {
  return (
    <div>
      <label className='block'>
        <span className='sr-only'></span>
        <input
          className='p-3 rounded-full lg:p-4 text-xl block w-full'
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
      {/* <p className='text-brand-red text-sm'>{errorMessage}</p> */}
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  );
};

export default FormInput;
