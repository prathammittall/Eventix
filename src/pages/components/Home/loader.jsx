import React from 'react'

// Loader

function loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[300px] h-3.5 border border-white rounded-2xl'>
            <div className="inner-loader bg-white h-3.5 border rounded-2xl"></div>
            <p className='text-white text-center mt-3 text-[15px]'>Grabbing Events 🚀</p>
        </div>
    </div>
  )
}

export default loader