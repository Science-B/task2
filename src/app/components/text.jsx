import { displayDate } from "../utils/displayDate";
const Text = ({ amount, way, time, backTime }) => {
  return `Вы выбрали билетов в количестве: "${amount}" по маршруту "${way}" стоимостью "${
    way === "из A в B и обратно в А" ? amount * 1200 : amount * 700
  }".
        Это путешествие займет у вас ${
          way !== "из A в B и обратно в А" ? "50" : "100"
        } минут. 
        Теплоход отправляется в "${time}", а ${
    way === "из A в B и обратно в А"
      ? `прибудет в В ${displayDate(time)}, а обратно в А в ${displayDate(
          backTime
        )}`
      : ` прибудет в ${displayDate(time)}`
  } `;
};

export default Text;
