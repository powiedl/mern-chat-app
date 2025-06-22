import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const { loading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2' htmlFor='input_fullname'>
              <span className='text-base text-amber-500 label-text'>
                Full Name
              </span>
            </label>
            <input
              id='input_fullname'
              type='text'
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className='w-full input input-bordered h-10'
              placeholder='Enter full name'
            />
          </div>
          <div>
            <label className='label p-2' htmlFor='input_username'>
              <span className='text-base text-amber-500 label-text'>
                Username
              </span>
            </label>
            <input
              id='input_username'
              type='text'
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              className='w-full input input-bordered h-10'
              placeholder='Enter username'
            />
          </div>
          <div>
            <label className='label p-2' htmlFor='input_password'>
              <span className='text-base text-amber-500 label-text'>
                Password
              </span>
            </label>
            <input
              id='input_password'
              type='password'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className='w-full input input-bordered h-10'
              placeholder='Enter password'
            />
          </div>
          <div>
            <label className='label p-2' htmlFor='input_confirm_password'>
              <span className='text-base text-amber-500 label-text'>
                Confirm password
              </span>
            </label>
            <input
              id='input_confirm_password'
              type='password'
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className='w-full input input-bordered h-10'
              placeholder='Repeat the password'
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to='/login'
            className='text-sm hover:underline text-blue-700 hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner' />
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
