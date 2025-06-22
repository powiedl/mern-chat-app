import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2' htmlFor='input_username'>
              <span className='text-base text-amber-500 label-text'>
                Username
              </span>
            </label>
            <input
              id='input_username'
              type='text'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className='w-full input input-bordered h-10'
              placeholder='Enter password'
            />
          </div>
          <Link
            to='/signup'
            className='text-sm hover:underline text-blue-700 hover:text-blue-600 mt-2 inline-block'
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner' /> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
