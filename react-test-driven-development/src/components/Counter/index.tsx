import { useState } from 'react'
import { TestIDs } from './test-ids'

import './styles.css'

export type CounterProps = {
  initialValue?: number
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [counter, setCounter] = useState(initialValue)

  const handleCounterIncrement = () =>
    setCounter((oldCounter) => oldCounter + 1)

  const handleCounterDecrement = () =>
    setCounter((oldCounter) => (oldCounter <= 0 ? 0 : oldCounter - 1))

  const resetCounter = () => setCounter(0)

  return (
    <section className="counter-section">
      <h1 className="counter-value" data-testid={TestIDs.Counter}>
        {counter}
      </h1>

      <section className="action-buttons">
        <button
          data-testid={TestIDs.Increment}
          className="counter-button"
          onClick={handleCounterIncrement}
        >
          Add +1
        </button>

        <button
          data-testid={TestIDs.Decrement}
          className="counter-button"
          onClick={handleCounterDecrement}
        >
          Remove -1
        </button>
      </section>

      <button
        data-testid={TestIDs.Reset}
        className="counter-button reset"
        onClick={resetCounter}
      >
        Reset
      </button>
    </section>
  )
}
