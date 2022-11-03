function AboutMe(props) {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      {/*<p>I am an author, web developer, tech enthusiast and a start-up founder. I am best known as the CEO of Somethin. My schooling was from Some school, Another college. I pursued web development from MIT. Currently, exploring myself to the fullest</p>*/}
      <p>{props.aboutme}</p>
    </div>
  );
}
export default AboutMe;