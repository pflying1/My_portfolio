import React from "react";
import Logo from "../components/logo"
import "../styles/favorite.css"
import FavoriteIntro from "../components/favoriteIntro"
import "../styles/favorite.css"

const main:React.FC = () => {
  return (
    <div className="favoriteCss">
      <Logo />
      <FavoriteIntro />
    </div>
  )
}

export default main;