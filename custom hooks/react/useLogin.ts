import { RefObject, useRef, useState, FormEvent, useCallback } from 'react'

type Input = {
  name: string
  value: string
}

type FormRef = HTMLFormElement

const initFormRef = {} as RefObject<FormRef>
const BUTTON_TAG_NAME = 'BUTTON'
const INPUT_TAG_NAME = 'INPUT'

function useLogin() {
  const formRef = useRef(initFormRef)
  const [values, setValues] = useState({})

  const getNewValue = useCallback((newNode: any) => {
    /* prettier-ignore */
    if (newNode.tagName === INPUT_TAG_NAME && newNode.name) {
      return {
        [newNode.name]: newNode.value
      }
    }

    const input = newNode.find((node: Input) => node.name !== undefined) || ({} as Input)

    if (input.name) {
      return {
        [input.name]: input.value,
      }
    }

    return
  }, [])

  const verifyNodes = useCallback((node: any, newNodeList: any) => {
    return newNodeList.length === 0
      ? node.tagName !== BUTTON_TAG_NAME
        ? node
        : newNodeList
      : newNodeList
  }, [])

  const getInputValues = useCallback(() => {
    const form: any = formRef.current
    const nodes = form.childNodes
    let newValues = {} as Input

    for (let node of nodes) {
      const newNodeList = [].slice.call(node.children)
      const newNode = verifyNodes(node, newNodeList)
      const newValue = getNewValue(newNode)

      newValues = {
        ...newValues,
        ...newValue,
      }
    }

    setValues(newValues)
  }, [getNewValue, verifyNodes])

  /* prettier-ignore */
  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    getInputValues()
  }, [getInputValues])

  return { formRef, onSubmit, values }
}

export default useLogin
