import React from 'react';

import './InfoSection.css';

const InfoSection = ({ id, lightBg, lightText, lightDesc, title, headline, description, imgStart, image, alt }) => {
    return (
        <React.Fragment>
            <div className="info__container"  
                style={{backgroundColor: lightBg ? 'rgb(214, 234, 248 )' : ' rgb(93, 173, 226)'}} id={id}>
                <div className="info__wrapper">
                    <div className="info__row" 
                        style={{display: 'flex', flexDirection: imgStart ? 'row' : 'row-reverse'}}>
                        <div className="col">
                            <div className="info__col1">
                                <h1 style={{color: lightText ? '#fff' : 'rgb(23, 32, 42 )'}}>{title}</h1>
                                <h2 style={{color: lightText ? '#fff' : 'rgb(23, 32, 42 )'}}>{headline}</h2>
                                <p style={{color: lightText ? '#fff' : 'rgb(23, 32, 42 )'}}>{description}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="info__col2">
                                <div className="info__img--wrapper">
                                    <img className="info__img" src={image} alt={alt} ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InfoSection;