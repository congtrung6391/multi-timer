import React, { useEffect, useState } from 'react';
import moment from 'moment';

const LocalTimer = () => {

  const [timer, setTimer] = useState(moment());

  const updateTime = () => {
    const newTimer = moment();
    setTimer(newTimer);
  }

  useEffect(() => {
    updateTime();
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className="pt-4 pb-3">
      <p className="fs-1 fw-bold text-center" style={{ color: '#e8fffa' }}>Local Time</p>
      <p className="fs-2 text-center mb-0" style={{ color: '#e8fffa' }}>{`${timer.hours()}:${timer.minutes()}:${timer.seconds()}`}</p>
      <p className="fs-4 text-center" style={{ color: '#e8fffa' }}>{`${timer.format('DD - MMMM - YYYY')}`}</p>
    </div>

  );
};

export default LocalTimer;
