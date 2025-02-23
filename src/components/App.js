import { useState } from "react";
import React from "react";

const App = () => {
  const [input, setInput] = useState(''); 

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input value={input} onChange={onInput} />
      {!!input.length && <p>Hello {input}!</p>}
    </div>
  );
};

export default App;
