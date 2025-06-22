import { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }
    const conversation = conversations.find((c) =>
      c?.fullName?.toLowerCase()?.includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
    } else toast.error('No such user found');
  };
  return (
    <form
      className='flex items-center gap-2 justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search...'
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className='btn btn-circle bg-sky-500 text-white disabled:text-gray-500 disabled:bg-sky-800'
        disabled={search?.length < 3}
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};
export default SearchInput;
