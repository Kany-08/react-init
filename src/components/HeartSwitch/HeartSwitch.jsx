import { useState } from 'react';
import './HeartSwitch.css';


export const HeartSwitch = () => {
    const [liked, setLiked] = useState(false);

    const toggleHeart = () => {
        setLiked(prev => !prev);
    }

    return (
        <div>
            <button onClick={toggleHeart}>{liked ? '❤️' : '🤍'}</button>
        </div>
    )
}



