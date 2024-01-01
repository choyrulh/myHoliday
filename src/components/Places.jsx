import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Places({
  title,
  places,
  onSelectPlace,
  isLoading,
  loadingText,
  fallbackText,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8" // Add Tailwind CSS classes for margin-top
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

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
              className="w-fit h-fit overflow-hidden bg-black rounded-lg shadow-md"
              onClick={() => onSelectPlace(place)}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={`http://localhost:3000/${place.image.src}`}
                alt={place.image.alt}
                className="w-full h-full object-cover"
              />
              <h3 className="p-4 text-lg font-semibold">{place.title}</h3>
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
};

export default Places;
