import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function Ratings (noOfStars = 5){
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick (getCurrentId) {
        console.log(getCurrentId);
    }

    function handleMouseEnter (getCurrentId){
        console.log(getCurrentId);
    }

    function handleMouseLeave (getCurrentId){
        console.log(getCurrentId);
    }


    return <div className="star-ratings">
        {
            [...Array(noOfStars)].map((_,index) =>{

                index += 1

                return < FaStar 
                key={index}
                onClick={()=> handleClick(index)}
                onMouseOver={()=> handleMouseEnter(index)}
                onMouseLeave={()=> handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
}