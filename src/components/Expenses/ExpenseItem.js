import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    // 반환하는 한 개의 요소 안에는 한 개의 루트 요소만 존재해야함. (<div></div>) 로 감싸기
    <Card className="expense-item">
      {/* Date 객체를 텍스트로 출력하기 위해 toISOString 메소드 사용 */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}원</div>
      </div>
      <button
        onClick={() => {
          alert("Clicked!");
        }}
      >
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
