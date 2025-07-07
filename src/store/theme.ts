'use client'

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { useEffect } from 'react'

interface ThemeState {
  isDarkMode: boolean
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  initializeTheme: () => () => void
}

const applyTheme = (isDarkMode: boolean): void => {
  if (typeof window !== 'undefined') {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

export const useThemeStore = create<ThemeState>()(
  subscribeWithSelector((set, get) => ({

    isDarkMode: false,

    toggleTheme: () => {
      const { isDarkMode } = get()
      const newTheme = !isDarkMode

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      }

      applyTheme(newTheme)
      set({ isDarkMode: newTheme })
    },

    setTheme: (theme: 'light' | 'dark' | 'system') => {
      let newIsDarkMode = false

      if (typeof window !== 'undefined') {
        if (theme === 'system') {
          localStorage.removeItem('theme')
          newIsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        } else {
          localStorage.setItem('theme', theme)
          newIsDarkMode = theme === 'dark'
        }
      }

      applyTheme(newIsDarkMode)
      set({ isDarkMode: newIsDarkMode })
    },

    initializeTheme: () => {
      let isDark = false

      if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme')
        isDark =
          theme === 'dark'
            ? true
            : theme === 'light'
            ? false
            : window.matchMedia('(prefers-color-scheme: dark)').matches
      }

      applyTheme(isDark)
      set({ isDarkMode: isDark })

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches)
          set({ isDarkMode: e.matches })
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    },
  }))
)


export const useTheme = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)
  const setTheme = useThemeStore((state) => state.setTheme)

  return { isDarkMode, toggleTheme, setTheme }
}


export const ThemeInitializer = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme)

  useEffect(() => {
    const cleanup = initializeTheme()
    return cleanup
  }, [initializeTheme])

  return null
}
