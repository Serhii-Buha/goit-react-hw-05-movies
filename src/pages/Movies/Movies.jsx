import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchButton, SearchButtonInput, SearchForm } from './Movies.styled';
import axiosSearchMovie from 'api/axiosSearchMovie';
import { SearchList } from 'components/SearchList/SearchList';

const Movies = () => {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieQuery = searchParams.get('query') ?? '';

  const resultsMovieList = movieList.results;

  useEffect(() => {
    if (searchParams === null || searchParams === '') return;
    if (movieQuery.trim() === '') return;

    axiosSearchMovie(movieQuery)
      .then(response => {
        if (response) {
          setMovieList(response);
        }
      })

      .catch(err => console.error(err));
  }, [movieQuery, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    setSearchParams({ query: form.elements.query.value });

    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButtonInput
          type="text"
          name="query"
          autoFocus
          placeholder="Search movies"
        />

        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      {resultsMovieList && (
        <SearchList resultsMovieList={resultsMovieList} location={location} />
      )}
    </>
  );
};

export default Movies;

Movies.propTypes = {
  movieList: PropTypes.array,
  searchParams: PropTypes.object,
};
