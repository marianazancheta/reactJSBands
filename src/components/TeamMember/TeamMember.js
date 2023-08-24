import './TeamMember.css';
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const TeamMember = ({id, image, name, year, favoriteSong, color, toDelete, isFavorite, changeFavorite}) => {
    const toChangeFavorite = () => {
        changeFavorite(id);
    }

    const favoriteProps = {
        onClick: toChangeFavorite,
        size: 25
    }

    return(
        <div className='card'>
            <AiFillCloseCircle size={25} className='deleteButton' onClick={() => toDelete(id)}/>
            <div className='card-top' style={{backgroundColor: color}}>
                <img src={image} alt={name}/>
            </div>
            <div className='card-bottom'>
                <h4>{name}</h4>
                <p><strong>Year: </strong> {year}</p>
                <p><strong>Favotite song: </strong>{favoriteSong}</p>
                <div>
                    {isFavorite 
                        ? <AiFillHeart {...favoriteProps}/> 
                        : <AiOutlineHeart {...favoriteProps}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMember;