import { useState } from 'react';
import { Mafs, Coordinates, Vector, useMovablePoint, Theme, Text } from 'mafs';
import 'mafs/core.css';

interface VectorVisualizationProps {
  title?: string;
  showSum?: boolean;
  showScalar?: boolean;
}

export default function VectorVisualization({
  title = "Visualización de Vectores",
  showSum = true,
  showScalar = false
}: VectorVisualizationProps) {
  const [scalar, setScalar] = useState(1.5);

  const pointA = useMovablePoint([2, 1], { color: Theme.blue });
  const pointB = useMovablePoint([1, 2], { color: Theme.green });

  const vecA = pointA.point;
  const vecB = pointB.point;
  const vecSum = [vecA[0] + vecB[0], vecA[1] + vecB[1]] as [number, number];
  const vecScaled = [vecA[0] * scalar, vecA[1] * scalar] as [number, number];

  return (
    <div className="my-8 p-4 bg-base-200 rounded-xl">
      <h4 className="font-medium text-base-content/80 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
        {title}
      </h4>

      <div className="bg-white rounded-lg overflow-hidden">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }} preserveAspectRatio={false} height={350}>
          <Coordinates.Cartesian />

          {/* Vector A */}
          <Vector tail={[0, 0]} tip={vecA} color={Theme.blue} />
          <Text x={vecA[0] + 0.3} y={vecA[1] + 0.3} size={14} color={Theme.blue}>
            u
          </Text>

          {/* Vector B */}
          <Vector tail={[0, 0]} tip={vecB} color={Theme.green} />
          <Text x={vecB[0] + 0.3} y={vecB[1] + 0.3} size={14} color={Theme.green}>
            v
          </Text>

          {/* Suma de vectores */}
          {showSum && (
            <>
              <Vector tail={[0, 0]} tip={vecSum} color={Theme.pink} />
              <Vector tail={vecA} tip={vecSum} color={Theme.green} opacity={0.5} />
              <Text x={vecSum[0] + 0.3} y={vecSum[1] + 0.3} size={14} color={Theme.pink}>
                u + v
              </Text>
            </>
          )}

          {/* Vector escalado */}
          {showScalar && (
            <>
              <Vector tail={[0, 0]} tip={vecScaled} color={Theme.orange} />
              <Text x={vecScaled[0] + 0.3} y={vecScaled[1] + 0.3} size={14} color={Theme.orange}>
                {scalar}u
              </Text>
            </>
          )}

          {pointA.element}
          {pointB.element}
        </Mafs>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="badge badge-primary gap-1">
          u = ({vecA[0].toFixed(1)}, {vecA[1].toFixed(1)})
        </div>
        <div className="badge badge-success gap-1">
          v = ({vecB[0].toFixed(1)}, {vecB[1].toFixed(1)})
        </div>
        {showSum && (
          <div className="badge badge-secondary gap-1">
            u + v = ({vecSum[0].toFixed(1)}, {vecSum[1].toFixed(1)})
          </div>
        )}
      </div>

      {showScalar && (
        <div className="mt-3">
          <label className="label">
            <span className="label-text">Escalar: {scalar.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="-2"
            max="3"
            step="0.1"
            value={scalar}
            onChange={(e) => setScalar(parseFloat(e.target.value))}
            className="range range-primary range-sm"
          />
        </div>
      )}

      <p className="text-sm text-base-content/60 mt-3 text-center">
        Arrastra los puntos azul y verde para mover los vectores
      </p>
    </div>
  );
}
