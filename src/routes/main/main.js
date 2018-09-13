import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css'

class MainView extends Component {
	render() {
		return (
			<article className="nav banner">
				<header>
						<h2>Online Gallery</h2>
				</header>
				<nav>
					<ul className="nav--links">
						<li><Link to="/">Home</Link></li>
					</ul>
				</nav>
		</article>
		);
	}
}

export default MainView;
