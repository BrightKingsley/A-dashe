import React from "react";
import { useParams } from "react-router-dom";

import Expenses from "./Expenses/ExpenseLayout/Expenses";

const Main = () => {
  const params = useParams();
  return params.id === "expense" && <Expenses />;
};

export default Main;
