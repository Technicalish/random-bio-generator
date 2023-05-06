import Main from "./Main";
import Footer from "./Footer";
import Chance from "chance";
import { useLocation } from 'react-router-dom';
var chance = new Chance();
function App() {
  var location = useLocation();

  React.useEffect(() => {
    console.log(location)
  }, [location]);

  return (
    <>
    <Main name={chance.name()} aboutme={chance.paragraph()} domain={ chance.domain({ tld: "com" }) } country={chance.country().toLowerCase()}/>
    <Footer/>
    </>
  )
}
export default App;