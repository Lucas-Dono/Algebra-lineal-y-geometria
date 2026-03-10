import { useState } from 'react';

interface Step {
  title: string;
  content: string;
  latex?: string;
}

interface Props {
  id: string;
  title: string;
  problem: string;
  steps: Step[];
}

export default function ViewExercise({ id, title, problem, steps }: Props) {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleStep = (index: number) => {
    setExpandedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (showAll) {
      setExpandedSteps([]);
      setShowAll(false);
    } else {
      setExpandedSteps(steps.map((_, i) => i));
      setShowAll(true);
    }
  };

  return (
    <div className="exercise-card">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-sm">
          📝
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-base-content/70 text-sm">Ejemplo resuelto paso a paso</p>
        </div>
      </div>

      {/* Problem statement */}
      <div className="bg-base-100 rounded-lg p-4 mb-6 border border-base-300">
        <h5 className="text-sm font-medium text-base-content/60 mb-2">Problema</h5>
        <p className="text-base-content">{problem}</p>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h5 className="font-medium">Solución</h5>
          <button onClick={toggleAll} className="btn btn-ghost btn-xs">
            {showAll ? 'Colapsar todo' : 'Expandir todo'}
          </button>
        </div>

        {steps.map((step, index) => {
          const isExpanded = expandedSteps.includes(index);

          return (
            <div
              key={index}
              className="border border-base-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex items-center gap-3 p-3 hover:bg-base-200 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                  {index + 1}
                </div>
                <span className="flex-1 text-left font-medium text-sm">
                  {step.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-base-300 bg-base-100">
                  <div className="prose prose-sm max-w-none">
                    <p className="whitespace-pre-wrap">{step.content}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
