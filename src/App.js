import ResumeTitle from "./Components/Title";
import ResumePicture from "./Components/Picture";
import ResumeSummary from "./Components/Summary";
import ResumeSkills from "./Components/Skills";
import ResumeExperience from "./Components/Experience";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.resume}>
      <ResumeTitle />
      <ResumePicture />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeExperience />
    </div>
  );
}

export default App;
