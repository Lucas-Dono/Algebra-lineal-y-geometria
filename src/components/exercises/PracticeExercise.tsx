import { useState } from 'react';

interface Props {
  id: string;
  question: string;
  hints?: string[];
  solution: string;
}

export default function PracticeExercise({ id, question, hints = [], solution }: Props) {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="exercise-card">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-semibold text-sm">
          P
        </div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">Ejercicio de Práctica</h4>
          <p className="text-base-content/80">{question}</p>
        </div>
      </div>

      {/* Hints */}
      {hints.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setShowHints(!showHints)}
            className="btn btn-ghost btn-sm gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform ${showHints ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {showHints ? 'Ocultar pistas' : 'Ver pistas'}
          </button>

          {showHints && (
            <div className="mt-3 ml-6 space-y-2">
              {hints.map((hint, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-base-content/70">
                  <span className="text-info">💡</span>
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Solution */}
      <div className="border-t border-base-300 pt-4">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="btn btn-primary btn-sm gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${showSolution ? 'rotate-180' : ''}`}
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
          {showSolution ? 'Ocultar solución' : 'Ver solución'}
        </button>

        {showSolution && (
          <div className="mt-4 p-4 bg-success/5 border border-success/20 rounded-lg">
            <h5 className="font-medium text-success mb-2">Solución</h5>
            <div className="text-base-content/80 whitespace-pre-wrap">{solution}</div>
          </div>
        )}
      </div>
    </div>
  );
}
