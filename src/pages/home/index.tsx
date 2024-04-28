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
import MovieTrendList from "../../components/movie-list/MovieTrendList";
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";
const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  console.log(searchList, setSearchList);
  const tredingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);
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
      <Box py={2} px={4}>
        {search === "" ? (
          <>
            <Box width="100%">
              <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                  Treding
                </Typography>
                <MovieTrendList tredingList={tredingList} />
              </Box>
            </Box>
            <Box width="100%">
              <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                  Recommended For You
                </Typography>
                <MovieList recommendList={recommendList} />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box width="100%">
              <Typography>
                Found {searchList.length} results for "{search}"
                <MovieList recommendList={searchList} />
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
