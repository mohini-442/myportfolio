import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section
        className="sm:h-[90vh] w-full px-36 mx-auto sm:flex-wrap flex flex-col items-center justify-center bg-black"
      >
        <div className="flex ">
          <div className=" lg:w-1/2 pl-12 flex justify-center flex-col">
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

            <div className="My-detail pt-4 my-2">
              <h4 className="text-white text-2xl ff-poppins ">Hello!</h4>
              <h1 className="text-white text-6xl  font-bold ff-poppins pt-2 text-nowrap">
                I'm <span className="text-6xl ff-poppins text-[#B75CFF]">Mohini</span>
              </h1>
              <h3 className="text-white text-3xl ff-poppins pt-1">Frontend developer</h3>
              <p className="text-white ff-poppins my-2 text-2xl">
                I'M vednidhi,a passionate web developer with a knack for turning
                ideas into captivating online experiences.
              </p>
            </div>
          </div>

          <div className="Right-part flex lg:w-2/4 me-7">
            <img src="https://www.dharmishi.com/img/vectors/developer.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
