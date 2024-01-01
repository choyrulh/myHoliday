import { useEffect } from "react";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";
import { motion, AnimatePresence } from "framer-motion";

const TIMER = 3000;
function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div className="relative w-auto max-w-md p-6 bg-black rounded-md shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onCancel}
              className="mr-4 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              No
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none"
            >
              Yes
            </button>
          </div>
          <ProgressBar timer={TIMER} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

DeleteConfirmation.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteConfirmation;
