import React, {useRef, useEffect} from 'react';
import '../../css/contents/Draw.css'


const Draw = () => {

    let canvas = document.querySelector("canvas");
    // let canvas;
    let canvasRef = useRef();

    let pos = {
        drawble: false,
        X: -1,
        Y: -1,
    };

    let ctx;

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", initDraw);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", finishDraw);
        canvas.addEventListener("mouseout", finishDraw);
    }, []);

    function initDraw(event) {
        ctx.beginPath();
        pos = { drawble: true, ...getPosition(event) };
        ctx.moveTo(pos.X, pos.Y);
    }

    function draw(event) {
        if (pos.drawble) {
            pos = { ...pos, ...getPosition(event) };
            ctx.lineTo(pos.X, pos.Y);
            ctx.stroke();
        }
    }

    function finishDraw() {
        pos = { drawable: false, X: -1, Y: -1 };
    }

    function getPosition(event) {
        return { X: event.offsetX, Y: event.offsetY };
    }

    function download() {
        const tempImg = document.createElement("a");
        tempImg.href = canvasRef.current.toDataURL("image/png");
        tempImg.download = "hello.png";
        tempImg.click();
    }

    function clearCanvas() {
        // context.clearRect(0, 0, canvas.width, canvas.height);
        // const w = canvas.width;
        // canvas.width = 1;
        // canvas.width = w;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    return (
        <>
            <div className="canvas-all">
                <div className="canvas-save" onClick={download}>
                    SAVE
                </div>
                <div className="canvas-clear" onClick={clearCanvas}>
                    CLEAR
                </div>
                <div className="canvaspad">
                    <canvas ref={canvasRef} width="1000" height="600" />
                </div>
            </div>
        </>
    );
};

export default Draw;