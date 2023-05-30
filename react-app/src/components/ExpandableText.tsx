import { useState } from 'react'

interface ExpandableTextProps {
  maxChars?: number
  children: string
}

const ExpandableText = ({ children, maxChars = 25 }: ExpandableTextProps) => {
  const [expand, setExpand] = useState(false)
  if (children.length <= maxChars) return <div>{children}</div>
  return (
    <div>
      {expand ? children : children.substring(0, maxChars) + '...'}{' '}
      <button onClick={() => setExpand(!expand)}>
        {expand ? 'Less' : 'More'}
      </button>
    </div>
  )
}
export default ExpandableText
