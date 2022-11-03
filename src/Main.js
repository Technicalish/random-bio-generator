import Profile from "./Profile";
import Bio from "./Bio";
import SocialMedia from "./SocialMedia";
function Main(props) {
  return (
    <main>
      <Profile name={props.name}/>
      <Bio aboutme={props.aboutme}/>
      <SocialMedia name={props.name} domain={props.domain} country={props.country}/>
    </main>
  )
}
export default Main;