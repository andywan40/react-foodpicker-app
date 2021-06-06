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
    fontFamily: "cursive",
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  img: {
    borderRadius: "5px",
    height: "80%",
    width: "80%",
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
    [sizes.down("phone")]: {
      padding: "6px 15px",
    },
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
    [sizes.down("phone")]: {
      padding: "6px 15px",
    },
  },
};
export default styles;
