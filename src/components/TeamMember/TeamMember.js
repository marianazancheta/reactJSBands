import './TeamMember.css';

const TeamMember = ({image, name, year, favoriteSong, color}) => {
    console.log(favoriteSong);
    return(
        <div className='card'>
            <div className='card-top' style={{backgroundColor: color}}>
                <img src={image} alt={name}/>
            </div>
            <div className='card-bottom'>
                <h4>{name}</h4>
                <p><strong>Year: </strong> {year}</p>
                <p><strong>Favotite song: </strong>{favoriteSong}</p>
            </div>
        </div>
    )
}

export default TeamMember;