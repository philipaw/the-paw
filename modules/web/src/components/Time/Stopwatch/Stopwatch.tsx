import React, { useState, useEffect } from 'react'

export const Stopwatch = () => {
  const [time, setTime] = useState<number>(0.0)
  const [isTicking, setIsTicking] = useState<boolean>(false)

  useEffect(() => {
    if (isTicking) {
      const stopwatch = setTimeout(() => setTime(time + 0.01), 10)
      return () => clearTimeout(stopwatch)
    }
  }, [isTicking, setTime, time])

  const isResetable: boolean = !isTicking && time > 0

  return (
    <>
      <div>{time.toFixed(2)}</div>
      <div
        onClick={() => {
          setIsTicking(!isTicking)
        }}
      >
        {isTicking ? 'stop' : 'start'}
      </div>
      {isResetable && <div onClick={() => setTime(0.0)}>reset</div>}
    </>
  )
}
