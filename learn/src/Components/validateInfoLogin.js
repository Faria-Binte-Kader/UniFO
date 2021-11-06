export default function validateInfoLogin(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Please input email'
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }
  return errors;
}