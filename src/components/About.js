import { skillLisyt } from "../constant/skilllist";

const about = () => {
  return (
    <div className="relative pb-5  pt-16 lg:pt-8 bg-[#1C1C22] dark:bg-white" id="about">
      <div className="flex flex-col xl:px-52 lg:px-28 md:px-16 px-5 md:pt-16  bg-[#1C1C22] dark:bg-white">
        {/* <div>
          <img
            className="w-[17rem] m-auto md:w-[23rem] lg:w-full mb-5 md:mb-0"
            src={AbouImg}
            alt="aboutImage"
          />
        </div> */}
        <div className="my-auto text-start lg:text-center">
          <h2 className="md:text-5xl text-3xl font-bold text-white leading-[1.2] md:mb-8 mb-3">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
              About Me ...{" "}
            </span>
          </h2>
          <p class="text-sm font-serif md:font-[400] font-[300] text-white dark:text-[#1C1C22] leading-[1.4] tracking-wide md:leading-[2] mb-8">
            I am a passionate and highly skilled UI/UX and Graphic Designer with a strong dedication to creating exceptional user experiences and visually compelling designs. With a background in design and a deep understanding of user psychology, I specialize in crafting intuitive, visually appealing digital interfaces, and engaging marketing materials that drive user engagement and satisfaction.
            My commitment to excellence extends beyond pixels and visuals; it's about understanding end-users and their unique needs. I have a proven track record of collaborating closely with cross-functional teams, from developers to product managers, ensuring seamless integration of design concepts into functional, user-centered products.
            In addition to my technical expertise in tools like Illustrator, Photoshop, Figma, and Adobe XD, I am a strong advocate for user-centered design principles and stay up-to-date with the latest industry trends and emerging technologies. I believe in continuous learning and strive to incorporate the latest design methodologies to stay ahead in this ever-evolving field
          </p>
          {/* <a href="#contact" className="w-fit text-sm border rounded-full border-white dark:border-[#1C1C22] hover:text-gray-900 hover:bg-white transition-all ease-linear dark:hover:bg-[#1C1C22] dark:hover:text-white text-white font-serif font-semibold dark:text-[#1C1C22] px-8 py-3">
            Hire me
          </a> */}
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 lg:mt-10 xl:px-52 lg:px-28 md:px-16 px-5  gap-5 bg-[#1C1C22]  dark:bg-white mb-10 p-5">
        {skillLisyt.map((i) => {
          return (
            <div className="relative flex flex-col lg:flex-row items-center gap-5 p-5 bg-black dark:bg-[#F0F2F5] rounded-md shadow-sm group hover:scale-105 transition ease-linear duration-100 hover:shadow-sm hover:shadow-black/10">
              <img src={i.image} className="w-12 group-hover:scale-110 transition ease-linear duration-200" alt="skillimage" />
              <div className="text-white dark:text-[#1C1C22] dark:font-medium font-serif ">{i.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default about;
