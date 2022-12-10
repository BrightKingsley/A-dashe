import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ExpensesChart from "../components/Expenses/ExpensesChart";
import ExpensesList from "../components/Expenses/ExpensesList";
import ExpenseSummary from "../components/ExpenseSummary/ExpenseSummary";
import ExpensesFilter from "../components/Expenses/ExpenseFilter";
import NewExpense from "../components/Expenses/NewExpense/NewExpense";
// import DUMMY_EXPENSES from "../Data/expense-data";

import { getExpenseData } from "../api/client";

import classes from "./ExpensePage.module.css";

const ExpensePage = (props) => {
  const params = useParams();
  const [expenses, setExpenses] = useState([]);
  const [update, setUpdate] = useState(null);

  const [filteredYear, setFilteredYear] = useState("2021");

  useEffect(() => {
    getExpenseData().then((data) => {
      setExpenses(data);
    });
  }, [update]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === filteredYear;
  });

  const addExpenseHandler = (updated) => {
    setUpdate(updated);

    // const addExpenseHandler = () => {
    //   console.log(update);
    //   // setExpenses((prevExpenses) => {
    //   //   return [expense, ...prevExpenses];
    //   // });
    //   getExpenseData().then((data) => {
    //     setExpenses(data);
    //     console.log(data);
    //   });
  };

  return (
    params.id === "expense" && (
      <div className={classes.expenses} onClick={props.onClick}>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseSummary />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
        <NewExpense
          onChangeFilter={filterChangeHandler}
          onAddExpense={addExpenseHandler}
        />
      </div>
    )
  );
};

export default ExpensePage;
