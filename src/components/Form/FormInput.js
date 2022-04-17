import { ErrorText } from './FormErrorText'

export const FormInput = ({ errorMessage, ...rest }) => {
  return (
    <div>
      <label className='block'>
        <span className='sr-only'>{rest.name}</span>
        <input
          className='p-3 rounded-full md:px-6 md:py-4 text-base sm:text-lg md:text-xl block w-full text-slate-700'
          {...rest}
        />
      </label>
      <ErrorText>{errorMessage}</ErrorText>
    </div>
  )
}
