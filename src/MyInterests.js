import Hobbies from "./Hobbies";
import { v4 } from "uuid";
function MyInterests() {
  return (
    <div className="my-interests">
      <h2>My Interests</h2>
      {/*<ul>
        <li>Football</li>
        <li>Music</li>
        <li>Writing</li>
        <li>Travelling</li>
        <li>Shopping</li>
      </ul>*/}
      <ul>
        {Hobbies.map(hobby => <li key={v4()}>{hobby}</li>)}
      </ul>
    </div>
  )
}
export default MyInterests;