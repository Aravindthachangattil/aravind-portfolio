
const contact = () => {
  return (
    <>
      <div id="contact" className="grid bg-black dark:bg-[#F0F2F5] lg:grid-cols-2 lg:gap-16 md:gap-8 xl:px-52 lg:px-28 md:px-16 px-5 md:py-20 py-10">
        {/* left  */}
        <div>
          <h2 className="md:text-5xl text-3xl font-bold text-white  leading-[1.2] md:mb-8 mb-3">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
              Get in touch
            </span>
          </h2>
          <p className="md:text-md text-sm font-serif md:leading-6 leading-7 md:font-[500] font-[300] text-white dark:text-[#1C1C22] mb-8 md:mr-20">
            Have a project in mind? Looking to partner or work together? Raech
            out through the form and I'll get back to you in the next 48 hours
          </p>

          {/* icon  */}
          <div className="flex items-center gap-5 mb-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 16.625C0 17.9372 1.06281 19 2.375 19H21.375C22.6872 19 23.75 17.9372 23.75 16.625V2.375C23.75 1.06281 22.6872 0 21.375 0H2.375C1.06281 0 0.011875 1.06281 0.011875 2.375L0 16.625ZM11.875 10.6875L21.375 4.75V2.375L11.875 8.3125L2.375 2.375V4.75L11.875 10.6875Z"
                fill="url(#paint0_linear_2206_22)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2206_22"
                  x1="-1.2123e-07"
                  y1="9.96285"
                  x2="24"
                  y2="9.96285"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.140625" stop-color="#B16CEA" />
                  <stop offset="0.447917" stop-color="#FF5E69" />
                  <stop offset="0.71875" stop-color="#FF8A56" />
                  <stop offset="1" stop-color="#FFA84B" />
                </linearGradient>
              </defs>
            </svg>
            <p className="md:text-md text-sm font-serif leading-6 tracking-[0.07em] font-[500] text-white dark:text-[#1C1C22] ">
              aravindthachangattil@gmail.com
            </p>
          </div>

          {/* icon  */}
          <div className="flex items-center gap-5 md:mb-5 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.2779 12.8515L14.8632 11.9583C15.1487 11.7975 15.479 11.7346 15.8036 11.7792C16.1283 11.8238 16.4293 11.9736 16.6608 12.2055L19.0384 14.5831C19.1777 14.7224 19.2883 14.8877 19.3637 15.0697C19.4391 15.2517 19.4779 15.4468 19.4779 15.6438C19.4779 15.8408 19.4391 16.0359 19.3637 16.2178C19.2883 16.3998 19.1777 16.5652 19.0384 16.7045L17.9118 17.8311C16.6358 19.1063 14.6668 19.3717 13.0732 18.4611L12.9663 18.3997C8.30109 15.734 4.39914 11.9143 1.63469 7.30698L1.09336 6.40476C0.634185 5.63978 0.443946 4.74324 0.552885 3.85771C0.661825 2.97218 1.06369 2.14849 1.69458 1.51761L2.77345 0.439499C2.91272 0.300165 3.07807 0.189635 3.26007 0.114225C3.44206 0.0388141 3.63713 0 3.83413 0C4.03113 0 4.2262 0.0388141 4.40819 0.114225C4.59019 0.189635 4.75554 0.300165 4.89481 0.439499L7.2709 2.81559C7.50254 3.04711 7.65203 3.34809 7.69652 3.67255C7.74101 3.99702 7.67807 4.32713 7.51731 4.61245L6.62418 6.19778C6.51721 6.38807 6.47538 6.60812 6.50509 6.82439C6.53479 7.04066 6.63439 7.24128 6.78871 7.39568L12.08 12.6869C12.2343 12.8414 12.4349 12.941 12.6512 12.9707C12.8675 13.0005 13.0876 12.9586 13.2779 12.8515Z"
                fill="url(#paint0_linear_2206_21)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2206_21"
                  x1="0.522949"
                  y1="9.47059"
                  x2="19.4779"
                  y2="9.47059"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.140625" stop-color="#B16CEA" />
                  <stop offset="0.447917" stop-color="#FF5E69" />
                  <stop offset="0.71875" stop-color="#FF8A56" />
                  <stop offset="1" stop-color="#FFA84B" />
                </linearGradient>
              </defs>
            </svg>
            <p className="md:text-md text-sm font-serif leading-6 tracking-[0.07em] font-[500] text-white dark:text-[#1C1C22]">
              <a href="tel:+919605597646">+91 9605597646</a>
            </p>
          </div>
        </div>

        {/* right  */}
        <form action="mailto:aravindthachangattil@gmail.com" method="POST">
          <div className="mb-5">
            <p class="text-sm font-[400] text-white/80 dark:text-[#1C1C22] font-serif mb-3">
              Your Name
            </p>
            <input
              className="w-full rounded-md bg-[#1C1C22] dark:bg-white text-sm font-normal font-serif text-white/80 dark:text-[#1C1C22] px-6 py-3 focus:outline focus:outline-white/50"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-5">
            <p class="text-sm font-[400] text-white/80 dark:text-[#1C1C22]   font-serif mb-3">
              Your E-mail
            </p>
            <input
              className="w-full rounded-md bg-[#1C1C22] dark:bg-white  text-sm font-normal font-serif text-white/80 dark:text-[#1C1C22] px-6 py-3 focus:outline focus:outline-white/50"
              type="text"
              placeholder="Enter your e-mail"
            />
          </div>
          <div className="mb-5">
            <p class="text-sm font-[400] text-white/80 dark:text-[#1C1C22] font-serif mb-3">
              Your Number
            </p>
            <input
              className="w-full rounded-md bg-[#1C1C22] text-sm font-normal font-serif text-white/80 dark:bg-white dark:text-[#1C1C22] px-6 py-3 focus:outline focus:outline-white/50"
              type="text"
              placeholder="Enter your number"
            />
          </div>
          <div className="mb-5">
            <p class="text-sm font-[400] text-white/80 dark:text-[#1C1C22] font-serif mb-3">
              Tell me a bit more what you are looking for?
            </p>
            <textarea
              className="h-32 md:mb-8 mb-5 resize-y w-full rounded-md bg-[#1C1C22] text-sm font-normal font-serif dark:bg-white text-white/80 dark:text-[#1C1C22] px-6 py-3 focus:outline focus:outline-white/50"
              type="number" placeholder="Enter your message here"></textarea>
            <button type="submit" className="flex font-serif items-center justify-center gap-3 bg-white dark:bg-[#1C1C22] w-fit px-8 py-3 rounded-full text-gray-900 dark:text-white md:font-[600] font-[500] md:text-md text-sm">Submit Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default contact;
