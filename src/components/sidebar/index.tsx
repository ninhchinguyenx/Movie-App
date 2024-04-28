import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";

const navLinks = [
  {
    name: "Home",
    icon: MenuIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: MovieIcon,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: LiveTvIcon,
    link: "/tv-series",
  },
  {
    name: "Book Marks",
    icon: BookmarksIcon,
    link: "/book-marks",
  },
];
const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: "start",
        justifyContent: "space-between",
        height: "100vh",
        width: {
          sm: "100%",
          lg: "200px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: {
            xs: "center",
            lg: "start",
          },
          justifyContent: "space-between",
          gap: 5,
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            PikaShowApp
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            alignItems: "start",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <item.icon
                    sx={{
                      width: "18px",
                      filter: `${
                        pathname === item.link
                          ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                          : "invert(84%)"
                      }`,
                    }}
                  />

                  <Hidden mdDown>
                    <Typography>{item.name}</Typography>
                  </Hidden>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
