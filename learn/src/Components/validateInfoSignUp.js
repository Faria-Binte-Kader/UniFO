export default function validateInfoSignUp(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = 'Please input username'
  }
  if (!values.email) {
    errors.email = 'Please input email'
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6at least of 6 characters';
  }

  if (!values.password2) {
    errors.password2 = 'Please enter the password again';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  if (values.usertype === 'Choose User-Type') { errors.usertype = 'Please choose user type'; }
  return errors;
}