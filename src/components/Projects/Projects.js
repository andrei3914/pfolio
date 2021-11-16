import React from 'react';
import './Projects.css';
import Tilty from 'react-tilty';

const Projects = () => {
	return (
		<div className="proiecteStil" id="clickproiecte">
			<h1 className="stilsubtitlu">{'Projects'}</h1>
			<div className="disp">
			<Tilty><article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow5 articleStil">
			  <div className="tc">
			    
			    <a href="https://smart-brain-dei.herokuapp.com/" target="_blank" rel="noreferrer"><h1 className="f4">Smart-brain</h1></a>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  <p className="lh-copy measure center f5 black-70">
			    Face recognition application created during the Zero To Mastery course on Udemy. The frontend is implemented in React,
			    backend in Express and the database in PostgreSQL. The face recognition functionality is provided by the Clarifai API.
			    The project is deployed on Heroku.
			  </p>
			</article></Tilty>

			<Tilty><article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow5 articleStil">
			  <div className="tc">
			    
			    <a href="https://speech-reco-dei.herokuapp.com/" target="_blank" rel="noreferrer"><h1 className="f4">SpeechRecoApp</h1></a>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  <p className="lh-copy measure center f5 black-70">
			    Text to speech application with the frontend implemented in React, backend in Express and the database in PostgreSQL. The text to speech 
			    functionality is provided by the react-speech-recognition hook. The project is deployed on Heroku.
			  </p>
			</article></Tilty>

			<Tilty><article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow5 articleStil">
			  <div className="tc">
			    
			    <a href="https://andrei3914.github.io/mechanicSite/#getMeHome" target="_blank" rel="noreferrer"><h1 className="f4">A mechanic's site</h1></a>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  <p className="lh-copy measure center f5 black-70">
			    Application created for an auto mechanic with React.
			  </p>
			</article></Tilty>

			<Tilty><article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow5 articleStil">
			  <div className="tc">
			    
			    <a href="https://andrei3914.github.io/nietzschesZodiac/" target="_blank" rel="noreferrer"><h1 className="f4">Nietzsche's Zodiac</h1></a>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			  <p className="lh-copy measure center f5 black-70">
			    Fun application created with React, based on the genius of the one and only Friedrich Nietzsche.
			  </p>
			</article></Tilty>
			</div>
		</div>
	);
}

export default Projects;