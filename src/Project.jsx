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
            <img src="image.png" alt="" className="object-cover w-full h-64 rounded-t-lg"/>
            <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">Student Profile</h2>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">Built a MERN app to display student details by class and department.Used a React form for real-time submissions.Stored records efficiently with MongoDB.</p>
            </div>
        </div>
    </div>
       </div>
       </>    
  )
}

export default project