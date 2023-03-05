import React from 'react';
import './Footer.css';
import imagine from './github-mark-light.png';

class Footer extends React.Component {
	render() {
		return (
			<footer className="bg-near-black white-80 pv3 pv2-l ph4 position orientare">
			  	<div className="leftPart">
					<p className="f6">
						<span className="dib mr4 mr5-ns hover-light-purple">Octavian Andrei Pop</span>
					</p>
					<div className="imagine">
				    	<a href="https://github.com/andrei3914" target="_blank" rel="noreferrer noopener"><img src={imagine} alt="github logo" width='30px' height='30px'></img></a>
					</div>
				</div>
			  <p className="f6 link white-80 hover-light-purple">
			  	<span>Made with React</span>
			  </p>
			</footer>

		);
	}
}

export default Footer;