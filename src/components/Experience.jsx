import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { Me } from "./Me";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <Room />
      <group
        name="Empty"
        position={[0.127, 0.26, -0.65]}
        rotation={[-Math.PI, 0.345, -Math.PI]}
      >
        <Me />
      </group>
    </>
  );
};
