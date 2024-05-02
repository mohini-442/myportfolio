import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import me from "../me.png"

const HeroSection = () => {
  return (
    <>
      <section
        className="h-[90vh] w-full px-10 xl:px-36 mx-auto relative overflow-hidden flex flex-col items-center justify-center bg-black"
      >
        <div className="lg:flex ">
          <div className=" lg:w-1/2 xl:pl-8 flex justify-center  items-center lg:items-start flex-col">
            <div className="Social-links flex gap-2">
              <div
                className="Instagram border-2 border-[#B75CFF] w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)" }}
              >
                <a href="https://www.instagram.com/confident_coder/">
                  <FaInstagram className="text-2xl  text-white hover:scale-110" />
                </a>
              </div>
              <div
                className="Github border-2 border-[#B75CFF] w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundImage: "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)" }}
              >
                <a href="https://github.com/vednidhi930">
                  <FaGithub className="text-2xl text-white hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="My-detail relative pt-3 lg:pt-4 lmy-2 flex items-center lg:items-start text-center lg:!text-start flex-col">
              <h4 className="text-white text-xl lg:text-2xl ff-poppins ">Hello!</h4>
              <h1 className="text-white text-5xl lg:text-6xl  font-bold ff-poppins lg:pt-2 text-nowrap">
                I'm <span className="text-5xl lg:text-6xl ff-poppins text-[#B75CFF]">Mohini</span>
              </h1>
              <h3 className="text-white text-2xl lg:text-3xl ff-poppins pt-1">Frontend developer</h3>
              <p className="text-white ff-poppins my-2 text-xl lg:text-2xl">
                I'M vednidhi,a passionate web developer with a knack for turning
                ideas into captivating online experiences.
              </p>
            </div>
          </div>

          <div className="Right-part flex lg:w-2/4 me-7">
            <img className=" w-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
