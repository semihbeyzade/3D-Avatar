import React, {useState, Suspense} from "react";
import ContainerCeku from "./components/ContainerCeku";
import ContainerDonut from "./components/ContainerDonut";
import ContainerVespa from "./components/ContainerVespa";





// scene => sahne
// geometry => döndürmek istedigimiz nesne
// material => renk,
// mesh => geometry, material

function App() {
  const [valid, setValid] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
     {
       (currentStep === 1) ? <ContainerDonut setCurrentStep={setCurrentStep}/> : null
     }

     {
       (currentStep === 2) ? <ContainerCeku setCurrentStep={setCurrentStep}/> : null
     }
      {
       (currentStep === 3) ? <ContainerVespa setCurrentStep={setCurrentStep}/> : null
     }
    </>
  );
}

export default App;
