import { useState } from "react";
// import classes from "./Select.module.css";
import classes from "./Select.module.css";

const Select = ({ usedIn, header, options, icon }) => {
  const [viewOptions, setViewOptions] = useState(false);

  const optionsList = options.map((option) => (
    <li className={classes.option} key={option}>
      {option}
    </li>
  ));

  const handleViewOptions = () => {
    setViewOptions((prevViewOptions) => !prevViewOptions);
  };

  return (
    // <div className={classes[usedIn]} onClick={handleViewOptions}>
    <>
      <span className={classes.headerContainer} onClick={handleViewOptions}>
        {icon && <i className={icon}></i>}
        {header}
      </span>
      {viewOptions && <ul className={classes.optionsList}>{optionsList}</ul>}
    </>
    // </div>
  );
};

export default Select;
