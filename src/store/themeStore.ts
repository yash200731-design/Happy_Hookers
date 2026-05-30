import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false, // Default to light mode for the cute pastel look!
      toggleTheme: () => set((state) => {
        const nextMode = !state.isDarkMode;
        applyThemeClass(nextMode);
        return { isDarkMode: nextMode };
      }),
      setTheme: (isDark) => {
        applyThemeClass(isDark);
        set({ isDarkMode: isDark });
      },
    }),
    {
      name: 'happy-hookers-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeClass(state.isDarkMode);
        }
      },
    }
  )
);

// Helper function to sync with DOM
const applyThemeClass = (isDark: boolean) => {
  if (typeof window !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
