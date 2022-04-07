import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from '../../components/shared/form/Form';
import { validate } from '../../utils/validateForm';
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

  function handleChange(e) {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section id='contact' className={styles.section('bg-brand-violet')}>
      <div className='space-y-20'>
        <h2 className={styles.headingTwo}>Get in touch</h2>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formErrors={formErrors}
          formValues={formValues}
        />
      </div>
    </section>
  );
};

export default Contact;
