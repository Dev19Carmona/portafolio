import { useState } from "react";
import {
  container,
  header,
  body,
  footer,
  pageName,
  tabs,
  tab,
  tabSelected,
  name,
  textFooter,
} from "./style/style.module.css";
const { tabsName } = useTabs();
import { useTabs } from "@/hooks/useTabs";
import { BodyAbout } from "../BodyAbout";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { Grid, Tooltip } from "@chakra-ui/react";
import { BodyResume } from "../BodyResume";

export const TabsSctructure = () => {
  const [selectedDiv, setSelectedDiv] = useState(tabsName[0]);
  const handleDivClick = (divIndex) => {
    setSelectedDiv(divIndex);
  };
  return (
    <div className={container}>
      <div className={header}>
        <div className={pageName}>
          <div className={name}>{selectedDiv}</div>
        </div>
        <div className={tabs}>
          {tabsName.map((t, i) => (
            <div
              onClick={() => handleDivClick(t)}
              className={`${tab} ${selectedDiv === t ? tabSelected : ""}`}
              key={i}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      {
        selectedDiv === tabsName[0] &&
      <div className={body}>{ <BodyAbout />}</div>
      }
      {
        selectedDiv === tabsName[1] &&
      <div className={body}>{ <BodyResume/>}</div>
      }
      
      <div className={footer}>
        <p id={textFooter}>
          Designed by the developer Camilo Carmona with the tools:{" "}
        </p>
        <Tooltip label="React JS" placement="top">
          <Grid>
            <FaReact fontWeight="bold" fontSize={25} color="#139ECA" />
          </Grid>
        </Tooltip>
        <Tooltip label="Chakra UI" placement="top">
          <Grid>
            <SiChakraui fontWeight="bold" fontSize={25} color="#51C8C3" />
          </Grid>
        </Tooltip>
        <Tooltip label="CSS" placement="top">
          <Grid>
            <IoLogoCss3 fontWeight="bold" fontSize={25} color="#244BDD" />
          </Grid>
        </Tooltip>
      </div>
    </div>
  );
};
