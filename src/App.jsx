import { Suspense, useState } from "react";

import demos from "./data/demos";
import importDemo from "./utils/importDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };
  const selectDemo = async (file) => {
    const Demo = await loadDemo(file);

    setSelectedDemo(Demo);
  };

  return (
    <div>
      <div>
        <h1>React lazy load</h1>
        {demos.map((demo) => (
          <button
            key={demo.name}
            className="color"
            onClick={() => selectDemo(demo.file)}
          >
            {demo.name}
          </button>
        ))}
      </div>

      <div>
        {<Suspense fallback={<h1>Loading....</h1>}>{selectedDemo}</Suspense>}
      </div>
    </div>
  );
}
