import classes from "./styles/Error.module.css";
import { Link } from "react-router-dom";

export const Error = ({ status }) => {
  let errorMessage;
  let errorTitle;

  if (status <= 500) {
    errorTitle = "Oups! Something went wrong";
    errorMessage =
      "We encountered an error while trying to process your request. Go back and try again!";
  } else {
    errorTitle = "Internal Server Error";
    errorMessage =
      "Sorry, there were some technical issues while processing your request. Please come back later!";
  }

  return (
    <div className={classes.error}>
      <h2>{errorTitle}</h2>
      <p>{errorMessage}</p>
      <Link to={".."} className={classes["error-back"]}>
        Go back to recipes
      </Link>
    </div>
  );
};
