import ReactSwitch from 'react-switch';
import React from 'react';

function Switch(props: React.ComponentProps<typeof ReactSwitch>) {
  return (
    <ReactSwitch
      className="react-switch"
      onColor="#bdb8f2"
      onHandleColor="#5343ef"
      uncheckedIcon={false}
      checkedIcon={false}
      height={15}
      width={35}
      handleDiameter={20}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      {...props}
    />
  );
}

export { Switch };
