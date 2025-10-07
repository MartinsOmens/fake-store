import React, { useEffect, useState } from 'react'
import { assets } from './assets/assets'

const Anime = () => {

    const [anime, setAnime] = useState([]);

    useEffect(()=>{
        async function getAnimeCharater() {
        try {
            const response = await fetch("https://dragonball-api.com/api/characters");
            const data = await response.json();
            setAnime(data.items || data);
            console.log("Fetched Products", data);
        } catch (error) {
            console.error('Error fetching store data:', error);
        }
        }        
        getAnimeCharater()
    }, [])

    // fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-7 py-2 shadow-md

  return (
    <div className='w-full min-h-screen bg-[#eee]'>
        <div className='fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-7 py-1.5 shadow-md'>
            <img src={assets.smallLogo} alt="" className='w-12' />
            <div className='flex items-center gap-5'>
                <a href="#Docs" className='text-lg font-bold text-gray-700 cursor-pointer'>Docs</a>
                <a href="#About" className='text-lg font-bold text-gray-700  cursor-pointer'>About</a>
                <button className='bg-yellow-500 py-1 px-3 text-white text-sm font-bold uppercase rounded'>Support Us</button>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-2 mt-16'>
            <img src={assets.bigLogo} alt="" className='w-60' />
            <h1 className='text-yellow-500 sm:text-2xl md:text-4xl lg:text-5xl font-bold'>The Dragon Ball API</h1>

            <div className="grid w-full max-w-7xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center py-5">
                {anime.map((character) => (
                    <div key={character.id} className="bg-white rounded-2xl shadow p-3 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={character.image} alt={character.name} className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain rounded-lg"/>
                    <h2 className="text-base sm:text-lg font-bold my-2 text-center">{character.name}</h2>
                    <p className="text-black  font-bold text-sm sm:text-base text-center mb-2">{character.race} - <span className="capitalize text-yellow-500 font-semibold">{character.gender}</span></p>
                    <p className="text-black  font-bold text-sm sm:text-base text-center mb-2">Base Ki: <span className="capitalize text-yellow-500 font-semibold">{character.ki}</span></p>
                    <p className="text-black  font-bold text-sm sm:text-base text-center mb-2">Total Ki: <span className="capitalize text-yellow-500 font-semibold">{character.maxKi}</span></p>
                     <p className="text-black  font-bold text-sm sm:text-base text-center mb-2">Affiliation: <span className="capitalize text-yellow-500 font-semibold">{character.affiliation}</span></p>
                    </div>
                ))}
            </div>
    
        </div>
    </div>
  )
}

export default Anime