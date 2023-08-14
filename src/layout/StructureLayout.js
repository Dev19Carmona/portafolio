import { SideBarLayout } from "@/components/SideBarLayout";
import {
    container,
  } from "./style/style.module.css";
import { TabsSctructure } from "@/components/TabsStructure";

export const StructureLayout = () => {
    return(
        <div className={container}>
            <SideBarLayout/>
            <TabsSctructure/>
        </div>
    )
}