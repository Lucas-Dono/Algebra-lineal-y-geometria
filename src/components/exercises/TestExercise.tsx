import { useState, useCallback } from 'react';

interface Option {
  id: string;
  text: string;
  correct: boolean;
}

interface ExerciseData {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  question: {
    text: string;
    latex?: string;
  };
  options: Option[];
  hints: string[];
  feedback: {
    correct: string;
    incorrect: string;
  };
}

interface Props {
  exercise: ExerciseData;
}

export default function TestExercise({ exercise }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const isCorrect = selectedOption
    ? exercise.options.find(o => o.id === selectedOption)?.correct
    : false;

  const handleSubmit = useCallback(() => {
    if (!selectedOption) return;
    setAttempts(prev => prev + 1);
    setShowResult(true);

    // Save result to localStorage
    const stored = localStorage.getItem('algebra-lineal-progress');
    const progress = stored ? JSON.parse(stored) : { state: { exerciseResults: {} } };
    progress.state.exerciseResults = progress.state.exerciseResults || {};
    progress.state.exerciseResults[exercise.id] = {
      exerciseId: exercise.id,
      correct: isCorrect,
      attempts: attempts + 1,
      lastAttempt: new Date().toISOString(),
    };
    localStorage.setItem('algebra-lineal-progress', JSON.stringify(progress));
  }, [selectedOption, exercise.id, isCorrect, attempts]);

  const handleRetry = useCallback(() => {
    setSelectedOption(null);
    setShowResult(false);
    setShowHint(false);
    setHintIndex(0);
  }, []);

  const handleShowHint = useCallback(() => {
    setShowHint(true);
    if (hintIndex < exercise.hints.length - 1) {
      setHintIndex(prev => prev + 1);
    }
  }, [hintIndex, exercise.hints.length]);

  return (
    <div className="exercise-card">
      {/* Question */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Ejercicio</h4>
        <p className="text-base-content/80">{exercise.question.text}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {exercise.options.map((option) => {
          let optionClass = 'exercise-option';

          if (showResult && selectedOption === option.id) {
            optionClass += option.correct ? ' correct' : ' incorrect';
          } else if (selectedOption === option.id) {
            optionClass += ' selected';
          }

          return (
            <button
              key={option.id}
              onClick={() => !showResult && setSelectedOption(option.id)}
              className={optionClass}
              disabled={showResult}
            >
              <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-semibold text-sm">
                {option.id.toUpperCase()}
              </div>
              <span>{option.text}</span>

              {showResult && option.correct && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}

              {showResult && selectedOption === option.id && !option.correct && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-auto text-error"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Hints */}
      {showHint && hintIndex >= 0 && (
        <div className="bg-info/10 border border-info/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-info">💡</span>
            <div>
              <p className="font-medium text-info text-sm mb-1">
                Pista {hintIndex + 1} de {exercise.hints.length}
              </p>
              <p className="text-base-content/80">{exercise.hints[hintIndex]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Result Feedback */}
      {showResult && (
        <div
          className={`rounded-lg p-4 mb-6 ${
            isCorrect
              ? 'bg-success/10 border border-success/30'
              : 'bg-error/10 border border-error/30'
          }`}
        >
          <div className="flex items-start gap-2">
            <span>{isCorrect ? '✅' : '❌'}</span>
            <p className="text-base-content/80">
              {isCorrect ? exercise.feedback.correct : exercise.feedback.incorrect}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {!showResult ? (
          <>
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="btn btn-primary"
            >
              Verificar
            </button>
            {exercise.hints.length > 0 && (
              <button
                onClick={handleShowHint}
                className="btn btn-ghost"
                disabled={hintIndex >= exercise.hints.length - 1 && showHint}
              >
                {showHint && hintIndex < exercise.hints.length - 1
                  ? 'Otra pista'
                  : 'Ver pista'}
              </button>
            )}
          </>
        ) : (
          <>
            {!isCorrect && (
              <button onClick={handleRetry} className="btn btn-primary">
                Intentar de nuevo
              </button>
            )}
            <span className="text-sm text-base-content/50">
              {attempts} intento{attempts !== 1 ? 's' : ''}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
