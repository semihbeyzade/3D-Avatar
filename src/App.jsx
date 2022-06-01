import React, {useState} from "react";
import ContainerCeku from "./components/ContainerCeku";
import Deneme from "./components/Deneme";

// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material

function App() {
  const [valid, setValid] = useState(false)

  return (
    <>
     <ContainerCeku /> 
    </>
  );
}

export default App;
