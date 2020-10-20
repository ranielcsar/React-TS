export const sum = (a: number, b: number) => a + b

export const subtraction = (a: number, b: number) => a - b

export const multiplication = (a: number, b: number) => a * b

export const division = (a: number, b: number) => a / b

export function addValueToNumber(newValue: string, number: number): number {
  let stringNumber = number.toString()
  let result = stringNumber.split('').concat(newValue).join('')

  return parseInt(result)
}
