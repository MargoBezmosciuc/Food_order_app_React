import React from "react";
import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals_Made_by_Margo</h1>
        <HeaderCardButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;

