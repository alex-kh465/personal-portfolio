import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function generateNodesData(count) {
  const pts = new Float32Array(count * 3);
  const nodes = [];

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    pts[i * 3] = x;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = z;
    nodes.push(new THREE.Vector3(x, y, z));
  }

  const lineVerts = [];
  const MAX_DIST = 2.5;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < MAX_DIST) {
        lineVerts.push(nodes[i].x, nodes[i].y, nodes[i].z);
        lineVerts.push(nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }

  return {
    positions: pts,
    linePositions: new Float32Array(lineVerts),
  };
}

const INITIAL_NODES_DATA = generateNodesData(120);

function Nodes() {
  const ref = useRef();
  const linesRef = useRef();

  const { positions, linePositions } = INITIAL_NODES_DATA;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.04;
      ref.current.rotation.x = Math.sin(t * 0.02) * 0.15;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04;
      linesRef.current.rotation.x = Math.sin(t * 0.02) * 0.15;
    }
  });

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  return (
    <group>
      {/* Edges */}
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#111827" transparent opacity={0.15} />
      </lineSegments>

      {/* Nodes */}
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0055FF"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

function CoreSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = t * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 24, 24]} />
      <meshBasicMaterial
        color="#111827"
        wireframe={true}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function OrbitingRing({ radius = 2, speed = 0.3, color = '#111827', axis = 'y', wireframe = false }) {
  const ref = useRef();

  const geo = useMemo(() => {
    const geometry = new THREE.TorusGeometry(radius, 0.005, 8, 100);
    return geometry;
  }, [radius]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      if (axis === 'y') ref.current.rotation.y = t * speed;
      if (axis === 'x') ref.current.rotation.x = t * speed;
      if (axis === 'z') ref.current.rotation.z = t * speed;
    }
  });

  return (
    <mesh ref={ref} geometry={geo}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={wireframe ? 0.8 : 0.2}
        wireframe={wireframe}
      />
    </mesh>
  );
}

export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Nodes count={120} />
      <CoreSphere />
      <OrbitingRing radius={1.2} speed={0.4} color="#0055FF" axis="y" wireframe={true} />
      <OrbitingRing radius={1.6} speed={0.25} color="#111827" axis="x" />
      <OrbitingRing radius={2.0} speed={0.18} color="#111827" axis="z" />
    </Canvas>
  );
}
