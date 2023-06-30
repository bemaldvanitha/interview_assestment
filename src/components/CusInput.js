import React from "react";
import {Input} from "antd";

import '../styles/CusInput.css';

const CusInput = ({ title, htmlFor, id, inputValue, setValue, isPassword = false }) => {
    return(
        <React.Fragment>
            <label htmlFor={ htmlFor } className="cus-label">
                { title }
            </label>
            {isPassword ? <Input.Password
                id={ id }
                value={inputValue}
                onChange={setValue}
                className="cus-input"
            />  : <Input
                id={ id }
                value={inputValue}
                onChange={setValue}
                className="cus-input"
            /> }
        </React.Fragment>
    )
}

export default CusInput;