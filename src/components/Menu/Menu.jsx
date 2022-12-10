import classes from "./Menu.module.css";
import Select from "../UI/Select";

const menuItems = [
  <span className={classes.navItem}>
    <i className="fa fa-money-bill"></i> <p>My Expenses</p>
  </span>,
  <Select
    icon="fa fa-shop"
    header="Shop"
    usedIn="menu"
    options={["Amazon", "ebay", "Jumia", "Aliexpress", "BestBuy", "Wish"]}
  />,
  <span className={classes.navItem}>
    <i className="fa fa-bank"></i> <p>PiggyBank</p>
  </span>,
];

const Nav = () => {
  const menuItem = menuItems.map((item) => (
    <li key={Math.random()} className={classes.menuItem}>
      {item}
    </li>
  ));

  return (
    <nav className={classes.menu}>
      <ul className={classes.menuList}>
        {menuItem}
        {/* <li className={classes.option}>My Expenses</li>
        <li className={classes.shop}> */}
        {/* <Select
            header="Shop"
            usedIn="menu"
            options={[
              "Amazon",
              "ebay",
              "Jumia",
              "Aliexpress",
              "BestBuy",
              "Wish",
            ]}
          /> */}
        {/* </li> */}
        {/* <li className={classes.option}>PiggyBank</li> */}
      </ul>
    </nav>
  );
};

export default Nav;
