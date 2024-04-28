import { createContext, ReactNode, useReducer } from "react";
import { MovieDataType, moviesData } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}
interface MovieSate {
  movies: MovieDataType[];
}
interface MovieAction {
  type: string;
  id: string;
}
const MovieList: MovieDataType[] = moviesData;
const initalMovieState: MovieSate = {
  movies: MovieList,
};
const MovieReducer = (state: MovieSate, action: MovieAction): MovieSate => {
  switch (action.type) {
    case "TOOGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return {
              ...movie,
              isBookmarked: !movie.isBookmarked,
            };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};
export const MovieContext = createContext<{
  state: MovieSate;
  dispatch: React.Dispatch<MovieAction>;
}>({ state: initalMovieState, dispatch: () => {} });
export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initalMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
