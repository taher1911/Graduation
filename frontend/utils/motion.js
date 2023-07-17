export const navVariants = {
  hidden: {
    opacity: 0,
    y: -60,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.1,
    },
  },
};
