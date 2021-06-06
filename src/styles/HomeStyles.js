import background from "../images/homebg.jpg";
import sizes from "./sizes";
const styles = {
  Home: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 120vh",
    [sizes.down("phone")]: {
      backgroundSize: "100vw 100vh",
    },
  },
  button: {},
  title: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "4rem",
    marginBottom: "1rem",
    [sizes.down("phone")]: {
      fontSize: "2.5rem",
    },
    
  },
  restaurantIcon: {
    cursor: "pointer",
    fontSize: "2.5rem",
    "&:hover": {
      fontSize: "2.6rem",
    },
    "&:active": {
      transform: "translateY(4px)",
    },
    [sizes.down("phone")]: {
      fontSize: "2rem",
    },
    
  },
  result: {
    marginTop: "2rem",
    
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cuisine: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  dish: {
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
};
export default styles;
