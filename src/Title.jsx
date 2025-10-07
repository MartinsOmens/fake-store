import React, { useEffect, useState } from 'react'

const Title = () => {

  const [data, setData] = useState([]);
  const dataUrl = "https://jsonplaceholder.typicode.com/todos";

  useEffect(()=>{
    getData()
  },[])
 
  const getData =async()=> {
    const response = await fetch(dataUrl);
    const dataJson = await response.json();
    setData(dataJson);
  }
  
  return (
    <div className='bg-black w-full min-h-screen pb-10'>
      <h1 className='text-5xl font-bold text-red-500 mb-10 text-center pt-10'>React Fetch API</h1>  
       <div className='flex items-center flex-wrap justify-center gap-2'>

        {data.map((items, index) =>(
          <div key={items.id}>
            <p className='bg-yellow-500 p-5 text-center'>{items.title}</p>
          </div>
           
        ))}
        
       </div> 
    </div>
  )
}

export default Title