import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Mesh, MeshStandardMaterial, Color } from "three";

const KnotModel = () => {
  const primitiveRef = useRef<Mesh>(null);
  const obj = useLoader(OBJLoader, "/torusknot1.obj");

  useEffect(() => {
    if (obj) {
      obj.traverse(child => {
        if (child instanceof Mesh) {
          // Create a new MeshStandardMaterial with custom properties
          const material = new MeshStandardMaterial({
            color: new Color(0x013220), // Green color
            metalness: 0.95,
            roughness: 0.25,
            emissive: new Color(0x222222) // Slight glow
          });

          child.material = material;
        }
      });
    }

    // Set initial rotation
    if (primitiveRef.current) {
      primitiveRef.current.rotation.x = Math.PI / 2;
      primitiveRef.current.rotation.y = Math.PI / 8;
      //primitiveRef.current.rotation.z = Math.PI / 2;
    }
  }, [obj]);

  useFrame((state, delta) => {
    if (primitiveRef.current) {
      //primitiveRef.current.rotation.x += delta * 0.5;
      //primitiveRef.current.rotation.y += delta * 0.5;
      primitiveRef.current.rotation.z += delta * 0.7;
    }
  });

  return (
    <primitive
      object={obj}
      ref={primitiveRef}
      scale={[0.65, 0.65, 0.65]}
      position={[0, 0, 0]}
    />
  );
};

export default KnotModel;
