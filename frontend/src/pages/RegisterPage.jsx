import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="bg-[#FFEEDB] h-[920px]">

      <div className="grid grid-cols-2 absolute">
        <div>
          <h1 className="text-center mt-16 font-poppins text-[48px]">Trees Residences</h1>
          <h1 className="font-poppins mt-[10%] text-center text-3xl">R E G I S T E R</h1>

          <form>
            <div className="grid grid-cols-2 gap-5">
                <div className="grid">
                    <label>First Name</label>
                    <input type="text" className="w-[50%]"/>
                </div>

                <div className="grid">
                    <label>Last Name </label>
                    <input type="text" className="w-[50%]"/>
                </div>
            </div>
          </form>
        </div>

        <div className='flex justify-center items-center mt-16 mx-16'>
            <img src="./src/assets/RegisterImage.png" alt="error" className='rounded h-[800px]'/>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
