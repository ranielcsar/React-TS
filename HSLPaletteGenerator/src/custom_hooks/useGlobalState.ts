import { useContext } from 'react'
import { StoreContext } from '../store'
import { State } from '../store/types'

function useGlobalState(): State {
  const { state } = useContext(StoreContext)

  return state
}

export default useGlobalState
