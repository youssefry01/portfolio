import React from 'react';

const Loading = () => {
  return (
    <main className='flex grow justify-center items-center'>

      {/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> */}
      <div className='flex w-full space-x-2 justify-center items-center bg-white h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>

    </main>
  )
}

export default Loading;