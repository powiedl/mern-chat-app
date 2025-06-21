const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form action=''>
          <div>
            <label className='label p-2' htmlFor='input_username'>
              <span className='text-base text-gray-700 label-text'>
                Username
              </span>
            </label>
            <input
              id='input_username'
              type='text'
              className='w-full input input-bordered h-10'
              placeholder='Enter username'
            />
          </div>
          <div>
            <label className='label p-2' htmlFor='input_password'>
              <span className='text-base text-gray-700 label-text'>
                Password
              </span>
            </label>
            <input
              id='input_password'
              type='password'
              className='w-full input input-bordered h-10'
              placeholder='Enter password'
            />
          </div>
          <a
            href='#'
            className='text-sm hover:underline text-blue-700 hover:text-blue-600 mt-2 inline-block'
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
