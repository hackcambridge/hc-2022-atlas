import React, { useCallback, useEffect, useRef, useState } from 'react';
import './MovingBackground.css';

export const useResize = (myRef: React.RefObject<HTMLElement>) => {
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(1000)
    useEffect(() => {
      const handleResize = () => {
        setWidth(myRef.current? myRef.current.offsetWidth: 1000)
        setHeight(myRef.current? myRef.current.offsetHeight: 1000)
      }
      handleResize();
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [myRef])
    return { width, height }
}
  

export type MovingBackgroundProps = {
    children: React.ReactNode;
    background: string
};

export default function MovingBackground({children, background}: MovingBackgroundProps) {
    const [backgroundPos, setBackgroundPos] = useState([50, 50]);
    const ref = useRef<HTMLDivElement>(null);
    const { width, height } = useResize(ref);

    const handleMouseMove = useCallback<React.MouseEventHandler<HTMLDivElement>>((event) => {
        setBackgroundPos([100-100 * event.clientX / width, 100-100 * event.clientY / height]);
    }, [width, height]);

    return (
        <div className="MovingBackground" ref={ref} style={{
            backgroundImage: `url(${background})`, backgroundPosition: `${backgroundPos[0]}% ${backgroundPos[1]}%`}} onMouseMove={handleMouseMove}>
            {children}
        </div>
    );
}