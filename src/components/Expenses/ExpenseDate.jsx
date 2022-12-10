import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const date = new Date(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className={classes.expenseDate}>
      <div className={classes.expenseDateDonth}>{month}</div>
      <div className={classes.expenseDateDay}>{day}</div>
      <div className={classes.expenseDateYear}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
