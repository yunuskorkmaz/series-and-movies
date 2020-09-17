import React from 'react';

import './cards.scss';

const CardList = (props) => {
	const {children,className, ...otherProps} = props;
	return(
		<div className={`card-list ${className ? className : ''}`} {...otherProps}>
			{children}
		</div>
	)
}

export default CardList;