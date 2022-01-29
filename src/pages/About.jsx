import { motion } from "framer-motion";
import Animation from "../components/layout/Animation";

const cardVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
  },
};

const btnVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      type: "spring",
    },
  },
};

const About = () => {
  return (
    <Animation>
      <motion.div
        className="rounded-2xl overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit={{ x: -10000 }}
      >
        <div
          className="hero"
          style={{ backgroundImage: "url(https://hroot.netlify.app/ppp.jpg)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                This web app was created using React.js ,Tailwind ,Daisy UI,
                etc...
                <br />
                Hope You Enjoy This Project, And My Other Projects
              </p>
              <a
                href="https://hroot.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <motion.button
                  className="btn btn-primary"
                  variants={btnVariants}
                  initial="hidden"
                  animate="visible"
                >
                  My Portfolio
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Animation>
  );
};

export default About;
