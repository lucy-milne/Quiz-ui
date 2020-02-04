import React from "react";
import Navigation from '../Navigation/Navigation';

const layout = (props) => {
    return (
        <div id="wrapper">
            <Navigation />
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    )
}

export default layout;