import React from 'react'

function project() {
  return (
    <>
    <div className='bg-black'><h2 className='text-white text-center text-4xl tracking-tight font-extrabold'>Projects</h2>
    <div className="grid grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 justify-between">
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className='w-full flex'><img src="Screenshot (54).png" alt="" className="object-cover w-1/2 h-64 rounded-t-lg"/>
            <img src="Screenshot (56).png" alt="" className="object-cover w-1/2 h-64 rounded-t-lg"/></div>
            <div className='w-full flex'><img src="Screenshot (55).png" alt="" className="object-cover w-full h-64 rounded-t-lg"/>
            <img src="Screenshot (57).png" alt="" className="object-cover w-full h-64 rounded-t-lg"/></div>



            <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-white">Unified Health</h2>
                <p className="text-sm leading-relaxed text-gray-300">Unified Healthcare is a website where we can store all the medical histories of an individual and access them easily using a digital health card with QR integration</p>
                <p className="text-sm leading-relaxed text-gray-300">Website link:"https://unified-healthcare.lavan.net.in"</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img src="https://images.unsplash.com/photo-1556740731-0d9f8d0e2fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="object-cover w-full h-64 rounded-t-lg"/>
            <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">Project 2</h2>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit nunc sed quam posuere, eget mollis felis sodales.</p>
            </div>
        </div>
    </div>
       </div>
       </>    
  )
}

export default project