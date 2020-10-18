import React from 'react';

// styling
import '../App.css';

const ImageComp = props => {
    console.log(props)
    const {src, cName} = props.pic

    return (
        <div className="srcComp">
            <img src={src} className={cName} />
        </div>
    );
}

export default ImageComp;
