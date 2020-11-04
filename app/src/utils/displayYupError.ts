import * as Yup from 'yup'

export function displayYupError(err: Yup.ValidationError) {
  if (err instanceof Yup.ValidationError) {
    alert(err.message)
  }
}