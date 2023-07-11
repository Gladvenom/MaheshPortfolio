import React from 'react'
import arrayDestruct from "../assets/other/portfolio/arrayDestruct.jpg"
import installNode from "../assets/other/portfolio/installNode.jpg"
import reactParallax from "../assets/other/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/other/portfolio/reactSmooth.jpg"
import usestate from "../assets/other/portfolio/usestate.jpg"


const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:arrayDestruct
        },
        {
            id:2,
            src:installNode
        },
        {
            id:3,
            src:reactParallax
        },
        {
            id:4,
            src:reactSmooth
        },
        {
            id:5,
            src:usestate
        },
    ]

    
  return (
    <div name="portfolio"
    className="p-4 bg-gradient-to-b from-black to-gray-800 w-full h-full 
    text-white md:h-screen ">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
           <div className="  pt-8">
               <p className="text-4xl font-bold inline
               border-b-4 border-gray-500">Portfolio</p>
               <p className="py-5">Checkout some of my works</p>
           </div>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
            {
                portfolios.map(({id,src})=>(
                   
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-2  duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-2  duration-200 hover:scale-105">Code</button>
                                </div>
                    </div>
                   
                ))
            }

               </div>
        </div>
      
    </div>
  )
}

export default Portfolio
