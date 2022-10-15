import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { AmbientLight, MeshLambertMaterial } from "three";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import dynamic from "next/dynamic";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const Model = dynamic(() => import("../gltf/Earth"), {
  ssr: false,
});
export interface IAnimatedSectionProps {}

function Planet(props: any) {
  const mesh = React.useRef<any>(null);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <Model />
    </mesh>
  );
}
export default function AnimatedSection(props: IAnimatedSectionProps) {
  React.useEffect(() => {}, []);
  // const camera = useThree(state => state.camera);
  // camera.position.set(-2, -3, 2);

  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <div className="animated-section">
      <Canvas
        camera={{ position: [-1.5, -1.2, 0] }}
        className="animated-section__canvas"
      >
        {/* <OrbitControls autoRotate={false} /> */}
        <React.Suspense fallback={null}>
          <Planet position={[-0.5, -0.5, -0.5]} />
        </React.Suspense>
        {/* <PlanetEarthWebGl /> */}
        <ambientLight intensity={0.5} />
        <directionalLight />
        {/* <EffectComposer multisampling={0} disableNormalPass={true}> */}
        {/* <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          /> */}
        {/* <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.2}
            height={100}
            opacity={0.05}
          />
          <Noise opacity={0.5} />
          <Vignette eskil={false} offset={0.1} darkness={0.1} />
        </EffectComposer> */}
      </Canvas>
    </div>
  );
}
