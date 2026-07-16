import { create } from 'zustand';

export type Screen = 'title' | 'batting';
interface AppState {
  screen: Screen;
  navigate: (screen: Screen) => void;
}
export const useAppStore = create<AppState>((set) => ({
  screen: 'title',
  navigate: (screen) => set({ screen }),
}));
