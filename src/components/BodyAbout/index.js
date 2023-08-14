import { userData } from "../../../config/Constants";
import {
    container,
    bodyStep,
    about
  } from "./style/style.module.css";

export const BodyAbout = () =>{
    return(
        <div className={container}>
            <div className={bodyStep} >
                <p id={about}>
                {userData.aboutMe}
                </p>
            </div>
            <div className={bodyStep}>{"What I'm Doing"}</div>
            <div className={bodyStep}></div>
            <div className={bodyStep}></div>
        </div>
    )
}