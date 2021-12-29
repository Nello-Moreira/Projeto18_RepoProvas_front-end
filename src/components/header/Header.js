import { useState } from 'react';
import Logo from '../Logo';
import MenuIcon from './MenuIcon';
import MenuBar from './MenuBar';
import { HeaderContainer } from './HeaderStyles';

export default function Header() {
	const [menuClosed, setMenuClosed] = useState(true);

	return (
		<HeaderContainer>
			<MenuIcon onClick={() => setMenuClosed(!menuClosed)} />
			<Logo fontSize='1.7rem' />
			<MenuBar
				menuClosed={menuClosed}
				closeMenu={() => setMenuClosed(true)}
			/>
		</HeaderContainer>
	);
}
