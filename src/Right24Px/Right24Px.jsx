import "./Right24Px.css";
import { Right24Px as ImportedRight24Px } from "../Right24Px/Right24Px.jsx";

export const Right24Px = ({ className, ...props }) => {
  return (
    <img className={"right-24-px-instance " + className} src="Right24Px.svg" />
  );
}