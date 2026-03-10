import { Mafs, Coordinates, Vector, Point, Text, useMovablePoint } from 'mafs';
import 'mafs/core.css';

interface ComplexNumber {
  real: number;
  imag: number;
  label?: string;
  color?: string;
}

interface Props {
  points?: ComplexNumber[];
  interactive?: boolean;
  showConjugate?: boolean;
  width?: number;
  height?: number;
}

export default function ComplexPlane({
  points = [],
  interactive = false,
  showConjugate = false,
  width = 400,
  height = 400,
}: Props) {
  // Interactive point
  const movablePoint = useMovablePoint([2, 1], {
    color: '#3b82f6',
  });

  const interactiveZ = interactive ? movablePoint.point : null;

  return (
    <div className="my-6">
      <Mafs
        width={width}
        height={height}
        viewBox={{ x: [-5, 5], y: [-5, 5] }}
      >
        <Coordinates.Cartesian />

        {/* Static points */}
        {points.map((p, idx) => (
          <g key={idx}>
            <Vector
              tail={[0, 0]}
              tip={[p.real, p.imag]}
              color={p.color || '#3b82f6'}
            />
            <Point x={p.real} y={p.imag} color={p.color || '#3b82f6'} />
            {p.label && (
              <Text
                x={p.real + 0.3}
                y={p.imag + 0.3}
                attach="w"
                size={14}
              >
                {p.label}
              </Text>
            )}
          </g>
        ))}

        {/* Interactive point */}
        {interactive && interactiveZ && (
          <>
            <Vector
              tail={[0, 0]}
              tip={interactiveZ}
              color="#3b82f6"
            />
            {movablePoint.element}
            <Text
              x={interactiveZ[0] + 0.3}
              y={interactiveZ[1] + 0.3}
              attach="w"
              size={14}
            >
              z = {interactiveZ[0].toFixed(1)} + {interactiveZ[1].toFixed(1)}i
            </Text>

            {/* Conjugate */}
            {showConjugate && (
              <>
                <Vector
                  tail={[0, 0]}
                  tip={[interactiveZ[0], -interactiveZ[1]]}
                  color="#8b5cf6"
                  style="dashed"
                />
                <Point
                  x={interactiveZ[0]}
                  y={-interactiveZ[1]}
                  color="#8b5cf6"
                />
                <Text
                  x={interactiveZ[0] + 0.3}
                  y={-interactiveZ[1] - 0.3}
                  attach="w"
                  size={14}
                >
                  z̄ = {interactiveZ[0].toFixed(1)} - {interactiveZ[1].toFixed(1)}i
                </Text>
              </>
            )}
          </>
        )}
      </Mafs>

      {interactive && interactiveZ && (
        <div className="mt-4 p-4 bg-base-200 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-base-content/60">Número complejo:</span>
              <span className="ml-2 font-mono">
                z = {interactiveZ[0].toFixed(2)} + {interactiveZ[1].toFixed(2)}i
              </span>
            </div>
            <div>
              <span className="text-base-content/60">Módulo:</span>
              <span className="ml-2 font-mono">
                |z| = {Math.sqrt(interactiveZ[0] ** 2 + interactiveZ[1] ** 2).toFixed(2)}
              </span>
            </div>
            <div>
              <span className="text-base-content/60">Parte real:</span>
              <span className="ml-2 font-mono">Re(z) = {interactiveZ[0].toFixed(2)}</span>
            </div>
            <div>
              <span className="text-base-content/60">Parte imaginaria:</span>
              <span className="ml-2 font-mono">Im(z) = {interactiveZ[1].toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
