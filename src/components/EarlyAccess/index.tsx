import axios from 'axios';
import React, { useState } from 'react'
import Marquee from "react-fast-marquee";

function EarlyAccess() {
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async () => {
    setError('');
    const apiUrl = `${process.env.REACT_APP_API_HOST}/early/signup`;
    await axios.post(apiUrl, {
      email
    })
    .then(response => {
      console.log(response)
      if(response?.data.success) {
        setIsComplete(true);
        setEmail('');
        setError('');
      } else {
        setIsComplete(false);
        setError(response.data.error);
      }
    })
    .catch(function(error) {
      setError(error.message);
    });
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsComplete(false);
  };

  return (
    <>
      <div className='bg-black'>
        <div className='relative'>
          <img src='/images/early_left.svg' alt="left" className='absolute top-[0px] z-0' />
        </div>
        <div className="justify-center lg:flex">
          <p className="text-[29px] pt-32 pb-24 text-center text-white font-Outfit font-bold">Backed by the best</p>
        </div>
        <div className='justify-center lg:flex space-x-24 pb-12'>
          <img src="/images/bixin.svg" alt="bixin_image"/>
          <img src="/images/aptos.svg" alt="aptos_image"/>
        </div>
        <div className='lg:flex w-full pb-64'>
          <Marquee autoFill={true}>
            <p className='text-center text-white font-Outfit font-bold text-7xl pt-24 z-10 px-24'>Let's connect</p>
          </Marquee>
        </div>
        
        
        <div className='relative'>
          <img className='w-full absolute lg:mt-[-220px] md:mt-[-170px]' src="/images/line.svg" alt="line_image"/>
          <img className='w-full' src="/images/bottom.svg" alt="bottom_image"/>
          <div className="absolute inset-0 flex items-center justify-center w-full bottom-[70%]">
            <div className="bg-gray-500 bg-opacity-40 backdrop-blur-2xl py-24 border border-white w-8/12 rounded-md">
              <p className="text-[32px] text-center text-white font-Outfit font-bold">Be among the first to try out Townesquare</p>
              <p className="text-[18px] text-center text-white font-Outfit pt-4">We’ll send you an invite to try out TowneSquare as soon as we’re ready.<br/>No spam, no junk mail or other mumbo-jumbo, pinky promise!</p>
              <div>
              <div className='flex space-x-6 justify-center pt-16'>
                <div className='w-6/12'>
                  <input value={email} className="placeholder-shown:border-gray-500 border-[#CCCCCC] border rounded-full bg-black px-5 w-full text-white text-[16px] py-1 h-12" placeholder='Your email' onChange={handleEmailChange} />
                  {
                    error ?
                      <p className='text-[#FF6069] font-Outfit text-lg pt-4'>{error}</p>
                    :
                    isComplete ?
                      <p className='text-[#32D583] font-Outfit text-lg pt-4'>Thanks for signing up, we won't let you down!</p>
                    :
                    null
                  }
                </div>
                <button className="rounded-full bg-[#9264F8] text-[18px] font-Outfit text-white py-2 px-6 h-12" 
                  onClick={checkEmail}
                  disabled={isLoading}
                >
                  
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-4a4 4 0 01-4 4v4zm0-14a7.963 7.963 0 00-3.291.709L8 3l.582 2.291A7.963 7.963 0 0012 4zm7.707.707A7.963 7.963 0 0020 12h4c0-6.627-5.373-12-12-12v4a8 8 0 017.707 4.707zM3.292 8.582L1 8l2.292-.582A7.963 7.963 0 004 12H0c0-4.411 3.589-8 8-8v4a4 4 0 01-4 4zm18.709 3.708L23 16l-2.292.582A7.963 7.963 0 0020 12h4c0 4.411-3.589 8-8 8v-4a4 4 0 014-4z"
                      />
                    </svg>
                  ) : (
                    'Signup for early access'
                  )}
                </button>
              </div>
              
              </div>
            </div>
          </div>
          <div className='absolute text-center w-full bottom-[12%]'>
            <p className="text-[20px] text-center text-white font-Outfit font-bold">Find out more about Townesquare</p>
            <div className='flex justify-center pt-6 space-x-8'>
              <a href='https://twitter.com/TowneSquarexyz' target="_blank" rel="noreferrer">
                <img src="/images/twitter.svg" alt="twitter_image"/>
              </a>
              <a href='https://github.com/TowneSquare' target="_blank" rel="noreferrer">
                <img src="/images/github.svg" alt="github_image"/>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default EarlyAccess
