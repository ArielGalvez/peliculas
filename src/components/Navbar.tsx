import React, { useMemo, useRef, useState } from 'react';
import NavbarItem from './NavbarItem';
import useClickOutside from '../hooks/useClickOutside';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLUListElement | null>(null);
	useClickOutside({
		ref: menuRef,
		callback: () => {
			setIsOpen(false);
			// const html = document.getElementsByTagName('html').item(0) as HTMLHtmlElement;
			// html.style.overflow = 'auto';
		}
	});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setIsOpen((old) => {
			// const html = document.getElementsByTagName('html').item(0) as HTMLHtmlElement;
			// if (!old) {
			// 	html.style.overflow = 'hidden';
			// } else {
			// 	html.style.overflow = 'auto';
			// }
			return !old;
		});
	};

	const memorizedItems = useMemo(() => {
		const baseUrl = `${window?.location?.origin}/portfolio/`;
		return (
			<>
				<NavbarItem title='Home' href='/' />
				<NavbarItem title='Favorites' href='/favorites'/>
			</>
		);
	}, [window]);

	return (
		<>
			<header className='sticky top-0 backdrop-blur-sm z-10 px-3 md:px-5 max-w-5xl mx-auto'>
				<nav className='flex justify-between items-center'>
					<ul className='hidden gap-4 items-center md:flex'>{memorizedItems}</ul>
				</nav>
			</header>
			<div className='fixed top-2 right-2 z-20'>
				<button
					id='menu'
					className='relative w-9 h-8 p-1 cursor-pointer md:hidden group'
					onClick={handleClick}
				>
					<span
						className={`absolute block w-4 h-[3px] bg-black group-hover:bg-blue-500 dark:bg-white rounded-md sibling-checked:bg-blue-500 ${
							isOpen ? 'w-8 rotate-45 top-5' : 'top-2'
						} transition-all`}
					></span>
					<span
						className={`absolute block top-4 w-6 h-[3px] bg-black group-hover:bg-blue-500 dark:bg-white rounded-md ${
							isOpen && 'opacity-0'
						} transition-all`}
					></span>
					<span
						className={`absolute block w-8 h-[3px] bg-black group-hover:bg-blue-500 dark:bg-white rounded-md ${
							isOpen ? 'rotate-[-45deg] top-5' : 'top-6'
						} transition-all`}
					></span>
				</button>
			</div>
			{isOpen && (
				<div className='fixed top-0 right-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)] md:hidden overflow-hidden z-10'>
					<ul
						ref={menuRef}
						className='absolute right-0 bg-[var(--bg-color)]
									 top-0 h-full w-full xs:w-48 flex flex-col pt-12 shadow-md p-4 gap-1
									 animate-[wiggle_0.333s_ease-in-out_forwards] z-20'
					>
						{memorizedItems}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
