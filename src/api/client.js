export const getExpenseData = async () => {
  const result = await fetch("http://localhost:5000/app/expenses");
  const data = await result.json();
  return data;
};

export const addNewExpense = async (expense, addExpense) => {
  try {
    const res = await fetch("http://localhost:5000/app/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });
    if (res.ok) {
      addExpense();
      getExpenseData();
    } else {
      console.log("Could not add expense");
    }
  } catch (error) {
    console.log(error);
  }
};
