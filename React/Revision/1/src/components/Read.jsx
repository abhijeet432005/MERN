import React, { useState } from "react";

const Read = (props) => {
  console.log(props)
  const data = props.data
  const setdata = props.setdata

  const render = data.map((val, index) => {
    return (<li key={index}>{val.name}</li>);
  });

  return <div>

    <ol>{render}</ol>
  </div>;
};

export default Read;
