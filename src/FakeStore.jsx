import React, { useEffect, useState } from 'react'

export const FakeStore = () => {
  const [store, setStore] = useState([]);

  useEffect(()=>{
    async function getStoreData() {
     try {
       const response = await fetch('https://fakestoreapi.com/products');
       const data = await response.json();
       setStore(data)
       console.log("Fetched Products", data);
     } catch (error) {
      console.error("Error fetching store data:", error);
     }
    }

    getStoreData()

  }, [])

 

  return (
    <div className='w-full bg-black min-h-screen'>
      <h1 className='text-5xl text-white font-semibold text-center pt-5 text-shadow-2xs drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]'>FAKE STORE API</h1>
      
      <div className='flex items-center justify-center gap-5 flex-wrap'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10'>
      {store.map((items, index) =>(
        <div  className='w-[300px] h-[450px] flex flex-col justify-between bg-black text-white rounded-lg shadow-lg shadow-[white] p-4 transition-transform hover:scale-105'>
          <h1 className='text-xl font-bold text-center line-clamp-2'>{items.title}</h1>
          <p className='text-sm line-clamp-3 overflow-hidden text-ellipsis'>{items.description}</p>
          <img src={items.image} alt="" className='w-[150px] h-[150px] object-contain mx-auto mt-2'/>
        </div>
      ))}
      </div>

      </div>
    </div>
  )
}
