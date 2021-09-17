import React from 'react'
import { useEffect, useState } from 'react'
import Person, { PersonProps } from './Person'
import getPerson from './getPerson'

export default function () {
  const [person, setPerson] = useState({} as PersonProps)

  useEffect(() => {
    getPerson(setPerson)
  }, [])

  return <Person {...person} />
}
