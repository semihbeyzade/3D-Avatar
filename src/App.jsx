import React, {useState, Suspense} from "react";
import ContainerCeku from "./components/ContainerCeku";
import ContainerDonut from "./components/ContainerDonut";





// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material

function App() {
  const [valid, setValid] = useState(false)

  return (
    <>
    <button onClick={() => setValid(!valid)}>Click</button>
    {valid ? <ContainerCeku /> :  <ContainerDonut />}
   
   
    
    
    </>
  );
}

export default App;
