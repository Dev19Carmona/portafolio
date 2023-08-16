import { SideBarLayout } from "@/components/SideBarLayout";
import {
    container,
    fixed_button,
  } from "./style/style.module.css";
import { TabsSctructure } from "@/components/TabsStructure";
import { ButtonGeneral } from "@/components/ButtonGeneral";
import { BsWhatsapp } from "react-icons/bs";
import { WHATAPP_COLOR } from "../../config/Constants";

export const StructureLayout = () => {
    return(
        <div className={container}>
            <SideBarLayout/>
            <TabsSctructure/>
            <ButtonGeneral id={fixed_button} title={<BsWhatsapp/>} color={WHATAPP_COLOR}/>
        </div>
    )
}