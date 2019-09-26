import React from 'react';

class App extends React.Component<{}, { title: string, opening_crawl: any, starships: Array<string> }> {

	componentWillMount() {
		const promise = fetch('https://swapi.co/api/films/1/');
		promise.then((val) => {
			let movie = JSON.parse(val);
			this.setState({ title: movie!.title, opening_crawl: movie!.opening_crawl, starships: movie!.starships });
		})

		this.state = {
			title: "",
			opening_crawl: "",
			starships: [],
		};
	}
	render() {
		const { title, opening_crawl, starships } = this.state;

		return (
			<div className="App">
				<ul>
					<li>title: movie.title</li>
					<li>opening crawl: movie.opening_crawl</li>
					<li>
						starships:
						<ul>
							{movie.starships.length && (movie!.starships as Array<string>).map(url => {
								return (
									<li key={url}>
										<a href={url}>{url}</a>
									</li>
								);
							})}
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default App;
