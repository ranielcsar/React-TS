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

  const getInputValues = useCallback(() => {
    const form: any = formRef.current
    const nodes = form.childNodes
    let newValues = {} as Input

    for (let node of nodes) {
      let newNode = [].slice.call(node.children)

      const input = newNode.find((node: Input) => node.name !== undefined) || ({} as Input)

      if (input.name) {
        newValues = {
          ...newValues,
          [input.name]: input.value,
        }
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
