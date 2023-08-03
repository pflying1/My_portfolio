import React from "react";
import Logo from "../components/logo"
import "../styles/learnAndWrite.css"
import LearnAndWriteIntro from "../components/learnAndWriteIntro"

const learnAndWrite:React.FC = () => {
  return (
    <div className="learnAndWriteCss">
      <Logo />
      <LearnAndWriteIntro />
    </div>
  )
}

export default learnAndWrite;