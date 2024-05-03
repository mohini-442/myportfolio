import React from "react";
import "./Global.css";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <div className="bg-black min-h-[90vh] flex items-center flex-col justify-center">
        <div className="w-full bg-black p-2 flex flex-col items-center">
          <div className="w-3/5  rounded-lg">
            <h1 className="text-5xl text-[#B75CFF] text-center ff-poppins">Contact Me</h1>
            <p className="text-xl ff-poppins text-white text-wrap text-center pt-2">
              In order to discuss the project in more detail,Please contact me by
              phone <br />
              or through social networks. The productivity will have a personal
              meeting.if you are in Novosibirsk.
            </p>
          </div>
        </div>
        <div className=" flex">
          <div className="w-screen bg-black flex justify-center flex-col items-center">

            <div className="w-full  flex flex-col items-center">
              <input
                type="text"
                className=" outline-none w-96 my-1 h-12 text-xl p-3 rounded-md border-4 border-[#B75CFF]"
                placeholder="First Name"
                style={{ background: "rgba(223, 228, 234,1.0)" }}
              />
              <input
                type="text"
                className="outline-none w-96 my-1 h-12 text-xl p-3 rounded-md border-4 border-[#B75CFF]"
                placeholder="Email"
                style={{ background: "rgba(223, 228, 234,1.0)" }}
              />
              <textarea
                className="outline-none w-96 h-36 text-xl p-3 my-1 rounded-md resize-none border-4 border-[#B75CFF]"
                placeholder="Text your message here..."
                style={{ background: "rgba(223, 228, 234,1.0)" }}
              />
              <button className="bg-red-400 w-24 h-10 font-bold rounded-md my-2 opacity-80 hover:opacity-100">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
