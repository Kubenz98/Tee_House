export const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0 },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: { opacity: 0, y: 30, transition: { duration: 0.1 } },
};

export const buttonVariants = {
  hidden: { backgroundColor: "rgba(99 102 241, 0)", y: 30 },
  show: {
    backgroundColor: "rgba(99 102 241, 1)",
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    backgroundColor: "rgba(99 102 241, 0)",
    y: 30,
    transition: { duration: 0.1 },
  },
};

export const title = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.2 },
  },
};

export const list = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.2, delay: 0.1 },
  },
};
