import Categories from "@/components/category";
import FeaturedMovie from "@/components/featured-movie";
import MoviesSection from "@/components/movies-section";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title={"Popular Films"}
        movies={Movies.results.slice(1, 7)}
      />
      <MoviesSection
        title={"Your Favorites"}
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}
export default HomeContainer;
