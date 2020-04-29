import React, { useState, useEffect } from 'react'

export const Timer = () => {
  const [time, setTime] = useState<number>(0.0)
  const [isTicking, setIsTicking] = useState<boolean>(false)

  useEffect(() => {
    if (isTicking) {
      const timer = setTimeout(() => setTime(time + 0.01), 10)
      return () => clearTimeout(timer)
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
