import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        var style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            position: "relative",
            overflow: 'hidden',
            left: "0",
            bottom: "0",
            height: "5.5em",
            
        }

        var phantom = {
            width: "100%",
            display: 'block'
        }

        return (
            <div style={phantom}>
                <header style={style}>
                    <h3>This is your Boilerplate Header</h3>
                </header>
            </div>
        )
    }
}

export default Header;
