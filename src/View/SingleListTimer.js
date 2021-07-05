import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './SingleListTimer.css';

const SingleListTime = (props) => {
  const { timer, onRemove } = props;
  
  const [time, setTime] = useState(moment());

  useEffect(() => {

    const updateTime = () => {
      const newTime = moment().tz(timer.name);
      setTime(newTime);
      console.log(newTime.hours());
    };

    updateTime();
    setInterval(() => {
      updateTime();
    }, 60*1000);
  }, [timer.name])

  return (
    <div className="p-2 col-md-4">
      <div className="card shadow" style={{ backgroundColor: '#e8fffa', minHeight: '10rem', postion: 'relative' }}>
        <div className="card-body">
          <h5 className="card-title text-center" style={{ color: '#8c8584' }}>{`${timer.name} (${timer.utcOffset/60 - moment().utcOffset()/60})`}</h5>
          <p className="fw-bold fs-3 text-center mb-0 mt-2" style={{ color: '#666261' }}>{`${time.hours()} : ${time.minutes()}`}</p>
          <p className="text-center fs-5 mb-2" style={{ color: '#8c8584' }}>{time.format("YYYY - MMM - DD")}</p>
          <button
            className="btn-delete btn"
            onClick={() => onRemove(timer.id)}
            style={{
              position: 'absolute',
              bottom: '0.4rem',
              right: '0.4rem',
            }}
          >
            <span className="far fa-times-circle" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleListTime;
