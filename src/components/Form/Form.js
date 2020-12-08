import React, { useState } from 'react';

import './Form.css';

const Form = () => {    

    const [ state, setState ] = useState('');

    const changeInput = (e) => {
        setState(e.target.value);
    }

    // handleSubmit = e => {
    //     fetch("/", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/x-wwww-form-urlencoded"},
    //         body: encodeURI({"form-name": ""})
    //     })
    // }

    return(
        <React.Fragment>
        <div className="hero__container">
            <div className="hero__background">
            <div className="form__container--wrapper">
                <h3>Please complete the information below to get more information</h3>
                    <form>
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
                <putton className="hero__register--btn">Submit</putton>
            </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Form;