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
    fontFamily: "'Days One', sans-serif",
    textTransform: "capitalize",
    marginBottom: 0,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  desc: {
    fontFamily: "cursive",
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
  img: {
    borderRadius: "5px",
    height: "80%",
    width: "80%",
  },
  buttonDiv: {
    boxSizing: "border-box",
    width: "70%",
    marginTop: "2rem",
    marginBottom: "6rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
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
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "'Mate SC', serif",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    [sizes.down("md")]: {
      fontSize: "0.8rem"
    },
    [sizes.down("sm")]: {
      padding: "10px 25px",
      fontSize: "0.55rem"
    },
    [sizes.down("phone")]: {
      padding: "6px 15px",
      fontSize: "0.5rem"
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
    [sizes.down("md")]: {
      fontSize: "0.8rem"
    },
    [sizes.down("sm")]: {
      padding: "10px 25px",
      fontSize: "0.55rem"
    },
    [sizes.down("phone")]: {
      padding: "6px 15px",
      fontSize: "0.5rem"
    },
  }
};
export default styles;
