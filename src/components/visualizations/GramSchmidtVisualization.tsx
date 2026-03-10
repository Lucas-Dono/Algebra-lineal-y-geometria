import { useState } from 'react';
import { Mafs, Coordinates, Vector, useMovablePoint, Theme, Text, Line } from 'mafs';
import 'mafs/core.css';

interface GramSchmidtVisualizationProps {
  title?: string;
}

function dotProduct(u: [number, number], v: [number, number]): number {
  return u[0] * v[0] + u[1] * v[1];
}

function scaleVector(v: [number, number], s: number): [number, number] {
  return [v[0] * s, v[1] * s];
}

function subtractVectors(u: [number, number], v: [number, number]): [number, number] {
  return [u[0] - v[0], u[1] - v[1]];
}

function normalizeVector(v: [number, number]): [number, number] {
  const norm = Math.sqrt(dotProduct(v, v));
  if (norm < 0.001) return [1, 0];
  return [v[0] / norm, v[1] / norm];
}

export default function GramSchmidtVisualization({
  title = "Proceso de Gram-Schmidt"
}: GramSchmidtVisualizationProps) {
  const [step, setStep] = useState(3); // 0: original, 1: u1, 2: u2, 3: normalizado
  const [showProjection, setShowProjection] = useState(true);

  // Vectores originales (movibles)
  const pointV1 = useMovablePoint([2, 1], { color: Theme.blue });
  const pointV2 = useMovablePoint([1, 2], { color: Theme.green });

  const v1 = pointV1.point as [number, number];
  const v2 = pointV2.point as [number, number];

  // Paso 1: u1 = v1
  const u1 = v1;

  // Paso 2: u2 = v2 - proj_{u1}(v2)
  const projCoeff = dotProduct(v2, u1) / dotProduct(u1, u1);
  const projection = scaleVector(u1, projCoeff);
  const u2 = subtractVectors(v2, projection);

  // Paso 3: Normalizar
  const e1 = normalizeVector(u1);
  const e2 = normalizeVector(u2);

  // Verificar ortogonalidad
  const orthogonalityCheck = Math.abs(dotProduct(u1, u2));

  const steps = [
    { name: "Original", description: "Vectores v₁ y v₂ originales (no necesariamente ortogonales)" },
    { name: "u₁ = v₁", description: "El primer vector ortogonal es simplemente v₁" },
    { name: "u₂ = v₂ - proy", description: "Restamos la proyección de v₂ sobre u₁" },
    { name: "Normalizar", description: "Dividimos por las normas para obtener vectores unitarios" }
  ];

  return (
    <div className="my-8 p-4 bg-base-200 rounded-xl">
      <h4 className="font-medium text-base-content/80 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        {title}
      </h4>

      {/* Selector de pasos */}
      <div className="flex gap-1 mb-4 overflow-x-auto">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`btn btn-sm whitespace-nowrap ${step === i ? 'btn-primary' : 'btn-ghost'}`}
          >
            {i + 1}. {s.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <Mafs viewBox={{ x: [-3, 4], y: [-2, 4] }} preserveAspectRatio={false} height={380}>
          <Coordinates.Cartesian />

          {/* Vectores originales (siempre visibles pero con opacidad variable) */}
          <Vector
            tail={[0, 0]}
            tip={v1}
            color={Theme.blue}
            opacity={step === 0 ? 1 : 0.3}
            weight={step === 0 ? 2 : 1}
          />
          <Text x={v1[0] + 0.2} y={v1[1] + 0.2} size={14} color={Theme.blue}>
            v₁
          </Text>

          <Vector
            tail={[0, 0]}
            tip={v2}
            color={Theme.green}
            opacity={step === 0 ? 1 : 0.3}
            weight={step === 0 ? 2 : 1}
          />
          <Text x={v2[0] + 0.2} y={v2[1] + 0.2} size={14} color={Theme.green}>
            v₂
          </Text>

          {/* Paso 1+: Mostrar u1 */}
          {step >= 1 && (
            <>
              <Vector tail={[0, 0]} tip={u1} color={Theme.indigo} weight={3} />
              <Text x={u1[0] + 0.25} y={u1[1] - 0.25} size={14} color={Theme.indigo}>
                u₁
              </Text>
            </>
          )}

          {/* Paso 2: Mostrar proyección y u2 */}
          {step >= 2 && showProjection && (
            <>
              {/* Línea de proyección */}
              <Line.Segment
                point1={v2}
                point2={projection}
                color={Theme.pink}
                style="dashed"
              />
              {/* Punto de proyección */}
              <Vector tail={[0, 0]} tip={projection} color={Theme.pink} opacity={0.5} />
              <Text x={projection[0] - 0.3} y={projection[1] - 0.3} size={12} color={Theme.pink}>
                proy
              </Text>
            </>
          )}

          {step >= 2 && (
            <>
              <Vector tail={[0, 0]} tip={u2} color={Theme.orange} weight={3} />
              <Text x={u2[0] + 0.2} y={u2[1] + 0.2} size={14} color={Theme.orange}>
                u₂
              </Text>
            </>
          )}

          {/* Paso 3: Vectores normalizados */}
          {step >= 3 && (
            <>
              <Vector tail={[0, 0]} tip={e1} color={Theme.indigo} weight={2} opacity={0.7} />
              <Text x={e1[0] * 1.2} y={e1[1] * 1.2 - 0.15} size={12} color={Theme.indigo}>
                ê₁
              </Text>

              <Vector tail={[0, 0]} tip={e2} color={Theme.orange} weight={2} opacity={0.7} />
              <Text x={e2[0] * 1.2 - 0.15} y={e2[1] * 1.2} size={12} color={Theme.orange}>
                ê₂
              </Text>
            </>
          )}

          {/* Ángulo recto para mostrar ortogonalidad */}
          {step >= 2 && orthogonalityCheck < 0.01 && (
            <rect
              x={0.05}
              y={0.05}
              width={0.15}
              height={0.15}
              fill="none"
              stroke={Theme.foreground}
              strokeWidth={1}
            />
          )}

          {pointV1.element}
          {pointV2.element}
        </Mafs>
      </div>

      {/* Panel de información */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">{steps[step].name}</p>
          <p className="text-sm text-base-content/70">{steps[step].description}</p>

          {step === 2 && (
            <div className="mt-2 text-xs font-mono bg-base-200 p-2 rounded">
              <p>proy = (⟨v₂,u₁⟩/⟨u₁,u₁⟩) · u₁</p>
              <p className="mt-1">= ({projCoeff.toFixed(2)}) · u₁</p>
            </div>
          )}
        </div>

        <div className="bg-base-100 p-3 rounded-lg">
          <p className="text-sm font-medium mb-2">Verificación:</p>
          <div className="text-sm space-y-1">
            <p>⟨u₁, u₂⟩ = {dotProduct(u1, u2).toFixed(4)}</p>
            <p className={orthogonalityCheck < 0.01 ? 'text-success' : 'text-warning'}>
              {orthogonalityCheck < 0.01 ? '✓ Ortogonales' : '⚠ No ortogonales'}
            </p>
            {step >= 3 && (
              <>
                <p className="mt-2">||ê₁|| = {Math.sqrt(dotProduct(e1, e1)).toFixed(3)}</p>
                <p>||ê₂|| = {Math.sqrt(dotProduct(e2, e2)).toFixed(3)}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <label className="label cursor-pointer gap-2">
          <input
            type="checkbox"
            checked={showProjection}
            onChange={(e) => setShowProjection(e.target.checked)}
            className="checkbox checkbox-sm checkbox-primary"
          />
          <span className="label-text">Mostrar proyección</span>
        </label>
      </div>

      <p className="text-sm text-base-content/60 mt-2">
        Arrastra los puntos azul y verde para cambiar los vectores originales.
      </p>
    </div>
  );
}
