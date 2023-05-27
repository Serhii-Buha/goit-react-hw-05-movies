import axiosGetMovieDetails from 'api/axiosGetMovieDetails';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { FilmGenres } from 'components/FilmGenres/FilmGenres';
import { Poster } from 'components/Poster/Poster';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDescription,
  Section,
  SectionAdditionalInformation,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const { poster_path, title, genres, overview, vote_average } = movie;

  useEffect(() => {
    if (!movieId) return;

    axiosGetMovieDetails(movieId)
      .then(response => {
        if (response) {
          setMovie(response);
        } else {
          setMovie({});
        }
      })

      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <GoBackButton backLink={backLink} />

      <Section>
        {poster_path && <Poster poster_path={poster_path} />}

        <MovieDescription>
          {title && <h1>{title}</h1>}

          {vote_average && <p>User score: {(vote_average * 10).toFixed(0)}%</p>}

          <h2>Overview</h2>
          {overview && <p>{overview}</p>}

          <h2>Genres</h2>
          {genres && <FilmGenres genres={genres} />}
        </MovieDescription>
      </Section>

      <SectionAdditionalInformation>
        <AdditionalInformation />

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </SectionAdditionalInformation>
    </div>
  );
};

export default MovieDetails;
