import SummaryBar from "./SummaryBar";
import classes from "./ExpenseSummary.module.css";

const ExpenseSummary = () => {
  return (
    <div className={classes.expenseSummary}>
      <SummaryBar r={70} />
      {/* <div className={classes.summary2}>

  <SummaryBar r={50}/>
  </div> */}
    </div>
  );
};

export default ExpenseSummary;
