import * as React from 'react';
import TextCircle from './base/TextCircle';

const Rings = (props: any): JSX.Element[] => {
  return [
    <div key={1} className="ring1">
      <TextCircle
        english="Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings!"
        gaelic="Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní!"/>
    </div>,
    <div key={2} className="ring2">
      <TextCircle
        english="Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings!"
        gaelic="Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní!"/>
    </div>,
    <div key={3} className="ring3">
      <TextCircle
        english="Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings! Rings!"
        gaelic="Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní! Fáinní!"/>
    </div>,
  ];
};
export default Rings;
