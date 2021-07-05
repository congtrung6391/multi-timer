import uniqid from 'uniqid';

class TimerLocalStorage {

  static getTimerList = () => {
    const listStr = localStorage.getItem("list-timer") || '[]';
    const list = JSON.parse(listStr);
    return list;
  } 

  static saveTimer = (timer) => {
    const list = this.getTimerList();
    const id = uniqid();
    timer.id = id;
    list.push(timer);
    const listStr = JSON.stringify(list);
    localStorage.setItem("list-timer", listStr);
    return list;
  }

  static removeTimer = (id) => {
    const list = this.getTimerList();
    const idx = list.findIndex((item) => item.id === id);
    list.splice(idx, 1);
    const listStr = JSON.stringify(list);
    localStorage.setItem("list-timer", listStr);
    return list;
  }
}

export default TimerLocalStorage;
