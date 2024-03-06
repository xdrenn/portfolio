import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <section className="h-screen w-screen p-8  max-w-screen mx-auto flex flex-col items-start justify-center">
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
        <h1>Skills</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Anastasia Vilmovskaya</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
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
        I'm developing web and mobile apps
        <br />
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
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
        Contact me
      </motion.button>
    </Section>
  );
};
