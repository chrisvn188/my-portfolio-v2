import { FormInput } from './FormInput';
import { TextArea } from './TextArea';
import { Button } from '../button/Button';

export const Form = ({
  handleChange,
  handleSubmit,
  formValues,
  formErrors,
}) => {
  return (
    <form
      className='max-w-[40rem] gap-6 mt-20 space-y-6 mx-auto'
      onSubmit={handleSubmit}>
      <FormInput
        name='name'
        onChange={handleChange}
        placeholder='Your name'
        value={formValues.name}
        errorMessage={formErrors.name}
      />
      <FormInput
        name='email'
        onChange={handleChange}
        placeholder='Email Address'
        value={formValues.email}
        errorMessage={formErrors.email}
      />
      <FormInput
        name='subject'
        onChange={handleChange}
        placeholder='Subject'
        value={formValues.subject}
        errorMessage={formErrors.subject}
      />
      <TextArea
        name='message'
        onChange={handleChange}
        placeholder='Message'
        value={formValues.message}
        cols='30'
        rows='8'
        errorMessage={formErrors.message}
      />
      <Button type='submit' color='yellow'>
        Send
      </Button>
    </form>
  );
};
