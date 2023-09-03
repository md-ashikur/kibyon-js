import { Text, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Color, DoubleSide, MeshBasicMaterial } from "three";


const HELIX_SPEED = 0;

export function Airplane(props) {
  const { nodes, materials, animations } = useGLTF("./models/airplane/Plane.glb");
  const { actions } = useAnimations(animations);

  const helix = useRef();

  useFrame((_state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  });

  return (
   <>
    <group
     
      {...props}
      dispose={null}
    
    >
      <group  scale={2} ref={helix} name="Studio_limbo_3_point_lighting_2x2x2">
       
        <group name="Jet_03" position={[3.4, -5.76, -51.38]}>
         
        </group>
        <group name="Jet_03002" position={[3.4, -5.76, -51.21]}>
         
        </group>
        <mesh
          name="Plane_With_Raised_Wings_Plane001"
          geometry={nodes.Plane_With_Raised_Wings_Plane001.geometry}
          material={materials.Paper}
          position={[-2.6, 0.22, 0.79]}
          rotation={[Math.PI / 2, 0, -1.57]}
          scale={0.2}
       
        ><meshStandardMaterial color="white" /></mesh>
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials["Material.005"]}
          position={[-2.9, 0.23, 0.36]}
          rotation={[2.3, -0.08, 0.02]}
          scale={0.03}
        />
      </group>
     
    </group>
   
   </>
  );
}

useGLTF.preload("./models/airplane/Plane.glb");