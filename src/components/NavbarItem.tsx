import { Link } from "react-router-dom";

interface Props {
	href: string;
	title: string;
}

function NavbarItem(props: Props): React.ReactElement {
	const { href, title } = props;
	return (
		<li className='hover:text-blue-500 text-lg font-bold'>
			<Link to={href}>{title}</Link>
		</li>
	);
}

export default NavbarItem;
