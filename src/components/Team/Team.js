import React from 'react';
import './Team.css';
import TeamMember from '../TeamMember/TeamMember';

export const Team = (props) => {
    console.log(props);
    return (
    props.bands.length > 0 && 
    <section className='team' style={{backgroundColor: props.bgColor}}>
        <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
        <div className='team-section'>
            {props.bands.map(person => 
                <TeamMember key={props.name} image={person.image} name={person.name} year={person.year} favoriteSong={person.favoriteSong} color={props.mainColor}/>)}
        </div>
    </section>
)}