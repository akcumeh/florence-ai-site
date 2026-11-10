import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
    localStorage.clear();
});

// jsdom has no matchMedia. Tests override `matches` per query via window.__mediaMatches.
window.__mediaMatches = {};
window.matchMedia = vi.fn((query) => ({
    matches: Boolean(window.__mediaMatches[query]),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
}));
