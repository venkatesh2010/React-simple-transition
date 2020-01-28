export const scale = {
  enter: {
    opacity: ".0",
    transform: "scale(0.2)",
    transformOrigin: "left top"
  },
  enterActive: {
    transition: "opacity 150ms, transform 150ms",
    opacity: "1",
    transform: "scale(1)",
    transformOrigin: "left top"
  },
  leave: {
    opacity: "1",
    transform: "scale(1)",
    transformOrigin: "left top"
  },
  leaveActive: {
    transition: "opacity 150ms, transform 150ms",
    opacity: "0",
    transform: "scale(0.2)",
    transformOrigin: "left top"
  }
};
