
import React, { useState } from 'react';

import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown"
import { FormField } from "../FormField/FormField"
import './Form.css'

export const Form = ({whenPersonaCreated, whenGenreAdded, teams}) => {
    
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [favoriteSong, setFavoriteSong] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const createNewBand = (submit) => {
        submit.preventDefault();
        whenPersonaCreated({
            name,
            year,
            favoriteSong,
            image,
            team
        })
        setName('');
        setYear('');
        setFavoriteSong('');
        setImage('');
        setTeam('');
    }

    const createNewTeam = (evt) => {
        evt.preventDefault();
        whenGenreAdded({
            name: teamName,
            mainColor: teamColor
        })
    }

    return (
        <section className="forms">
            <form onSubmit={createNewBand}>
                <h2>Insert a new band/singer</h2>
                <FormField 
                    value={name} 
                    whenChanged={setName} 
                    isRequired 
                    label="Name" 
                    placeholder="Insert your name"
                />
                <FormField 
                    value={year} 
                    whenChanged={setYear}
                    isRequired
                    abel="Year" 
                    placeholder="Insert band starting year"
                />
                <FormField 
                    value={favoriteSong} 
                    whenChanged={setFavoriteSong}
                    isRequired
                    label="Favorite song" 
                    placeholder="Your favorite song"
                />
                <FormField 
                    value={image} 
                    whenChanged={setImage} 
                    label="Picture" 
                    placeholder="Insert picture address"/>
                <DropDown 
                    value={team} 
                    whenChanged={setTeam} 
                    label="Teams" 
                    items={teams}/>
                <Button>Create</Button>
            </form>
            <form onSubmit={createNewTeam}>
                <h2>Insert a new genre</h2>
                <FormField 
                    value={teamName} 
                    whenChanged={setTeamName} 
                    isRequired 
                    label="Team Name" 
                    placeholder="Insert a music genre"/>
                <FormField 
                    type='color' 
                    value={teamColor} 
                    whenChanged={setTeamColor}
                    isRequired 
                    label="Team Color" 
                    placeholder="Insert a color"/>
                <Button>Create</Button>
            </form>
            
        </section>
        
    )
}