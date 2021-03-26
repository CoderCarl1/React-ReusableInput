import React from 'react';
import Dropdown from './Dropdown';

const DropdownBL = ({ handleBGColorChange }) => {
    //create 5 different Colors
    const randomRGB = () => {
        return Math.floor(Math.random() * 257);
    };

    const setColorOption = () => {
        return `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
    };

    const renderOption = () => {
        let optionList = [];
        for (let i = 0; i < 5; i++) {
            optionList.push(setColorOption());
        }
        return optionList;
    };
    const colorOptions = renderOption().map((x, i) => {
        return (
            <option key={'Color' + i} value={x}>
                Random Color{i + 1}
            </option>
        );
    });

    return <Dropdown handleChange={handleBGColorChange} options={colorOptions} title="Change the Background" label1="Colour" />;
};

export default DropdownBL;
