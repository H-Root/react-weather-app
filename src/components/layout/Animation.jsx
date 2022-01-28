import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 2,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};

const Animation = ({ children }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default Animation;
