import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Me } from "./Me";
import { Room } from "./Room";
import { Projects } from "./Projects";
import { Background } from "./Background";
import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import * as THREE from "three";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  const character = useRef();
  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

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
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    const position = new THREE.Vector3();
    character.current.getWorldPosition(position);

    const quaternion = new THREE.Quaternion();
    character.current.getWorldQuaternion(quaternion);
    const euler = new THREE.Euler();
    euler.setFromQuaternion(quaternion, "XYZ");
  });

  return (
    <>
      <Background />
      <motion.group
        position={[2.01, 0.229000000000000001, 2.631801948466054]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 - 3.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Me animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <plane />
        <Room section={section} />
        <group
          ref={character}
          position={[0.127, 0.26, -0.65]}
          rotation={[-Math.PI, 0.345, -Math.PI]}
        ></group>
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
              color={"pink"}
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
              color={"purple"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};
