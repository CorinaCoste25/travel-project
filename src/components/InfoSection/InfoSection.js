import React from 'react';

import './InfoSection.css';

const InfoSection = ({ id, lightBg, lightText, title, headline, description, offersList, imgStart, image, alt }) => {

    return (
        <React.Fragment>
            <div className="info__container"  
                style={{backgroundColor: JSON.parse(lightBg) ? 'rgb(214, 234, 248 )' : ' rgb(93, 173, 226)'}} id={id}>
                <div className="info__wrapper">
                    <div className="info__row" 
                        style={{display: 'flex', flexDirection: JSON.parse(imgStart) ? 'row' : 'row-reverse'}}>
                        <div className="col">
                            <div className="info__col1">
                                <h1 style={{color: JSON.parse(lightText) ? '#fff' : 'rgb(23, 32, 42 )'}}>{title}</h1>
                                <h2 style={{color: JSON.parse(lightText) ? '#fff' : 'rgb(23, 32, 42 )'}}>{headline}</h2>
                                
                                    { offersList ? (
                                        <ul className="info__list" style={{listStyle: 'initial'}}>
                                        {offersList.map( item => 
                                            { return <li key={item} 
                                                style={{color: JSON.parse(lightText) ? '#fff' : 'rgb(23, 32, 42 )'}}>
                                                    {item}
                                                </li>})}
                                        </ul>
                                    ) : 
                                    (<p style={{color: JSON.parse(lightText) ? '#fff' : 'rgb(23, 32, 42 )'}}>{description}</p>)
                                }
                                
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