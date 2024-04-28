import React, { SetStateAction, useContext, useState } from "react";
import { Layout } from "../../Layout";
import {
  Paper,
  Box,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
import MovieList from "../../components/movie-list";

const TvSeries = () => {
  const [search, setSearch] = useState("");
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const TvSeries = movies.filter((item) => item.category === "TV Series");
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignContent: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for movies or Tv series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box>
        {search === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my="10px" fontWeight={600}>
              TV Series{" "}
            </Typography>
            <MovieList recommendList={TvSeries} />
          </Box>
        ) : (
          <Box width="100%">
            Found {searchList.length} results for"{search}";
            <MovieList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default TvSeries;
