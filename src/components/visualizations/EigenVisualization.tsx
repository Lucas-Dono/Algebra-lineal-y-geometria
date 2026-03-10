import { useState, useEffect } from 'react';
import { Mafs, Coordinates, Vector, Circle, Theme, Text, Line, useMovablePoint } from 'mafs';
import 'mafs/core.css';

interface EigenVisualizationProps {
  title?: string;
  matrix?: number[][];
}

function computeEigenvalues(a: number, b: number, c: number, d: number): [number, number] | null {
  // Para matriz 2x2: eigenvalues de [[a,b],[c,d]]
  // λ² - (a+d)λ + (ad-bc) = 0
  const trace = a + d;
  const det = a * d - b * c;
  const discriminant = trace * trace - 4 * det;

  if (discriminant < 0) return null; // Eigenvalues complejos

  const sqrt_disc = Math.sqrt(discriminant);
  return [(trace + sqrt_disc) / 2, (trace - sqrt_disc) / 2];
}

function computeEigenvector(a: number, b: number, c: number, d: number, lambda: number): [number, number] {
  // (A - λI)v = 0
  // Buscamos v en el kernel de (A - λI)
  const a1 = a - lambda;
  const d1 = d - lambda;

  // Si b ≠ 0, usamos la primera fila
  if (Math.abs(b) > 0.001) {
    return [-b, a1];
  }
  // Si c ≠ 0, usamos la segunda fila
  if (Math.abs(c) > 0.001) {
    return [d1, -c];
  }
  // Matriz diagonal
  if (Math.abs(a1) < 0.001) return [1, 0];
  return [0, 1];
}

function normalizeVector(v: [number, number]): [number, number] {
  const norm = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
  if (norm < 0.001) return [1, 0];
  return [v[0] / norm, v[1] / norm];
}

