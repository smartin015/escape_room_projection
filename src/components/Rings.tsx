import * as React from 'react';
import TextCircle from './base/TextCircle';

const Rings = (props: any): JSX.Element => {
  return <span>
    <div key={1} className="ring1">
      <TextCircle
        english="Past ------ Past ------ Past ------ Past ------ Past ------ Past ------ Past ------ Past ------ Past --------  "
        gaelic="Stair ------ Stair ------ Stair ------ Stair ------ Stair ------ Stair ------ Stair ------ Stair ------ Stair ------"/>
    </div>
    <div key={2} className="ring2">
      <TextCircle
        english="Present ------ Present ------ Present ------ Present ------ Present ------ Present ------ Present ---------"
        gaelic="Láithreach ----- Láithreach ----- Láithreach ----- Láithreach ----- Láithreach ----- Láithreach -----"/>
    </div>
    <div key={3} className="ring3">
      <TextCircle
        english="Future ----- Future ----- Future ----- Future ----- Future ----- Future ----- Future ----- Future ----- "
        gaelic="Todhchaí ------- Todhchaí ------- Todhchaí ------- Todhchaí ------- Todhchaí ------- Todhchaí ------- "/>
    </div>
  </span>;
};
export default Rings;
