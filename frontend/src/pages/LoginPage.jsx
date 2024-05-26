import React from 'react'
import { AiOutlineMail, AiOutlineLock} from "react-icons/ai";
import { Link } from 'react-router-dom'
const LoginPage = ({login, password, setLogin, setPassword, handleLogin}) => {
  return (
    <div className='bg-[#FFEEDB] h-screen'>
        <div className='z-0'>
            <img src="../src/assets/trees logo.png" alt="error" className='fixed opacity-20 bottom-[-11%] left-[-7%] h-[700px]'/>
        </div>
        <div className='grid grid-cols-2 absolute'>
            <div>
                <h1 className='text-center mt-16 font-poppins text-[48px]'>Trees Residences</h1>
                <h1 className='font-poppins mt-[10%] text-center text-3xl'>L O G I N</h1>
                <div className=''>
                    <form onSubmit={handleLogin} className='grid place-items-center gap-5 mt-16 '>
                        <div className='grid w-[60%] gap-1'>
                            <AiOutlineMail className='absolute mt-9 mx-2 text-[25px]'/>
                            <label className='font-poppins'>Email Address</label>
                            <input type="text" placeholder='example@gmail.com' value={login} onChange={(event) => setLogin(event.target.value)} className='block h-[30px] px-10 p-5 rounded'/>
                        </div>

                        <div className='grid w-[60%] gap-3'>
                            <AiOutlineLock className='absolute mt-10 mx-2 text-[25px]'/>
                            <label className='font-poppins'>Password</label>
                            <input type="text" placeholder='***************' value={password} onChange={(event) => setPassword(event.target.value)} className='block h-[30px] px-10 p-5 rounded'/>
                            <h1 className='underline font-poppins'>Forgot Password?</h1>
                        </div>

                        <button type='submit' className='border-2 border-[#FF846D] bg-[#FF846D] rounded-full p-2 w-[40%] font-bold'>ENTER</button>
                        <h1>Don't have account yet? <Link to='/register' className='underline font-bold'>Register now!</Link></h1>

                    </form>
                </div>
            </div>
            <div className='flex justify-center items-center mt-16 mr-16'>
                <img src="./src/assets/LoginImage.png" alt="error" className='rounded h-[800px]'/>
            </div>
        </div>
    </div>
  )
}

export default LoginPage