import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { ValidationError, useForm } from "@formspree/react";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-20 max-w-screnn
  flex flex-col items-start justify-center
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <p className="whitespace-nowrap bg-gradient-to-r from-pink-400 via-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text moving-text font-primaryRegular items-start justify-center">
        thanks y'all for visiting this page. thanks y'all for visiting this
        page. thanks y'all for visiting this page. thanks y'all for visiting
        this page. thanks y'all for visiting this page. thanks y'all for
        visiting this page.
      </p>
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h2 className="text-white text-2xl  md:text-3xl italic font-bold text-center font-thirdRegular leading-10">
        Привет, я
      </h2>
      <h1 className="text-4xl font-thirdRegular leading-10">
        Анастасия Вильмовская
      </h1>
      <br />
      <motion.p
        className="md:text-lg text-xl font-bold text-white text-center font-thirdRegular mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Я разрабатываю сайты <br className="text-blue-500" /> и мобильные
        приложения
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-blue-600 text-white py-4 px-8 
      rounded-lg font-bold font-thirdRegular text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Напиши мне
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 40,
  },
  {
    title: "Kotlin/Java",
    level: 90,
  },
  {
    title: "Ktor",
    level: 70,
  },
  {
    title: "C++",
    level: 30,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇷🇺 Русский",
    level: 100,
  },
  {
    title: "🇺🇸 Английский",
    level: 70,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl text-white font-thirdRegular font-bold">
          Скиллы
        </h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-70" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold font-thirdRegular text-white"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-blue-600 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-thirdRegular font-bold mt-10">
            Языки
          </h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-70" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold font-thirdRegular text-white"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-blue-600 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-end justify-center">
        <button
          className="text-white hover:text-blue-600 text-xl md:text-3xl  font-thirdRegular transition-colors"
          onClick={previousProject}
        >
          ← Пред.
        </button>
        <h2 className=" text-white text-3xl md:text-4xl font-thirdRegular font-bold">
          Проекты
        </h2>
        <button
          className="text-white hover:text-blue-600 text-xl md:text-3xl font-thirdRegular transition-colors"
          onClick={nextProject}
        >
          След. →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("myyrnwee");
  return (
    <Section>
      <h2 className="text-4xl text-white font-thirdRegular font-bold">
        Связаться со мной
      </h2>
      <div className="mt-8 mb-20 p-6 rounded-md bg-white w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 font-thirdRegular text-center">
            Спасибо за ваше сообщение!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              for="name"
              className="font-thirdRegular text-gray-900 block mb-1"
            >
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 p-3"
            />
            <label
              for="email"
              className="font-thirdRegular text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-thirdRegular text-gray-900 block mb-1 mt-8"
            >
              Сообщение
            </label>
            <textarea
              name="message"
              id="message"
              className="h-25 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-blue-600 text-white font-thirdRegular py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
