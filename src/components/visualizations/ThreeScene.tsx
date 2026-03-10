import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line, Text, Grid } from '@react-three/drei';
import { useState, useMemo } from 'react';
import * as THREE from 'three';

interface Vector3D {
  coords: [number, number, number];
  color: string;
  label?: string;
}

interface ThreeSceneProps {
  title?: string;
  vectors?: Vector3D[];
  showPlane?: boolean;
  planeNormal?: [number, number, number];
  interactive?: boolean;
}

function Arrow({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const direction = new THREE.Vector3(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
  const length = direction.length();
  direction.normalize();

  const arrowHelper = useMemo(() => {
    return new THREE.ArrowHelper(direction, new THREE.Vector3(...start), length, color, 0.2, 0.1);
  }, [start, end, color]);

  return <primitive object={arrowHelper} />;
}

function CoordinateAxes() {
  return (
    <>
      <Line points={[[-3, 0, 0], [3, 0, 0]]} color="#ef4444" lineWidth={1} />
      <Line points={[[0, -3, 0], [0, 3, 0]]} color="#22c55e" lineWidth={1} />
      <Line points={[[0, 0, -3], [0, 0, 3]]} color="#3b82f6" lineWidth={1} />
      <Text position={[3.3, 0, 0]} fontSize={0.3} color="#ef4444">X</Text>
      <Text position={[0, 3.3, 0]} fontSize={0.3} color="#22c55e">Y</Text>
      <Text position={[0, 0, 3.3]} fontSize={0.3} color="#3b82f6">Z</Text>
    </>
  );
}

function Plane3D({ normal, color = "#8b5cf6" }: { normal: [number, number, number]; color?: string }) {
  const normalVec = new THREE.Vector3(...normal).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normalVec);

  return (
    <mesh quaternion={quaternion}>
      <planeGeometry args={[4, 4]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function ThreeScene({
  title = "Visualización 3D",
  vectors = [
    { coords: [2, 1, 0], color: "#3b82f6", label: "u" },
    { coords: [0, 2, 1], color: "#22c55e", label: "v" },
    { coords: [1, 0, 2], color: "#f59e0b", label: "w" }
  ],
  showPlane = false,
  planeNormal = [1, 1, 1],
  interactive = true
}: ThreeSceneProps) {
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="my-8 p-4 bg-base-200 rounded-xl">
      <h4 className="font-medium text-base-content/80 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
        {title}
      </h4>

      <div className="bg-gray-900 rounded-lg overflow-hidden" style={{ height: '400px' }}>
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          <CoordinateAxes />
          <Grid args={[10, 10]} position={[0, -0.01, 0]} cellColor="#444" sectionColor="#666" />

          {vectors.map((vec, i) => (
            <group key={i}>
              <Arrow start={[0, 0, 0]} end={vec.coords} color={vec.color} />
              {showLabels && vec.label && (
                <Text
                  position={[vec.coords[0] + 0.2, vec.coords[1] + 0.2, vec.coords[2] + 0.2]}
                  fontSize={0.3}
                  color={vec.color}
                >
                  {vec.label}
                </Text>
              )}
            </group>
          ))}

          {showPlane && <Plane3D normal={planeNormal} />}

          {interactive && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />}
        </Canvas>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        {vectors.map((vec, i) => (
          <div key={i} className="badge gap-1" style={{ backgroundColor: vec.color, color: 'white' }}>
            {vec.label || `v${i + 1}`} = ({vec.coords.join(', ')})
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-4">
        <label className="label cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={showLabels}
            onChange={(e) => setShowLabels(e.target.checked)}
            className="checkbox checkbox-sm checkbox-primary"
          />
          <span className="label-text">Mostrar etiquetas</span>
        </label>
      </div>

      <p className="text-sm text-base-content/60 mt-2 text-center">
        Arrastra para rotar, scroll para zoom, shift+drag para mover
      </p>
    </div>
  );
}
