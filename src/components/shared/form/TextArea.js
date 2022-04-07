import { ErrorText } from './FormErrorText';

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  cols,
  rows,
  errorMessage,
}) => {
  return (
    <div>
      <label className='block'>
        <span className='sr-only'></span>
        <textarea
          className='p-3 rounded-3xl lg:p-4 text-xl block w-full'
          cols={cols}
          rows={rows}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  );
};
