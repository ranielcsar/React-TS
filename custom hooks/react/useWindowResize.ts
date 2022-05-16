import { useState, useEffect } from 'react'

type Dimensions = {
  width: number
  height: number
}

export function useWindowResize(): Dimensions {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleWidthAndHeightChange = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidthAndHeightChange)

    return () => window.removeEventListener('resize', handleWidthAndHeightChange)
  }, [])

  return { width, height }
}
