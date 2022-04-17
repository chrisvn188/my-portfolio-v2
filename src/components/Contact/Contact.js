import { useEffect, useState } from 'react'
import { Form } from '../Form/Form'
import { validate } from '../../utils/validateForm'
import { styles } from '../../styles/styles'
import emailjs from '@emailjs/browser'

const initialValues = { name: '', email: '', subject: '', message: '' }

const Contact = () => {
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

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
            console.log(result)
          },
          error => {
            console.log(error)
          }
        )
      setFormValues(initialValues)
      setIsSubmit(false)
    }
  }, [isSubmit, formValues, formErrors])

  function handleSubmit(e) {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  function handleChange(e) {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id='contact' className={styles.section('bg-brand')}>
      <h2>Get in touch</h2>
      <div className='mt-20 space-y-20 grid justify-items-center text-center'>
        <address>
          <h3>Let's talk</h3>
          <p>
            Email me:{' '}
            <a
              href='mailto:chrisbui.dev@gmail.com'
              target='_blank'
              rel='noreferrer'>
              chrisbui.dev@gmail.com
            </a>
          </p>
        </address>

        <div className='w-full sm:w-[30rem] md:w-[40rem] '>
          <h3 className='mb-4'>Or drop me a message</h3>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formErrors={formErrors}
            formValues={formValues}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
