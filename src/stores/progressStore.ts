import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  attempts: number;
  lastAttempt: string; // ISO date string
}

interface ProgressState {
  // Completed sections
  completedSections: string[];

  // Exercise results
  exerciseResults: Record<string, ExerciseResult>;

  // Bookmarks
  bookmarks: string[];

  // Last visited section
  lastVisited: string | null;

  // Actions
  markSectionComplete: (sectionId: string) => void;
  markSectionIncomplete: (sectionId: string) => void;
  isSectionComplete: (sectionId: string) => boolean;

  saveExerciseResult: (result: ExerciseResult) => void;
  getExerciseResult: (exerciseId: string) => ExerciseResult | undefined;

  addBookmark: (sectionId: string) => void;
  removeBookmark: (sectionId: string) => void;
  isBookmarked: (sectionId: string) => boolean;

  setLastVisited: (sectionId: string) => void;

  // Stats
  getProgress: () => {
    completedCount: number;
    exercisesAttempted: number;
    exercisesCorrect: number;
  };

  // Reset
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedSections: [],
      exerciseResults: {},
      bookmarks: [],
      lastVisited: null,

      markSectionComplete: (sectionId: string) => {
        set((state) => ({
          completedSections: state.completedSections.includes(sectionId)
            ? state.completedSections
            : [...state.completedSections, sectionId],
        }));
      },

      markSectionIncomplete: (sectionId: string) => {
        set((state) => ({
          completedSections: state.completedSections.filter((id) => id !== sectionId),
        }));
      },

      isSectionComplete: (sectionId: string) => {
        return get().completedSections.includes(sectionId);
      },

      saveExerciseResult: (result: ExerciseResult) => {
        set((state) => ({
          exerciseResults: {
            ...state.exerciseResults,
            [result.exerciseId]: result,
          },
        }));
      },

      getExerciseResult: (exerciseId: string) => {
        return get().exerciseResults[exerciseId];
      },

      addBookmark: (sectionId: string) => {
        set((state) => ({
          bookmarks: state.bookmarks.includes(sectionId)
            ? state.bookmarks
            : [...state.bookmarks, sectionId],
        }));
      },

      removeBookmark: (sectionId: string) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((id) => id !== sectionId),
        }));
      },

      isBookmarked: (sectionId: string) => {
        return get().bookmarks.includes(sectionId);
      },

      setLastVisited: (sectionId: string) => {
        set({ lastVisited: sectionId });
      },

      getProgress: () => {
        const state = get();
        const results = Object.values(state.exerciseResults);
        return {
          completedCount: state.completedSections.length,
          exercisesAttempted: results.length,
          exercisesCorrect: results.filter((r) => r.correct).length,
        };
      },

      resetProgress: () => {
        set({
          completedSections: [],
          exerciseResults: {},
          bookmarks: [],
          lastVisited: null,
        });
      },
    }),
    {
      name: 'algebra-lineal-progress',
    }
  )
);
