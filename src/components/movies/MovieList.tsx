import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  Row,
  Col,
  CardHeader,
  CardLink,
} from 'reactstrap';
import { IMovie } from '../../interfaces';
import { Store } from '../../configureStore';
import { GET_MOVIES } from '../../actions/actionTypes';

const regex = /(<([^>]+)>)/gi;
const movieApiUrl: string =
  'http://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes';

const MovieCard = (props: IMovie) => {
  const { id, url, name, season, number, image, summary } = props;
  return (
    <Card>
      <CardImg width="60px" top src={image.original} alt={name} />
      <CardBody>
        <CardHeader tag="h4">{name.toUpperCase()}</CardHeader>
        <CardTitle>{name.toUpperCase()}</CardTitle>
        <CardSubtitle>
          Season {season} Episode {number}
        </CardSubtitle>
        <CardText>{summary.replace(regex, '')}</CardText>
        <CardText>
          <small className="text-muted">
            <Link to={`/movie/${id}`}>More</Link>
          </small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default function MovieList() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (!state.movies) {
      fetchMovies();
    }
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(movieApiUrl);
    const data = await response.json();
    const { _embedded } = data;
    return dispatch({
      type: GET_MOVIES,
      payload: _embedded.episodes,
    });
  };

  return (
    <Fragment>
      <h2>List of Movies</h2>
      <Row>
        {state.movies &&
          state.movies.map((movie: IMovie) => (
            <Col key={movie.id} sm="4">
              <MovieCard {...movie} />
            </Col>
          ))}
      </Row>
    </Fragment>
  );
}
