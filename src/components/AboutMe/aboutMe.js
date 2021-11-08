import React from 'react';
import './aboutMe.css';

const aboutMe = () => {
	return (
		<div className="abutme center" id="clickaboutme">
			<div className="poza diviziune center"></div>
			<div> 
				<h1 className="stilsubtitlu">
					{'About Me'}
				</h1>
				<p className="f3">	
					I'm a graduate of the Technical University of Cluj-Napoca with a degree in Telecommunications Systems and Technologies. 
					My purpose in life is helping other people and doing good. In my free time I enjoy reading books, swimming, diving into story driven single player games
					or playing highly competitive online games with my friends.
				</p>
				<p className="f3"> Key phrases: introversion, thinking, accepting everything the way it is, questioning almost everything, imperfection, dreaming more than doing, truth</p>
			</div>		
		</div>
	);
}

export default aboutMe;