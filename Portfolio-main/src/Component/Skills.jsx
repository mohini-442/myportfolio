import React, { useEffect, useState } from 'react';

function ProgressBar({ title, progress }) {
  const [count, setCount] = useState(0);
  const MAX = parseInt(progress);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < MAX) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, MAX]);

  return (
    <div className=" w-[150px] sm:w-[200px] h-auto">
      <div className="skill w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] relative">
        <div className="progress relative z-10 w-10 h-10  sm:w-48 sm:h-48  ">
         </div>
         <div
            className="absolute top-0 left-0 w-full h-full  rounded-full "
            style={{
              clipPath: ` `,
              background: `conic-gradient(#B75CFF ${Math.min(count, MAX)}%, #212428 0)`
            }}
          >
          <span className="progress-number absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ">{count}%</span>
        </div>
      </div>
      <span className="title text-[#B75CFF] ff-poppins text-center block mt-2 sm:mt-5 text-lg sm:text-3xl">{title}</span>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="flex justify-center flex-wrap  items-center h-[90vh]  bg-black">
      <div className='flex justify-center flex-wrap  items-center gap-4 sm:gap-6'>
        <ProgressBar title="HTML" progress={80} />
        <ProgressBar title="CSS" progress={70} />
        <ProgressBar title="JavaScript" progress={65} />
        <ProgressBar title="React" progress={50} />
      </div>
    </section>
  );
}

export default SkillsSection;
