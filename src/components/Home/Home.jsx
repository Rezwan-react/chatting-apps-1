import React from 'react'
import { useSelector } from 'react-redux';


function Home() {

    // ============================ slice data part start
    
    const currentUserData= useSelector((state) => state.counter.value)
  
    

  return (
    <>



      <div className="container">
        <div className="flex min-h-screen items-center justify-center ">
          <div className="w-64 rounded-lg  border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
            <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full  bg-indigo-500 dark:bg-indigo-600">
              
            <img className=' rounded-full '  src={currentUserData?.photoURL} alt="Profile" />
        
            </figure>
            <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">{currentUserData?.displayName}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{currentUserData?.email}</p>
          
          </div>
        </div>
      </div>








     

    </>
  )
}

export default Home