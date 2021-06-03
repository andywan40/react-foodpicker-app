import background from "../images/homebg.jpg";
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
  },
  button: {
    
  },
  title: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "4rem",
    marginBottom: "1rem"
  },
  restaurantIcon: {
    cursor: "pointer",
    fontSize: "2.5rem",
    "&:hover":{
        fontSize: "2.6rem"
    },
    "&:active":{
        transform: "translateY(4px)"
    }
  },
  result: {
      marginTop: "2rem",
      "&:hover":{
        cursor: "pointer"
    },
  }
};
export default styles;