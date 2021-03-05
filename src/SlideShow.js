import React from  'react'
import './SlideShow.css'
import {FaArrowCircleRight} from 'react-icons/fa'
import {FaArrowCircleLeft} from 'react-icons/fa'

const Thumbnail=({arr, image, index}) => {
    return (<div className='thumbnail'>
     {
      arr.map((imgsrc, i) =>(
          <img 
            key={i}
            height ="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index=== i ? 'activeSlide' : ''}
            />
      ))
     }

    </div>)
}


const SlideShow=({imgs})=> {
    const [index, setIndex]=React.useState('')
    React.useEffect(()=>{
    setIndex(0)
    },[])
    
    const next=()=>{
     if (index=== imgs.length - 1){
       setIndex(0)
     }else {
      setIndex(index+1)
     }   
      }

    const prev=()=>{
      if (index=== 0){
      setIndex(imgs.length-1)
      }else {
       setIndex(index-1)
        }
         }

    return (
        <div className='slide'>
        <div className="slideShow"> 
            <img alt='' className='slide__img' src={imgs[index]} />
            <div className='actions'>
            <FaArrowCircleLeft className='prev'size='40px' style={{ color: "darkcyan", stroke: "white"}}onClick ={prev}>Prev</FaArrowCircleLeft>
            <FaArrowCircleRight size='40px' style={{ color: "darkcyan", }}onClick ={next}>Next</FaArrowCircleRight>          
            </div>
            <Thumbnail arr={imgs} image={setIndex} index={index}/>
        </div>
        </div>
    )
}

export default SlideShow

