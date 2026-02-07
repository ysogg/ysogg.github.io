import { Canvas } from '@react-three/fiber'
import Cube from '../Components/Cube'
import "../../Styles/Grid.css"


function Folio() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test Page
        </p>
        <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Cube position={[-1.2, 0, 0]} />
        <Cube position={[1.2, 0, 0]} />
      </Canvas>
      </header>
    </div>
  );
}

export default Folio;