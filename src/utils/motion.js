export const slideFromRight = {
    hidden: { opacity: 0,  x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

 export const slideFromLeft = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };