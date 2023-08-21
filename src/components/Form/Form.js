
import React, { useState } from 'react';

import Button from "../Button/Button";
import DropDown from "../DropDown/DropDown"
import { TextField } from "../TextField/TextField"
import './Form.css'

export const Form = (props) => {
    
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [favoriteSong, setFavoriteSong] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const toSave = (submit) => {
        submit.preventDefault();
        props.whenPersonaCreated({
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

    return (
        <section className="form">
            <form onSubmit={toSave}>
                <h2>Insert a new band/singer</h2>
                <TextField value={name} whenChanged={setName} isRequired={true} label="Name" placeholder="Insert your name"/>
                <TextField value={year} whenChanged={setYear}isRequired={true} label="Year" placeholder="Insert band starting year"/>
                <TextField value={year} whenChanged={setFavoriteSong}isRequired={true} label="Favorite song" placeholder="Your favorite song"/>
                <TextField value={image} whenChanged={setImage} label="Picture" placeholder="Insert picture address"/>
                <DropDown value={team} whenChanged={setTeam} label="Teams" items={props.teams}/>
                <Button>Create</Button>
            </form>
            
        </section>
        
    )
}