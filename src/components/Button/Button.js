import React from 'react';

import './button.scss';

const Button = (props) => {
	const { children, color,className, ...childProps} = props;
	return (
		<button className={`btn ${color ? `btn-${color}`: ''} ${className ? className : ''}`} {...childProps}>{props.children}</button>
	)
}

export default Button;