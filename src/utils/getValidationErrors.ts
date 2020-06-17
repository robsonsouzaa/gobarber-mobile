import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validadtionErros: Errors = {};

  err.inner.forEach((error) => {
    validadtionErros[error.path] = error.message;
  });

  return validadtionErros;
}
