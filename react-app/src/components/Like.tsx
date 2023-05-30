import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// interface LikeProps {
//   fill: () => void
// }

const Like = () => {
  const [fill, setFill] = useState(false)

  return (
    <div>
      Like
      {fill ? (
        <AiFillHeart color='red' size='40px' onClick={() => setFill(!fill)} />
      ) : (
        <AiOutlineHeart
          color='red'
          size='40px'
          onClick={() => setFill(!fill)}
        />
      )}
    </div>
  )
}
export default Like
