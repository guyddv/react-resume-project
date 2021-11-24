import classes from "./Title.module.css";

function ResumeTitle() {
  return (
    <div className={classes.title}>
      <h1 className={classes.name}>Guy Daughtrey</h1>
      <h2 className={classes.info}>Data Center Technician</h2>
      <h2 className={classes.info}>LEAP Apprentice</h2>
      <h2 className={classes.info}>San Antonio, TX</h2>
    </div>
  );
}

export default ResumeTitle;
