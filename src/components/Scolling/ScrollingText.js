
import { ScrollingData } from "../../constant/data";

const ScrollingText = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center justify-center bg-black py-5">
        {/* 1. */}
        <div className="md:w-[200%] w-[150%] h-10 overflow-hidden relative">
          {/* 2. */}
          <div className="md:w-[200%] w-[150%] flex items-center h-full justify-around absolute left-0 animate animate">
            {/* 3 */}
            {ScrollingData.map((i) => {
              return (
                <div  className="flex gap-3 mr-3 relative justify-center items-center h-10 md:min-w-[13rem] min-w-[10rem] w-[13rem]">
                  <img className="object-cover h-5 w-5 mt-1" src={i.icon} alt="icon" />
                  <p className=" text-white md:font-semibold font-[600] md:text-xl text-md">
                    {i.name}
                  </p>
                </div>
              );
            })}
              {ScrollingData.map((i) => {
              return (
                <div   className="flex gap-3 mr-3 relative justify-center items-center h-10 md:min-w-[13rem] min-w-[10rem] w-[13rem]">
                  <img className="object-cover h-5 w-5 mt-1" src={i.icon} alt="icon" />
                  <p className=" text-white md:font-semibold font-[600] md:text-xl text-md">
                    {i.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


    



export default ScrollingText