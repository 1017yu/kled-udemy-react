import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "코멧 순백 3겹 라벤더 바닐라 롤화장지",
      amount: `25,000`,
      date: new Date(2023, 3, 24),
    },
    {
      id: "e2",
      title: "LG전자 75인치 OLED TV",
      amount: `1,960,000`,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "캐롯 퍼마일 자동차 보험",
      amount: `360,000`,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "이케아 우드 식탁",
      amount: `600,000`,
      date: new Date(2022, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
