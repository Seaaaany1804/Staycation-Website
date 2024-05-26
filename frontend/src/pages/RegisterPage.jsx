import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="bg-[#FFEEDB] h-screen">
      <div className='z-0'>
            <img src="../src/assets/trees logo.png" alt="error" className='fixed opacity-20 bottom-[-11%] left-[-7%] h-[700px]'/>
        </div>
      <div className="grid grid-cols-2 absolute">
        <div>
          <h1 className="text-center mt-16 font-poppins text-[48px]">Trees Residences</h1>
          <h1 className="font-poppins text-center text-3xl mt-10">R E G I S T E R</h1>

          <form className="flex flex-col gap-5 mt-10">
            <div className="grid grid-cols-2 gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>First Name</label>
                    <input type="text" className="w-[100%] p-5 h-[30px] rounded"/>
                </div>

                <div className="grid">
                    <label>Last Name </label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Middle Name</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>

                <div className="grid">
                    <label>Suffix</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Contact Number</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>

                <div className="grid">
                    <label>Gender</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Birthdate</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Email Address</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Password</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>
            <div className="grid gap-[10%] mx-[10%]">
                <div className="grid">
                    <label>Re-enter Password</label>
                    <input type="text" className="w-[100%] h-[30px] p-5 rounded"/>
                </div>
            </div>

            <div className=" flex flex-col items-center gap-5">
                <button type='submit' className='border-2 border-[#FF846D] bg-[#FF846D] rounded-full p-2 w-[40%] font-bold'>ENTER</button>
                <h1>Already have an account? <Link to='/' className='underline font-bold'>Login now!</Link></h1>
            </div>
          </form>
        </div>

        <div className='flex justify-center items-center mt-16 mr-16'>
            <img src="./src/assets/RegisterImage.png" alt="error" className='rounded h-[800px]'/>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
