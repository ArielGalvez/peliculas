import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';
export function useDarkMode(): [Theme, () => void] {
	const currentTheme = globalThis.window?.matchMedia?.('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

	const [theme, setTheme] = useState<Theme>(localStorage.theme || currentTheme);

	const handleTogleTheme = () => {
		setTheme((preTheme) => {
			const newTheme = preTheme === 'dark' ? 'light' : 'dark';
			const root = window.document.documentElement;
			root.classList.remove(preTheme);
			root.classList.add(newTheme);
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add(theme);
	}, []);

	return [theme, handleTogleTheme];
}
