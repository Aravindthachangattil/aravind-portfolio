import { projectData } from "../constant/projectslist";

const selectProjetcs = () => {
  return (
    <>
      <div id="projects" className="xl:px-52 lg:px-28 md:px-16 sm:px-5  md:py-24 py-16 px-5 dark:bg-white">
        <div className="mb-10 lg:mb-20">
          <h2 className="md:text-5xl text-3xl  md:text-center text-left  font-bold text-white leading-10 md:leading-7 pr-8 md:pr-0 mb-8">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
              Latest Projects
            </span>
          </h2>
          {/* <button>Contact us</button> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-10">
          {projectData.map((i) => {
            return( 
             
                <a href={i.sitelink} target="blank" className="border-2 flex flex-col gap-5 p-4 bg-black/60 dark:bg-[#f0f2f5] rounded-lg border-white/40 ">
                <div className="flex flex-col gap-5 relative group rounded-lg overflow-hidden">
                <img src={i.Image} alt="projectImage"  className="rounded-lg group-hover:scale-[1.1] transition ease-linear duration-200" />
                </div>
                <div className="flex flex-col  gap-5 justify-between backdrop-blur-sm rounded-md  ">
                <div className="text-white dark:text-black/80 text-lg font-serif tracking-wider uppercase font-semibold ">{i.name}</div>
                <div className="flex gap-3">
                <div className="border h-9 w-fit text-white dark:text-black  flex items-center justify-center rounded-full px-5 py-1">{i.lang1}</div>
                <div className="border h-9 w-fit text-white dark:text-black  flex items-center justify-center rounded-full px-5 py-1">{i.lang2}</div>
                </div>
              </div>
              
                </a>
            )
          })}
          </div>
      </div>
    </>
  );
};

export default selectProjetcs;
