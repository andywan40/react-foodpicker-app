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
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xs")]: {
      width: "90%"
    }
  },
  title: {
    fontFamily: "cursive",
    textTransform: "capitalize",
    "&:hover": {
        cursor: "pointer",
        textDecoration: "underline"
    }
  },
  img: {
    borderRadius: "5px"
  },
  button1: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 800,
    marginRight: "1rem"
  },
  button2: {
    color: "white",
    backgroundColor: "black",
    padding: "20px 45px",
    textTransform: "uppercase",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: 800
  },
};
export default styles;
