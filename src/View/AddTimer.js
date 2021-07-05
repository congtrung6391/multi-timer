import React, { useState } from 'react';
import ct from 'countries-and-timezones';

const AddTimer = ({ onAdd }) => {

  const [tz, setTZ] = useState("Africa/Bamako");

  const timeZoneKey = Object.keys(ct.getAllTimezones("Africa/Bamako"));
  
  const onAddHandler = () => {
    const timer = ct.getTimezone(tz);
    onAdd(timer);
  }

  return (
    <div className="p-2 col-md-4">
      <div className="card shadow"  style={{ backgroundColor: '#e8fffa', minHeight: '10rem', postion: 'relative' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#666261' }}>Add new Timer</h5>
          
          <select id="select-timezone" className="form-select" onChange={(event) => {setTZ(event.target.value);}}>
            {
              timeZoneKey.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))
            }
          </select>
          <button className="mt-2 btn btn-primary border-0" onClick={onAddHandler} style={{ backgroundColor: '#FD80A8' }} >Add timer</button>
        </div>
      </div>
    </div>
  );
}

export default AddTimer;
