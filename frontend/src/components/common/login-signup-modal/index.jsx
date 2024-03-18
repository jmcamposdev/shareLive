import SignIn from './SignIn'
import SignUp from './SignUp'

const LoginSignupModal = () => {
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalToggleLabel'>
          Welcome to Realton
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='modal'
          aria-label='Close'
        />
      </div>
      {/* End header */}

      <div className='modal-body'>
        <div className='log-reg-form'>
          <div className='navtab-style2'>
            <nav>
              <div className='flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 mb20' id='nav-tab' role='tablist'>
                <button
                  className='inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t active fw600'
                  id='nav-home-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-home'
                  type='button'
                  role='tab'
                  aria-controls='nav-home'
                  aria-selected='true'
                >
                  Sign In
                </button>
                <button
                  className='inline-block py-2 px-4 no-underline border border-b-0 mx-1 rounded rounded-t fw600'
                  id='nav-profile-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-profile'
                  type='button'
                  role='tab'
                  aria-controls='nav-profile'
                  aria-selected='false'
                >
                  New Account
                </button>
              </div>
            </nav>
            {/* End nav tab items */}

            <div className='tab-content' id='nav-tabContent2'>
              <div
                className='tab-pane opacity-0 opacity-100 block active fz15'
                id='nav-home'
                role='tabpanel'
                aria-labelledby='nav-home-tab'
              >
                <SignIn />
              </div>
              {/* End signin content */}

              <div
                className='tab-pane opacity-0 fz15'
                id='nav-profile'
                role='tabpanel'
                aria-labelledby='nav-profile-tab'
              >
                <SignUp />
              </div>
              {/* End signup content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignupModal
