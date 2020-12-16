import React, { useState, useEffect, useRef } from 'react';

import './Form.css';

const Form = () => {    

    const [ name, setName ] = useState('');
    const [ from, setFrom] = useState('');
    const [ destination, setDestination ] = useState('');

    const handleSumbit = (e) => {
        //e.preventDefault();
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
                    <form name="travel-info" method="post" onSubmit={handleSumbit}>
                        <input type="hidden" name="form-name" value="travel-info" />
                        <label>
                            Name 
                            <input ref={inputRef} onChange={e => { setName(e.target.value) }} value={name} type="text" name="name" placeholder="Your name" required/>
                        </label>
                        <label>
                            From
                            <input onChange={e => { setFrom(e.target.value) }} value={from} type="text" name="origin" placeholder="Your departure city" required/>
                        </label>
                        <label>
                            Destination
                            <input onChange={e => { setDestination(e.target.value) }} value={destination} type="text" name="destination" placeholder="Your destination" required/>
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
                                type="submit">Submit</button>
                    </form>
                
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Form;