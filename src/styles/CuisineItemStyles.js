const styles = {
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
    justifyContent: "center",
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
