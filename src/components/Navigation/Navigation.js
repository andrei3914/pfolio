import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav className="stilnav">
			<div style={{display: 'flex', justifyContent: 'flex-end'}}>
				<a href="#clickeu"><p className='f4 link dim black pa2 pointer'> 
					{'Octavian'} 
				</p></a>
				<a href="#clickaboutme"><p className='f4 link dim black pa2 pointer'>
					{'About Me'} 
				</p></a>
				<a href="#clickproiecte"><p className='f4 link dim black pa2 pointer'>
					{'Projects'} 
				</p></a>
				<a href="https://drive.google.com/file/d/11gVFK1t2OnAZdUACZJ9umeij9zeZbbtA/view?usp=sharing" target="_blank" rel="noreferrer"><p className='f4 link dim black pa2 pointer'>
					{'CV'} 
				</p></a>
			</div>
		</nav>
	);
}

export default Navigation;