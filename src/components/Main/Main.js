import React from 'react';
import Card from '../Cards/Card';
import CardList from '../Cards/CardList';
import { useHistory } from 'react-router-dom';

const Main = (props) => {

	const history = useHistory();

	return (
		<>
			<CardList>
				<Card category waterMark={"Series"} title={"Popular Series"} url={"series"} onClick={e => history.push(`series`)} />
				<Card category waterMark={"Movies"} title={"Popular Movies"} url={"movies"} onClick={e => history.push(`movies`)} />
			</CardList>
		</>
	)
}

export default Main;