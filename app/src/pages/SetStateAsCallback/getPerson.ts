import { Dispatch } from 'react'
import { PersonProps } from './Person'

export default async function getPerson(setPersonCallback: Dispatch<PersonProps>) {
  const newPerson = await fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => data.results[0])
    .catch((err) => console.log(err))

  setPersonCallback(newPerson)
}
