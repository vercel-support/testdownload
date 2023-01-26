'use client'
import React, {useEffect, useRef} from "react";
import lottie from 'lottie-web';

function Confetti() {

  const element = useRef<HTMLDivElement>(null);
  const container = useRef(null)

  useEffect(() => {
    if(element.current)
    lottie.loadAnimation ({
      container: element.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData:require('public/confetti.json')
    });
    return () => { lottie.destroy() }
  },[])

  return (
    <div className="App">
      <div className="container w-80" ref={element}></div>
    </div>
  )
}

export default Confetti;