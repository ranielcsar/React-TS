import React, { useState, MouseEvent } from 'react'
import PageContainer from '../../containers/PageContainer'
import {
  sum,
  subtraction,
  multiplication,
  division,
  addValueToNumber,
} from './utils'
import Button from '../../components/Button'
import {
  Container,
  CalcScreen,
  Keyboard,
  Numbers,
  Operations,
  EqualButton,
  ResetButton,
} from './styles'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const operations = ['+', '-', '/', '*']

const Calculator: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0)
  const [hasFirstNumber, setHasFirstNumber] = useState<boolean>(false)
  const [secondNumber, setSecondNumber] = useState<number>(0)
  const [operation, setOperation] = useState<string>('')
  const [result, setResult] = useState<number>()

  function handleButtonValue(evt: MouseEvent<HTMLButtonElement>) {
    let buttonValue = evt.currentTarget.innerHTML

    if (!firstNumber) setFirstNumber(parseInt(buttonValue))
    if (hasFirstNumber && !secondNumber) setSecondNumber(parseInt(buttonValue))

    if (firstNumber && !hasFirstNumber) {
      let newNumber = addValueToNumber(buttonValue, firstNumber)

      setFirstNumber(newNumber)
    }

    if (hasFirstNumber) {
      let newNumber = addValueToNumber(buttonValue, secondNumber)

      setSecondNumber(newNumber)
    }

    switch (buttonValue) {
      case '+':
        setOperation(buttonValue)
        setHasFirstNumber(true)
        return
      case '-':
        setOperation(buttonValue)
        setHasFirstNumber(true)
        return
      case '*':
        setOperation(buttonValue)
        setHasFirstNumber(true)
        return
      case '/':
        setOperation(buttonValue)
        setHasFirstNumber(true)
        return
      default:
        return
    }
  }

  function handleResult() {
    let result = 0

    switch (operation) {
      case '+':
        result = sum(firstNumber, secondNumber)
        setResult(result)
        return
      case '-':
        result = subtraction(firstNumber, secondNumber)
        setResult(result)
        return
      case '*':
        result = multiplication(firstNumber, secondNumber)
        setResult(result)
        return
      case '/':
        result = division(firstNumber, secondNumber)
        setResult(result)
        return
      default:
        return
    }
  }

  function handleReset() {
    setOperation('')
    setFirstNumber(0)
    setSecondNumber(0)
    setResult(0)
    setHasFirstNumber(false)
  }

  return (
    <PageContainer title={'Calculator'}>
      <Container>
        <CalcScreen>
          {firstNumber} {operation} {hasFirstNumber && secondNumber}
          {result && result > 0 ? <p> = {result}</p> : ''}
        </CalcScreen>
        <Keyboard>
          <Numbers>
            {numbers.map((number) => (
              <Button key={number} label={number} onClick={handleButtonValue} />
            ))}
            <EqualButton onClick={handleResult}>=</EqualButton>
          </Numbers>

          <Operations>
            <ResetButton onClick={handleReset}>C</ResetButton>
            {operations.map((operation, index) => (
              <Button
                key={index}
                label={operation}
                onClick={handleButtonValue}
              />
            ))}
          </Operations>
        </Keyboard>
      </Container>
    </PageContainer>
  )
}

export default Calculator
