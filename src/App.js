import Main from "./Main";
import Footer from "./Footer";
import Chance from "chance";
var chance = new Chance();
function App() {
  return (
    <>
    <Main name={chance.name()} aboutme={chance.paragraph()} domain={ chance.domain({ tld: "com" }) } country={chance.country().toLowerCase()}/>
    <Footer/>
    </>
  )
}
export default App;