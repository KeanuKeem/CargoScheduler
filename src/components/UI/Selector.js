import React from "react";

const Selector = (props) => {
  return (
    <select
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      name={props.name}
      id={props.id}
      className={props.className}
      ref={props.ref}
    >
      {props.children}
    </select>
  );
};

export default Selector;
