import { Dispatch, useContext } from 'react'
import { StoreContext } from '../store'
import { Action } from '../store/types'

function useDispatch(): Dispatch<Action> {
  const { dispatch } = useContext(StoreContext)

  return dispatch
}

export default useDispatch
