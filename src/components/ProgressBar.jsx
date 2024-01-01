import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);
  const control = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // Animate the progress bar
    control.start({
      width: `${((timer - remainingTime) / timer) * 100}%`,
      transition: { duration: 0.01 },
    });

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime, timer, control]);

  return (
    <motion.div className="relative mt-4">
      <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
        <motion.div
          animate={control}
          className="bg-blue-500"
          style={{ width: "100%" }}
        />
      </div>
      <p className="text-xs text-gray-500">
        {Math.ceil((remainingTime / 1000).toFixed(2))} seconds remaining
      </p>
    </motion.div>
  );
};

ProgressBar.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default ProgressBar;
