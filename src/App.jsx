import { BsFillBadge3DFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import Button from "../components/Button";
import Alert from "../components/Alert";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Pic from "../components/Pic.jpg";

export default function App() {
  function handelClick() {
    alert("button clicked");
  }
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button size={50} color="black" onClick={handelClick} />
        <Button size={75} color="white" disabled />
      </div>
      <div>
        <Alert color="red" icon={<BsInfoCircleFill />} />
      </div>
      <div>
        <Badge color="red" size={600} icon={<BsFillBadge3DFill />} />
        <Badge color="red" size={300} icon={<BsFillBadge3DFill />} />
      </div>
      <div>
        <Card href="www.google.com" imgAlt="imgpic" imgSrc={Pic} />
      </div>
    </div>
  );
}
