import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Me } from "./Me";
import { Room } from "./Room";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Room section={section} />

        <group
          name="Empty"
          position={[0.127, 0.26, -0.65]}
          rotation={[-Math.PI, 0.345, -Math.PI]}
        >
          <Me animation={section === 0 ? "Typing" : "Standing"} />
        </group>
      </motion.group>

      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <icosahedronGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
