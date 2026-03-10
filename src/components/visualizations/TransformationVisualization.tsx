import { useState, useMemo } from 'react';
import { Mafs, Coordinates, Vector, Polygon, Theme, Text, Line } from 'mafs';
import 'mafs/core.css';

type TransformationType = 'identity' | 'rotation' | 'reflection' | 'shear' | 'scale' | 'custom';

interface TransformationVisualizationProps {
  title?: string;
  defaultType?: TransformationType;
}

const TRANSFORMS: Record<TransformationType, { matrix: number[][]; name: string; description: string }> = {
  identity: {
    matrix: [[1, 0], [0, 1]],
    name: 'Identidad',
    description: 'No cambia nada'
  },
  rotation: {
    matrix: [[0, -1], [1, 0]],
    name: 'Rotación 90°',
    description: 'Gira 90° antihorario'
  },
  reflection: {
    matrix: [[1, 0], [0, -1]],
    name: 'Reflexión eje X',
    description: 'Refleja sobre el eje X'
  },
  shear: {
    matrix: [[1, 1], [0, 1]],
    name: 'Cizallamiento',
    description: 'Desplaza horizontalmente'
  },
  scale: {
    matrix: [[2, 0], [0, 0.5]],
    name: 'Escalado',
    description: 'Estira en X, comprime en Y'
  },
  custom: {
    matrix: [[1, 0], [0, 1]],
    name: 'Personalizada',
    description: 'Define tu propia matriz'
  }
};

function applyTransform(point: [number, number], matrix: number[][]): [number, number] {
  return [
    matrix[0][0] * point[0] + matrix[0][1] * point[1],
    matrix[1][0] * point[0] + matrix[1][1] * point[1]
  ];
}

export default function TransformationVisualization({
  title = "Transformaciones Lineales 2D",
  defaultType = 'rotation'
}: TransformationVisualizationProps) {
  const [transformType, setTransformType] = useState<TransformationType>(defaultType);
  const [customMatrix, setCustomMatrix] = useState([[1, 0], [0, 1]]);
  const [animationProgress, setAnimationProgress] = useState(1);

  const currentTransform = transformType === 'custom'
    ? { ...TRANSFORMS.custom, matrix: customMatrix }
    : TRANSFORMS[transformType];

  // Cuadrado unitario original
  const originalSquare: [number, number][] = [[0, 0], [1, 0], [1, 1], [0, 1]];

  // Vectores base
  const e1: [number, number] = [1, 0];
  const e2: [number, number] = [0, 1];

  // Interpolación para animación
  const interpolatedMatrix = useMemo(() => {
    const identity = [[1, 0], [0, 1]];
    return [
      [
        identity[0][0] + (currentTransform.matrix[0][0] - identity[0][0]) * animationProgress,
        identity[0][1] + (currentTransform.matrix[0][1] - identity[0][1]) * animationProgress
      ],
      [
        identity[1][0] + (currentTransform.matrix[1][0] - identity[1][0]) * animationProgress,
        identity[1][1] + (currentTransform.matrix[1][1] - identity[1][1]) * animationProgress
      ]
    ];
  }, [currentTransform.matrix, animationProgress]);

  // Aplicar transformación
  const transformedSquare = originalSquare.map(p => applyTransform(p, interpolatedMatrix));
  const transformedE1 = applyTransform(e1, interpolatedMatrix);
  const transformedE2 = applyTransform(e2, interpolatedMatrix);

  // Calcular determinante
  const det = interpolatedMatrix[0][0] * interpolatedMatrix[1][1] - interpolatedMatrix[0][1] * interpolatedMatrix[1][0];

  return (
    <div className="my-8 p-4 bg-base-200 rounded-xl">
      <h4 className="font-medium text-base-content/80 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        {title}
      </h4>

      {/* Selector de transformación */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(TRANSFORMS) as TransformationType[]).map((type) => (
          <button
            key={type}
            onClick={() => {
              setTransformType(type);
              setAnimationProgress(0);
              setTimeout(() => setAnimationProgress(1), 50);
            }}
            className={`btn btn-sm ${transformType === type ? 'btn-primary' : 'btn-ghost'}`}
          >
            {TRANSFORMS[type].name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <Mafs viewBox={{ x: [-2, 3], y: [-2, 3] }} preserveAspectRatio={false} height={400}>
          <Coordinates.Cartesian />

          {/* Cuadrado original (fantasma) */}
          <Polygon
            points={originalSquare}
            color={Theme.blue}
            fillOpacity={0.1}
            strokeOpacity={0.3}
          />

          {/* Cuadrado transformado */}
          <Polygon
            points={transformedSquare}
            color={det >= 0 ? Theme.pink : Theme.orange}
            fillOpacity={0.3}
          />

          {/* Vectores base originales */}
          <Vector tail={[0, 0]} tip={e1} color={Theme.blue} opacity={0.4} />
          <Vector tail={[0, 0]} tip={e2} color={Theme.green} opacity={0.4} />

          {/* Vectores base transformados */}
          <Vector tail={[0, 0]} tip={transformedE1} color={Theme.blue} weight={3} />
          <Text x={transformedE1[0] + 0.15} y={transformedE1[1] + 0.15} size={16} color={Theme.blue}>
            T(e₁)
          </Text>

          <Vector tail={[0, 0]} tip={transformedE2} color={Theme.green} weight={3} />
          <Text x={transformedE2[0] + 0.15} y={transformedE2[1] + 0.15} size={16} color={Theme.green}>
            T(e₂)
          </Text>
        </Mafs>
      </div>

      {/* Información de la transformación */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Matriz de transformación:</p>
          <div className="font-mono text-center text-lg">
            <div className="inline-block border-l-2 border-r-2 border-base-content/30 px-2">
              <div>{interpolatedMatrix[0][0].toFixed(2)} &nbsp; {interpolatedMatrix[0][1].toFixed(2)}</div>
              <div>{interpolatedMatrix[1][0].toFixed(2)} &nbsp; {interpolatedMatrix[1][1].toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Propiedades:</p>
          <div className="text-sm space-y-1">
            <p><span className="font-medium">det(A) =</span> {det.toFixed(2)}</p>
            <p><span className="font-medium">Área =</span> |det(A)| = {Math.abs(det).toFixed(2)}</p>
            <p className={det < 0 ? 'text-warning' : 'text-success'}>
              {det < 0 ? '↺ Invierte orientación' : '↻ Preserva orientación'}
            </p>
          </div>
        </div>
      </div>

      {/* Slider de animación */}
      <div className="mt-4">
        <label className="label">
          <span className="label-text">Progreso de la transformación: {(animationProgress * 100).toFixed(0)}%</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={animationProgress}
          onChange={(e) => setAnimationProgress(parseFloat(e.target.value))}
          className="range range-accent range-sm"
        />
      </div>

      {/* Matriz personalizada */}
      {transformType === 'custom' && (
        <div className="mt-4 p-3 bg-base-100 rounded-lg">
          <p className="text-sm font-medium mb-2">Editar matriz:</p>
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            {[0, 1].map(i => (
              [0, 1].map(j => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  step="0.1"
                  value={customMatrix[i][j]}
                  onChange={(e) => {
                    const newMatrix = [...customMatrix.map(row => [...row])];
                    newMatrix[i][j] = parseFloat(e.target.value) || 0;
                    setCustomMatrix(newMatrix);
                  }}
                  className="input input-bordered input-sm w-full"
                />
              ))
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-base-content/60 mt-3">
        {currentTransform.description}
      </p>
    </div>
  );
}
