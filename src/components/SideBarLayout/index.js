import { useSideBarLayout } from "@/hooks/useSideBarLayout";
import { AVATAR_PRUEBA, userData } from "../../../config/Constants";

import {
  container,
  parentProfile,
  image,
  name,
  profession,
  parentContact,
  cardContact,
  icon,
  data,
  key,
  value,
} from "./style/style.module.css";
import Image from "next/image";

export const SideBarLayout = () => {
  const { dataCardContact } = useSideBarLayout();
  const dataContact = dataCardContact();
  return (
    <div className={container}>
      <div className={parentProfile}>
        <div className={image}>
          <Image src={AVATAR_PRUEBA} alt="Profile" width="80"/>
        </div>

        <div className={name}>{userData.name}</div>
        <div className={profession}>{userData.profession}</div>
      </div>

      <div className={parentContact}>
        {dataContact.map((d, i) => (
          <div className={cardContact} key={i}>
            <div className={icon}>{d.icon}</div>
            <div className={data}>
              <div className={key}>{d.key.toUpperCase()}</div>
              <div className={value}>{d.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
