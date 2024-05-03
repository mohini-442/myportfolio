import React from "react";
import "./Global.css";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div className="bg-black min-h-[90vh] flex items-center justify-center">
        <div className=" md:flex items-center justify-center h-full">
        {/* <div className=" ">
            <div className="">
              <div className="w-3/5  rounded-lg">
                <h1 className="text-5xl text-[#B75CFF] text-start ff-poppins">Contact Me</h1>
                <p className="text-xl ff-poppins text-white text-wrap text-start pt-2">
                  In order to discuss the project in more detail,Please contact me by
                  phone <br />
                  or through social networks. The productivity will have a personal
                  meeting.if you are in Novosibirsk.
                </p>
              </div>
            </div>
            
          </div> */}

<div className="max-w-screen-md mx-auto p-2 sm:p-5">
  <div className="text-start mb-16">
    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
        Contact
      </p>
      <h3 className="text-3xl sm:text-6xl leading-normal font-extrabold tracking-tight text-white">
        Get In <span className="text-[#B75CFF]">Touch</span>
      </h3>
  </div>
  
  <form className="w-full ff-poppins">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-black text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-black text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Email Address
      </label>
      <input className="appearance-none block w-full bg-black text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**"/>
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Your Message
      </label>
      <textarea rows="10" className="appearance-none block w-full bg-black text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"/>
          <span className="text-sm">
            Send me your newsletter!
          </span>
        </label>
      </div>
      <button className="shadow bg-[#B75CFF] hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
        Send Message
      </button>
    </div>
      
  </div>
    
</form>
</div>
        
          <div className="  ">
            <img className="w-full" src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png" alt="" />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
