import React from 'react';
import AddTimer from './AddTimer';
import SingleListTimer from './SingleListTimer';

const ListTimer = (props) => {

  const { timerList, onAdd, onRemove } = props;

  return (
    <div className="row p-2">
      {
        timerList.map((timer) => (
          <SingleListTimer
            key={timer.id}
            onRemove={onRemove}
            timer={timer}
          />
        ))
      }
      <AddTimer
        onAdd={onAdd}
      />
    </div>
  );


}

export default ListTimer;
