import Icons from "./Icons";
import { v4 } from "uuid";
function SocialMedia(props) {
var { name, domain, country } = props;
name = name.split(" ").join("").toLowerCase();
  return (
    <div className="icons-container">
      <h2>Follow me on</h2>
      <div className="icons">
        {/*<a href="https://www.facebook.com"><img src="/facebook.svg" alt="Facebook"/></a>
        <a href="https://www.instagram.com"><img src="/instagram.svg" alt="Instagram"/></a>
        <a href="https://www.linkedin.com"><img src="/linkedin.svg" alt="LinkedIn"/></a>*/}
        {
          Icons.map(icon => {
          var small = icon.toLowerCase();
          var text = icon[0].toUpperCase() + icon.substring(1);
          var href = `https://www.${small}.com/`;
            if (small === "email") {
            href = `mailto:${name}@${domain}`;
            } else if (small === "youtube") {
            href += `c/${name}`;
            } else if (small === "linkedin") {
            href += `${country}/${name}`;
            } else {
            href += name;
            }
          return <a href={href} key={v4()}><img src={`/${small}.svg`} alt={text}/></a>
          })
        }
      </div>
    </div>
  );
}
export default SocialMedia;