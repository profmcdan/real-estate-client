import { IState, IAction } from '../interfaces';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_MOVIES,
  GET_A_MOVIE,
} from '../actions/actionTypes';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case REGISTER:
      return { ...state, auth: action.payload };
    case LOGIN:
      return { ...state, auth: action.payload };
    case LOGOUT:
      return { ...state, auth: action.payload };
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_A_MOVIE:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};