export default function EigenVisualization({
  title = "Autovalores y Autovectores",
  matrix: initialMatrix = [[2, 1], [1, 2]]
}: EigenVisualizationProps) {
  const [matrix, setMatrix] = useState(initialMatrix);
  const [animating, setAnimating] = useState(false);
  const [animPhase, setAnimPhase] = useState(0);

  const [a, b] = matrix[0];
  const [c, d] = matrix[1];

  const eigenvalues = computeEigenvalues(a, b, c, d);

  const eigenvectors = eigenvalues
    ? [
        normalizeVector(computeEigenvector(a, b, c, d, eigenvalues[0])),
        normalizeVector(computeEigenvector(a, b, c, d, eigenvalues[1]))
      ]
    : null;

  // Animación
  useEffect(() => {
    if (!animating) return;
    const interval = setInterval(() => {
      setAnimPhase(p => (p + 0.02) % (2 * Math.PI));
    }, 30);
    return () => clearInterval(interval);
  }, [animating]);

  // Punto de prueba animado en el círculo unitario
  const testAngle = animPhase;
  const testPoint: [number, number] = [Math.cos(testAngle), Math.sin(testAngle)];

  // Aplicar transformación al punto de prueba
  const transformedPoint: [number, number] = [
    a * testPoint[0] + b * testPoint[1],
    c * testPoint[0] + d * testPoint[1]
  ];

  return (
    <div className="my-8 p-4 bg-base-200 rounded-xl">
      <h4 className="font-medium text-base-content/80 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        {title}
      </h4>

      <div className="bg-white rounded-lg overflow-hidden">
        <Mafs viewBox={{ x: [-4, 4], y: [-4, 4] }} preserveAspectRatio={false} height={400}>
          <Coordinates.Cartesian />

          {/* Círculo unitario */}
          <Circle center={[0, 0]} radius={1} strokeStyle="dashed" color="#94a3b8" />

          {/* Autovectores (si son reales) */}
          {eigenvectors && eigenvalues && (
            <>
              {/* Primer autovector y su línea */}
              <Line.ThroughPoints
                point1={[-3 * eigenvectors[0][0], -3 * eigenvectors[0][1]]}
                point2={[3 * eigenvectors[0][0], 3 * eigenvectors[0][1]]}
                color={Theme.blue}
                opacity={0.3}
              />
              <Vector
                tail={[0, 0]}
                tip={[eigenvectors[0][0] * 2, eigenvectors[0][1] * 2]}
                color={Theme.blue}
                weight={3}
              />
              <Text
                x={eigenvectors[0][0] * 2.3}
                y={eigenvectors[0][1] * 2.3}
                size={14}
                color={Theme.blue}
              >
                v₁ (λ={eigenvalues[0].toFixed(2)})
              </Text>

              {/* Segundo autovector y su línea */}
              <Line.ThroughPoints
                point1={[-3 * eigenvectors[1][0], -3 * eigenvectors[1][1]]}
                point2={[3 * eigenvectors[1][0], 3 * eigenvectors[1][1]]}
                color={Theme.green}
                opacity={0.3}
              />
              <Vector
                tail={[0, 0]}
                tip={[eigenvectors[1][0] * 2, eigenvectors[1][1] * 2]}
                color={Theme.green}
                weight={3}
              />
              <Text
                x={eigenvectors[1][0] * 2.3}
                y={eigenvectors[1][1] * 2.3}
                size={14}
                color={Theme.green}
              >
                v₂ (λ={eigenvalues[1].toFixed(2)})
              </Text>
            </>
          )}

          {/* Vector de prueba y su transformado */}
          {animating && (
            <>
              <Vector tail={[0, 0]} tip={testPoint} color={Theme.pink} weight={2} />
              <Vector tail={[0, 0]} tip={transformedPoint} color={Theme.orange} weight={2} />
              <Circle center={testPoint} radius={0.08} color={Theme.pink} />
              <Circle center={transformedPoint} radius={0.08} color={Theme.orange} />
            </>
          )}
        </Mafs>
      </div>

      {/* Controles de matriz */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Matriz A:</p>
          <div className="grid grid-cols-2 gap-2 max-w-[150px]">
            {[0, 1].map(i =>
              [0, 1].map(j => (
                <input
                  key={`${i}-${j}`}
                  type="number"
                  step="0.5"
                  value={matrix[i][j]}
                  onChange={(e) => {
                    const newMatrix = matrix.map(row => [...row]);
                    newMatrix[i][j] = parseFloat(e.target.value) || 0;
                    setMatrix(newMatrix);
                  }}
                  className="input input-bordered input-sm w-full text-center"
                />
              ))
            )}
          </div>
        </div>

        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Autovalores:</p>
          {eigenvalues ? (
            <div className="space-y-1 text-sm">
              <p className="text-blue-600">λ₁ = {eigenvalues[0].toFixed(3)}</p>
              <p className="text-green-600">λ₂ = {eigenvalues[1].toFixed(3)}</p>
              <p className="text-base-content/60 text-xs mt-2">
                det(A) = λ₁·λ₂ = {(eigenvalues[0] * eigenvalues[1]).toFixed(2)}
              </p>
              <p className="text-base-content/60 text-xs">
                tr(A) = λ₁+λ₂ = {(eigenvalues[0] + eigenvalues[1]).toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-warning text-sm">Autovalores complejos (no se muestran)</p>
          )}
        </div>
      </div>

      {/* Botón de animación */}
      <div className="mt-4 flex gap-4 items-center">
        <button
          onClick={() => setAnimating(!animating)}
          className={`btn btn-sm ${animating ? 'btn-error' : 'btn-primary'}`}
        >
          {animating ? '⏹ Detener' : '▶ Animar transformación'}
        </button>

        {animating && (
          <div className="flex gap-2 items-center text-sm">
            <span className="badge badge-outline" style={{ borderColor: Theme.pink, color: Theme.pink }}>
              Original
            </span>
            <span>→</span>
            <span className="badge badge-outline" style={{ borderColor: Theme.orange, color: Theme.orange }}>
              Transformado
            </span>
          </div>
        )}
      </div>

      <p className="text-sm text-base-content/60 mt-3">
        Los autovectores son direcciones que solo se escalan (no rotan) bajo la transformación.
        {animating && " Observa cómo los vectores sobre las líneas de autovectores solo cambian de magnitud."}
      </p>
    </div>
  );
}
