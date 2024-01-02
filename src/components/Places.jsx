import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Places({
  title,
  places,
  onSelectPlace,
  isLoading,
  loadingText,
  fallbackText,
  AvailablePlaces,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex flex-col items-center px-3" // Add Tailwind CSS classes for margin-top and centered content
    >
      <h2 className=" text-2xl font-bold mb-4">{title}</h2>

      {isLoading && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600"
        >
          {loadingText}
        </motion.p>
      )}

      {!isLoading && places.length === 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-red-500"
        >
          {fallbackText}
        </motion.p>
      )}

      {!isLoading && places.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {places.map((place) => (
            <motion.li
              key={place.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit h-fit overflow-hidden bg-black rounded-lg shadow-md cursor-pointer relative"
              onClick={() => onSelectPlace(place)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={`http://localhost:3000/${place.image.src}`}
                alt={place.image.alt}
                className="w-full h-full object-cover"
              />
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 text-lg font-semibold text-center"
              >
                {place.title}
              </motion.h3>
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity"
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white">
                  {AvailablePlaces ? "Add to Whislist" : "Remove from Whislist"}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
}

Places.propTypes = {
  title: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  onSelectPlace: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string.isRequired,
  fallbackText: PropTypes.string.isRequired,
  AvailablePlaces: PropTypes.bool,
};

export default Places;
