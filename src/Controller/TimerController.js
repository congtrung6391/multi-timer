import React, { useEffect, useState } from 'react';
import TimerLocalStorage from '../Model/TimerLocalStorage';
import ListTimer from '../View/ListTimer';
import LocalTimer from '../View/LocalTimer.js';

const TimerController = () => {

  const [timerList, setTimerList] = useState([]);

  useEffect(() => {
    const list = TimerLocalStorage.getTimerList();
    setTimerList(list);
    console.log(list);
  }, [])

  const onAddHandler = (timer) => {
    const list = TimerLocalStorage.saveTimer(timer);
    setTimerList(list);
  }

  const onRemoveHandler = (id) => {
    const list = TimerLocalStorage.removeTimer(id);
    setTimerList(list);
  }

  return (
    <div className="container">
      <LocalTimer />
      <ListTimer
        timerList = {timerList}
        onRemove = {onRemoveHandler}
        onAdd = {onAddHandler}
      />
    </div>

  );

};

export default TimerController;
