import React,{useState} from 'react'
import axios from "axios";

function Joke() {
    const [joke, setJoke] = useState('कृपया ध्यान दें आपका चुटकुला इस मंच पर आएगा!!🙏')

  const handleClick = () => {
      const apiUrl = ' https://hindi-jokes-api.onrender.com/jokes?api_key=2d6181da9e2c57e5b4fb95b216a6'
      //const api = 'http://localhost:3000/api/v1/products'
      axios.get(apiUrl)
      .then(
        response => {
          let jokeData = response.data
          //console.log(jokeData.attachments[0].text)
          setJoke(jokeData.jokeContent)
          console.log(jokeData.jokeContent)
        }
      )
      .catch((err) => {
        console.log(err)
      })
      
  }
  return (
    <div>
         <h1 className='flex justify-center items-end text-2xl font-extrabold'>यादृच्छिक मजाक जनरेटर
   <img width="32" height="32" className='ml-1.5'src="https://img.icons8.com/cotton/64/whatsapp--v4.png" alt="whatsapp--v4"/></h1>
    <div className='flex justify-center items-end'>
      <div className='border-2 border-black m-5 p-3 lg:max-w-md  sm:max-w-sm rounded bg-yellow-200'>
      <h1 className='font-semibold text-xl'>{joke}</h1>
      </div>
    </div>
    
    <div className='flex justify-center items-start'>
    <button className='font-bold text-xl text-black p-1.5 border-2 border-black bg-blue-300 hover:bg-rose-500 rounded m-5'
    onClick={handleClick}
    >
    मजाक उत्पन्न करें!!
    </button>
    </div>
    </div>
  )
}

export default Joke