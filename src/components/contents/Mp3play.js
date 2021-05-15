import React, { useEffect, useRef, useState } from "react";
import "../../css/contents/Mp3play.css";
import audio1 from "../../assets/melody.mp3";
import audio2 from "../../assets/아이유 (IU) - LILAC (라일락).mp3";
import audio3 from "../../assets/오마이걸(OH MY GIRL)_Dun Dun Dance.mp3";

function Mp3play(props) {
    const myAudio = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const { volume, number } = props;
     const first = useRef(false)

    useEffect(() => {
        myAudio.current.volume = 0.5;
    }, []);

    useEffect(() => {
        myAudio.current.volume = volume / 10;
    }, [volume]);

    useEffect(() => {
        switch (number) {
            case 1:
                myAudio.current.src = audio1;
      
                break;
            case 2:
                myAudio.current.src = audio2;
                
                break;
            case 3:
                myAudio.current.src = audio3;
                
                break;
        }
if (first.current) 
myAudio.current.play();
else
first.current = true

    }, [number]);

    const click = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            myAudio.current.play();
        } else {
            setIsPlaying(false);
            myAudio.current.pause();
        }
    };

    return (
        <div className="mp3playcontainer">
            <audio ref={myAudio} id="audio"></audio>
            <div className="playbtn" onClick={click}>
                HAPPYPLE
            </div>
        </div>
    );
}

export default Mp3play;