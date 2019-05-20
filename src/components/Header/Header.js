import React, {Component} from 'react';
import "./header.css";
import fortnite from "../../media/fortnite.png";

class Header extends Component {
    render() {
        return (
            <div className="header">
            <img className="logo" src={fortnite} alt="fortnite-logo"/>
            </div>
        );
    };
};

export default Header