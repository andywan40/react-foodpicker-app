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
    marginTop: "2rem",
    marginBottom: "2rem",
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xs")]: {
      width: "85%",
    },
  },
  title: {
    marginBottom: "1rem",
    fontFamily: "cursive",
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  icon: {
    color: "inherit",
    marginTop: "4rem",
    fontSize: "2.5rem",
    [sizes.down("phone")]: {
      fontSize: "2rem",
    },
    
  },
  recipeButton: {
    marginBottom: "2rem",
    color: "white",
    backgroundColor: "black",
    padding: "10px 25px",
    cursor: "pointer",
    borderRadius: "5px",
    textTransform: "uppercase",
  },
  buttonDiv: {
    marginTop: "1rem",
    marginBottom: "2rem",
    [sizes.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "4rem",
    },
    [sizes.down("phone")]: {
      marginTop: "2rem",
      marginBottom: "6rem",
    },
  },
  button1: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 800,
    marginRight: "1rem",
    [sizes.down("sm")]: {
      padding: "10px 25px",
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: "0.7"
    }
  },
  button2: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 800,
    [sizes.down("sm")]: {
      padding: "10px 25px",
    },
  },
  gridContainer: {
    boxSizing: "border-box",
    width: "100%",
    marginTop: "1rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2rem",
    justifyContent: "center",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  }
};
export default styles;
