import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loadinng..."
        style={{ margin: "auto", display: "block", width: "200px" }}
      />
    </Fragment>
  );
}
