import { ReactNode } from 'react'

interface MessageProps {
  children: ReactNode
}

export default function Message({ children }: MessageProps) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}
