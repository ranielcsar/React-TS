import { Color } from './store/types'

const TOTAL_COLOR_VARIANTS = 9

export const generateAlternativeColors = (color: Color) => {
  const { hue, saturation, lightness } = color

  let newColors: string[] = []

  for (let i = 0; i < TOTAL_COLOR_VARIANTS; i++) {
    const lightnessStep = lightness === 0 ? lightness : (lightness + 10) / (i + 1.15)

    let newColor = `hsl(${hue}, ${saturation}%, ${Math.floor(lightnessStep)}%)`

    newColors.push(newColor)
  }

  return newColors
}

export const generateNewCss = (colors: string[]) => {
  const newCss = `${colors
    .map((color, index) => {
      return `
      --color-${index + 1}00: ${color};\n`
    })
    .join('\n')}
  `

  return `
  :root { \n
    ${newCss}
  }
`
}
