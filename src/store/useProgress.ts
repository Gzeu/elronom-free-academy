import { create } from "zustand";
import { loadProgress, saveProgress, ProgressMap } from "../lib/storage";

type State = {
  progress: ProgressMap;
  markCompleted: (slug: string, score?: number) => void;
  getCompletionRate: () => number;
  getTotalScore: () => number;
};

export const useProgress = create<State>((set, get) => ({
  progress: loadProgress(),
  
  markCompleted: (slug, score) => {
    const next = {
      ...get().progress,
      [slug]: { completed: true, score }
    };
    saveProgress(next);
    set({ progress: next });
  },
  
  getCompletionRate: () => {
    const p = get().progress;
    const completed = Object.values(p).filter(item => item.completed).length;
    const total = Object.keys(p).length || 1;
    return Math.round((completed / total) * 100);
  },
  
  getTotalScore: () => {
    const p = get().progress;
    return Object.values(p).reduce((sum, item) => sum + (item.score || 0), 0);
  }
}));