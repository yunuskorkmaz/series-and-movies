import React from 'react';
import { Route, Switch , HashRouter as Router} from 'react-router-dom'
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListPage from './components/ListPage/ListPage';
import Main from './components/Main/Main';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<PageHeader />
				<Content>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/series" render={() => <ListPage programType="series" />} />
						<Route path="/movies" render={() => <ListPage programType="movie" />} />
					</Switch>
				</Content>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
