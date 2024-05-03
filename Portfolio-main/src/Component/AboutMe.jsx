import React from 'react'

const AboutMe = () => {
  return (
    <>
           <section
        className="sm:h-[90vh] flex items-center w-full lg:flex-nowrap sm:flex-wrap bg-black"
      >
        <div className="Left-part flex flex-col lg:w-2/4 xl:pl-12 items-center">
          <div className="My-detail p-2 my-2">
            <h1 className="text-white text-6xl ms-24 font-bold text-nowrap">
              About Me
            </h1>
            <h3 className="text-[#B75CFF] text-3xl font-serif ms-24 pt-1">Frontend deveploper</h3>
            <p className="text-white ms-24 my-2 ff-poppins text-2xl">
              I'M vednidhi,a passionate web developer with a knack for turning
              ideas into captivating online experiences.
            </p>
            <div className='border-2 border-[#B75CFF] w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Name</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'>Mohini</p>
            </div>

            <div className='border-2 border-[#B75CFF] w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Email</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'>mohinikarwasra598@gmail.com</p>
            </div>

            <div className='border-2 border-[#B75CFF] w-96 flex justify-between ms-24 my-4 p-2'>
                 <p className='text-white text-xl'>Phone no.</p><p className='text-white text-xl'>:</p><p className='text-white text-xl'>9034489871</p>
            </div>
          </div>
        </div>

        <div className="Right-part flex lg:w-2/4 me-7">
          <img src="https://www.dharmishi.com/img/vectors/developer.png" />
        </div>
      </section>
    </>
  )
}

export default AboutMe
