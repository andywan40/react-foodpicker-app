import sizes from "./sizes";
const styles = {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
  },
  contentContainer: {
    boxSizing: "border-box",
    position: "relative",
    marginTop: "2.5rem",
    marginBottom: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    width: "70vw",
    [sizes.down("md")]: {
      width: "80vw",
    },
    [sizes.down("sm")]: {
      width: "90vw",
    },
  },
  title: {
    fontFamily: "'Mate SC', serif",
    textTransform: "capitalize",
    fontSize: "2rem",
    "& a": {
      textDecoration: "none",
      color: "black"
    },
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  section: {
    textAlign: "center",
    "& h4": {
      fontSize: "1.5rem",
      fontFamily: "'Patrick Hand', cursive",
      textTransform: "uppercase",
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
      color:"#3f506e"
    },
    "& li": {
      textAlign: "start",
      listStyle: "square",
    },
    borderTop: "1px solid black",
    width: "60%",
  },
  cuisineText: {
    textTransform: 'capitalize'
  },
  img: {
    borderRadius: "5px",
    height: "50%",
    width: "50%",
  },
  buttonDiv: {
    boxSizing: "border-box",
    width: "70%",
    marginTop: "3rem",
    marginBottom: "6rem",
    display: "grid",
    gridTemplateColumns: "repeat(2, 30%)",
    gridGap: "0.8rem",
    justifyContent: "center",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(1, 60%)",
      width: "50%",
    },
  },
  button1: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "'Mate SC', serif",
    [sizes.down("sm")]: {
      padding: "10px 25px",
    },
    [sizes.down("phone")]: {
      padding: "6px 15px",
    },
  },
  button2: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "'Mate SC', serif",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    [sizes.down("sm")]: {
      padding: "10px 25px",
    },
    [sizes.down("phone")]: {
      padding: "6px 15px",
    },
  }
};
export default styles;
