import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <ul>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={classes.expenseItemDescription}>
          <h2>{props.title}</h2>
          <div className={classes.expenseItemPrice}>₦{props.amount}</div>
        </div>
      </Card>
    </ul>
  );
};

export default ExpenseItem;
