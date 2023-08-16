import { userData } from "../../../config/Constants.js";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

export const useSideBarLayout = () => {
  const dataCardContact = () => {
    const data = { ...userData };
    delete data.name;
    delete data.profession;
    delete data.aboutMe;
    delete data.fameworksAndLibraries;
    delete data.databases;
    
    const userDataArray = Object.entries(data);
    const mappedData = userDataArray.map(([key, value]) => {
      let icons = {};
      if (key === "email") icons.email = <AiTwotoneMail />;
      if (key === "phone") icons.phone = <AiTwotonePhone />;
      if (key === "birthdate") icons.birthdate = <BsCalendarDate />;
      if (key === "location") icons.location = <BiCurrentLocation />;
      return {
        key,
        value,
        icon:icons[key]
      };
    });
    return mappedData;
  };
  return {
    dataCardContact,
  };
};
