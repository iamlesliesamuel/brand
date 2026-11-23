// Plain module (no 'use client') so the root layout can inline the script.

// Rename the key per app (for example 'habits-theme') so apps on one domain don't share a setting.
export const THEME_STORAGE_KEY = 'speaker-os-theme'

/**
 * Runs before first paint so a light-mode page doesn't flash dark while React
 * loads. Mirrors ThemeProvider: 'light' | 'dark' | 'system' (follow the device).
 * Leslie's own tools default to dark; client pages force light with data-theme on their wrapper.
 */
export const THEME_BOOT_SCRIPT = `(function(){try{var m=localStorage.getItem('${THEME_STORAGE_KEY}');var t=m==='light'?'light':m==='system'?(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`
