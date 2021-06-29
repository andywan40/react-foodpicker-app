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
    fontFamily: "'Days One', sans-serif",
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  }, 
  gridContainer: {
    boxSizing: "border-box",
    width: "100%",
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
  },
  buttonDiv: {
    boxSizing: "border-box",
    width: "70%",
    marginTop: "1rem",
    marginBottom: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "0.8rem",
    justifyContent: "center",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(1, 100%)",
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
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "'Mate SC', serif",
    [sizes.down("sm")]: {
      padding: "10px 25px",
    },
    display: "flex",
    alignItems:"center",
    justifyContent: "center"
  },
};
export default styles;
