import React, { useState } from 'react';

import Banner from './components/Banner/Banner';
import { Form } from './components/Form/Form';
import { Team } from './components/Team/Team';
import Footer from './components/Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {	
	const [bands, setBands] = useState([
		{
			id: uuidv4(),
			name: 'Queen',
			year: '1970',
			favoriteSong: 'Love of my life',
			image: './images/A_Night_at_the_Opera_Queen.jpg',
			team: 'Rock',
			favorite: false
		},
		{
			id: uuidv4(),
			name: 'Red Hor Chilli Peppers',
			year: '1982',
			favoriteSong: 'Dark Necessities',
			image: './images/Red_Hot_Chili_Peppers_logo.svg.png',
			team: 'Rock',
			favorite: false	
		},
		{
			id: uuidv4(),
			name: 'The Beatles',
			year: '1960',
			favoriteSong: 'Something',
			image: './images/Sgt_Peppers.jpg',
			team: 'Rock',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Elton John',
			year: '1964',
			favoriteSong: "I'm still standing",
			image: './images/Elton_John.jpeg',
			team: 'Pop',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'ABBA',
			year: '1972',
			favoriteSong: "Gimme! Gimme! Gimme!",
			image: './images/ABBA.webp',
			team: 'Pop',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Chico Buarque',
			year: '1964',
			favoriteSong: 'Deus lhe pague',
			image: './images/chico_buarque.jpg',
			team: 'MPB',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Ceumar',
			year: '2000',
			favoriteSong: 'Dindinha',
			image: './images/ceumar.jpeg',
			team: 'MPB',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Piotr Ilitch Tchaikovski',
			year: '1940',
			favoriteSong: '1812 Overture',
			image: './images/Tchaikovsky.jpeg',
			team: 'Classical',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Joe Hisaishi',
			year: '1974',
			favoriteSong: 'Itsumo Nando Demog',
			image: './images/Spirited_Away.png',
			team: 'Soundtracks',
			favorite: false		
		},
		{
			id: uuidv4(),
			name: 'Yann Tiersen',
			year: '1990',
			favoriteSong: "La valse d'Amélie",
			image: './images/amelie_poulain.jpeg',
			team: 'Soundtracks',
			favorite: false		
		}
    ]);

	const [teams, setTeams] = useState([
    	{
			id: uuidv4(),
      		name: 'Rock',
      		mainColor: '#57C278'
    	},
    	{
			id: uuidv4(),
      		name: 'Pop',
      		mainColor: '#DB6EBF'
    	},
    	{
			id: uuidv4(),
      		name: 'MPB',
      		mainColor: '#FFBA05'
    	},
   		{
			id: uuidv4(),
      		name: 'Classical',
      		mainColor: '#82CFFA'
    	},
		{
			id: uuidv4(),
			name: 'Soundtracks',
			mainColor: '#FF8A29'
	  	}
  	])

	const whenAddBand = (band) => {
    	setBands([...bands, band]);
	}

	const whenGenreAdded = (newTeam) => {
		setTeams([...teams, {...newTeam, id: uuidv4() }]);
	}

	const deleteBand = (id) => {
		setBands(bands.filter(band => band.id !== id));
	}

	const changeTeamColor = (color, teamId) => {
		setTeams(teams.map(team => {
			if (team.id === teamId) {
				team.mainColor = color
			}
			return team;
		}))
	}

	const changeFavoriteBand = (id) => {
		setBands(bands.map(band => {
			if (band.id === id) {
				band.favorite = !band.favorite;
			}
			return band;
		}))
	}

	return (
    	<div className="App">
    		<Banner/>
    		<Form 
				whenPersonaCreated={whenAddBand} 
				teams={teams.map(team => team.name)} 
				whenGenreAdded={whenGenreAdded}
			/>
    		{teams.map((team, index) => 
				<Team 
					key={index}
					name={team.name} 
					mainColor={team.mainColor}
					bands={bands.filter(band => band.team === team.name)}
					toDelete={deleteBand}
					changeColor={changeTeamColor}
					changeFavorite={changeFavoriteBand}
				/>)	
			}
			<Footer/>
   		</div>
  	);
}

export default App;