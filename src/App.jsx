import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [name, setName] = useState(" ")
  const[password, setPassword] = useState(" ")
  function Login(){
    alert(name+ " " + password);
  }
  return (
    <>
      <div className=' bg-blue-300 h-lvh flex items-center justify-center '>
        <div className='bg-white w-8/12 lg:w-4/12 rounded-xl flex flex-col items-center gap-4 justify-center px-8 py-8 shadow-xl'>
            <h3 className='text-blue-800 flex items-center justify-center text-3xl font-bold'>Login Now</h3>


          <div className='flex w-full flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-gray-400'>Name*</h3>
              <input type="text" placeholder='Enter your name' name="Name" id="Name" className='bg-transparent border w-full border-gray-300
                rounded-md p-2 py-3 ' onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-gray-400'>Password*</h3>
              <input type="password" placeholder='Enter your password' name="password" id="password" className='bg-transparent border border-gray-300  rounded-md p-2 py-3 w-full' onChange={(e)=>{setPassword(e.target.value)}}></input>
            </div>

            <div className='flex flex-col gap-2'>
              <h3 className='text-gray-400'>Remember me</h3>
              <button className='bg-blue-400 text-white rounded-full p-4 w-full shadow-xl' onClick={()=>Login()}>Login</button>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row w-full justify-between '>
            <button className='text-blue-600'>Don't have an account?</button>
            <button className='text-red-600'>Forget password</button>
          </div>

          <div className='text-center p-6 flex gap-2'>
            <h5 className='text-blue-950'>Image from </h5><button className='text-red-600 font-semibold capitalize border-b-2 border-red-400'>freePik</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
