import React from 'react';
import './Team.css';
import TeamMember from '../TeamMember/TeamMember';
import hexToRgba from 'hex-to-rgba';

export const Team = (props) => {
    return (
    props.bands.length > 0 && 
    <section 
        className='team' 
        style={{
            backgroundImage: 'url(/images/fundo.png)', 
            backgroundColor: hexToRgba(props.mainColor, '0.3')
        }}
    >       
        <input 
            type='color' 
            className='input-color' 
            value={props.mainColor} 
            onChange={evt => {
                props.changeColor(evt.target.value, props.id);
            }}
        />
        <h3 style={{borderColor: props.mainColor}}>
            {props.name}
        </h3>
        <div className='team-section'>
            {props.bands.map((band, index) => 
                <TeamMember 
                    id={band.id}
                    key={index} 
                    image={band.image} 
                    name={band.name} 
                    year={band.year} 
                    favoriteSong={band.favoriteSong} 
                    color={props.mainColor}
                    toDelete={props.toDelete}
                    isFavorite={band.favorite}
                    changeFavorite={props.changeFavorite}
                />)}
        </div>
    </section>
)}