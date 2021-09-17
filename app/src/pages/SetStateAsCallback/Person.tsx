import React from 'react'

export type PersonProps = {
  name: {
    title: string
    first: string
    last: string
  }
  email: string
}

export default function ({ name, email }: Partial<PersonProps>) {
  return (
    <div>
      <h1>
        {name?.title} {name?.first} {name?.last}
      </h1>
      <p>{email}</p>
    </div>
  )
}
