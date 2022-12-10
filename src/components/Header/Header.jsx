import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h1>A-dashe</h1>
      <nav>
        <ul>
          {/* <li>
            <span>
              <i className="fa fa-gear fa-xl"></i>
            </span>
          </li> */}
          <li className={classes.userName}>
            <p>User</p>
            <span className={classes.userIcon}>
              <i className="fa fa-user"></i>
            </span>
          </li>
        <div
          onClick={props.toggleMenu}
          className={classes.hamburgerMenu}
        >
<span className="fa fa-grip-vertical fa-2x"></span>
        </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
