import picture from "../picture.png";
import classes from "./Picture.module.css";

function ResumePicture() {
  return (
    <div className={classes.picture}>
      <img src={picture} alt={"This is me"} />
    </div>
  );
}

export default ResumePicture;
