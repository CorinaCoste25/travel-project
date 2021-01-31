import React, { useState, useEffect, useRef } from 'react';

import './Form.css';

const Form = () => {    

    const [ personName, setPersonName ] = useState('');
    const [ from, setFrom] = useState('');
    const [ destination, setDestination ] = useState('');

    const inputNameHandle = (e) => {
        setPersonName(e.target.personName);
    }

    const inputFromHandle = (e) => {
        setFrom(e.target.from);
    }

    const inputDestinationHandle = (e) => {
        setDestination(e.target.destination);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setPersonName("");
        setFrom("");
        setDestination("");
    }

    const inputRef = useRef();

    useEffect( () => {
        inputRef.current.focus();
    }, []);

    return(
        <React.Fragment>
        <div className="hero__container" >
            <div className="hero__background">
            <div className="form__container--wrapper">
                <h3>Please complete the information below to get more detalies</h3>
                    <form name="travel-info" >
                        <input type="hidden" method="post" name="form-name" value="travel-info" />
                        <label>
                            Name 
                            <input ref={inputRef} onChange={inputNameHandle} value={personName} type="text" placeholder="Your name" required/>
                        </label>
                        <label>
                            From
                            <input onChange={inputFromHandle} value={from} type="text" placeholder="Your departure city" required/>
                        </label>
                        <label>
                            Destination
                            <input onChange={inputDestinationHandle} value={destination} type="text" placeholder="Your destination" required/>
                        </label>
                        <label>
                            From date
                            <input type="date" name="from_date" />
                        </label>
                        <label>
                            To date
                            <input type="date" name="to_date" />
                        </label>
                        <button  className="hero__register--btn" 
                                style={{width: '120px', marginLeft: '20px'}}
                                type="submit" onClick={handleSumbit}>Submit</button>
                    </form>
                
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Form;