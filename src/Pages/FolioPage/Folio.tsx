import { Canvas } from '@react-three/fiber'
import Cube from '../Components/Cube'
import "../../Styles/Tiles.css"


function Folio() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div>
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <Cube position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div>
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <Cube position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div>
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <Cube position={[0, 0, 0]} />
            </Canvas>
          </div>
          <div>
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <Cube position={[0, 0, 0]} />
            </Canvas>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Folio;