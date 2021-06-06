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
    marginBottom: "3rem",
    fontFamily: "cursive",
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  buttonDiv: {
    marginTop: "1rem",
    marginBottom: "2rem",
    [sizes.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "4rem",
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
  imageContainer: {
    position: "relative",
    "&:hover": {
      cursor: "pointer",
      "& img": {
        opacity: 0.3,
      },
      "& div": {
        opacity: 1,
        fontWeight: 600,
      },
    },
    display: "flex",
    justifyContent: "center"
  },
  dishImg: {
    width: "90%",
    height: "90%",
    display: "block",
    borderRadius: "5px",
    transition: "0.5s ease",
    backfaceVisibility: "hidden",
  },
  dishImgText: {
    transition: ".5s ease",
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "black !important",
    transform: "translate(-50%, -50%)",
    "-ms-transform": "translate(-50%, -50%)",
    textAlign: "center",
  },
};
export default styles;
