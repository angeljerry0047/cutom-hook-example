import React from "react";
export default function InputItem(props) {
  return (
    <>
      <input
        placeholder="Value"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </>
  );
}
