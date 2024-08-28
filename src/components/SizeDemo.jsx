import { Circle } from "react-feather";

const SizeDemo = () => {
  const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];
  return (
    <div className="demo">
      <h1>Size Demo</h1>
      {sizeMap.map((size, index) => (
        <Circle key={index} fill="black" color="black" size={size}></Circle>
      ))}
    </div>
  );
};

export default SizeDemo;
