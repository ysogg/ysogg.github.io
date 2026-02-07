import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const WebGLComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gl, setGL] = useState<WebGLRenderingContext | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (canvas) {
    // Use 'webgl' or 'webgl2'
    const context = canvas.getContext('webgl') || canvas.getContext('webgl2');
    if (context) {
      setGL(context as WebGLRenderingContext);
    } else {
      console.error('WebGL not supported');
    }
  }
}, []);

useEffect(() => {
  if (gl) {
    const width = window.innerWidth, height = window.innerHeight;

	// init

	const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
	camera.position.z = 1;

	const scene = new THREE.Scene();

	const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	const material = new THREE.MeshNormalMaterial();

	const mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	const renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( width, height );
	renderer.setAnimationLoop( animate );
	document.body.appendChild( renderer.domElement );

	// animation

	function animate( time: GLfloat ) {

		mesh.rotation.x = time / 2000;
		mesh.rotation.y = time / 1000;

		renderer.render( scene, camera );

	}
  }
}, [gl]);	

	return <canvas ref={canvasRef} width={600} height={400} />;
};






export default WebGLComponent