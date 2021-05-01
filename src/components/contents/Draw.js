import React, {createRef, useEffect} from 'react';
import '../../css/contents/Draw.css'


function Draw() {


    let canvas = document.querySelector('canvas')
    // let canvas;
    let canvasRef = createRef();

    let pos = {
        drawble : false,
        X: -1,
        Y: -1
    };

    let ctx;

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", initDraw);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", finishDraw);
        canvas.addEventListener("mouseout", finishDraw);

        // document.querySelector("canvas-save").addEventListener("click", event =>
        // event.target.href = canvas.toDataURL()
        // );
    }, []);

    function initDraw(event) {
        ctx.beginPath();
        pos = {drawble:true, ...getPosition(event)};
        ctx.moveTo(pos.X, pos.Y);
    }

    function draw(event){
        if (pos.drawble) {
            pos = {...pos, ...getPosition(event)};
            ctx.lineTo(pos.X, pos.Y);
            ctx.stroke();
        }
    }

    function finishDraw(){
        pos = {drawable: false, X:-1, Y:-1};
    }

    function getPosition(event) {
        return {X: event.offsetX, Y: event.offsetY};
    }


    return (
        <>
        <div className="canvas-all">
            <div className="canvas-save" onclick="location.href='';" download="my_painting.png">SAVE</div> 
            <div className="canvaspad">
                <canvas ref={canvasRef} width="1000" height="500" />
            </div>
        </div>
        </>
    )
};

export default Draw;