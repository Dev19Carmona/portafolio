
import { userData } from "../../../config/Constants";
import { CardTools } from "../CardTools";
import Bars from "../GraphicBarsGeneral";
import {
  container,
  bodyStep,
  about,
  wid,
  fameworks,
  cardList,
  databases,
  aboutMe,
} from "./style/style.module.css";
import { Center, SimpleGrid } from "@chakra-ui/react";

export const BodyAbout = () => {
  return (
    <div className={container}>
      <div className={bodyStep} id={aboutMe}>
        <p id={about}>{userData.aboutMe}</p>
      </div>
      <div className={bodyStep} id={fameworks}>
        <p id={wid}>Frameworks And Libraries:</p>
        <div className={cardList}>
          {userData.fameworksAndLibraries.map((frame, i) => (
            <CardTools key={i} data={frame} />
          ))}
        </div>
      </div>
      <div className={bodyStep} id={databases}>
        <p id={wid}>Base de Datos y ORM:</p>
        <div className={cardList}>
          {userData.databases.map((database, i) => (
            <CardTools key={i} data={database} />
          ))}
        </div>
      </div>
      <div className={bodyStep}>
          <p id={wid}>Lenguajes</p>
        <Center h={"200px"}>
          <Bars />
        </Center>
      </div>
    </div>
  );
};
