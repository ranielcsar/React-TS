import { Dispatch } from 'react'

export type TPost = {
  title?: string
  subtitle?: string
}

export type State = {
  posts: TPost[]
}

export type TStore = {
  state: State
  dispatch: Dispatch<Action>
}

export type Action = {
  type: string
  post: TPost
}
