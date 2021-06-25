import { RefObject, useRef, useState, FormEvent, useCallback } from 'react'

type Ref = HTMLFormElement

type Input = {
  name: string
  value: string
}

const initRef = {} as RefObject<Ref>

function useLogin() {
  const formRef = useRef(initRef)
  const [values, setValues] = useState({})

  const getNewValue = (newNode: any) => {
    if (newNode.length === 0) {
      if (newNode.name) {
        return {
          [newNode.name]: newNode.value,
        }
      }
    }

    const input = newNode.find((node: Input) => node.name !== undefined) || ({} as Input)

    if (input.name) {
      return {
        [input.name]: input.value,
      }
    }

    return
  }

  const getInputValues = useCallback(() => {
    const form: any = formRef.current
    const nodes = form.childNodes
    let newValues = {} as Input

    for (let node of nodes) {
      let newNode = [].slice.call(node.children)

      newValues = {
        ...newValues,
        ...getNewValue(newNode),
      }
    }

    setValues(newValues)
  }, [])

  /* prettier-ignore */
  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    getInputValues()
  }, [getInputValues])

  return { formRef, onSubmit, values }
}

export default useLogin
