import React,{useEffect,useRef} from 'react'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {

    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
    
    return <div className="tilt" ref={tilt} {...rest} />;
  }

export default Tilt
