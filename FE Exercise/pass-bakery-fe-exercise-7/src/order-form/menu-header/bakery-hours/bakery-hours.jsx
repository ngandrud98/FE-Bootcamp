import React from 'react';
import PageH2 from '../../../common/page-h2/page-h2';

export const isBakeryOpen = (hours) => {
  const dateNow = new Date();
  const currentDay = dateNow.getDay();
  const currentHour = dateNow.getHours();
  const todaysHours = hours[currentDay];

  return (currentHour >= todaysHours.open) && (currentHour < todaysHours.close)
};

const BakeryHours = (props) => {
  return (
    <>
      <PageH2>Hours</PageH2>
      <div>
        Mon-Fri 6AM-5PM PT,<br/>
        Sat-Sun 7AM-4PM PT
      </div>
      <div>
        {isBakeryOpen(props.hours) ? 'BAKERY IS OPEN!' : 'BAKERY IS CLOSED.'}
      </div>
    </>
  )
};

export default BakeryHours;
