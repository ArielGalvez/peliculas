import { useEffect } from 'react';

interface useClickOutsideProps {
	ref: any;
	callback: () => void;
}

function useClickOutside({ ref, callback }: useClickOutsideProps) {
	const handleClick = (e: MouseEvent) => {
		e.stopPropagation();
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
}

export default useClickOutside;
