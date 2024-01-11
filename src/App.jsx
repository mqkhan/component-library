import { BsFillBadge3DFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Pic from "./components/Pic.jpg";

export default function App() {
  function handelClick() {
    alert("button clicked");
  }
  return (
    <>
      <div className="flex flex-col gap-2 w-4/12 m-auto mt-3">
        <div className="button bg-red-300 p-1">
          <Button size={50} color="black" onClick={handelClick} />
          <Button size={75} color="white" disabled />
        </div>
        <div className="alert bg-zinc-200">
          <Alert color="red" icon={<BsInfoCircleFill />} />
        </div>
        <div className="badge bg-lime-100">
          <Badge color="green" size={600} icon={<BsFillBadge3DFill />} />
          <Badge color="red" size={300} icon={<BsFillBadge3DFill />} />
        </div>
        <div className="card bg-green-200">
          <Card href="www.google.com" imgAlt="imgpic" imgSrc={Pic} />
        </div>
      </div>
    </>
  );
}
