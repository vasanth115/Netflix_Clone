import React from 'react';
import close from '../../../public/images/icons/close-slim.png'
import { useState } from 'react';
import add from '../../../public/images/icons/add.png'

type TypeProps = {
    itemid: number;
    header: string;
    body: string;
};

const AccordianData: React.FC<TypeProps> = ({ itemid, header, body }) => {

    const [show,setShow] = useState(false)
  return (
    <>
      <div className="accordian__header" onClick={() => setShow(!show)} >
        <p>{header}</p>
        {
            show ? <img src={close} alt="close" /> : <img src={add} alt="Add" />
        }
      </div>

      <div className={`accordian__body ${show ? 'open' : 'Close'}`} key={itemid}>
        <span>{body}</span>
      </div>
    </>
  );
};

export default AccordianData;
