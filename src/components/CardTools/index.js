import { child, container, iconClass, descriptionClass, nameClass } from "./style/style.module.css";

export const CardTools = ({data={icon:"", name:"", description:""}}) => {
  const {icon, name, description} = data;
  
  return (
    <div className={container}>
      <div className={child}>
        <div className={iconClass}>
          {icon}
        </div>
        <div className={nameClass}>
          {name}
        </div>
      </div>
      <div className={descriptionClass}>
          {description}
      </div>
    </div>
  );
};
