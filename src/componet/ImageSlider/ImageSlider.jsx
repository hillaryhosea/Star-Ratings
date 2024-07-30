import React, { useEffect, useState } from 'react'
import './ImageSlider.css'

export const ImageSlider = ({url, limit=5, page=1}) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages (getUrl){
        try {

            setLoading(true)

            const reponse = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await reponse.json

            if(data) {
                setImages(data)
                setLoading(false)
            }

        } catch (e) {
           setErrorMsg(e.message); 
           setLoading(false)
        }
    }

    useEffect (()=> {
        if(url !== '') fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading){
        return <div> loading data please wait </div>
    }

    if (errorMsg !== null){
         return <div>error occured {errorMsg}</div>
    }

  return (
    <div></div>
  )
}

export default ImageSlider;
