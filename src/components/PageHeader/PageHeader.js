import React from 'react';
import { useLocation } from "react-router-dom";
import './page-header.scss';

const PageHeader = () => {
	const location = useLocation();

	const locationName = () => {
		switch(location.pathname){
			case '/series':
				return "Popular Series";
			case '/movies':
				return "Popular Movies";
			case '/':
				return "Popular Titles";
			default :
				return '';
		}
	}
	return (
		<div className="page-header">
			<div className="container">
				<div className="page-header-container">
					<span>{locationName()}</span>
				</div>
			</div>
		</div>
	)
}

export default PageHeader;