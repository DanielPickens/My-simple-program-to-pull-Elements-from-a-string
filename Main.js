import React from "react";

function App() {
  const programmers = ["Daniel", "John", "Jane"];

  return (
    <ul>
      {/* Returns 'Daniel' */}
      {programmers
       .filter(programmer => !programmer.startsWith("J"))
       .map(programmer => <li>{programmer}</li>)}
    </ul>
  );
}

export default App;
