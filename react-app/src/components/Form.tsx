import {  FieldValues, useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          id='name'
          {...register('name', { required: true, minLength: 3 })}
          className='form-control'
        />
        {errors.name?.type === 'required' && <p>name field is required</p>}
        {errors.name?.type === 'minLength' && (
          <p>name field should be more than 3 chars</p>
        )}
        <label htmlFor='name' className='form-label'>
          Age
        </label>
        <input
          type='number'
          id='name'
          {...register('age')}
          className='form-control'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  )
}
export default Form
