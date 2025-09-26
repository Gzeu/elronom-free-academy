const KEY = "efa_progress_v1";

export type ProgressMap = Record<string, { completed: boolean; score?: number }>;

export const loadProgress = (): ProgressMap => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
};

export const saveProgress = (p: ProgressMap) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    console.warn('Could not save progress to localStorage');
  }
};