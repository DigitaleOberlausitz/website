import { useEffect, useState } from "react"

type Position = {
  x: number
  y: number
}

export function useMousePosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })

  useEffect(() => {
    const update = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", update)

    return () => {
      window.removeEventListener("mousemove", update)
    }
  }, [])

  return position
}
