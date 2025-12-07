export const getTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) return savedTheme;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = (theme: 'light' | 'dark'): void => {
  localStorage.setItem('theme', theme);
  // Add transition class for smooth theme change
  document.documentElement.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  // Remove transition after animation completes
  setTimeout(() => {
    document.documentElement.style.transition = '';
  }, 500);
};

export const initTheme = (): void => {
  const theme = getTheme();
  setTheme(theme);
};

