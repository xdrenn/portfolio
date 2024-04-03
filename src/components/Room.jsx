import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

export function Room(props) {
  const { section } = props;
  const group = useRef();
  const { nodes } = useGLTF("models/night.glb");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="RootNode"
          position={[-2.156, 0, 0]}
          rotation={[0.052, -0.838, 0.057]}
        />
        <group
          name="Empty"
          position={[0.041, 0.368, -0.733]}
          rotation={[-Math.PI, 0.345, -Math.PI]}
        />
        <mesh
          name="Rug"
          geometry={nodes.Rug.geometry}
          material={textureMaterial}
          position={[0.474, 0.194, 0.765]}
        />
        <group name="Plant" position={[-0.78, 1.071, -1.61]}>
          <mesh
            name="mesh24448074"
            geometry={nodes.mesh24448074.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh24448074_1"
            geometry={nodes.mesh24448074_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh24448074_2"
            geometry={nodes.mesh24448074_2.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="Plane" position={[0, 0.164, 0]}>
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_2"
            geometry={nodes.Plane001_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_3"
            geometry={nodes.Plane001_3.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="Skateboard"
          geometry={nodes.Skateboard.geometry}
          material={textureMaterial}
          position={[1.713, 0.582, -1.885]}
          rotation={[0.595, 1.502, -2.593]}
          scale={[0.131, 0.189, 0.157]}
        />
        <mesh
          name="Rubik_Cube"
          geometry={nodes.Rubik_Cube.geometry}
          material={textureMaterial}
          position={[-0.624, 2.082, -2.046]}
          rotation={[0, 1.283, 0]}
          scale={6.008}
        />
        <group
          name="Desk"
          position={[-0.074, 0, -1.521]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="Plane001_Plane002_BlackWood002"
            geometry={nodes.Plane001_Plane002_BlackWood002.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood002_1"
            geometry={nodes.Plane001_Plane002_BlackWood002_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood002_2"
            geometry={nodes.Plane001_Plane002_BlackWood002_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood002_3"
            geometry={nodes.Plane001_Plane002_BlackWood002_3.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Plane001_Plane002_BlackWood002_4"
            geometry={nodes.Plane001_Plane002_BlackWood002_4.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="iMac"
          position={[0.454, 0.939, -1.723]}
          rotation={[Math.PI, -1.099, Math.PI]}
        >
          <mesh
            name="iMac_1001"
            geometry={nodes.iMac_1001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="iMac_1001_1"
            geometry={nodes.iMac_1001_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="iMac_1001_2"
            geometry={nodes.iMac_1001_2.geometry}
            material={textureMaterial}
          />
        </group>
        <group name="LavaLamp" position={[-1.302, 2.071, -1.986]}>
          <mesh
            name="Node-Mesh002"
            geometry={nodes["Node-Mesh002"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh002_1"
            geometry={nodes["Node-Mesh002_1"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh002_2"
            geometry={nodes["Node-Mesh002_2"].geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="Chair"
          position={[0.038, 0, -0.764]}
          rotation={[0, -0.35, 0]}
        >
          <mesh
            name="Node-Mesh001"
            geometry={nodes["Node-Mesh001"].geometry}
            material={textureMaterial}
          />
          <mesh
            name="Node-Mesh001_1"
            geometry={nodes["Node-Mesh001_1"].geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="Keyboard"
          position={[0.215, 0.948, -1.215]}
          rotation={[0, -0.224, 0]}
          scale={0.63}
        >
          <mesh
            name="mesh425587018001"
            geometry={nodes.mesh425587018001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018001_1"
            geometry={nodes.mesh425587018001_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018001_2"
            geometry={nodes.mesh425587018001_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh425587018001_3"
            geometry={nodes.mesh425587018001_3.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="Comp_Mouse"
          geometry={nodes.Comp_Mouse.geometry}
          material={textureMaterial}
          position={[-0.008, 0, 0.076]}
        />
        <group name="Shelf" position={[-0.868, 1.694, -2.038]}>
          <mesh
            name="SM_ShelfSM_Shelf1_1001"
            geometry={nodes.SM_ShelfSM_Shelf1_1001.geometry}
            material={textureMaterial}
          />
          <mesh
            name="SM_ShelfSM_Shelf1_1001_1"
            geometry={nodes.SM_ShelfSM_Shelf1_1001_1.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="Picture"
          position={[1.841, 1.747, -2.301]}
          rotation={[0.204, 0, 0]}
          scale={4.691}
        >
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={textureGlassMaterial}
          />
          <mesh
            name="Cube002_1"
            geometry={nodes.Cube002_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="Cube002_2"
            geometry={nodes.Cube002_2.geometry}
            material={textureMaterial}
          />
        </group>
        <group
          name="Blindes"
          position={[-2.555, 2.048, -0.085]}
          rotation={[Math.PI, -1.557, Math.PI]}
          scale={[1.387, 1, 1.004]}
        >
          <mesh
            name="mesh1785529362"
            geometry={nodes.mesh1785529362.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh1785529362_1"
            geometry={nodes.mesh1785529362_1.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh1785529362_2"
            geometry={nodes.mesh1785529362_2.geometry}
            material={textureMaterial}
          />
          <mesh
            name="mesh1785529362_3"
            geometry={nodes.mesh1785529362_3.geometry}
            material={textureMaterial}
          />
        </group>
        <mesh
          name="Ribbon"
          geometry={nodes.Ribbon.geometry}
          material={textureMaterial}
          position={[-2.682, 3.607, 0.014]}
          rotation={[-Math.PI, 1.566, 0]}
          scale={[-2.511, -40.342, -0.013]}
        />
        <mesh
          name="RibbonOne"
          geometry={nodes.RibbonOne.geometry}
          material={textureMaterial}
          position={[-0.02, 3.607, -2.175]}
          rotation={[0, 0, -Math.PI]}
          scale={[-3.161, -40.342, -0.013]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/room.glb");
