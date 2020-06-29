import React from "react";

// function App(){
//   return (
//     <React.Fragment>
//       <h1>Help Queue</h1>
//       <h3>3a</h3>
//       <h3>Thato and Haley</h3>
//       <p><em>Firebase entries not saving!</em></p>
//       <hr/>
//     </React.Fragment>
//   );
// }

//  Below we're evaluating expressions inside curly braces: 

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App; 
