'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <header>
      <div className='flex flex-col md:flex-row pt-5 items-center bg-gray-500/10 rounded-b-2xl'>
        <div className='absolute top-0 w-full h-96 left-0 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50' />

        <Image
          className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
          src='/logo.png'
          width={300}
          height={100}
          alt='logo'
        />

        <div className='flex items-center space-x-5 flex-1 w-full justify-end'>
          {/* Search Box */}

          <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
            <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
            <input
              type='text'
              placeholder='Search'
              className='flex-1 outline-none p-2'
            />
            <button type='submit' hidden>Search</button>
          </form>

          <Avatar name='James' round size='50' color='#0055D1' />
        </div>
      </div>

      <div className='flex items-center justify-center px-5 p-2 md:py-5'>
        <p className='flex items-center text-sm font-light p-5 rounded-xl pr-5 shadow-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
          <UserCircleIcon className='w-10 h-10 inline-block text-[#0055D1] mr-1' />
          GPT is summarizing your day...
        </p>
      </div>
    </header>
  )
};

export default Header;