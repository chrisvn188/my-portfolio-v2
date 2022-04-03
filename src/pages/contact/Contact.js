import React, { useEffect, useState } from 'react';
import Button from '../../components/shared/button/Button';
import emailjs from '@emailjs/browser';
import { validate } from '../../utils/validateForm';
import FormInput from '../../components/shared/form/formInput/FormInput';
import TextArea from '../../components/shared/form/textArea/TextArea';
import { styles } from '../../styles/styles';

const initialValues = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          'service_q99fxo3',
          'template_7bjov2r',
          formValues,
          'AOSyLtRdz3HZPKQ82'
        )
        .then(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
        );
      setFormValues(initialValues);
      setIsSubmit(false);
    }
  }, [isSubmit, formValues, formErrors]);

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  function handleInputChange(e) {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section id='contact' className={styles.section('bg-brand-violet')}>
      <div>
        <h2 className={styles.headingTwo}>Get in touch</h2>
        <form
          className='max-w-[40rem] gap-6 mt-20 space-y-6 mx-auto'
          onSubmit={handleSubmit}>
          <FormInput
            name='name'
            onChange={handleInputChange}
            placeholder='Your name'
            value={formValues.name}
            errorMessage={formErrors.name}
          />
          <FormInput
            name='email'
            onChange={handleInputChange}
            placeholder='Email Address'
            value={formValues.email}
            errorMessage={formErrors.email}
          />
          <FormInput
            name='subject'
            onChange={handleInputChange}
            placeholder='Subject'
            value={formValues.subject}
            errorMessage={formErrors.subject}
          />
          <TextArea
            name='message'
            onChange={handleInputChange}
            placeholder='Message'
            value={formValues.message}
            cols='30'
            rows='8'
            errorMessage={formErrors.message}
          />
          <Button type='submit'>Send</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
