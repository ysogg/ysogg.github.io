import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Cube = (props: ThreeElements['mesh'], ) => {
const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
	useFrame((state => {
		meshRef.current.rotation.y = state.pointer.x *0.2;
		meshRef.current.rotation.x = state.pointer.y *0.2;
	}))
	const mappedTexture = useLoader(TextureLoader, "/img/cat.png");
	return (
	  <mesh
		{...props}
		ref={meshRef}
		scale={active ? 0.5 : 1.5}
		onClick={(event) => setActive(!active)}
		onPointerOver={(event) => setHover(true)}
		onPointerOut={(event) => setHover(false)}>
		<boxGeometry args={[4, 4, 0.2]} />
		{/* <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} /> */}
		<meshStandardMaterial map={mappedTexture}/>
	  </mesh>
	)
}

export default Cube