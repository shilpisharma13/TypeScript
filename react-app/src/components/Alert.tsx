interface AlertProps {
  message: string
  onClose: () => void
}

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <>
      <div
        className='alert alert-warning alert-dismissible fade show'
        role='alert'
      >
        <strong>{message}</strong>{' '}
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
          onClick={onClose}
        ></button>
      </div>
    </>
  )
}
export default Alert
