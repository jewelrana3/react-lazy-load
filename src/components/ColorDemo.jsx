import { Circle } from "react-feather";

const ColorDemo = () => {
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <div className="demo">
      <h1>Color demo</h1>
      {colorMap.map((color, index) => (
        <Circle key={index} color={color} fill={color} size={128}></Circle>
      ))}
    </div>
  );
};

export default ColorDemo;
