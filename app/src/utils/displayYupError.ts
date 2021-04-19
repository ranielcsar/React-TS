import { ValidationError } from 'yup'

export function displayYupError(err: ValidationError) {
  if (err instanceof ValidationError) {
    alert(err.message)
  }
}
