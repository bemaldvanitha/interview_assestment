import React from "react";
import {Alert} from "antd";

import '../styles/CusAlert.css';

const CusAlert = ({description}) => {
    return(
        <Alert
            className="cus-alert"
            message="Error"
            description={ description }
            type="error"
            showIcon
            closable
        />
    )
}

export default CusAlert;