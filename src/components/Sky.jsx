import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import { Stars, Cloud } from "@react-three/drei";

import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import styled from "styled-components";

extend({TrackballControls});

const Parent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
`

const TrackControls = () => {
    const {
        camera,
        gl: { domElement },
      } = useThree();
      // Ref to the controls, so that we can update them on every frame using useFrame
      const controls = useRef();
      useFrame((state) => controls.current.update());
      return <trackballControls ref={controls} args={[camera, domElement]} />;
}

const Sky = (props) => {
    const {selectedTheme} = props;

    if (selectedTheme === 'light') {
        return (
        <Parent>
            <Canvas camera={{ position: [0, 0, 18], fov: 25 }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <TrackControls/>
                <Suspense fallback={null}>
                    <Cloud segments={10} speed={0.3} depth={2.5} opacity={0.9}/>
                </Suspense>
            </Canvas>
        </Parent>
        )
    } else {
        return (
            <Parent>
                <Canvas camera={{ position: [0, 0, 18], fov: 25 }}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <TrackControls/>
                    <Suspense fallback={null}>
                        <Stars radius={1} depth={25} count={10000} factor={4} saturation={0} fade speed={1} />
                        <Cloud segments={6} speed={0.4} opacity={0.6} color={'#292F53'} depth={2.5}/>
                    </Suspense>
                </Canvas>
            </Parent>
        )
    }
}

export default Sky;