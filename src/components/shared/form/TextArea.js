import { ErrorText } from './FormErrorText';

export const TextArea = ({ errorMessage, ...rest }) => {
  return (
    <div>
      <label className='block'>
        <span className='sr-only'>{rest.name}</span>
        <textarea
          className='p-3 rounded-3xl lg:p-4 text-base sm:text-lg md:text-xl block w-full'
          {...rest}
        />
      </label>
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  );
};
