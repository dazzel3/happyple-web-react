import React, { cloneElement, useRef, useState } from 'react';
import '../../css/contents/Mp3play.css'
import audioSrc from '../../assets/melody.mp3'


function Mp3play() {
    const myAudio = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const click = () => {
         if(!isPlaying) {
              setIsPlaying(true)
              myAudio.current.play()
         } else {
              setIsPlaying(false)
              myAudio.current.pause()
         }
    }

    return(
        <div className="mp3playcontainer">
            <audio ref={myAudio} src={audioSrc} id="audio"></audio>
            <div className="playbtn" onClick={click}>
                HAPPYPLE
            </div>
        </div>
    )
}

export default Mp3play;