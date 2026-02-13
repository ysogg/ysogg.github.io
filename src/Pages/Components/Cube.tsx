import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
 

const Cube = ({...props}) => {
const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [flip, setFlip] = useState(false)
  const [side, setSide] = useState(false)
  const [animCount, setAnimCount] = useState(0)
	useFrame((state, delta) => {
		if (!flip) {
			setAnimCount(0)
			meshRef.current.rotation.y = state.pointer.x *0.15 + (side ? 3.14159 : 0);
			meshRef.current.rotation.x = state.pointer.y *0.15;
		}

		if (flip) {
			meshRef.current.rotation.y += delta * 3
			setAnimCount(animCount+1)
			
			if (animCount > 187) {
				setSide(!side)	
				setFlip(!flip)
			}
		}
	})

	const [frontTexture, backTexture, topTexture, bottomTexture, leftTexture, rightTexture] = useTexture([
		`/img/${props.front}`, 
		`/img/${props.back}`, 
		`/img/${props.front}`, // Use .front for now since we don't ever see top/bottom
		`/img/${props.front}`, //
		`/img/${props.left}`, 
		`/img/${props.front}`, 
	]);

	return (
	  <mesh
		ref={meshRef}
		scale={1.5}
		// rotation={flip ? [0, Math.PI *= -1, 0] : [0, 0, 0]}
		onClick={(event) => setFlip(!flip)}
		onPointerOver={(event) => setHover(true)}
		onPointerOut={(event) => setHover(false)}>
		<boxGeometry args={[4, 4, 0.2]} />

	  	<meshStandardMaterial key={0} attach={"material-0"} map={rightTexture}/>
	  	<meshStandardMaterial key={1} attach={"material-1"} map={leftTexture}/>
		<meshStandardMaterial key={2} attach={"material-2"} map={topTexture}/> {/*Won't need but need to define all 6 sides*/}
		<meshStandardMaterial key={3} attach={"material-3"} map={bottomTexture}/> {/*^^^*/}
		<meshStandardMaterial key={4} attach={"material-4"} map={frontTexture}/>
		<meshStandardMaterial key={5} attach={"material-5"} map={backTexture}/>
	  </mesh>
	)
}

export default Cube