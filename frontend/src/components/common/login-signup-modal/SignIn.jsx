import { Link } from 'react-router-dom'
import React from 'react'

const SignIn = () => {
  return (
    <form className='form-style1'>
      <div className='mb25'>
        <label className='form-label fw600 dark-color'>Email</label>
        <input
          type='email'
          className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
          placeholder='Enter Email'
          required
        />
      </div>
      {/* End email */}

      <div className='mb15'>
        <label className='form-label fw600 dark-color'>Password</label>
        <input
          type='text'
          className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded'
          placeholder='Enter Password'
          required
        />
      </div>
      {/* End Password */}

      <div className='checkbox-style1 block sm:flex items-center justify-between mb10'>
        <label className='custom_checkbox fz14 ff-heading'>
          Remember me
          <input type='checkbox' defaultChecked='checked' />
          <span className='checkmark' />
        </label>
        <a className='fz14 ff-heading' href='#'>
          Lost your password?
        </a>
      </div>
      {/* End  Lost your password? */}

      <div className='d-grid mb20'>
        <button className='ud-btn btn-thm' type='submit'>
          Sign in <i className='fal fa-arrow-right-long' />
        </button>
      </div>
      {/* End submit */}

      <div className='hr_content mb20'>
        <hr />
        <span className='hr_top_text'>OR</span>
      </div>

      <div className='d-grid mb10'>
        <button className='ud-btn btn-white' type='button'>
          <i className='fab fa-google' /> Continue Google
        </button>
      </div>
      <div className='d-grid mb10'>
        <button className='ud-btn btn-fb' type='button'>
          <i className='fab fa-facebook-f' /> Continue Facebook
        </button>
      </div>
      <div className='d-grid mb20'>
        <button className='ud-btn btn-apple' type='button'>
          <i className='fab fa-apple' /> Continue Apple
        </button>
      </div>
      <p className='dark-color text-center mb0 mt10'>
        Not signed up?{' '}
        <Link className='dark-color fw600' href='/register'>
          Create an account.
        </Link>
      </p>
    </form>
  )
}

export default SignIn
