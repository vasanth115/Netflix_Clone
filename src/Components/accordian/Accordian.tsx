// Accordian of the Home Page

import React from 'react';
import './accordian.scss';
import Data from '../../JSON/faqs.json';
import AccordianData from './AccordianData';
import Form from '../Form/Form';

interface ItemType {
  id: number;
  header: string;
  body: string;
}

const Accordian: React.FC = () => {
  return (
    <div className='accordian'>
      <div className="accordian__wrapper">
        <h1 className='accordian__title'>Frequently Asked Questions</h1>
        <div className="accordian__content">
            {Data.map((item: ItemType) => (
                <div className="accordian__item" key={item.id}>
                    <AccordianData itemid={item.id} header={item.header} body={item.body} />
                </div>
            ))}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Accordian;
