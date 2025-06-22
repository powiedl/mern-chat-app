import { useAuthContext } from '../../context/AuthContext';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';

const Sidebar = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <div className='flex flex-row justify-between mt-auto'>
        <LogoutButton />
        <span className='text-gray-300 text-sm font-semibold'>
          <em>{authUser?.fullName}</em>
        </span>
      </div>
    </div>
  );
};
export default Sidebar;
