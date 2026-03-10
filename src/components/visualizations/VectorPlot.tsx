import { Mafs, Coordinates, Vector, Point, Text, Line, useMovablePoint } from 'mafs';
import 'mafs/core.css';

interface VectorData {
  x: number;
  y: number;
  label?: string;
  color?: string;
  origin?: [number, number];
}

interface Props {
  vectors?: VectorData[];
  points?: { x: number; y: number; label?: string; color?: string }[];
  showGrid?: boolean;
  interactive?: boolean;
  viewBox?: { x: [number, number]; y: [number, number] };
  width?: number;
  height?: number;
}

export default function VectorPlot({
  vectors = [],
  points = [],
  showGrid = true,
  interactive = false,
  viewBox = { x: [-5, 5], y: [-5, 5] },
  width = 400,
  height = 400,
}: Props) {
  const movablePoint = useMovablePoint([2, 2], {
    color: '#3b82f6',
  });

  return (
    <div className="my-6">
      <Mafs width={width} height={height} viewBox={viewBox}>
        {showGrid && <Coordinates.Cartesian />}

        {/* Static vectors */}
        {vectors.map((v, idx) => {
          const origin = v.origin || [0, 0];
          return (
            <g key={`vector-${idx}`}>
              <Vector
                tail={origin}
                tip={[origin[0] + v.x, origin[1] + v.y]}
                color={v.color || '#3b82f6'}
              />
              {v.label && (
                <Text
                  x={origin[0] + v.x / 2 + 0.3}
                  y={origin[1] + v.y / 2 + 0.3}
                  attach="w"
                  size={14}
                >
                  {v.label}
                </Text>
              )}
            </g>
          );
        })}

        {/* Static points */}
        {points.map((p, idx) => (
          <g key={`point-${idx}`}>
            <Point x={p.x} y={p.y} color={p.color || '#ef4444'} />
            {p.label && (
              <Text x={p.x + 0.2} y={p.y + 0.2} attach="w" size={14}>
                {p.label}
              </Text>
            )}
          </g>
        ))}

        {/* Interactive vector */}
        {interactive && (
          <>
            <Vector
              tail={[0, 0]}
              tip={movablePoint.point}
              color="#3b82f6"
            />
            {movablePoint.element}
            <Text
              x={movablePoint.point[0] + 0.3}
              y={movablePoint.point[1] + 0.3}
              attach="w"
              size={14}
            >
              ({movablePoint.point[0].toFixed(1)}, {movablePoint.point[1].toFixed(1)})
            </Text>
          </>
        )}
      </Mafs>

      {interactive && (
        <div className="mt-4 p-4 bg-base-200 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-base-content/60">Vector:</span>
              <span className="ml-2 font-mono">
                ({movablePoint.point[0].toFixed(2)}, {movablePoint.point[1].toFixed(2)})
              </span>
            </div>
            <div>
              <span className="text-base-content/60">Magnitud:</span>
              <span className="ml-2 font-mono">
                {Math.sqrt(
                  movablePoint.point[0] ** 2 + movablePoint.point[1] ** 2
                ).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
