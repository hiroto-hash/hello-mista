import React from "react";

export default class Header extends React.Component {
  render() {
    const header = "Welocome Mista";
    return(
      <div>
        <h1>{header}</h1>
      </div>
    )
  }
}