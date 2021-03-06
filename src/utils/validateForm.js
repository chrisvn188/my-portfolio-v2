export function validate(values) {
  let errors = {};

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.name) {
    errors.name = 'Name is required!';
  }

  if (!values.email) {
    errors.email = 'Email address is required!';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Email address is not valid!';
  }

  if (!values.subject) {
    errors.subject = 'Subject is required!';
  }

  if (!values.message) {
    errors.message = 'Message is required!';
  }

  return errors;
}
