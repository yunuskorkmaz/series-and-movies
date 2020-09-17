import React, { useEffect, useState } from 'react';
import withLoadingAndError from '../../helper/withLoadingAndError';
import Card from '../Cards/Card';
import CardList from '../Cards/CardList';

const ListPage = (props) => {
	const { setLoading, setError } = props;
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = () => {
		setLoading(true);
		fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
			.then(result => {
				if (result.ok) {
					return result.json();
				}
				setLoading(false);
				setError(true);
				throw new Error("Network response was not ok.");
			})
			.then(data => {
				let resultData = data.entries.filter(item => item.releaseYear >= 2010 && item.programType === props.programType);
				resultData = resultData.sort((a, b) => {
					let textA = a.title.toUpperCase();
					let textB = b.title.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
				})
				resultData = resultData.slice(0,21);
				setData(resultData);
				setLoading(false);
				setError(false);
			}).catch(error => {
				setLoading(false);
				setError(true);
			})
	}

	return (
		<>
			<CardList>
				{data.map((item, i) => {
					return <Card key={i} title={item.title} img={item.images["Poster Art"].url} />
				})}
			</CardList>
		</>
	)
}

export default withLoadingAndError(ListPage);