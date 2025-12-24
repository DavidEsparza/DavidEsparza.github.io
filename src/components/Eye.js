import { motion } from "motion/react";
import { useState } from "react";

// Configuration constants for eye movement boundaries
const EYE_CONFIG = {
  MOVE_ZONE_Y: 30,
  MOVE_ZONE_X: 65,
  START_TOP: 125,
  START_RIGHT: 75,
  PUPIL_OFFSET: 15,
};

const HOVER_ANIMATION = {
  rotate: [0, -2, 2, -2, 2, 0],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 0,
  },
};

/**
 * Calculates the pupil position based on cursor coordinates
 * @param {number} x - Cursor X coordinate
 * @param {number} y - Cursor Y coordinate
 * @param {number} width - Viewport width
 * @param {number} height - Viewport height
 * @returns {[number, number]} Array with [x, y] pupil position
 */
const calculatePupilPosition = (x, y, width) => {
  const { MOVE_ZONE_Y, MOVE_ZONE_X, START_TOP, START_RIGHT, PUPIL_OFFSET } =
    EYE_CONFIG;

  let eyePositionX = 0;
  let eyePositionY = 0;

  // Calculate vertical position
  if (y > START_TOP) {
    eyePositionY = Math.min(y - START_TOP, MOVE_ZONE_Y);
  }

  // Calculate horizontal position
  const rightBoundaryStart = width - (START_RIGHT + MOVE_ZONE_X);

  if (x > rightBoundaryStart) {
    eyePositionX = Math.min(x - rightBoundaryStart, START_RIGHT - PUPIL_OFFSET);
  }

  return [eyePositionX, eyePositionY];
};

/**
 * Eye component that follows cursor movement
 * @param {Object} props - Component props
 * @param {number} props.x - Current cursor X position
 * @param {number} props.y - Current cursor Y position
 * @param {number} props.width - Viewport width
 * @param {number} props.height - Viewport height
 */
function Eye({ x, y, width }) {
  const [eyePositionX, eyePositionY] = calculatePupilPosition(x, y, width);
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsClosed(false);
    }, 1000);
  };

  return (
    <motion.div 
      className="eye" 
      whileHover={HOVER_ANIMATION}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {isClosed ? (
        <p className="closed-eye">{"><"}</p>
      ) : (
        <>
          <div className="eyebrow">⏜️</div>
          <motion.div className="eyebox">
            <div
              className="pupil"
              whileHover={HOVER_ANIMATION}
              style={{
                top: `${eyePositionY}px`,
                left: `${eyePositionX}px`,
              }}
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default Eye;
