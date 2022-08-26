import React from "react";

const OurTeam = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h1 className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-orange-900 dark:text-white uppercase rounded-full bg-teal-accent-400">
              Cyber6 PoyshaPay-
              <span style={{ color: "rgb(79, 70, 229)", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <div
                  words={["United We stand!✊", "Divided we fall!!"]}
                  loop={true}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome To</span>
            </span>{" "}
            <span>our POYSHAPAY team of Professionals</span>
          </h2>
          <p className="text-base text-gray-700 dark:text-white md:text-lg select-none">
            An POYSHAPAY team members work cooperatively alongside other workers
            to select, pack, and promptly ship customer orders.Our Team Leader
            assignes every works perfectly to ours, and take responsibilities
            specific to the different Fulfillment Center areas.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-orange-500 hover:shadow-2xl shadow-lg shadow-cyan-500/50"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/Wxr4sgr/najmus-sakib-vai.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Najmus Sakib
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  The Associate Manager at Programming Hero is the most
                  intelligent, challenge taker, plan maker,hard working and
                  enthusiastic person . He always holds his mind to be
                  successful.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/Najmus7/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abubakarmd/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/gSYPKD3/tarekvai.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ahmad Tarique Hasan
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Job Placement Executive-Programming Hero who is a passionate,
                  diligent, patienceable and knowledgeable person. He always
                  provides important guidelines and gives the answer to our
                  silly questions.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/ahmad.tarique.bappy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-tarique/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/VN7NkrZ/Istiaque-Ahmed-vai.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ishtiaque Ahmed
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  Job Placement Executive - Programming hero is also an
                  intelligent , active and weariless person. He always keeps his
                  patience up and gives the answer to our repetitive questions.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/ishtiaqueAhmed08"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aishtiaque/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/thZmRn1/MD-ASHRAF-UDDIN.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  MD ASHRAF UDDIN
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Leader</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is an absolute responsibility leader. He focuses on the
                  possibilities and he is very sincere , coordinator, challenge
                  taker, error handler, problem solver and innovative. He never
                  gives up his hope. He always likes to try something new. He is
                  really an impassioned person.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/ttbrifat"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/JvTxhw1/MUGDHO-MEHEDI.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  MEHEDI HASAN
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is a passionate person of the POYSHAPAY Unity Team. He
                  loves to do something bigger because he is an enthusiastic
                  person and a hard worker.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010416578239"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mehedi-hasan-mugdho-ab7454211"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/Y8ZNyJn/SHIMUL-CHANDRA-DASH.png"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  SHIMUL CHANDRA DAS
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is the research man of the POYSHAPAY Unity. He loves to
                  search and explore more and more then he applies those. He
                  also likes to work as an error handler.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/Shimul.SCD"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shimulchandradas/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/Jx93YpM/MAHFUZUR-RAHMAN.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  MAHFUZUR-RAHMAN
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is the youngest member of POYSHAPAY Unity team. He is
                  active, competitive and loves to work. He always likes to do
                  something different and does.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/s.m.mahfuzurr.rahman"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sm-mahfuz/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  PROJIT MONDOL
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  She is a giver of wisdom, honest, hard worker. Very calmly
                  handles any kind of feature development or any challenge
                  wisely. Very keen to work she is unique in eye-catching UI
                  design and developing new feature.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="select-none">
            <div
              className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <img
                className="object-contain w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/ns8Lf7x/GOLAM-ROSUL.jpg"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  GOLAM ROSUL
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  She is one of the POYSHAPAY Unity team members. She is
                  hardworking, a fast learner, patentable, open hearted person.
                  She is a dreamer, loves to dream and fulfill that.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/grnisan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/grnisan/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
