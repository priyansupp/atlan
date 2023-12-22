import React from "react";
import styles from './Output.module.css';
import { useRef, useState, useEffect } from "react";

function Output() {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);
    const refTop = useRef(null);

    useEffect(() => {
        const resizeableEle = ref.current;
        const sty1 = window.getComputedStyle(resizeableEle);
        let height = parseInt(sty1.height, 10);
        let y = 0;
        
        // Top resize
        const onMouseMoveTopResize = (event) => {
            const dy = event.clientY - y;
            height = height - dy;
            y = event.clientY;
            resizeableEle.style.height = `${height}px`;
        };
    
        const onMouseUpTopResize = (event) => {
            document.removeEventListener("mousemove", onMouseMoveTopResize);
        };
    
        const onMouseDownTopResize = (event) => {
            y = event.clientY;
            const sty = window.getComputedStyle(resizeableEle);
            resizeableEle.style.bottom = sty.bottom;
            resizeableEle.style.top = null;
            document.addEventListener("mousemove", onMouseMoveTopResize);
            document.addEventListener("mouseup", onMouseUpTopResize);
        };

        // Add mouse down(mouse-press) event listener
        const resizerTop = refTop.current;
        resizerTop.addEventListener("mousedown", onMouseDownTopResize);

        return () => {
            resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        };
    }, []);

    const handleCloseClick = () => {
        setIsVisible(false);
    };

    // return (
    //     <div className={styles.output} ref={ref}>
    //         <div className={styles.resizer} ref={refTop}/>
    //         {/* jhel */}
    //     </div>
    // );
    return (
        <>
            {isVisible && (
                <div className={styles.output} ref={ref}>
                    <div className={styles.closeButton} onClick={handleCloseClick}>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'black', border: '2px solid black', padding: '4px', position: 'absolute', top: '8px', right: '8px' }}>X</span>
                    </div>
                    <div className={styles.resizer} ref={refTop} />
                </div>
            )}
        </>
    );

}


export default Output;

