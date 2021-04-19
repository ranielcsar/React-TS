import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import useGlobalState from '../../custom_hooks/useGlobalState'

import { Input } from './styles'

export interface RangeInputProps extends HTMLInputElement {
  onChange: (event: BaseSyntheticEvent) => void
  thumbBgColor?: string
}

const RangeInput: React.FC<RangeInputProps> = ({ onChange, ...rest }) => {
  const [thumbBgColor, setThumbBgColor] = useState<string>('')
  const { color } = useGlobalState()

  useEffect(() => {
    setThumbBgColor(`hsl(${color.hue}, 100%, 50%)`)
  }, [color.hue])

  return <Input thumbBgColor={thumbBgColor} {...{ onChange }} {...rest} />
}

export default RangeInput
