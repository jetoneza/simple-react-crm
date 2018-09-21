import Validator from 'validator';

export function validateLoginForm(data) {
  const errors = {};

  if (!data.password) {
    errors.password = 'Please provide a password.';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid email.';
  }

  return errors;
}

