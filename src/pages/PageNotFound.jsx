import { Link } from "react-router-dom";

import classes from "./styles/PageNotFound.module.css";

export function PageNotFound() {
  return (
    <section className={classes.container}>
      <h2>Page Not Found</h2>
      <p>We're sorry, the page you've requested could not be found</p>
      <p>Please go back to the homepage.</p>
      <Link to={"/home"} className={classes.link}>
        Go homepage
      </Link>
    </section>
  );
}
