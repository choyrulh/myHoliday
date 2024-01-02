import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAvailablePlaces } from "../Service/api";
import { sortPlacesByDistance } from "../Service/location";
import Error from "./Error";
import Places from "./Places";
function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Kami Rekomendasikan Tempat Untuk Anda"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="Tempat Liburan Tidak Tersedia"
      onSelectPlace={onSelectPlace}
      AvailablePlaces={true}
    />
  );
}

AvailablePlaces.propTypes = {
  onSelectPlace: PropTypes.func.isRequired,
};

export default AvailablePlaces;
