import React from 'react';
import placeholder from '../../assets/img/placeholder.png';
import './cards.scss';

const Card = (props) => {
	const { title,waterMark, category, img, onClick} = props;
	return (
		<div className="card" onClick={e => {onClick && onClick()}}>
			<div className="image">
				<img src={category ? placeholder : img} alt={title} />
				{category ? <span>{waterMark}</span> : null}
			</div>
			<div className="title">
				{title}
			</div>
		</div>
	)
}

export default Card;