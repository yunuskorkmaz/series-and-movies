import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Button/Button';

import './header.scss';

const Header = (props) => {
	const history = useHistory();

	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="logo-container">
						<a className="logo" onClick={(e) => history.push('/')}>
							Demo Stream
						</a>
					</div>
					<div className="menu-container">
						<Button color={"ghost"}>Login</Button>
						<Button color={"dark"}>Start your free trial</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;