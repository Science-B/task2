import React, { useState } from "react";
import Text from "./text";
import { displayDate } from "../utils/displayDate";
const Ways = () => {
  const timeFromAtoB = ["18:00", "18:30", "18:45", "19:00", "19:15", "21:00"];
  const timeFromBtoA = [
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:35",
    "21:50",
    "21:55",
  ];
  const [selectedWay, setselectedWay] = useState({ value: "из A в B" });
  const [selectedTime, setSelectedTime] = useState({
    value: "18:30",
  });
  const [selectedBackTime, setSelectedBackTime] = useState({ value: "" });
  const [selectedAmount, setSelectedAmount] = useState({ value: "0" });
  const [isDone, setIsDone] = useState(false);
  function handleChangeWay(event) {
    setselectedWay({ value: event.target.value });
  }

  function handleChangeTime(event) {
    setSelectedTime({ value: event.target.value });
  }
  function handleChangeBackTime(event) {
    setSelectedBackTime({ value: event.target.value });
  }
  function handleChangeAmount(event) {
    setSelectedAmount({ value: event.target.value });
  }
  function handleSubmit(event) {
    setIsDone(true);
    event.preventDefault();
  }
  return (
    <>
      <form>
        <label>
          Выберите путь отправления---
          <select value={selectedWay.value} onChange={handleChangeWay}>
            <option value="из A в B">из A в B</option>
            <option value="из B в A">из B в A</option>
            <option value="из A в B и обратно в А">
              из A в B и обратно в А
            </option>
          </select>
        </label>
      </form>
      <label>Выберите время---</label>
      <select value={selectedTime.value} onChange={handleChangeTime}>
        {(selectedWay.value === "из A в B" &&
          timeFromAtoB.map((element) => (
            <option
              value={element}
            >{`${element}(${selectedWay.value})`}</option>
          ))) ||
          (selectedWay.value === "из B в A" &&
            timeFromBtoA.map((element) => (
              <option value={element}>
                {`${element}` + `(${selectedWay.value})`}
              </option>
            ))) ||
          (selectedWay.value === "из A в B и обратно в А" &&
            timeFromAtoB.map((element) => (
              <option value={element}>{`${element}`}</option>
            )))}
      </select>
      {selectedWay.value === "из A в B и обратно в А" && (
        <label>
          Выберите обратное время---
          <select
            value={selectedBackTime.value}
            onChange={handleChangeBackTime}
          >
            {timeFromBtoA
              .filter((el) => el > String(displayDate(selectedTime.value)))
              .map((el) => (
                <option value={el}>{el}</option>
              ))}
          </select>
        </label>
      )}
      <form>
        <label>Количество билетов---</label>
        <input value={selectedAmount.value} onChange={handleChangeAmount} />
        <input type="submit" onClick={handleSubmit} value="Подсчитать" />
      </form>

      {isDone && (
        <Text
          amount={selectedAmount.value}
          way={selectedWay.value}
          time={selectedTime.value}
          backTime={selectedBackTime.value}
        />
      )}
      <div>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default Ways;
