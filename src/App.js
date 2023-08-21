import React, { useState } from 'react';

import Banner from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {	
	const originalBands = [
		{
			name: 'Queen',
			year: '1970',
			favoriteSong: 'Love of my life',
			image: 'https://pt.wikipedia.org/wiki/A_Night_at_the_Opera_(%C3%A1lbum_de_Queen)#/media/Ficheiro:A_Night_at_the_Opera_Queen.jpg',
			team: 'Rock'
		}
    ];
	const [bands, setBands] = useState(originalBands);

	const whenAddBand = (band) => {
    	setBands([...bands, band]);
	}
	//const removePersona = persona => personas.filter(p => p!== persona) //this wold not work directly like that for objects but the ideia is the same

	const teams = [
    	{
      		name: 'Rock',
      		mainColor: '#57C278',
      		bgColor: '#D9F7E9'
    	},
    	{
      		name: 'Pop',
      		mainColor: '#82CFFA',
      		bgColor: '#E8F8FF'
    	},
    	{
      		name: 'MPB',
      		mainColor: '#A6D157',
      		bgColor: '#F0F8E2'
    	},
   		{
      		name: 'Classical',
      		mainColor: '#DB6EBF',
      		bgColor: '#FAE9F5'
    	},
		{
			name: 'Soundtracks',
			mainColor: '#DB6EBF',
			bgColor: '#FAE9F5'
	  	}
  	]

	return (
    	<div className="App">
    		<Banner/>
    		<Form whenPersonaCreated={whenAddBand} teams={teams.map(team => team.name)}/>

    		{teams.map(team => 
				<Team key={team.name} 
					name={team.name} 
					mainColor={team.mainColor} 
					bgColor={team.bgColor} 
					bands={bands.filter(band => band.team === team.name)}/>
				)	
			}
			<Footer/>
   		</div>
  	);
}

export default App;