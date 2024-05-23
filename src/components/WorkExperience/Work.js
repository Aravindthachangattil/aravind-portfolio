import { experiencedata } from "../../constant/experiencelist";


const work = () => {
  return (
    <div id="experience" className="bg-black dark:bg-[#F0F2F5]  md:pt-28 pt-16 pb-7 md:pb-0 px-5 md:px-0">
       <h2 className="md:text-5xl text-3xl  md:text-center text-left  font-bold text-white dark:text-[#1C1C22] leading-10 md:leading-7 pr-8 md:pr-0 mb-8">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
        My Work Experience ... </span> 
            </h2>
    <div className="md:pt-20  md:pb-8 overflow-hidden">
      { experiencedata.map((i) => {
        return (
          
          <div className="work relative grid md:grid-cols-11  xl:px-52 lg:px-28 md:px-16 pl-10  ">
            <div className="col-span-5 md:pb-16">
              <h6 className="text-md md:text-lg font-[400] md:font-[600] text-white dark:text-[#1C1C22] md:mb-3 mb-1 font-serif">{i.company}</h6>
              <p className="md:text-sm text-xs md:mb-0 mb-3 font-[400] text-white/80 dark:text-[#1C1C22] font-serif">{i.duration}</p>
            </div>
            <div className="icon absolute mt-1 md:mt-0 md:relative z-10 before:-z-10 before:left-[48%] before:absolute before:border dark:before:border-[#1C1C22] before:border-dashed before:h-[48vh] sm:before:h-[45vh]  md:before:h-[48vh] border dark:border-[#1C1C22] border-dashed w-fit h-fit rounded-full p-1">
              <div className="icon-bg rounded-full bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400 w-3 h-3 md:w-5  md:h-5"></div>
            </div>
            <div className="col-span-5 md:pb-16 pb-5">
              <h6 className="text-md md:text-lg font-[400] md:font-[600] text-white dark:text-[#1C1C22] md:mb-3 mb-1 font-serif">{i.position}</h6>
              <p className="md:text-sm text-xs md:mb-0 mb-3 font-[400] text-white/80 dark:text-[#1C1C22] font-serif">{i.description}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default work;
