import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { Me } from "./Me";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Me />
      <Room />
    </>
  );
};
