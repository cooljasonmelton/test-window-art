import React from 'react';

// styling
import '../App.css';

const ImageComp = props => {
    const {src, cName} = props.pic

    return (
        <div className={cName}>
            <img src={src} style={{width:"100%"}}/>
        </div>
    );
}

export default ImageComp;
