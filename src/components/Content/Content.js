import React from 'react';

import './content.scss';

const Content = (props) => {
	const {children, className, ...otherProps} = props;
	return (
		<div className="page-content">
			<div className="container">
				<div  className={`page-content-container ${className}`} {...otherProps}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Content;