import React from 'react';
import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="bg-near-black white-80 pv3 pv2-l ph4 position orientare">
			  <p className="f6">
			  	<span className="dib mr4 mr5-ns hover-light-purple">Octavian Andrei Pop</span>
			  </p>

			  <p className="f6 link white-80 hover-light-purple">
			  	<span>Made with React</span>
			  </p>
			</footer>

		);
	}
}

export default Footer;