import React from 'react';
// import './Dropdown.css';

//this dropdown
const Dropdown = ({ handleChange, options, title, label1, defaultValue }) => {
    return (
        <fieldset className="wrapper">
            <legend>{title}</legend>
            <label htmlFor="label1">
                {label1} :
                <select className="dropdown" onChange={(e) => handleChange(e.target.value)} name="background" id="label1" defaultValue={defaultValue}>
                    <option value={defaultValue} disabled>
                        {' '}
                        Select a {label1}{' '}
                    </option>
                    {options}
                </select>
            </label>
        </fieldset>
    );
};

export default Dropdown;
