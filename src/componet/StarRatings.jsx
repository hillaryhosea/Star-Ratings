import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRatings.css'

export default function Ratings ({noOfStars = 5}){
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick (getCurrentId) {
        setRating(getCurrentId);
    }

    function handleMouseEnter (getCurrentId){
        setHover(getCurrentId);
    }

    function handleMouseLeave (){
        setHover(rating)
    }


    return <div className="star-ratings">
        {
            [...Array(noOfStars)].map((_,index) =>{

                index += 1

                return < FaStar 
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=> handleClick(index)}
                onMouseOver={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
}