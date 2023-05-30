interface ButtonProps {
  name: string
  handleClick: () => void
  color?: 'primary' | 'secondary'
}

const Button = ({ name, handleClick, color }: ButtonProps) => {
  return (
    <>
      <button
        type='button'
        className={'btn btn-' + color}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  )
}
export default Button
