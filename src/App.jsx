import React from "react";
import { Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home";
import Menu from "../src/components/Menu/Menu";
import ExpensePage from "./pages/ExpensePage";
import { useState } from "react";

const App = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleToggleMenu = () => {
    setShowMenu((prevShowmenu) => !prevShowmenu);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/app/:id"
          element={
            <>
              <Header toggleMenu={handleToggleMenu} />
              <CSSTransition
                mountOnEnter
                unmountOnExit
                in={showMenu}
                timeout={{
                  enter: 300,
                  entering: 300,
                  exit: 400,
                  exiting: 400,
                }}
                classNames="menu-slide-in"
              >
                <Menu />
              </CSSTransition>
              <ExpensePage onClick={() => showMenu && setShowMenu(false)} />
            </>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
