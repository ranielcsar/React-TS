import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Counter } from './index'
import { TestIDs } from './test-ids'
import '@testing-library/jest-dom'

afterEach(cleanup)

const defaultProps = {
  initialValue: 0
}

function counterRenderTest() {
  render(<Counter {...defaultProps} />)
  const counterElement = screen.getByTestId(TestIDs.Counter)
  expect(counterElement).toBeInTheDocument()
  expect(counterElement).toHaveTextContent('0')
}

function counterIncrementTest() {
  render(<Counter {...defaultProps} />)
  const buttonElement = screen.getByTestId(TestIDs.Increment)
  fireEvent.click(buttonElement)

  const counterElement = screen.getByTestId(TestIDs.Counter)
  const countValue = Number(counterElement.textContent)

  expect(countValue).toEqual(1)
}

function counterDecrementTest() {
  render(<Counter {...defaultProps} />)
  const buttonElement = screen.getByTestId(TestIDs.Decrement)
  fireEvent.click(buttonElement)

  const counterElement = screen.getByTestId(TestIDs.Counter)
  const countValue = Number(counterElement.textContent)

  expect(countValue).toEqual(0)
}

function counterResetTest() {
  render(<Counter {...defaultProps} />)
  const buttonElement = screen.getByTestId(TestIDs.Reset)
  fireEvent.click(buttonElement)

  const counterElement = screen.getByTestId(TestIDs.Counter)
  const countValue = Number(counterElement.textContent)

  expect(countValue).toEqual(0)
}

describe('Counter', () => {
  it('counter displays correct initial value', counterRenderTest)

  it(
    'counter should increment by 1 if increment button is click',
    counterIncrementTest
  )

  it(
    'counter should decrement by 1 if decrement button is click',
    counterDecrementTest
  )

  it('counter should reset value to 0', counterResetTest)
})
