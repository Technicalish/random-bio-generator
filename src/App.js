import Main from "./Main";
import Footer from "./Footer";
import Chance from "chance";
import { useEffect } from 'react';
var chance = new Chance();
function App() {
  useEffect(() => {
    console.log(window.location)
  }, []);

  return (
    <>
    <Main name={chance.name()} aboutme={chance.paragraph()} domain={ chance.domain({ tld: "com" }) } country={chance.country().toLowerCase()}/>
    <Footer/>
    </>
  )
}
export default App;