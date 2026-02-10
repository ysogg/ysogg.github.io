import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
 

const Cube = ({...props}) => {
const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [flip, setFlip] = useState(false)
  const [flipTexture, setTexture] = useState(false)
	useFrame((state, delta) => {
		// meshRef.current.rotation.y = state.pointer.x *0.2;
		// meshRef.current.rotation.x = state.pointer.y *0.2;

		if (flip) {
			meshRef.current.rotation.y += delta
		}
	})

	const [frontTexture, backTexture] = useTexture([`/img/${props.front}`, `/img/${props.back}`]);

	return (
	  <mesh
		ref={meshRef}
		scale={1.5}
		// rotation={flip ? [0, Math.PI *= -1, 0] : [0, 0, 0]}
		onClick={(event) => setFlip(!flip)}
		onPointerOver={(event) => setHover(true)}
		onPointerOut={(event) => setHover(false)}>
		<boxGeometry args={[4, 4, 0.2]} />

	  	<meshStandardMaterial key={0} attach={"material-0"} map={frontTexture}/>
	  	<meshStandardMaterial key={1} attach={"material-1"} map={frontTexture}/>
		<meshStandardMaterial key={2} attach={"material-2"} map={frontTexture}/>
		<meshStandardMaterial key={3} attach={"material-3"} map={frontTexture}/>
		<meshStandardMaterial key={4} attach={"material-4"} map={frontTexture}/>
		<meshStandardMaterial key={5} attach={"material-5"} map={backTexture}/>
	  </mesh>
	)
}

export default Cube