import { Image, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useRef } from "react";

export const projects = [
  {
    title: "Weather",
    url: "https://github.com/xdrenn/WeatherTest",
    image: "projects/Weather.png",
  },
  {
    title: "Guitar Shop",
    url: "https://github.com/xdrenn/Shop",
    image: "projects/GuitarShop.png",
  },
  {
    title: "TODO",
    url: "https://github.com/xdrenn/dotApp",
    image: "projects/ToDo.png",
  },
];

const Project = (props) => {
  const { project } = props;

  const background = useRef();

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <Image
          scale={[2, 4.3, 5.6]}
          url={project.image}
          toneMapped={false}
          position-y={0.3}
          transparent={true}
        />
      </mesh>
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-1, -2, 0]}
        color={"white"}
      >
        {project.title}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} />
        </motion.group>
      ))}
    </group>
  );
};
