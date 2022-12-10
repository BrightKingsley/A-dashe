import classes from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  console.log(props.items.length);
  if (props.items.length === 0) {
    return (
      <div className={classes.expensesList}>
        <p className={classes.expensesListFallback}>Found No Expenses</p>
      </div>
    );
  }

  return (
    <ul className={classes.expensesList}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
