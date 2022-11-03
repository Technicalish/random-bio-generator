import AboutMe from "./AboutMe";
import MyInterests from "./MyInterests";
function Bio(props) {
  return (
    <div className="bio-container">
      <AboutMe {...props}/>
      <MyInterests/>
    </div>
  );
};
export default Bio;