import React, { useState } from 'react';

import './Form.css';

const Form = () => {    

    const [ state, setState ] = useState('');

    const changeInput = (e) => {
        setState(e.target.value);
    }

    return(
        <React.Fragment>
        <div className="hero__container">
            <div className="hero__background">
            <div className="form__container--wrapper">
                <h3>Please complete the information below to get more detalies</h3>
                    <form name="travel-info" action="/info" method="post">
                        <input type="hidden" name="form-name" value="travel-info" />
                        <label>
                            Name 
                            <input type="text" name="name" placeholder="Your name" required onChange={changeInput}/>
                        </label>
                        <label>
                            From
                            <input type="text" name="origin" placeholder="Your departure city" required onChange={changeInput}/>
                        </label>
                        <label>
                            Destination
                            <input type="text" name="destination" placeholder="Your destination" required onChange={changeInput}/>
                        </label>
                        <label>
                            From date
                            <input type="date" name="from_date" />
                        </label>
                        <label>
                            To date
                            <input type="date" name="to_date" />
                        </label>
                    </form>
                <button className="hero__register--btn" type="submit">Register Now</button>
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Form;