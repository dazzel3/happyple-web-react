import React from 'react';
import '../../css/contents/Daggu.css'
import dot from '../../assets/dot.png'


function Daggu() {
    
    dot.onmousedown = function(event) {

        dot.style.position = 'absolute';
        dot.style.zIndex = 1000;
      
        document.body.append(dot);
      
        function moveAt(pageX, pageY) {
            dot.style.left = pageX - dot.offsetWidth / 2 + 'px';
            dot.style.top = pageY - dot.offsetHeight / 2 + 'px';
        }
      
        moveAt(event.pageX, event.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        document.addEventListener('mousemove', onMouseMove);
      
        dot.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          dot.onmouseup = null;
        };
      
      };

    return(
        <div></div>
    )

}

export default Daggu;