import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { MovieDataType } from "../../assets/data";
import MovieTrendCard from "../movie-card/movieTrend";
type MovieTrendListProps = {
  tredingList: MovieDataType[];
};
const MovieTrendList = ({ tredingList }: MovieTrendListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        overflow: "auto",
      }}
    >
      {tredingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "transparent",
            }}
          >
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
