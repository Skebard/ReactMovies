//API
import API from "../API";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';

//hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//images
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, setSearchTerm } = useHomeFetch();
  console.log(state);
  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Popular Movies">
          {state.results.map(movie => (
              <Thumb
                key={movie.id}
                clickable={true}
                image={
                  movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
                }
                movieId={movie.id}
                />
          ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
