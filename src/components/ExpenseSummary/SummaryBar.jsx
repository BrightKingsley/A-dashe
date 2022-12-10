import classes from "./SummaryBar.module.css";

const SummaryBar = (props) => {
  return (
    // <div className={classes.summaryContainer}>
    <div className={classes.summaryBar}>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.number}>
            75%
            <div className={classes.lineContainer}>
              <div className={classes.line}></div>
              {/* <svg className={classes.svgLine} width={500} height={500}>
                <line x1={48} y1={25} x2={110} y2={25} stroke="#10cfb0" />
              </svg> */}

              <svg className={classes.svgLine2} width={150} height={100}>
                <line x1={97} y1={0} x2={150} y2={0} stroke="#0b947e" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <svg
        className={classes.circleSVG}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            {/* <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" /> */}
            <stop offset="0%" stopColor="#10cfb0" />
            <stop offset="100%" stopColor="#07594b" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r={props.r} strokeLinecap="round" />
      </svg>

<div className={classes.summaryDetails}>
  <p>You spent 75% of your...</p>
</div>

</div>
  );
};

export default SummaryBar;
