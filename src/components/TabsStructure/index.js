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
} from "./style/style.module.css";
const { tabsName } = useTabs();
import { useTabs } from "@/hooks/useTabs";
import { BodyAbout } from "../BodyAbout";
export const TabsSctructure = () => {
  const [selectedDiv, setSelectedDiv] = useState("About Me");
  console.log(selectedDiv);
  const handleDivClick = (divIndex) => {
    setSelectedDiv(divIndex);
  };
  return (
    <div className={container}>
      <div className={header}>
        <div className={pageName}>
          <div className={name}>
          {selectedDiv}
          </div>
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
      <div className={body}>
        {
          selectedDiv === "About Me"&&
          <BodyAbout/>
        }
      </div>
      <div className={footer}></div>
    </div>
  );
};
